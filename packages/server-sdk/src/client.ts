import type {
	AvailableMethods,
	EffectiveQuerySchema,
	ErrorJson,
	MergedBody,
	PathSchema,
	SdkPaths,
	SuccessJson,
} from "./api";

export type ApiRequestClientInit = {
	apiBase?: string;
	storeId?: string;
};

type ApiResponse<T, E> =
	| {
			success: T;
	  }
	| {
			error: E;
	  };

export function ApiClient(secret: string, init?: ApiRequestClientInit) {
	return {
		apiBase: init?.apiBase ?? "https://api.portone.io",
		storeId: init?.storeId,
		async send<
			Path extends keyof SdkPaths,
			Method extends AvailableMethods<SdkPaths[Path]>,
		>(
			path: Path,
			method: Method,
			args: (PathSchema<Path, Method> extends object
				? {
						path: PathSchema<Path, Method>;
					}
				: object) &
				(EffectiveQuerySchema<Path, Method> extends never
					? object
					: keyof EffectiveQuerySchema<Path, Method> extends never
						? object
						: {
								query: EffectiveQuerySchema<Path, Method>;
							}) &
				(MergedBody<Path, Method> extends never
					? object
					: { body: MergedBody<Path, Method> }),
		): Promise<
			ApiResponse<SuccessJson<Path, Method>, ErrorJson<Path, Method>>
		> {
			let replacedPath: string = path;
			if ("path" in args) {
				for (const [key, value] of Object.entries(args.path)) {
					replacedPath = replacedPath.replace(`{${key}}`, value);
				}
			}
			const url = new URL(replacedPath, this.apiBase);
			const headers = new Headers();
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
