import { type MkdistBuildEntry, defineBuildConfig } from "unbuild";
import rootTsConfig from "../../tsconfig.json";

export default defineBuildConfig({
	entries: [
		...(["esm", "cjs"] as const).map(
			(format): MkdistBuildEntry => ({
				builder: "mkdist",
				input: "./src",
				format,
				ext: (
					{
						esm: "mjs",
						cjs: "cjs",
					} as const
				)[format],
				declaration: true,
				addRelativeDeclarationExtensions: true,
				typescript: {
					compilerOptions: rootTsConfig.compilerOptions,
				},
			}),
		),
	],
});
