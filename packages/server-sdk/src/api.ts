import type { Paths } from "./__generated__/schema";

export type MethodType = {
	[Path in keyof Paths]: Paths[Path][keyof Paths[Path]];
}[keyof Paths];
