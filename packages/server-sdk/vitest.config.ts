import { defineConfig } from "vitest/config";

export default defineConfig({
	server: {
		fs: {
			cachedChecks: false,
		},
	},
});
