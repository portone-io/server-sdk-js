import SwaggerParser from "@apidevtools/swagger-parser";
import fs from "node:fs/promises";

export async function generateSchema() {
	const json = await SwaggerParser.parse(process.argv[3]);
	const componentDependencies = [];
	const resolved = new Set();
	const discriminator = new Map();
	function queueResolution(name: string) {
		if (!resolved.has(name)) {
			resolved.add(name);
			componentDependencies.push(name);
		}
	}
	function parseSchema(schema: object, name: string) {
		const typeObject = {
			name,
		};
		if ("title" in schema) {
			typeObject.title = schema.title;
		}
		if ("description" in schema) {
			typeObject.description = schema.description;
		}
		if ("discriminator" in schema) {
			typeObject.type = "enum";
			const oneOf = [];
			for (const [key, ref] of Object.entries(schema.discriminator.mapping)) {
				const name = extractNameFromRef(ref);
				oneOf.push(name);
				queueResolution(name);
				discriminator.set(name, {
					name: schema.discriminator.propertyName,
					type: "primitive",
					tsType: `"${key}"`,
				});
			}
			typeObject.tsType = oneOf.join(" | ");
		}
		if ("$ref" in schema) {
			typeObject.type = "ref";
			const name = extractNameFromRef(schema.$ref);
			typeObject.tsType = name;
			queueResolution(name);
		}
		if ("type" in schema) {
			switch (schema.type) {
				case "object": {
					typeObject.type = "object";
					typeObject.tsType = name;
					typeObject.properties = [];
					const required = new Set(schema.required);
					if (schema.properties) {
						for (const [key, value] of Object.entries(schema.properties)) {
							typeObject.properties.push(
								parseSchema(value, required.has(key) ? key : `${key}?`),
							);
						}
					}
					break;
				}
				case "array": {
					typeObject.type = "array";
					const items = parseSchema(schema.items, "");
					typeObject.tsType = `${items.tsType}[]`;
					break;
				}
				case "string":
					if ("enum" in schema) {
						typeObject.type = "enum";
						typeObject.tsType = schema.enum
							.map((name) => `"${name}"`)
							.join(" | ");
					} else {
						typeObject.type = "primitive";
						typeObject.tsType = "string";
					}
					break;
				case "integer": {
					typeObject.type = "primitive";
					typeObject.tsType = "number";
					break;
				}
				case "boolean": {
					typeObject.type = "primitive";
					typeObject.tsType = "boolean";
					break;
				}
				case "number": {
					typeObject.type = "primitive";
					typeObject.tsType = "number";
					break;
				}
				default:
					throw new Error(`Unimplemented type: ${schema.type}`, {
						cause: schema,
					});
			}
		}
		return typeObject;
	}
	const lines = [];
	if (json.paths) {
		lines.push("export type Paths = {");
		for (const [path, pathSchema] of Object.entries(json.paths)) {
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
					queueResolution(name);
				}
				if (methodSchema.parameters) {
					const parameters = {
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
						parameters[where].push({
							...parseSchema(schema, fieldName),
							name: fieldName,
							description,
						});
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
								queueResolution(extractNameFromRef(ref));
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
					queueResolution(extractNameFromRef(errorRef));
				}
				lines.push("\t\t};");
			}
			lines.push("\t};");
		}
		lines.push("}");
	}
	lines.push("");
	for (const dependency of componentDependencies) {
		const schema = parseSchema(json.components.schemas[dependency], dependency);
		const discriminant = discriminator.get(dependency);
		if (discriminant) {
			schema.properties = schema.properties.map((property) =>
				property.name === discriminant.name ? discriminant : property,
			);
		}
		lines.push(...makeTypes(schema, true));
		lines.push("");
	}
	return lines.join("\n");
}

function makeTypes(typeObject: object, exports: boolean) {
	const lines = [
		"/**",
		...makeComment(typeObject.title),
		" *",
		...makeComment(typeObject.description),
		" */",
	];
	switch (typeObject.type) {
		case "ref":
		case "primitive":
		case "array":
		case "enum":
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
			throw new Error(`Unchecked type: ${typeObject.type}`, {
				cause: typeObject,
			});
	}
	return lines;
}

function extractNameFromRef(ref: string) {
	return ref.split("/").at(-1);
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
