import type { ApiRequest, PrefixedGeneratedApiRequest } from "./api";

type BillingKeysRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/billing-keys", Path, Method>;
export function createBillingKeysRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/billing-keys${request.path}`,
	};
}

export type GetBillingKeyRequest = BillingKeysRequest<"/{billingKey}", "get">;
export function createGetBillingKeyRequest(
	billingKey: string,
	storeId?: string,
): GetBillingKeyRequest {
	return createBillingKeysRequest({
		path: `/${billingKey}`,
		method: "get",
		query: {
			storeId,
		},
	});
}
