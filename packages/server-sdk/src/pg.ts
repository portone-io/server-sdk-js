import type { GeneratedApiRequest } from "./api";

export type GetKakaopayOrderRequest = GeneratedApiRequest<
	"/kakaopay/payment/order",
	"get"
>;
export function createGetKakaopayOrderRequest(
	pgTxId: string,
	channelKey: string,
): GetKakaopayOrderRequest {
	return {
		path: "/kakaopay/payment/order",
		method: "get",
		query: {
			pgTxId,
			channelKey,
		},
	};
}
