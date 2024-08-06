import type {
	BillingKeyPaymentInput,
	PaymentScheduleFilterInput,
	PaymentScheduleSortInput,
	RevokePaymentSchedulesBody,
} from "../__generated__/schema";
import type { ApiClient } from "./client";
import {
	AlreadyPaidOrWaitingError,
	BillingKeyAlreadyDeletedError,
	BillingKeyNotFoundError,
	ForbiddenError,
	InvalidRequestError,
	PaymentScheduleAlreadyExistsError,
	PaymentScheduleAlreadyProcessedError,
	PaymentScheduleAlreadyRevokedError,
	PaymentScheduleNotFoundError,
	SumOfPartsExceedsTotalAmountError,
	UnauthorizedError,
	UnknownError,
} from "./errors";

export function PaymentScheduleApi(client: ReturnType<typeof ApiClient>) {
	return {
		/**
		 * 주어진 아이디에 대응되는 결제 예약 건을 조회합니다.
		 *
		 * @param paymentScheduleId 조회할 결제 예약 건 아이디
		 * @returns 결제 예약 건 객체
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentScheduleNotFoundError} 결제 예약건이 존재하지 않는 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async getPaymentSchedule(paymentScheduleId: string) {
			const response = await client.send(
				"/payment-schedules/{paymentScheduleId}",
				"get",
				{
					path: {
						paymentScheduleId,
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
					case "PAYMENT_SCHEDULE_NOT_FOUND":
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
		 * 주어진 조건에 맞는 결제 예약 건들을 조회합니다.
		 *
		 * `filter.from`, `filter.until` 파라미터의 기본값이 결제 시점 기준
		 * 지난 90일에 속하는 건을 조회하도록 되어 있으니,
		 * 미래 예약 상태의 건을 조회하기 위해서는 해당 파라미터를 직접 설정해 주셔야 합니다.
		 *
		 * @param pageNumber 0부터 시작하는 페이지 번호
		 * @param pageSize 각 페이지 당 포함할 객체 수
		 * @param options 결제 예약 다건 조회를 위한 추가 정보
		 * @returns 조회된 예약 결제 건 리스트
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async getPaymentScheuldes(
			pageNumber: number,
			pageSize: number,
			options?: {
				sort?: PaymentScheduleSortInput;
				filter?: Omit<PaymentScheduleFilterInput, "storeId">;
			},
		) {
			const response = await client.send("/payment-schedules", "get", {
				body: {
					page: {
						number: pageNumber,
						size: pageSize,
					},
					sort: options?.sort,
					filter: {
						storeId: client.storeId,
						...options?.filter,
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
		 * 결제 예약 건을 취소합니다.
		 *
		 * @param options 결제 예약 건 취소를 위한 추가 정보
		 * @returns 결제 예약 건 취소 정보
		 * @throws {BillingKeyAlreadyDeletedError} 빌링키가 이미 삭제된 경우
		 * @throws {BillingKeyNotFoundError} 빌링키가 존재하지 않는 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentScheduleAlreadyProcessedError} 결제 예약건이 이미 처리된 경우
		 * @throws {PaymentScheduleAlreadyRevokedError} 결제 예약건이 이미 취소된 경우
		 * @throws {PaymentScheduleNotFoundError} 결제 예약건이 존재하지 않는 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async revokePaymentSchedules(
			options?: Omit<RevokePaymentSchedulesBody, "storeId">,
		) {
			const response = await client.send("/payment-schedules", "delete", {
				body: {
					storeId: client.storeId,
					...options,
				},
			});
			if ("error" in response) {
				switch (response.error.type) {
					case "BILLING_KEY_ALREADY_DELETED":
						throw new BillingKeyAlreadyDeletedError(response.error);
					case "BILLING_KEY_NOT_FOUND":
						throw new BillingKeyNotFoundError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_SCHEDULE_ALREADY_PROCESSED":
						throw new PaymentScheduleAlreadyProcessedError(response.error);
					case "PAYMENT_SCHEDULE_ALREADY_REVOKED":
						throw new PaymentScheduleAlreadyRevokedError(response.error);
					case "PAYMENT_SCHEDULE_NOT_FOUND":
						throw new PaymentScheduleNotFoundError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success;
		},

		/**
		 * 결제를 예약합니다.
		 *
		 * @param paymentId 결제 건 아이디
		 * @param payment 빌링키 결제 요청 입력 정보
		 * @param timeToPay 결제 예정 시점
		 * @returns 결제 예약 건
		 * @throws {AlreadyPaidOrWaitingError} 결제가 이미 완료되었거나 대기중인 경우
		 * @throws {BillingKeyAlreadyDeletedError} 빌링키가 이미 삭제된 경우
		 * @throws {BillingKeyNotFoundError} 빌링키가 존재하지 않는 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentScheduleAlreadyExistsError}
		 * @throws {SumOfPartsExceedsTotalAmountError}
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async schedulePayment(
			paymentId: string,
			payment: Omit<BillingKeyPaymentInput, "storeId">,
			timeToPay: string,
		) {
			const response = await client.send(
				"/payments/{paymentId}/schedule",
				"post",
				{
					path: {
						paymentId,
					},
					body: {
						payment,
						timeToPay,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "ALREADY_PAID_OR_WAITING":
						throw new AlreadyPaidOrWaitingError(response.error);
					case "BILLING_KEY_ALREADY_DELETED":
						throw new BillingKeyAlreadyDeletedError(response.error);
					case "BILLING_KEY_NOT_FOUND":
						throw new BillingKeyNotFoundError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_SCHEDULE_ALREADY_EXISTS":
						throw new PaymentScheduleAlreadyExistsError(response.error);
					case "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT":
						throw new SumOfPartsExceedsTotalAmountError(response.error);
					case "UNAUTHORIZED":
						throw new UnauthorizedError(response.error);
					default:
						throw new UnknownError(response.error);
				}
			}
			return response.success.schedule;
		},
	};
}
