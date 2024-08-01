import type { components } from "../__generated__/schema";
import type { ApiClient } from "./client";
import {
	AlreadyPaidError,
	BillingKeyAlreadyDeletedError,
	BillingKeyNotFoundError,
	CancelAmountExceedsCancellableAmountError,
	CancelTaxAmountExceedsCancellableTaxAmountError,
	CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError,
	CancellableAmountConsistencyBrokenError,
	ChannelNotFoundError,
	DiscountAmountExceedsTotalAmountError,
	ForbiddenError,
	InvalidRequestError,
	PaymentAlreadyCancelledError,
	PaymentNotFoundError,
	PaymentNotPaidError,
	PaymentNotWaitingForDepositError,
	PgProviderError,
	PromotionPayMethodDoesNotMatchError,
	RemainedAmountLessThanPromotionMinPaymentAmountError,
	SumOfPartsExceedsCancelAmountError,
	SumOfPartsExceedsTotalAmountError,
	UnauthorizedError,
	UnknownError,
	WebhookNotFoundError,
} from "./error";
import type { Prettify } from "./utils/types";

export function PaymentApi(client: ReturnType<typeof ApiClient>) {
	return {
		/**
		 * 주어진 아이디에 대응되는 결제 건을 조회합니다.
		 *
		 * @param paymentId 조회할 결제 아이디
		 * @param storeId 상점 ID
		 * @returns 결제 건 객체 또는 `null`
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 */
		async getPayment(paymentId: string) {
			const response = await client.send("/payments/{paymentId}", "get", {
				path: {
					paymentId,
				},
				query: {
					storeId: client.storeId,
				},
			});
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						return null;
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success;
		},

		/**
		 * 주어진 조건에 맞는 결제 건들을 페이지 기반으로 조회합니다.
		 *
		 * @param pageNumber 0부터 시작하는 페이지 번호
		 * @param pageSize 각 페이지 당 포함할 객체 수
		 * @param filter 결제 건 다건 조회를 위한 입력 정보
		 * @returns 조회된 결제 건 리스트
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 */
		async getPayments(
			pageNumber: number,
			pageSize: number,
			filter?: components["schemas"]["PaymentFilterInput"],
		) {
			const response = await client.send("/payments", "get", {
				body: {
					page: {
						number: pageNumber,
						size: pageSize,
					},
					filter: {
						storeId: client.storeId,
						...filter,
					},
				},
			});
			if ("error" in response) {
				switch (response.error.type) {
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
			return response.success.items;
		},

		/**
		 * 결제 정보를 사전 등록합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param options 등록할 사전 정보
		 * @throws {AlreadyPaidError} 결제가 이미 완료된 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async preRegisterPayment(
			paymentId: string,
			options?: Prettify<
				Omit<components["schemas"]["PreRegisterPaymentBody"], "storeId">
			>,
		) {
			const response = await client.send(
				"/payments/{paymentId}/pre-register",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "ALREADY_PAID":
						throw new AlreadyPaidError(response.error);
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
		},

		/**
		 * 결제 취소를 요청합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param options 결제 취소 정보
		 * @returns 결제 취소 내역
		 * @throws {CancelAmountExceedsCancellableAmountError} 결제 취소 금액이 취소 가능 금액을 초과한 경우
		 * @throws {CancelTaxAmountExceedsCancellableTaxAmountError} 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우
		 * @throws {CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError} 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우
		 * @throws {CancellableAmountConsistencyBrokenError} 취소 가능 잔액 검증에 실패한 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentAlreadyCancelledError} 결제가 이미 취소된 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {SumOfPartsExceedsCancelAmountError} 하위 항목들의 합이 전체 취소 금액을 초과한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 * @throws {RemainedAmountLessThanPromotionMinPaymentAmountError} 부분 취소 시, 취소하게 될 경우 남은 금액이 프로모션의 최소 결제 금액보다 작아지는 경우
		 */
		async cancelPayment(
			paymentId: string,
			options: Prettify<
				Omit<components["schemas"]["CancelPaymentBody"], "storeId">
			>,
		) {
			const response = await client.send(
				"/payments/{paymentId}/cancel",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "CANCEL_AMOUNT_EXCEEDS_CANCELLABLE_AMOUNT":
						throw new CancelAmountExceedsCancellableAmountError(response.error);
					case "CANCEL_TAX_AMOUNT_EXCEEDS_CANCELLABLE_TAX_AMOUNT":
						throw new CancelTaxAmountExceedsCancellableTaxAmountError(
							response.error,
						);
					case "CANCEL_TAX_FREE_AMOUNT_EXCEEDS_CANCELLABLE_TAX_FREE_AMOUNT":
						throw new CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError(
							response.error,
						);
					case "CANCELLABLE_AMOUNT_CONSISTENCY_BROKEN":
						throw new CancellableAmountConsistencyBrokenError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_ALREADY_CANCELLED":
						throw new PaymentAlreadyCancelledError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "PAYMENT_NOT_PAID":
						throw new PaymentNotPaidError(response.error);
					case "PG_PROVIDER":
						throw new PgProviderError(response.error);
					case "SUM_OF_PARTS_EXCEEDS_CANCEL_AMOUNT":
						throw new SumOfPartsExceedsCancelAmountError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					case "REMAINED_AMOUNT_LESS_THAN_PROMOTION_MIN_PAYMENT_AMOUNT":
						throw new RemainedAmountLessThanPromotionMinPaymentAmountError(
							response.error,
						);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success.cancellation;
		},

		/**
		 * 빌링키로 결제를 진행합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param options 빌링 키 결제 정보
		 * @returns 빌링키 결제 완료된 결제 건 요약 정보
		 * @throws {AlreadyPaidError} 이미 결제가 완료된 건에 대하여 사전 등록을 시도할 경우
		 * @throws {BillingKeyAlreadyDeletedError} 빌링키가 이미 삭제된 경우
		 * @throws {BillingKeyNotFoundError} 빌링키가 존재하지 않는 경우
		 * @throws {ChannelNotFoundError} 요청된 채널이 존재하지 않는 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {SumOfPartsExceedsTotalAmountError} 하위 항목들의 합이 전체 결제 금액을 초과한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 * @throws {DiscountAmountExceedsTotalAmountError} 프로모션 할인 금액이 결제 시도 금액 이상인 경우
		 * @throws {PromotionPayMethodDoesNotMatchError} 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
		 */
		async payWithBillingKey(
			paymentId: string,
			options: Prettify<
				Omit<components["schemas"]["BillingKeyPaymentInput"], "storeId">
			>,
		) {
			const response = await client.send(
				"/payments/{paymentId}/billing-key",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "ALREADY_PAID":
						throw new AlreadyPaidError(response.error);
					case "BILLING_KEY_ALREADY_DELETED":
						throw new BillingKeyAlreadyDeletedError(response.error);
					case "BILLING_KEY_NOT_FOUND":
						throw new BillingKeyNotFoundError(response.error);
					case "CHANNEL_NOT_FOUND":
						throw new ChannelNotFoundError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PG_PROVIDER":
						throw new PgProviderError(response.error);
					case "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT":
						throw new SumOfPartsExceedsTotalAmountError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					case "DISCOUNT_AMOUNT_EXCEEDS_TOTAL_AMOUNT":
						throw new DiscountAmountExceedsTotalAmountError(response.error);
					case "PROMOTION_PAY_METHOD_DOES_NOT_MATCH":
						throw new PromotionPayMethodDoesNotMatchError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success.payment;
		},

		/**
		 * 수기 결제를 진행합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param options 수기 결제 정보
		 * @returns 수기 결제가 완료된 결제 건 요약 정보
		 * @throws {AlreadyPaidError} 이미 결제가 완료된 건에 대하여 사전 등록을 시도할 경우
		 * @throws {ChannelNotFoundError} 요청된 채널이 존재하지 않는 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {SumOfPartsExceedsTotalAmountError} 하위 항목들의 합이 전체 결제 금액을 초과한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 * @throws {DiscountAmountExceedsTotalAmountError} 프로모션 할인 금액이 결제 시도 금액 이상인 경우
		 * @throws {PromotionPayMethodDoesNotMatchError} 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
		 */
		async instantPay(
			paymentId: string,
			options: Prettify<
				Omit<components["schemas"]["InstantPaymentInput"], "storeId">
			>,
		) {
			const response = await client.send(
				"/payments/{paymentId}/instant",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "ALREADY_PAID":
						throw new AlreadyPaidError(response.error);
					case "CHANNEL_NOT_FOUND":
						throw new ChannelNotFoundError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PG_PROVIDER":
						throw new PgProviderError(response.error);
					case "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT":
						throw new SumOfPartsExceedsTotalAmountError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					case "DISCOUNT_AMOUNT_EXCEEDS_TOTAL_AMOUNT":
						throw new DiscountAmountExceedsTotalAmountError(response.error);
					case "PROMOTION_PAY_METHOD_DOES_NOT_MATCH":
						throw new PromotionPayMethodDoesNotMatchError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success.payment;
		},

		/**
		 * 발급된 가상계좌를 말소합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @returns 가상계좌 말소 정보
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {PaymentNotWaitingForDepositError} 결제 건이 입금 대기 상태가 아닌 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async closeVirtualAccount(paymentId: string) {
			const response = await client.send(
				"/payments/{paymentId}/virtual-account/close",
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
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "PAYMENT_NOT_WAITING_FOR_DEPOSIT":
						throw new PaymentNotWaitingForDepositError(response.error);
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

		/**
		 * 에스크로 배송 정보를 등록합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param options 에스크로 배송 정보
		 * @returns 에스크로 정보 등록 정보
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async registerEscrowLogistics(
			paymentId: string,
			options: Prettify<
				Omit<components["schemas"]["RegisterEscrowLogisticsBody"], "storeId">
			>,
		) {
			const response = await client.send(
				"/payments/{paymentId}/escrow/logistics",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "PAYMENT_NOT_PAID":
						throw new PaymentNotPaidError(response.error);
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

		/**
		 * 에스크로 배송 정보를 수정합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param options 에스크로 배송 정보
		 * @returns 에스크로 배송 정보 수정 정보
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async modifyEscrowLogsitics(
			paymentId: string,
			options: Prettify<
				Omit<components["schemas"]["ModifyEscrowLogisticsBody"], "storeId">
			>,
		) {
			const response = await client.send(
				"/payments/{paymentId}/escrow/logistics",
				"patch",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "PAYMENT_NOT_PAID":
						throw new PaymentNotPaidError(response.error);
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

		/**
		 * 에스크로 결제를 구매 확정 처리합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param fromStore 확인 주체가 상점인지 여부
		 * @returns 에스크로 구매 확정 정보
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async completeEscrow(
			paymentId: string,
			/**
			 * 구매확정요청 주체가 고객사 관리자인지 구매자인지 구분하기 위한 필드입니다.
			 * 네이버페이 전용 파라미터이며, 구분이 모호한 경우 고객사 관리자(true)로 입력합니다.
			 */
			fromStore?: boolean,
		) {
			const response = await client.send(
				"/payments/{paymentId}/escrow/complete",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						fromStore,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "PAYMENT_NOT_PAID":
						throw new PaymentNotPaidError(response.error);
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

		/**
		 * 웹훅을 재발송합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param webhookId 웹훅 아이디
		 * @returns 성공 웹훅 내역
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 * @throws {WebhookNotFoundError} 웹훅 내역이 존재하지 않는 경우
		 */
		async resendWebhook(
			paymentId: string,
			/**
			 * 입력하지 않으면 결제 건의 가장 최근 웹훅 아이디가 기본 적용됩니다.
			 */
			webhookId?: string,
		) {
			const response = await client.send(
				"/payments/{paymentId}/resend-webhook",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						webhookId,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					case "WEBHOOK_NOT_FOUND":
						throw new WebhookNotFoundError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success.webhook;
		},

		/**
		 * 결제 내역 매출전표에 하위 상점의 거래를 등록할 수 있는 API입니다.
		 *
		 * 지원되는 PG사: KG이니시스 (이용 전 콘솔 -> 결제연동 탭에서 INIApi Key 등록 필요)
		 *
		 * @param paymentId 등록할 하위 상점 결제 건 아이디
		 * @param items 하위 상점 거래 목록
		 * @returns 하위 상점 거래 등록 정보
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
		 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async registerStoreReceipt(
			paymentId: string,
			items: components["schemas"]["RegisterStoreReceiptBodyItem"][],
		) {
			const response = await client.send(
				"/payments/{paymentId}/register-store-receipt",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						storeId: client.storeId,
						items,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_NOT_FOUND":
						throw new PaymentNotFoundError(response.error);
					case "PAYMENT_NOT_PAID":
						throw new PaymentNotPaidError(response.error);
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
