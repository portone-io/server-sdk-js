/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
	entryPoints: ["./src/index.ts"],
	emit: "docs",
	out: "./docs",
	tsconfig: "../../tsconfig.json",
	plugin: ["./typedoc-plugin-expand.mjs"],
	sort: ["kind", "source-order"],
};
