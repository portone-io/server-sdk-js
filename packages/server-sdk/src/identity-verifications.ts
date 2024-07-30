import type { ApiRequest, PrefixedGeneratedApiRequest } from "./api";

type IdentityVerificationsRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/identity-verifications", Path, Method>;
export function createIdentityVerificationsRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/identity-verifications${request.path}`,
	};
}

export type GetIdentityVerificationRequest = IdentityVerificationsRequest<
	"/{identityVerificationId}",
	"get"
>;
export function createGetIdentityVerificationRequest(
	identityVerificationId: string,
	storeId?: string,
): GetIdentityVerificationRequest {
	return createIdentityVerificationsRequest({
		path: `/${identityVerificationId}`,
		method: "get",
		query: {
			storeId,
		},
	});
}
