import type { ApiRequest, PrefixedGeneratedApiRequest } from "../api";
import type { components } from "../schema";

export type PlatformRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/platform", Path, Method>;
export function createPlatformRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/platform${request.path}`,
	};
}

export type GetDiscountSharePoliciesRequest = PlatformRequest<
	"/discount-share-policies",
	"get"
> & {
	body: components["schemas"]["GetPlatformDiscountSharePoliciesBody"];
};
export type DiscountSharePolicyFilterInput =
	components["schemas"]["PlatformDiscountSharePolicyFilterInput"];
export function createGetDiscountSharePoliciesRequest(
	pageNumber: number,
	pageSize: number,
	filter?: DiscountSharePolicyFilterInput,
): GetDiscountSharePoliciesRequest {
	return createPlatformRequest({
		path: "/discount-share-policies",
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

export type GetDiscountSharePolicyRequest = PlatformRequest<
	"/discount-share-policies/{id}",
	"get"
>;
export function createGetDiscountSharePolicyRequest(
	id: string,
): GetDiscountSharePolicyRequest {
	return createPlatformRequest({
		path: `/discount-share-policies/${id}`,
		method: "get",
	});
}

export type GetAdditionalFeePoliciesRequest = PlatformRequest<
	"/additional-fee-policies",
	"get"
> & {
	body: components["schemas"]["GetPlatformAdditionalFeePoliciesBody"];
};
export type AdditionalFeePolicyFilterInput =
	components["schemas"]["PlatformAdditionalFeePolicyFilterInput"];
export function createGetAdditionalFeePoliciesRequest(
	pageNumber: number,
	pageSize: number,
	filter?: AdditionalFeePolicyFilterInput,
): GetAdditionalFeePoliciesRequest {
	return createPlatformRequest({
		path: "/additional-fee-policies",
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

export type GetAdditionalFeePolicyRequest = PlatformRequest<
	"/additional-fee-policies/{id}",
	"get"
>;
export function createGetAdditionalFeePolicyRequest(
	id: string,
): GetAdditionalFeePolicyRequest {
	return createPlatformRequest({
		path: `/additional-fee-policies/${id}`,
		method: "get",
	});
}

export type GetContractsRequest = PlatformRequest<"/contracts", "get"> & {
	body: components["schemas"]["GetPlatformContractsBody"];
};
export type ContractFilterInput =
	components["schemas"]["PlatformContractFilterInput"];
export function createGetContractsRequest(
	pageNumber: number,
	pageSize: number,
	filter?: ContractFilterInput,
): GetContractsRequest {
	return createPlatformRequest({
		path: "/contracts",
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

export type GetContractRequest = PlatformRequest<"/contracts/{id}", "get">;
export function createGetContractRequest(id: string): GetContractRequest {
	return createPlatformRequest({
		path: `/contracts/${id}`,
		method: "get",
	});
}
