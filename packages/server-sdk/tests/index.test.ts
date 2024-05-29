import { createRequire } from "node:module";
import { describe, expect, test } from "vitest";

describe("can be imported", () => {
	test("import", async () => {
		const sdk = await import("@portone/server-sdk");
		expect(sdk).toMatchObject({});
	});
	test("require", async () => {
		const require = createRequire(import.meta.url);
		const sdk = require("@portone/server-sdk");
		expect(sdk).toMatchObject({});
	});
});
