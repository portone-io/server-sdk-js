import fs from "node:fs/promises";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIV3 } from "openapi-types";

type TypeSchema = {
	title?: string;
	description?: string;
} & (
	| {
			$ref: string;
	  }
	| {
			discriminator: {
				propertyName: string;
				mapping: Record<string, string>;
			};
	  }
	| {
			type: "object";
			required?: string[];
			properties?: Record<string, TypeSchema>;
	  }
	| {
			type: "array";
			items: TypeSchema;
	  }
	| {
			type: "string" | "integer" | "number" | "boolean";
	  }
	| {
			type: "string";
			enum: string[];
	  }
);

type Path = Record<
	string,
	Record<
		string,
		{
			"x-portone-title": string;
			"x-portone-description": string;
			"x-portone-error": {
				$ref: string;
			};
			requestBody?: {
				content?: {
					"application/json"?: {
						schema?: {
							$ref?: string;
						};
					};
				};
			};
			parameters?: {
				name: string;
				in: string;
				description?: string;
				required?: boolean;
				schema: TypeSchema;
			}[];
			responses: Record<
				number,
				{
					content?: {
						"application/json"?: {
							schema?: {
								$ref?: string;
							};
						};
					};
					description?: string;
				}
			>;
		}
	>
>;

export async function generateSchema() {
	const document = await SwaggerParser.parse(process.argv[3]);
	const typeGenerator = TypeGenerator();
	return typeGenerator.parseDocument(document as OpenAPIV3.Document);
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
		parseDocument(document: OpenAPIV3.Document) {
			const lines = [];
			lines.push("export type Paths = {");
			for (const [path, pathSchema] of Object.entries(document.paths as Path)) {
				if (!pathSchema) continue;
				const methods = Object.entries(pathSchema);
				if (methods.length === 0) continue;
				lines.push(`\t"${path}": {`);
				for (const [method, methodSchema] of methods) {
					lines.push(
						"\t\t/**",
						...makeComment(methodSchema["x-portone-title"]).map(
							(line) => `\t\t${line}`,
						),
						"\t\t *",
						...makeComment(methodSchema["x-portone-description"]).map(
							(line) => `\t\t${line}`,
						),
						"\t\t */",
					);
					const errorRef = methodSchema["x-portone-error"].$ref;
					lines.push(`\t\t${method}: {`);
					const parameterLines = [];
					const bodyRef =
						methodSchema?.requestBody?.content?.["application/json"]?.schema
							?.$ref;
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
						for (const {
							name,
							in: where,
							description,
							required,
							schema,
						} of methodSchema.parameters) {
							if (name === "requestBody") continue;
							const fieldName = required ? name : `${name}?`;
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
						for (const { description, content } of Object.values(
							methodSchema.responses,
						)) {
							if (!content) continue;
							const ref = content["application/json"]?.schema?.$ref;
							if (ref !== errorRef) {
								lines.push(
									"\t\t\t/**",
									...makeComment(description).map((line) => `\t\t\t${line}`),
									"\t\t\t */",
									`\t\t\tsuccess: ${ref ? extractNameFromRef(ref) : "{}"};`,
								);
								if (ref) {
									this.queueResolution(extractNameFromRef(ref));
								}
							} else {
								errorDescription.push(...makeComment(description));
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
					document.components.schemas[dependency] as TypeSchema,
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
		parseSchema(schema: TypeSchema, name: string) {
			let typeObject: TypeObject = {
				type: "simple",
				tsType: "",
				title: schema.title,
				description: schema.description,
				name,
			};
			if ("discriminator" in schema) {
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
			if ("$ref" in schema) {
				const name = extractNameFromRef(schema.$ref);
				typeObject.tsType = name;
				this.queueResolution(name);
			}
			if ("type" in schema) {
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
						if ("enum" in schema) {
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
					default:
						throw new Error("Unimplemented type", {
							cause: schema,
						});
				}
			}
			return typeObject;
		},
	};
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
	const lines = [
		"/**",
		...makeComment(typeObject.title),
		" *",
		...makeComment(typeObject.description),
		" */",
	];
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

function makeComment(lines?: string) {
	return !lines
		? []
		: lines
				.trim()
				.split("\n")
				.map((line) => ` * ${line}`);
}

fs.writeFile(process.argv[2], await generateSchema());
