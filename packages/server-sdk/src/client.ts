import type { MethodType, SdkPaths } from "./api";

export type ApiRequestClientInit = {
	/**
	 * 포트원 API URL Origin
	 *
	 * 기본값은 `https://api.portone.io`입니다.
	 */
	apiBase?: string;
	/**
	 * 상점 ID
	 */
	storeId?: string;
};

type TryIndex<T, U extends PropertyKey> = T extends { [K in U]: infer V }
	? V
	: never;

type PortOneResult<
	Path extends keyof SdkPaths,
	Method extends keyof SdkPaths[Path],
> =
	| {
			success: TryIndex<SdkPaths[Path][Method], "success">;
	  }
	| {
			error: TryIndex<SdkPaths[Path][Method], "error">;
	  };

export function ApiClient(secret: string, init?: ApiRequestClientInit) {
	return {
		apiBase: init?.apiBase ?? "https://api.portone.io",
		storeId: init?.storeId,
		async send<
			Path extends keyof SdkPaths,
			Method extends string & keyof SdkPaths[Path],
		>(
			path: Path,
			method: Method,
			args: Extract<SdkPaths[Path][Method], MethodType>["parameters"],
		): Promise<PortOneResult<Path, Method>> {
			let replacedPath: string = path;
			if ("path" in args) {
				for (const [key, value] of Object.entries(args.path)) {
					replacedPath = replacedPath.replace(`{${key}}`, value);
				}
			}
			const url = new URL(replacedPath, this.apiBase);
			const headers = new Headers();
			headers.set("User-Agent", "__USER_AGENT__");
			const init: RequestInit = {
				method,
				headers,
			};
			headers.set("Authorization", `PortOne ${secret}`);
			switch (method) {
				case "get":
				case "delete":
					if ("query" in args && Object.keys(args.query).length !== 0) {
						for (const [key, value] of Object.entries(args.query)) {
							url.searchParams.set(key, value);
						}
					}
					if ("body" in args && Object.keys(args.body).length !== 0) {
						url.searchParams.set("requestBody", JSON.stringify(args.body));
					}
					break;
				case "post":
				case "patch":
					if ("body" in args && Object.keys(args.body).length !== 0) {
						init.body = JSON.stringify(args.body);
					}
					headers.set("Content-Type", "application/json");
					break;
			}
			const rawResponse = await fetch(url, init);
			if (rawResponse.ok) {
				return {
					success: await rawResponse.json(),
				};
			}
			return {
				error: await rawResponse.json(),
			};
		},
	};
}
