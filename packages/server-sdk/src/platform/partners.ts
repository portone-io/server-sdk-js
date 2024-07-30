import type { ApiRequest, PrefixedGeneratedApiRequest } from "../api";
import type { components } from "../schema";

type PartnersRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/platform/partners", Path, Method>;
export function createPartnersRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/platform/partners${request.path}`,
	};
}

export type GetPartnersRequest = PartnersRequest<"", "get"> & {
	body: components["schemas"]["GetPlatformPartnersBody"];
};
export type PartnerFilterInput =
	components["schemas"]["PlatformPartnerFilterInput"];
export function createGetPartnersRequest(
	pageNumber: number,
	pageSize: number,
	filter?: PartnerFilterInput,
): GetPartnersRequest {
	return createPartnersRequest({
		path: "",
		method: "get",
		body: {
			page: {
				number: pageNumber,
				size: pageSize,
			},
			filter,
		},
	});
}

export type GetPartnerRequest = PartnersRequest<"/{id}", "get">;
export function createGetPartnerRequest(id: string): GetPartnerRequest {
	return createPartnersRequest({
		path: `/${id}`,
		method: "get",
	});
}
