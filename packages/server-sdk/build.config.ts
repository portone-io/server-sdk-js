import { type MkdistBuildEntry, defineBuildConfig } from "unbuild";

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
			}),
		),
	],
});
