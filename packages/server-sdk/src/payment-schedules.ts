import type { ApiRequest, PrefixedGeneratedApiRequest } from "./api";
import type { components } from "./schema";

type PaymentSchedulesRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/payment-schedules", Path, Method>;
export function createPaymentSchedulesRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/payment-schedules${request.path}`,
	};
}

export type GetPaymentScheduleRequest = PaymentSchedulesRequest<
	"/{paymentScheduleId}",
	"get"
>;
export function createGetPaymentScheduleRequest(
	paymentScheduleId: string,
	storeId?: string,
): GetPaymentScheduleRequest {
	return createPaymentSchedulesRequest({
		path: `/${paymentScheduleId}`,
		method: "get",
		query: {
			storeId,
		},
	});
}

export type GetPaymentSchedulesRequest = PaymentSchedulesRequest<"", "get"> & {
	body: components["schemas"]["GetPaymentSchedulesBody"];
};
export type PaymentScheduleSortInput =
	components["schemas"]["PaymentScheduleSortInput"];
export type PaymentScheduleFilterInput =
	components["schemas"]["PaymentScheduleFilterInput"];
export function createGetPaymentSchedulesRequest(
	pageNumber: number,
	pageSize: number,
	sort?: PaymentScheduleSortInput,
	filter?: PaymentScheduleFilterInput,
): GetPaymentSchedulesRequest {
	return createPaymentSchedulesRequest({
		path: "",
		method: "get",
		body: {
			page: {
				number: pageNumber,
				size: pageSize,
			},
			sort,
			filter,
		},
	});
}
