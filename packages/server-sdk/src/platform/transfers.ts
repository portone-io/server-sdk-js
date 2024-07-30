import { createPlatformRequest, type PlatformRequest } from ".";
import type { ApiRequest, PrefixedGeneratedApiRequest } from "../api";
import type { components } from "../schema";

type TransfersRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/platform/transfers", Path, Method>;
export function createTransfersRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/platform/transfers${request.path}`,
	};
}

export type GetTransferRequest = TransfersRequest<"/{id}", "get">;
export function createGetTransferRequest(id: string): GetTransferRequest {
	return createTransfersRequest({
		path: `/${id}`,
		method: "get",
	});
}

export type GetTransferSummariesRequest = PlatformRequest<
	"/transfer-summaries",
	"get"
> & {
	body: components["schemas"]["GetPlatformTransferSummariesBody"];
};
export type TransferFilterInput =
	components["schemas"]["PlatformTransferFilterInput"];
export function createGetTransferSummariesRequest(
	pageNumber: number,
	pageSize: number,
	filter?: TransferFilterInput,
): GetTransferSummariesRequest {
	return createPlatformRequest({
		path: "/transfer-summaries",
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
