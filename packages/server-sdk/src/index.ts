import { BillingKeyApi } from "./billing-keys";
import { ApiClient, type ApiRequestClientInit } from "./client";
import { PaymentApi } from "./payments";
export type * from "./error";
export { InvalidInputError } from "./error";

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
		),
	);
}
