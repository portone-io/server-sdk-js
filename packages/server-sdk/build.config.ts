import childProcess from "node:child_process";
import fs from "node:fs/promises";
import { type MkdistBuildEntry, defineBuildConfig } from "unbuild";
import rootTsConfig from "../../tsconfig.json";
import packageInfo from "./package.json";
const commitHash = childProcess
	.execSync("git rev-parse HEAD", { encoding: "utf-8" })
	.trim();
const userAgent = `"portone-io/server-sdk-js v${packageInfo.version} (${commitHash})"`;

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
	hooks: {
		"mkdist:entry:build": async (_ctx, _entry, output) => {
			await Promise.all(
				output.writtenFiles.map(async (file) => {
					const content = await fs.readFile(file, { encoding: "utf-8" });
					return fs.writeFile(
						file,
						content.replaceAll("__USER_AGENT__", userAgent),
					);
				}),
			);
		},
	},
});
