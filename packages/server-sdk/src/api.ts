import type { paths } from "./schema";

export type ApiRequest<Response, Query, Body> = {
	path: string;
	method: ApiRequestMethod;
	query?: Query;
	body?: Body;
	transform?: (json: unknown) => Response;
};

export type GeneratedApiRequest<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = ApiRequest<
	SuccessJson<Path, Method>,
	Query<Path, Method>,
	BodyJson<Path, Method>
> & { method: Method };

export type PrefixedGeneratedApiRequest<
	Prefix extends string,
	Path extends string,
	Method extends string,
> = `${Prefix}${Path}` extends keyof paths
	? Method extends keyof paths[`${Prefix}${Path}`]
		? GeneratedApiRequest<`${Prefix}${Path}`, Method>
		: never
	: never;

export type ApiRequestMethod = "get" | "post" | "delete" | "patch";

export type ApiErrorResponse = {
	type: ApiErrorResponseType;
	message?: string;
};

export type ApiErrorResponseType =
	| "INVALID_REQUEST"
	| "UNAUTHORIZED"
	| "FORBIDDEN"
	| "PAYMENT_NOT_FOUND"
	| "PAYMENT_SCHEDULE_NOT_FOUND"
	| "BILLING_KEY_NOT_FOUND"
	| "CASH_RECEIPT_NOT_FOUND"
	| "IDENTITY_VERIFICATION_NOT_FOUND"
	| "PLATFORM_NOT_ENABLED"
	| "PLATFORM_PARTNER_NOT_FOUND"
	| "PLATFORM_TRANSFER_NOT_FOUND"
	| "PLATFORM_NOT_SUPPORTED_BANK"
	| "PLATFORM_EXTERNAL_API_TEMPORARILY_FAILED"
	| "PLATFORM_EXTERNAL_API_FAILED"
	| "PLATFORM_DISCOUNT_SHARE_POLICY_NOT_FOUND"
	| "PLATFORM_ADDITIONAL_FEE_POLICY_NOT_FOUND"
	| "PLATFORM_CONTRACT_NOT_FOUND";

export type SuccessJson<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = paths[Path][Method] extends {
	responses: {
		"200": {
			content: {
				"application/json": unknown;
			};
		};
	};
}
	? paths[Path][Method]["responses"]["200"]["content"]["application/json"]
	: never;

export type Query<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = paths[Path][Method] extends {
	parameters: { query?: unknown };
}
	? Omit<paths[Path][Method]["parameters"]["query"], "requestBody">
	: never;

export type BodyJson<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = paths[Path][Method] extends {
	requestBody: { content: { "application/json": unknown } };
}
	? paths[Path][Method]["requestBody"]["content"]["application/json"]
	: paths[Path][Method] extends {
				parameters: {
					query?: {
						requestBody?: string;
					};
				};
			}
		? Record<string, unknown>
		: never;
