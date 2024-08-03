import fs from "node:fs/promises";
import { OpenAPIV3 } from "openapi-types";
import TurndownService from "turndown";

type PortOneProperty = {
	"x-portone-title"?: string;
	"x-portone-description"?: string;
	"x-portone-error": OpenAPIV3.ReferenceObject;
};

export async function generateSchema() {
	const document = await fs.readFile(process.argv[3], {
		encoding: "utf-8",
	});
	const typeGenerator = TypeGenerator();
	return typeGenerator.parseDocument(JSON.parse(document));
}

function TypeGenerator() {
	return {
		dependencies: [] as string[],
		resolved: new Set<string>(),
		discriminator: new Map<string, TypeObject>(),
		queueResolution(name: string) {
			if (!this.resolved.has(name)) {
				this.resolved.add(name);
				this.dependencies.push(name);
			}
		},
		parseDocument(document: OpenAPIV3.Document<PortOneProperty>) {
			const lines = [];
			const HttpMethods = Object.values(OpenAPIV3.HttpMethods);
			lines.push("export type Paths = {");
			for (const [path, pathSchema] of Object.entries(document.paths)) {
				if (!pathSchema) continue;
				const methods = HttpMethods.filter((method) => method in pathSchema);
				if (methods.length === 0) continue;
				lines.push(`\t"${path}": {`);
				for (const method of methods) {
					const methodSchema = pathSchema[method];
					if (!methodSchema) continue;
					lines.push(
						...makeComment(
							methodSchema["x-portone-title"],
							methodSchema["x-portone-description"],
						).map((line) => `\t\t${line}`),
					);
					const errorRef = methodSchema["x-portone-error"]?.$ref;
					lines.push(`\t\t${method}: {`);
					const parameterLines = [];
					const bodyRef = extractRef(extractJson(methodSchema.requestBody));
					if (bodyRef) {
						const name = extractNameFromRef(bodyRef);
						parameterLines.push(`body: ${name};`);
						this.queueResolution(name);
					}
					if (methodSchema.parameters) {
						const parameters: Record<string, TypeObject[]> = {
							query: [],
							path: [],
						};
						for (const parameter of methodSchema.parameters) {
							if ("$ref" in parameter) {
								throw new Error("parameter ref is not implemented", {
									cause: parameter,
								});
							}
							const {
								name,
								in: where,
								required,
								schema,
								description,
							} = parameter;
							if (name === "requestBody") continue;
							const fieldName = required ? name : `${name}?`;
							if (!schema) {
								throw new Error("schema is not specified", {
									cause: parameter,
								});
							}
							if (where in parameters) {
								parameters[where].push({
									...this.parseSchema(schema, fieldName),
									name: fieldName,
									description,
								});
							} else {
								throw new Error("Unknown parameter `in`", {
									cause: methodSchema,
								});
							}
						}
						for (const [key, value] of Object.entries(parameters)) {
							if (value.length > 0) {
								parameterLines.push(
									`${key}: {`,
									...value
										.flatMap((property) => makeTypes(property, false))
										.map((line) => `\t${line}`),
									"};",
								);
							}
						}
					}
					if (parameterLines.length > 0) {
						lines.push(
							"\t\t\tparameters: {",
							...parameterLines.map((line) => `\t\t\t\t${line}`),
							"\t\t\t};",
						);
					} else {
						lines.push("\t\t\tparameters: Record<string, never>;");
					}
					if (methodSchema.responses) {
						const errorDescription = [];
						for (const status of Object.values(methodSchema.responses)) {
							if ("$ref" in status) {
								throw new Error("status reference is not implemented", {
									cause: status,
								});
							}
							const { content, description } = status;
							if (!content) continue;
							const ref = extractRef(extractJson(status));
							if (ref !== errorRef) {
								lines.push(
									...makeComment(description).map((line) => `\t\t\t${line}`),
									`\t\t\tsuccess: ${ref ? extractNameFromRef(ref) : "{}"};`,
								);
								if (ref) {
									this.queueResolution(extractNameFromRef(ref));
								}
							} else {
								errorDescription.push(...makeComment(description).slice(1, -1));
							}
						}
						lines.push(
							"\t\t\t/**",
							...errorDescription.map((line) => `\t\t\t${line}`),
							"\t\t\t */",
							`\t\t\terror: ${extractNameFromRef(errorRef)};`,
						);
						this.queueResolution(extractNameFromRef(errorRef));
					}
					lines.push("\t\t};");
				}
				lines.push("\t};");
			}
			lines.push("}");
			lines.push("");
			for (const dependency of this.dependencies) {
				if (!document.components?.schemas?.[dependency]) continue;
				const schema = this.parseSchema(
					document.components.schemas[dependency],
					dependency,
				);
				const discriminant = this.discriminator.get(dependency);
				if (discriminant && "properties" in schema) {
					schema.properties = schema.properties.map((property) =>
						property.name === discriminant.name ? discriminant : property,
					);
				}
				lines.push(...makeTypes(schema, true));
				lines.push("");
			}
			return lines.join("\n");
		},
		parseSchema(
			schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
			name: string,
		) {
			let typeObject: TypeObject = {
				type: "simple",
				tsType: "",
				name,
				// $ref의 sibling으로 들어오는 title, description은 무시되지만 PortOne에서는 사용 중.
				title: "title" in schema ? schema.title : undefined,
				description: "description" in schema ? schema.description : undefined,
			};
			if ("$ref" in schema) {
				const name = extractNameFromRef(schema.$ref);
				typeObject.tsType = name;
				this.queueResolution(name);
				return typeObject;
			}
			if (schema.discriminator?.mapping) {
				const oneOf = [];
				for (const [key, ref] of Object.entries(schema.discriminator.mapping)) {
					const name = extractNameFromRef(ref);
					oneOf.push(name);
					this.queueResolution(name);
					this.discriminator.set(name, {
						name: schema.discriminator.propertyName,
						type: "simple",
						tsType: `"${key}"`,
					});
				}
				typeObject.tsType = oneOf.join(" | ");
			}
			if (schema.type) {
				switch (schema.type) {
					case "object": {
						typeObject = {
							...typeObject,
							type: "object",
							tsType: name,
							properties: [],
						};
						const required = new Set(schema.required);
						if (schema.properties) {
							for (const [key, value] of Object.entries(schema.properties)) {
								typeObject.properties.push(
									this.parseSchema(value, required.has(key) ? key : `${key}?`),
								);
							}
						}
						break;
					}
					case "array": {
						const items = this.parseSchema(schema.items, "");
						typeObject.tsType = `${items.tsType}[]`;
						break;
					}
					case "string":
						if (schema.enum) {
							typeObject.tsType = schema.enum
								.map((name) => `"${name}"`)
								.join(" | ");
						} else {
							typeObject.tsType = "string";
						}
						break;
					case "integer": {
						typeObject.tsType = "number";
						break;
					}
					case "boolean": {
						typeObject.tsType = "boolean";
						break;
					}
					case "number": {
						typeObject.tsType = "number";
						break;
					}
				}
			}
			if (schema.format) {
				switch (schema.format) {
					case "date-time":
						schema.title = `${schema.title} (RFC 3339 date/time)`;
						break;
					case "int32":
					case "int64":
						schema.title = `${schema.title} (${schema.format})`;
						break;
					case "double":
						schema.title = `${schema.title} (IEEE 754 double-precision)`;
						break;
					default:
						throw new Error(`Unimplemented format: ${schema.format}`, {
							cause: schema,
						});
				}
			}
			return typeObject;
		},
	};
}

