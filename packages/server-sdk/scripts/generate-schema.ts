import fs from "node:fs/promises";
import type { OpenAPIV3 } from "openapi-types";
import TurndownService from "turndown";

const includePaths = [
	/^\/payments/,
	/^\/payment-schedules/,
	/^\/identity-verifications/,
	/^\/billing-keys/,
	/^\/cash-receipts/,
	/^\/kakaopay/,
];

const document = await fs.readFile(process.argv[3], {
	encoding: "utf-8",
});
await fs.writeFile(process.argv[2], generateSchema(JSON.parse(document)));

type PortOneProperty = {
	"x-portone-title"?: string;
	"x-portone-description"?: string;
	"x-portone-error": OpenAPIV3.ReferenceObject;
};

interface Documented {
	title?: string;
	description?: string;
}

type Spec = Documented & {
	name: string;
	as_type: string;
	properties?: Spec[];
};

type Operation = Documented & {
	name: string;
	method: string;
	param: Spec[];
	query: Spec[];
	body?: string;
	success?: string;
	returns?: string;
	error: string;
};

function generateSchema(document: OpenAPIV3.Document<PortOneProperty>) {
	const resolvedNames = new Set<string>();
	const operations: Map<string, Operation[]> = new Map();
	const schemas = new Map<string, Spec>();
	const documentSchemas = document.components?.schemas;
	const turndown = new TurndownService();
	for (const [path, entry] of Object.entries(document.paths)) {
		if (includePaths.every((regexp) => !regexp.test(path))) continue;
		if (typeof entry !== "object") continue;
		const methods = [];
		for (const [method, schema] of Object.entries(entry)) {
			if (typeof schema !== "object") continue;
			if (!("operationId" in schema)) continue;
			const {
				operationId,
				"x-portone-title": title,
				"x-portone-description": description,
				"x-portone-error": portoneError,
				requestBody,
				parameters,
				responses,
			} = schema;
			if (operationId == null) continue;
			const error = parseRef(portoneError.$ref);
			exportType(error);
			let body = undefined;
			if (typeof requestBody === "object" && "content" in requestBody) {
				const schema = requestBody.content["application/json"]?.schema;
				if (typeof schema === "object" && "$ref" in schema) {
					body = parseRef(schema.$ref);
					exportType(body);
				}
			}
			const params = [];
			const query = [];
			for (const parameter of parameters ?? []) {
				if (!("name" in parameter)) continue;
				const { name, in: where, schema, description, required } = parameter;
				if (name === "requestBody") continue;
				if (schema == null) return [];
				const spec = visitSchema(schema, name);
				spec.description = description;
				if (where === "path") params.push(spec);
				else if (where === "query") {
					if (required == null || !required) spec.name = `${spec.name}?`;
					query.push(spec);
				}
			}
			let success = undefined;
			let returns = undefined;
			if ("200" in responses && "content" in responses["200"]) {
				returns = responses["200"].description;
				const content = responses["200"].content;
				if (
					typeof content === "object" &&
					typeof content["application/json"]?.schema === "object" &&
					"$ref" in content["application/json"].schema
				) {
					success = parseRef(content["application/json"].schema.$ref);
					exportType(success);
				}
			}
			const typeName =
				operationId.slice(0, 1).toUpperCase() + operationId.slice(1);
			methods.push({
				name: operationId,
				method,
				param: params,
				query,
				body,
				success,
				error,
				title,
				description,
				returns,
			});
		}
		operations.set(path, methods);
	}

	const lines = [];
	lines.push("export type Paths = {");
	const operationEntries = [...operations.entries()];
	operationEntries.sort();
	for (const [path, methods] of operationEntries) {
		lines.push(`\t"${path}": {`);
		for (const method of methods) {
			for (const line of buildOperation(method)) lines.push(`\t\t${line}`);
		}
		lines.push("\t}");
	}
	lines.push("};");
	lines.push("");

	const schemaEntries = [...schemas.entries()];
	schemaEntries.sort();
	for (const [, spec] of schemaEntries) {
		if (spec.as_type === "void") continue;
		for (const line of buildExport(spec)) lines.push(line);
		lines.push("");
	}

	return lines.join("\n");

	function exportType(name: string) {
		if (resolvedNames.has(name)) return;
		resolvedNames.add(name);
		const schema = documentSchemas?.[name];
		if (schema == null) return;
		schemas.set(name, visitSchema(schema, name));
	}

	function visitSchema(
		schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
		name: string,
	): Spec {
		let title = undefined;
		let description = undefined;
		if ("title" in schema) title = schema.title;
		if ("description" in schema) description = schema.description;
		if ("$ref" in schema) {
			const as_type = parseRef(schema.$ref);
			exportType(as_type);
			return {
				name,
				as_type,
				title,
				description,
			};
		}
		if ("discriminator" in schema && typeof schema.discriminator === "object") {
			const { propertyName, mapping } = schema.discriminator;
			const as_types = [];
			for (const [key, ref] of Object.entries(mapping ?? {})) {
				const name = parseRef(ref);
				exportType(name);
				as_types.push(name);
				const spec = schemas.get(name);
				const property = spec?.properties?.find(
					(property) => property.name === propertyName,
				);
				if (property == null)
					throw new Error("Discriminant type mismatch", { cause: schema });
				property.as_type = `"${key}"`;
			}
			const as_type = as_types.join(" | ");
			return {
				name,
				as_type,
				title,
				description,
			};
		}
		switch (schema.type) {
			case "object": {
				const required = schema.required ?? [];
				const properties = Object.entries(schema.properties ?? {}).map(
					([key, value]) => {
						const spec = visitSchema(value, key);
						if (!required.includes(key)) spec.name = `${spec.name}?`;
						return spec;
					},
				);
				const as_type = properties.length === 0 ? "void" : name;
				return {
					name,
					as_type,
					title,
					description,
					properties,
				};
			}
			case "array": {
				const spec = visitSchema(schema.items, name);
				const as_type = `${spec.as_type}[]`;
				return {
					name,
					as_type,
					title,
					description,
				};
			}
			case "string": {
				let as_type: string;
				if (typeof schema.enum === "object")
					as_type = schema.enum.map((variant) => `"${variant}"`).join(" | ");
				else as_type = "string";
				return {
					name,
					as_type,
					title,
					description,
				};
			}
			case "integer":
			case "number":
				return {
					name,
					as_type: "number",
					title,
					description,
				};
			case "boolean":
				return {
					name,
					as_type: "boolean",
					title,
					description,
				};
			default:
				throw new Error("Unimplemented schema type", { cause: schema });
		}
	}

	function buildExport(spec: Spec): string[] {
		const lines = buildDocLines(spec).map((line) => ` ${line}`);
		if (spec.properties == null) {
			lines.push(`export type ${spec.name} = ${spec.as_type};`);
		} else {
			lines.push(`export type ${spec.name} = {`);
			for (const property of spec.properties) {
				for (const docLine of buildDocLines(property))
					lines.push(`\t${docLine}`);
				lines.push(`\t${property.name}: ${property.as_type};`);
			}
			lines.push("};");
		}
		return lines;
	}

	function buildOperation(operation: Operation): string[] {
		const lines = [];
		lines.push(`${operation.method}: {`);
		lines.push("\tparameters: {");
		if (operation.param.length > 0) {
			lines.push("\t\tpath: {");
			for (const spec of operation.param) {
				for (const line of buildDocLines(spec)) lines.push(`\t\t\t${line}`);
				lines.push(`\t\t\t${spec.name}: ${spec.as_type};`);
			}
			lines.push("\t\t};");
		}
		if (operation.query.length > 0) {
			lines.push("\t\tquery: {");
			for (const spec of operation.query) {
				for (const line of buildDocLines(spec)) lines.push(`\t\t\t${line}`);
				lines.push(`\t\t\t${spec.name}: ${spec.as_type};`);
			}
			lines.push("\t\t};");
		}
		if (operation.body != null) lines.push(`\t\tbody: ${operation.body};`);
		lines.push("\t};");
		if (operation.success != null) {
			const successSpec = schemas.get(operation.success);
			if (successSpec != null) {
				for (const line of buildDocLines(successSpec)) lines.push(`\t${line}`);
				lines.push(`\tsuccess: ${successSpec.as_type};`);
			}
		}
		if (operation.error != null) {
			const errorSpec = schemas.get(operation.error);
			if (errorSpec != null) {
				for (const line of buildDocLines(errorSpec)) lines.push(`\t${line}`);
				lines.push(`\terror: ${errorSpec.as_type};`);
			}
		}
		lines.push("};");
		return lines;
	}

	function buildDocLines(doc: Documented): string[] {
		const inner = buildInnerDocLines(doc);
		if (inner.length === 0) return [];
		const lines = ["/**"];
		for (const line of inner)
			lines.push(line.length === 0 ? " *" : ` * ${line}`);
		lines.push(" */");
		return lines;
	}

	function buildInnerDocLines(doc: Documented): string[] {
		const lines = [];
		if (doc.title != null) {
			lines.push(doc.title);
		}
		if (doc.description != null) {
			let isFirst = true;
			for (const line of turndown
				.turndown(doc.description)
				.trim()
				.split(/\n/)) {
				const trimmed = line.trim();
				if (isFirst) {
					if (
						trimmed.length === 0 ||
						(lines.length > 0 && lines.at(-1) === trimmed)
					)
						continue;
					if (lines.length > 0) lines.push("");
					isFirst = false;
				}
				lines.push(trimmed);
			}
		}
		return lines;
	}
}

function parseRef(ref: string): string {
	const slash = ref.lastIndexOf("/");
	return ref.slice(slash + 1);
}
