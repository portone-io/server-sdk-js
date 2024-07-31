import { ApiClient } from "./client";
import {
	AlreadyPaidError,
	BillingKeyAlreadyDeletedError,
	BillingKeyNotFoundError,
	CancelAmountExceedsCancellableAmountError,
	CancelTaxAmountExceedsCancellableTaxAmountError,
	CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError,
	CancellableAmountConsistencyBrokenError,
	ChannelNotFoundError,
	ForbiddenError,
	InvalidInputError,
	InvalidRequestError,
	PaymentAlreadyCancelledError,
	PaymentNotFoundError,
	PaymentNotPaidError,
	PaymentNotWaitingForDepositError,
	PgProviderError,
	SumOfPartsExceedsCancelAmountError,
	SumOfPartsExceedsTotalAmountError,
	UnauthorizedError,
	UnknownError,
	WebhookNotFoundError,
} from "./error";
import type { components } from "./schema";
import type { Prettify } from "./utils/types";

type PaymentFilterInput = components["schemas"]["PaymentFilterInput"];

export class PortOnePaymentApi extends ApiClient {
	/**
	 * 주어진 아이디에 대응되는 결제 건을 조회합니다.
	 *
	 * @param paymentId 조회할 결제 아이디
	 * @param storeId 상점 ID
	 * @returns 결제 건 객체 또는 `null`
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	async getPayment(paymentId: string) {
		const response = await this.send("/payments/{paymentId}", "get", {
			path: {
				paymentId,
			},
			query: {
				storeId: this.storeId,
			},
		});
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					return null;
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response;
	}

	/**
	 * 주어진 조건에 맞는 결제 건들을 페이지 기반으로 조회합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param filter 결제 건 다건 조회를 위한 입력 정보
	 * @returns 조회된 결제 건 리스트와 페이지 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	async getPayments(
		pageNumber: number,
		pageSize: number,
		filter?: PaymentFilterInput,
	) {
		const response = await this.send("/payments", "get", {
			body: {
				page: {
					number: pageNumber,
					size: pageSize,
				},
				filter: {
					storeId: this.storeId,
					...filter,
				},
			},
		});
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response.items;
	}

	/**
	 * 결제 정보를 사전 등록합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param options 등록할 사전 정보
	 * @throws {AlreadyPaidError} 결제가 이미 완료된 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	async preRegisterPayment(
		paymentId: string,
		options?: Prettify<
			Omit<components["schemas"]["PreRegisterPaymentBody"], "storeId">
		>,
	) {
		const response = await this.send(
			"/payments/{paymentId}/pre-register",
			"post",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					...options,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "ALREADY_PAID":
					throw new AlreadyPaidError(response);
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
	}

	/**
	 * 결제 취소를 요청합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param options 결제 취소 정보
	 * @returns 결제 취소 내역
	 *
	 * @throws {CancelAmountExceedsCancellableAmountError} 결제 취소 금액이 취소 가능 금액을 초과한 경우
	 * @throws {CancelTaxAmountExceedsCancellableTaxAmountError} 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우
	 * @throws {CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError} 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우
	 * @throws {CancellableAmountConsistencyBrokenError} 취소 가능 잔액 검증에 실패한 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {PaymentAlreadyCancelledError} 결제가 이미 취소된 경우
	 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
	 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
	 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
	 * @throws {SumOfPartsExceedsCancelAmountError} 하위 항목들의 합이 전체 취소 금액을 초과한 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	async cancelPayment(
		paymentId: string,
		options: Prettify<
			Omit<components["schemas"]["CancelPaymentBody"], "storeId">
		>,
	) {
		const response = await this.send("/payments/{paymentId}/cancel", "post", {
			path: {
				paymentId,
			},
			body: {
				storeId: this.storeId,
				...options,
			},
		});
		if ("type" in response) {
			switch (response.type) {
				case "CANCEL_AMOUNT_EXCEEDS_CANCELLABLE_AMOUNT":
					throw new CancelAmountExceedsCancellableAmountError(response);
				case "CANCEL_TAX_AMOUNT_EXCEEDS_CANCELLABLE_TAX_AMOUNT":
					throw new CancelTaxAmountExceedsCancellableTaxAmountError(response);
				case "CANCEL_TAX_FREE_AMOUNT_EXCEEDS_CANCELLABLE_TAX_FREE_AMOUNT":
					throw new CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError(
						response,
					);
				case "CANCELLABLE_AMOUNT_CONSISTENCY_BROKEN":
					throw new CancellableAmountConsistencyBrokenError(response);
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_ALREADY_CANCELLED":
					throw new PaymentAlreadyCancelledError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "PAYMENT_NOT_PAID":
					throw new PaymentNotPaidError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "SUM_OF_PARTS_EXCEEDS_CANCEL_AMOUNT":
					throw new SumOfPartsExceedsCancelAmountError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response.cancellation;
	}

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
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
	 * @throws {SumOfPartsExceedsTotalAmountError} 하위 항목들의 합이 전체 결제 금액을 초과한 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	async payWithBillingKey(
		paymentId: string,
		options: Prettify<
			Omit<components["schemas"]["BillingKeyPaymentInput"], "storeId">
		>,
	) {
		const response = await this.send(
			"/payments/{paymentId}/billing-key",
			"post",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					...options,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "ALREADY_PAID":
					throw new AlreadyPaidError(response);
				case "BILLING_KEY_ALREADY_DELETED":
					throw new BillingKeyAlreadyDeletedError(response);
				case "BILLING_KEY_NOT_FOUND":
					throw new BillingKeyNotFoundError(response);
				case "CHANNEL_NOT_FOUND":
					throw new ChannelNotFoundError(response);
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT":
					throw new SumOfPartsExceedsTotalAmountError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response.payment;
	}

	/**
	 * 수기 결제를 진행합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param options 수기 결제 정보
	 * @returns 수기 결제가 완료된 결제 건 요약 정보
	 * @throws {AlreadyPaidError} 이미 결제가 완료된 건에 대하여 사전 등록을 시도할 경우
	 * @throws {ChannelNotFoundError} 요청된 채널이 존재하지 않는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
	 * @throws {SumOfPartsExceedsTotalAmountError} 하위 항목들의 합이 전체 결제 금액을 초과한 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	async instantPay(
		paymentId: string,
		options: Prettify<
			Omit<components["schemas"]["InstantPaymentInput"], "storeId">
		>,
	) {
		const response = await this.send("/payments/{paymentId}/instant", "post", {
			path: {
				paymentId,
			},
			body: {
				storeId: this.storeId,
				...options,
			},
		});
		if ("type" in response) {
			switch (response.type) {
				case "ALREADY_PAID":
					throw new AlreadyPaidError(response);
				case "CHANNEL_NOT_FOUND":
					throw new ChannelNotFoundError(response);
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT":
					throw new SumOfPartsExceedsTotalAmountError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response.payment;
	}

	/**
	 * 발급된 가상계좌를 말소합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @returns 가상계좌 말소 정보
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
	 * @throws {PaymentNotWaitingForDepositError} 결제 건이 입금 대기 상태가 아닌 경우
	 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	async closeVirtualAccount(paymentId: string) {
		const response = await this.send(
			"/payments/{paymentId}/virtual-account/close",
			"post",
			{
				path: {
					paymentId,
				},
				query: {
					storeId: this.storeId,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "PAYMENT_NOT_WAITING_FOR_DEPOSIT":
					throw new PaymentNotWaitingForDepositError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response;
	}

	/**
	 * 에스크로 배송 정보를 등록합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param options 에스크로 배송 정보
	 * @returns 에스크로 정보 등록 정보
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
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
		const response = await this.send(
			"/payments/{paymentId}/escrow/logistics",
			"post",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					...options,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "PAYMENT_NOT_PAID":
					throw new PaymentNotPaidError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response;
	}

	/**
	 * 에스크로 배송 정보를 수정합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param options 에스크로 배송 정보
	 * @returns 에스크로 배송 정보 수정 정보
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
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
		const response = await this.send(
			"/payments/{paymentId}/escrow/logistics",
			"patch",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					...options,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "PAYMENT_NOT_PAID":
					throw new PaymentNotPaidError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response;
	}

	/**
	 * 에스크로 결제를 구매 확정 처리합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param fromStore 확인 주체가 상점인지 여부
	 * @returns 에스크로 구매 확정 정보
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
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
		const response = await this.send(
			"/payments/{paymentId}/escrow/complete",
			"post",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					fromStore,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "PAYMENT_NOT_PAID":
					throw new PaymentNotPaidError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response;
	}

	/**
	 * 웹훅을 재발송합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @param webhookId 웹훅 아이디
	 * @returns 성공 웹훅 내역
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
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
		const response = await this.send(
			"/payments/{paymentId}/resend-webhook",
			"post",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					webhookId,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				case "WEBHOOK_NOT_FOUND":
					throw new WebhookNotFoundError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response.webhook;
	}

	/**
	 * 결제 내역 매출전표에 하위 상점의 거래를 등록할 수 있는 API입니다.
	 *
	 * 지원되는 PG사: KG이니시스 (이용 전 콘솔 -> 결제연동 탭에서 INIApi Key 등록 필요)
	 *
	 * @param paymentId 등록할 하위 상점 결제 건 아이디
	 * @param items 하위 상점 거래 목록
	 * @returns 하위 상점 거래 등록 정보
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
	 * @throws {PaymentNotPaidError} 결제가 완료되지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	async registerStoreReceipt(
		paymentId: string,
		items: components["schemas"]["RegisterStoreReceiptBodyItem"][],
	) {
		const response = await this.send(
			"/payments/{paymentId}/register-store-receipt",
			"post",
			{
				path: {
					paymentId,
				},
				body: {
					storeId: this.storeId,
					items,
				},
			},
		);
		if ("type" in response) {
			switch (response.type) {
				case "FORBIDDEN":
					throw new ForbiddenError(response);
				case "INVALID_REQUEST":
					throw InvalidRequestError(response);
				case "PAYMENT_NOT_FOUND":
					throw new PaymentNotFoundError(response);
				case "PAYMENT_NOT_PAID":
					throw new PaymentNotPaidError(response);
				case "PG_PROVIDER":
					throw new PgProviderError(response);
				case "UNAUTHORIZED":
					throw new UnauthorizedError(response);
				default:
					throw new UnknownError(response);
			}
		}
		return response;
	}
}
