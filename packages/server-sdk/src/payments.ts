import type { ApiRequest, PrefixedGeneratedApiRequest } from "./api";
import type { components } from "./schema";

type PaymentRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/payments", Path, Method>;
export function createPaymentRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return {
		...request,
		path: `/payments${request.path}`,
	};
}

export type Payment = components["schemas"]["Payment"];

export type GetPaymentRequest = PaymentRequest<"/{paymentId}", "get">;
export function createGetPaymentRequest(
	paymentId: string,
	storeId?: string,
): GetPaymentRequest {
	return createPaymentRequest({
		path: `/${paymentId}`,
		method: "get",
		query: {
			storeId,
		},
	});
}

export type PaymentFilterInput = components["schemas"]["PaymentFilterInput"];
export type GetPaymentsRequest = PaymentRequest<"", "get"> & {
	body: components["schemas"]["GetPaymentsBody"];
};
export function createGetPaymentsRequest(
	pageNumber?: number,
	pageSize?: number,
	filter?: PaymentFilterInput,
): GetPaymentsRequest {
	return createPaymentRequest({
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

export type PreRegisterPaymentRequest = PaymentRequest<
	"/{paymentId}/pre-register",
	"post"
>;
export type PreRegisterPaymentOptions = {
	storeId?: string;
	totalAmount?: bigint;
	taxFreeAmount?: bigint;
	currency?: components["schemas"]["Currency"];
};
export function createPreRegisterPaymentRequest(
	paymentId: string,
	options?: PreRegisterPaymentOptions,
): PreRegisterPaymentRequest {
	return createPaymentRequest({
		path: `/${paymentId}/pre-register`,
		method: "post",
		body: options,
	});
}

export type GetCashReceiptRequest = PaymentRequest<
	"/{paymentId}/cash-receipt",
	"get"
>;
export function createGetCashReceiptRequest(
	paymentId: string,
	storeId?: string,
): GetCashReceiptRequest {
	return createPaymentRequest({
		path: `/${paymentId}/cash-receipt`,
		method: "get",
		query: {
			storeId,
		},
	});
}
