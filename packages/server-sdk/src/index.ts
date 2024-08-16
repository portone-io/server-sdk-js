import { BillingKeyApi } from "./billing-keys";
import { CashReceiptApi } from "./cash-receipts";
import { ApiClient, type ApiRequestClientInit } from "./client";
import { IdentityVerificationApi } from "./identity-verifications";
import { PaymentScheduleApi } from "./payment-scheuldes";
import { PaymentApi } from "./payments";
import { PgProviderApi } from "./pg-providers";
export type * as Schema from "../__generated__/schema.js";
export { type ApiRequestClientInit } from "./client";
export * as Errors from "./errors";
export * as Webhook from "./webhook";

type Expand<T> = {
	[K in keyof T]: T[K];
} & {};

type PortOneApiBase = {
	readonly apiBase: string;
	readonly storeId?: string;
};

/**
 * 포트원 API 객체
 *
 * @typedocExpand
 */
export type PortOneApiClient = Expand<
	Readonly<
		PortOneApiBase &
			ReturnType<typeof PaymentApi> &
			ReturnType<typeof BillingKeyApi> &
			ReturnType<typeof PaymentScheduleApi> &
			ReturnType<typeof IdentityVerificationApi> &
			ReturnType<typeof PgProviderApi> &
			ReturnType<typeof CashReceiptApi>
	>
>;

/**
 * API Secret을 사용해 포트원 API 객체를 생성합니다.
 *
 * @param secret 포트원 API Secret
 * @param init 포트원 API를 사용하기 위한 추가 정보
 * @returns 포트원 API 객체
 */
export function PortOneApi(
	secret: string,
	init?: ApiRequestClientInit,
): PortOneApiClient {
	const client = ApiClient(secret, init);
	return Object.freeze(
		Object.assign(
			{
				get apiBase() {
					return client.apiBase;
				},
				get storeId() {
					return client.storeId;
				},
			} as PortOneApiBase,
			PaymentApi(client),
			BillingKeyApi(client),
			PaymentScheduleApi(client),
			IdentityVerificationApi(client),
			PgProviderApi(client),
			CashReceiptApi(client),
		),
	);
}