function extractRef(
	ref: object | OpenAPIV3.ReferenceObject | null | undefined,
): string | null {
	return ref && "$ref" in ref ? ref.$ref : null;
}

function extractJson(
	response:
		| OpenAPIV3.RequestBodyObject
		| OpenAPIV3.ReferenceObject
		| OpenAPIV3.ResponseObject
		| null
		| undefined,
) {
	return response &&
		"content" in response &&
		response.content &&
		"application/json" in response.content
		? response.content["application/json"].schema
		: null;
}

type TypeObject = {
	title?: string;
	description?: string;
	name: string;
	type: string;
	tsType: string;
} & (
	| {
			type: "simple";
	  }
	| {
			type: "object";
			properties: TypeObject[];
	  }
);

function makeTypes(typeObject: TypeObject, exports: boolean) {
	const lines = [...makeComment(typeObject.title, typeObject.description)];
	switch (typeObject.type) {
		case "simple":
			if (exports) {
				lines.push(`export type ${typeObject.name} = ${typeObject.tsType};`);
			} else {
				lines.push(`${typeObject.name}: ${typeObject.tsType};`);
			}
			break;
		case "object":
			if (exports) {
				lines.push(`export type ${typeObject.name} = {`);
			} else {
				lines.push(`${typeObject.name}: {`);
			}
			for (const property of typeObject.properties) {
				lines.push(...makeTypes(property, false).map((line) => `\t${line}`));
			}
			lines.push("};");
			break;
		default:
			throw new Error("Unchecked type", {
				cause: typeObject,
			});
	}
	return lines;
}

function extractNameFromRef(ref: string) {
	const name = ref.split("/").at(-1);
	if (!name) throw name;
	return name;
}

const turndown = new TurndownService();
function makeComment(...lines: (string | undefined)[]) {
	const flattened = ["/**"];
	for (const line of lines) {
		if (!line) continue;
		const current = turndown
			.turndown(line)
			.trim()
			.split("\n")
			.map((line) => ` * ${line}`);
		const insert = flattened.length;
		let begin = true;
		for (const line of current) {
			if (begin && (flattened.at(-1) === line || line === " * ")) continue;
			flattened.push(line);
			begin = false;
		}
		if (insert > 1 && insert !== flattened.length) {
			flattened.splice(insert, 0, " *");
		}
	}
	flattened.push(" */");
	return flattened.length === 2 ? [] : flattened;
}

fs.writeFile(process.argv[2], await generateSchema());
