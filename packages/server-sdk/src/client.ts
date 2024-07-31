import type {
	ApiRequestMethod,
	SdkPaths,
	QuerySchema,
	BodySchema,
	ResponseSchema,
	PathSchema,
	EffectiveQuerySchema,
} from "./api";
import type { components, operations } from "./schema";

export type ApiRequestClientInit = {
	apiBase?: string;
	storeId?: string;
};

type AvailableMethods<T> = keyof {
	[K in keyof T as T[K] extends undefined ? never : K]: T[K];
} &
	ApiRequestMethod;

type AvailableRequestBody<
	Path extends keyof SdkPaths,
	Method extends AvailableMethods<SdkPaths[Path]>,
> = components["schemas"][keyof {
	[Operation in keyof operations as operations[Operation] extends SdkPaths[Path][Method]
		? `${Capitalize<Operation>}Body` & keyof components["schemas"]
		: never]: never;
}];

type MergedBody<
	Path extends keyof SdkPaths,
	Method extends AvailableMethods<SdkPaths[Path]>,
> = { requestBody?: string } extends QuerySchema<Path, Method>
	? NonNullable<AvailableRequestBody<Path, Method>>
	: BodySchema<Path, Method>;

export class ApiClient {
	/**
	 * 포트원 REST API의 기본 주소입니다.
	 */
	readonly apiBase: string;
	private readonly authorization?: {
		tokenType: "PortOne" | "Bearer";
		token: string;
	};
	storeId?: string;

	/**
	 * 포트원 API 접속 정보를 사용해 요청 클라이언트를 생성합니다.
	 *
	 * @param apiBase 포트원 REST API의 기본 주소
	 */
	constructor(secret: string, init?: ApiRequestClientInit) {
		this.apiBase = init?.apiBase ?? "https://api.portone.io";
		this.storeId = init?.storeId;
		this.authorization = {
			tokenType: "PortOne",
			token: secret,
		};
	}

	protected async send<
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
	): Promise<NonNullable<ResponseSchema<Path, Method>>> {
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
		if (this.authorization) {
			const { tokenType, token } = this.authorization;
			headers.set("Authorization", `${tokenType} ${token}`);
		}
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
		return rawResponse.json();
	}
}
