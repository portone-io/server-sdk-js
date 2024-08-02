import { BillingKeyApi } from "./billing-keys";
import { CashReceiptApi } from "./cash-receipts";
import { ApiClient, type ApiRequestClientInit } from "./client";
import { IdentityVerificationApi } from "./identity-verifications";
import { PaymentScheduleApi } from "./payment-scheuldes";
import { PaymentApi } from "./payments";
import { PgProviderApi } from "./pg-providers";
export type * from "./error";
export { InvalidInputError } from "./error";
export type * as Schema from "../__generated__/schema.js";
export * as Webhook from "./webhook";

export function PortOneApi(secret: string, init?: ApiRequestClientInit) {
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
			},
			PaymentApi(client),
			BillingKeyApi(client),
			PaymentScheduleApi(client),
			IdentityVerificationApi(client),
			PgProviderApi(client),
			CashReceiptApi(client),
		),
	);
}
