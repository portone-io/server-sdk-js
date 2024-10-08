import type { Paths } from "./__generated__/schema";
import type { MethodType } from "./api";

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

type PortOneResult<Path extends keyof Paths, Method extends keyof Paths[Path]> =
	| {
			success: TryIndex<Paths[Path][Method], "success">;
	  }
	| {
			error: TryIndex<Paths[Path][Method], "error">;
	  };

export function ApiClient(secret: string, init?: ApiRequestClientInit) {
	return {
		apiBase: init?.apiBase ?? "https://api.portone.io",
		storeId: init?.storeId,
		async send<
			Path extends keyof Paths,
			Method extends string & keyof Paths[Path],
		>(
			path: Path,
			method: Method,
			args: Extract<Paths[Path][Method], MethodType>["parameters"],
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
				method: method.toUpperCase(),
				headers,
			};
			headers.set("Authorization", `PortOne ${secret}`);
			if ("query" in args && Object.keys(args.query).length !== 0) {
				for (const [key, value] of Object.entries(args.query)) {
					if (value != null) url.searchParams.set(key, value);
				}
			}
			if ("body" in args && Object.keys(args.body).length !== 0) {
				switch (method) {
					case "get":
					case "delete":
						url.searchParams.set("requestBody", JSON.stringify(args.body));
						break;
					case "post":
					case "patch":
						init.body = JSON.stringify(args.body);
						headers.set("Content-Type", "application/json");
						break;
				}
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
