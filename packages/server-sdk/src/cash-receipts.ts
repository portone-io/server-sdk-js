import type { IssueCashReceiptBody } from "../__generated__/schema";
import type { ApiClient } from "./client";
import {
	CashReceiptAlreadyIssuedError,
	CashReceiptNotFoundError,
	CashReceiptNotIssuedError,
	ChannelNotFoundError,
	ForbiddenError,
	InvalidRequestError,
	PgProviderError,
	UnauthorizedError,
	UnknownError,
} from "./error";

export function CashReceiptApi(client: ReturnType<typeof ApiClient>) {
	return {
		/**
		 * 주어진 결제 아이디에 대응되는 현금 영수증 내역을 조회합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @returns 현금 영수증 객체 또는 `null`
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async getCashReceipt(paymentId: string) {
			const response = await client.send(
				"/payments/{paymentId}/cash-receipt",
				"get",
				{
					path: {
						paymentId,
					},
					query: {
						storeId: client.storeId,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "CASH_RECEIPT_NOT_FOUND":
						return null;
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success;
		},

		/**
		 * 현금 영수증 발급을 요청합니다.
		 *
		 * @param options 현금 영수증 수동 발급을 위한 추가 정보
		 * @returns 현금영수증 내역
		 * @throws {CashReceiptAlreadyIssuedError} 현금영수증이 이미 발급된 경우
		 * @throws {ChannelNotFoundError} 요청된 채널이 존재하지 않는 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async issueCashReceipt(options: Omit<IssueCashReceiptBody, "storeId">) {
			const response = await client.send("/cash-receipts", "post", {
				body: {
					storeId: client.storeId,
					...options,
				},
			});
			if ("error" in response) {
				switch (response.error.type) {
					case "CASH_RECEIPT_ALREADY_ISSUED":
						throw new CashReceiptAlreadyIssuedError(response.error);
					case "CHANNEL_NOT_FOUND":
						throw new ChannelNotFoundError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PG_PROVIDER":
						throw new PgProviderError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success.cashReceipt;
		},

		/**
		 * 현금 영수증 취소를 요청합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @returns 현금 영수증 취소 정보
		 * @throws {CashReceiptNotFoundError}
		 * @throws {CashReceiptNotIssuedError}
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async cancelCashReceipt(paymentId: string) {
			const response = await client.send(
				"/payments/{paymentId}/cash-receipt/cancel",
				"post",
				{
					path: {
						paymentId,
					},
					query: {
						storeId: client.storeId,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "CASH_RECEIPT_NOT_FOUND":
						throw new CashReceiptNotFoundError(response.error);
					case "CASH_RECEIPT_NOT_ISSUED":
						throw new CashReceiptNotIssuedError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PG_PROVIDER":
						throw new PgProviderError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success;
		},
	};
}
