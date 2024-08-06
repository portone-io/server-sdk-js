import type {
	BillingKeyFilterInput,
	BillingKeySortInput,
	InstantBillingKeyPaymentMethodInput,
	IssueBillingKeyBody,
} from "../__generated__/schema";
import type { ApiClient } from "./client";
import {
	BillingKeyAlreadyDeletedError,
	BillingKeyNotFoundError,
	BillingKeyNotIssuedError,
	ChannelNotFoundError,
	ChannelSpecificError,
	ForbiddenError,
	InvalidRequestError,
	PaymentScheduleAlreadyExistsError,
	PgProviderError,
	UnauthorizedError,
	UnknownError,
} from "./errors";

export function BillingKeyApi(client: ReturnType<typeof ApiClient>) {
	return {
		/**
		 * 주어진 빌링키에 대응되는 빌링키 정보를 조회합니다.
		 *
		 * @param billingKey 조회할 빌링키
		 * @returns 빌링키 정보 또는 `null`
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async getBillingKey(billingKey: string) {
			const response = await client.send("/billing-keys/{billingKey}", "get", {
				path: {
					billingKey,
				},
				query: {
					storeId: client.storeId,
				},
			});
			if ("error" in response) {
				switch (response.error.type) {
					case "BILLING_KEY_NOT_FOUND":
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
		 * 빌링키를 삭제합니다.
		 *
		 * @param billingKey 삭제할 빌링키
		 * @returns 삭제한 빌링키에 대한 정보
		 * @throws {BillingKeyAlreadyDeletedError} 빌링키가 이미 삭제된 경우
		 * @throws {BillingKeyNotFoundError} 빌링키가 존재하지 않는 경우
		 * @throws {BillingKeyNotIssuedError}
		 * @throws {ChannelSpecificError} 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PaymentScheduleAlreadyExistsError} 결제 예약건이 이미 존재하는 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async deleteBillingKey(billingKey: string) {
			const response = await client.send(
				"/billing-keys/{billingKey}",
				"delete",
				{
					path: {
						billingKey,
					},
					query: {
						storeId: client.storeId,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "BILLING_KEY_ALREADY_DELETED":
						throw new BillingKeyAlreadyDeletedError(response.error);
					case "BILLING_KEY_NOT_FOUND":
						throw new BillingKeyNotFoundError(response.error);
					case "BILLING_KEY_NOT_ISSUED":
						throw new BillingKeyNotIssuedError(response.error);
					case "CHANNEL_SPECIFIC":
						throw new ChannelSpecificError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "INVALID_REQUEST":
						throw new InvalidRequestError(response.error);
					case "PAYMENT_SCHEDULE_ALREADY_EXISTS":
						throw new PaymentScheduleAlreadyExistsError(response.error);
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
		 * 주어진 조건에 맞는 빌링키들을 페이지 기반으로 조회합니다.
		 *
		 * @param pageNumber 0부터 시작하는 페이지 번호
		 * @param pageSize 각 페이지 당 포함할 객체 수
		 * @param options 빌링키 다건 조회를 위한 추가 정보
		 * @returns 조회된 빌링키 리스트
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async getBillingKeys(
			pageNumber: number,
			pageSize: number,
			options?: {
				/**
				 * 빌링키 다건 조회 시 정렬 조건
				 */
				sort?: BillingKeySortInput;
				/**
				 * 빌링키 다건 조회를 위한 입력 정보
				 */
				filter?: Omit<BillingKeyFilterInput, "storeId">;
			},
		) {
			const response = await client.send("/billing-keys", "get", {
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
		 * 빌링키 발급을 요청합니다.
		 *
		 * @param method 빌링키 발급 시 결제 수단 입력 양식
		 * @param options 빌링키 발급을 위한 추가 정보
		 * @returns 빌링키 발급 정보
		 * @throws {ChannelNotFoundError} 요청된 채널이 존재하지 않는 경우
		 * @throws {ChannelSpecificError} 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws  {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async issueBillingKey(
			method: InstantBillingKeyPaymentMethodInput,
			options?: Omit<IssueBillingKeyBody, "storeId" | "method">,
		) {
			const response = await client.send("/billing-keys", "post", {
				body: {
					storeId: client.storeId,
					method,
					...options,
				},
			});
			if ("error" in response) {
				switch (response.error.type) {
					case "CHANNEL_NOT_FOUND":
						throw new ChannelNotFoundError(response.error);
					case "CHANNEL_SPECIFIC":
						throw new ChannelSpecificError(response.error);
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
