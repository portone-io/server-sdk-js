import {
	AdditionalFeePolicyNotFoundError,
	BillingKeyNotFoundError,
	CashReceiptNotFoundError,
	ContractNotFoundError,
	DiscountSharePolicyNotFoundError,
	ExternalApiFailedError,
	ExternalApiTemporarilyFailedError,
	ForbiddenError,
	IdentityVerificationNotFoundError,
	InvalidInputError,
	NotSupportedBankError,
	PartnerNotFoundError,
	PaymentNotFoundError,
	PaymentScheduleNotFoundError,
	PlatformNotEnabledError,
	TransferNotFoundError,
	UnauthorizedError,
	UnknownError,
} from "./error";
import type { ApiRequest, ApiErrorResponse } from "./api";
import {
	createGetPaymentsRequest,
	createGetCashReceiptRequest,
	createGetPaymentRequest,
	type PaymentFilterInput,
} from "./payments";
import {
	createGetPaymentSchedulesRequest,
	createGetPaymentScheduleRequest,
	type PaymentScheduleFilterInput,
	type PaymentScheduleSortInput,
} from "./payment-schedules";
import { createGetBillingKeyRequest } from "./billing-keys";
import { createGetIdentityVerificationRequest } from "./identity-verifications";
import {
	createGetPartnersRequest,
	createGetPartnerRequest,
	type PartnerFilterInput,
} from "./platform/partners";
import {
	createGetTransferSummariesRequest,
	createGetTransferRequest,
	type TransferFilterInput,
} from "./platform/transfers";
import {
	createGetBankAccountHolderRequest,
	type Bank,
	type GetBankAccountHolderOptions,
} from "./platform/bank-accounts";
import { createGetKakaopayOrderRequest } from "./pg";
import {
	createGetAdditionalFeePoliciesRequest,
	createGetAdditionalFeePolicyRequest,
	createGetContractRequest,
	createGetContractsRequest,
	createGetDiscountSharePoliciesRequest,
	createGetDiscountSharePolicyRequest,
	type AdditionalFeePolicyFilterInput,
	type ContractFilterInput,
	type DiscountSharePolicyFilterInput,
} from "./platform";

export type ApiRequestClientInit = {
	apiBase?: string;
	storeId?: string;
};

export class PortOneApi {
	/**
	 * 포트원 REST API의 기본 주소입니다.
	 */
	readonly apiBase: string;
	private readonly authorization?: {
		tokenType: "PortOne" | "Bearer";
		token: string;
	};
	storeId?: string;

	/**
	 * 포트원 API 접속 정보를 사용해 요청 클라이언트를 생성합니다.
	 *
	 * @param apiBase 포트원 REST API의 기본 주소
	 */
	constructor(secret: string, init?: ApiRequestClientInit) {
		this.apiBase = init?.apiBase ?? "https://api.portone.io";
		this.storeId = init?.storeId;
		this.authorization = {
			tokenType: "PortOne",
			token: secret,
		};
	}

	async send<
		Response,
		Query extends Record<string, string>,
		Body extends Record<string, unknown>,
	>(request: ApiRequest<Response, Query, Body>) {
		const url = new URL(request.path, this.apiBase);
		const headers = new Headers();
		const init: RequestInit = {
			method: request.method,
			headers,
		};
		if (this.authorization) {
			const { tokenType, token } = this.authorization;
			headers.set("Authorization", `${tokenType} ${token}`);
		}
		switch (request.method) {
			case "get":
			case "delete":
				if (request.query && Object.keys(request.query).length !== 0) {
					for (const [key, value] of Object.entries(request.query)) {
						url.searchParams.set(key, value);
					}
				}
				if (request.body && Object.keys(request.body).length !== 0) {
					url.searchParams.set("requestBody", JSON.stringify(request.body));
				}
				break;
			case "post":
			case "patch":
				if (request.body && Object.keys(request.body).length !== 0) {
					init.body = JSON.stringify(request.body);
				}
				headers.set("Content-Type", "application/json");
				break;
		}
		const rawResponse = await fetch(url, init);
		const json: unknown = await rawResponse.json();
		if (rawResponse.ok) {
			return request.transform?.(json) ?? (json as Response);
		}
		const error = json as ApiErrorResponse;
		switch (error.type) {
			case "INVALID_REQUEST":
				throw new InvalidInputError(
					error.message ?? "요청된 입력 정보가 유효하지 않습니다.",
				);
			case "UNAUTHORIZED":
				throw new UnauthorizedError(error.message);
			case "FORBIDDEN":
				throw new ForbiddenError(error.message);
			case "PAYMENT_NOT_FOUND":
				throw new PaymentNotFoundError(error.message);
			case "PAYMENT_SCHEDULE_NOT_FOUND":
				throw new PaymentScheduleNotFoundError(error.message);
			case "BILLING_KEY_NOT_FOUND":
				throw new BillingKeyNotFoundError(error.message);
			case "CASH_RECEIPT_NOT_FOUND":
				throw new CashReceiptNotFoundError(error.message);
			case "IDENTITY_VERIFICATION_NOT_FOUND":
				throw new IdentityVerificationNotFoundError(error.message);
			case "PLATFORM_NOT_ENABLED":
				throw new PlatformNotEnabledError(error.message);
			case "PLATFORM_PARTNER_NOT_FOUND":
				throw new PartnerNotFoundError(error.message);
			case "PLATFORM_TRANSFER_NOT_FOUND":
				throw new TransferNotFoundError(error.message);
			case "PLATFORM_NOT_SUPPORTED_BANK":
				throw new NotSupportedBankError(error.message);
			case "PLATFORM_EXTERNAL_API_FAILED":
				throw new ExternalApiFailedError(error.message);
			case "PLATFORM_EXTERNAL_API_TEMPORARILY_FAILED":
				throw new ExternalApiTemporarilyFailedError(error.message);
			case "PLATFORM_DISCOUNT_SHARE_POLICY_NOT_FOUND":
				throw new DiscountSharePolicyNotFoundError(error.message);
			case "PLATFORM_ADDITIONAL_FEE_POLICY_NOT_FOUND":
				throw new AdditionalFeePolicyNotFoundError(error.message);
			case "PLATFORM_CONTRACT_NOT_FOUND":
				throw new ContractNotFoundError(error.message);
			default:
				throw new UnknownError(error);
		}
	}

	/**
	 * 주어진 아이디에 대응되는 결제 건을 조회합니다.
	 *
	 * @param paymentId 조회할 결제 아이디
	 * @param storeId 상점 ID
	 * @returns 결제 건 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {PaymentNotFoundError} 결제 건이 존재하지 않는 경우
	 */
	getPayment(paymentId: string) {
		return this.send(createGetPaymentRequest(paymentId, this.storeId));
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
	getPayments(
		pageNumber: number,
		pageSize: number,
		filter?: PaymentFilterInput,
	) {
		return this.send(createGetPaymentsRequest(pageNumber, pageSize, filter));
	}

	/**
	 * 주어진 아이디에 대응되는 결제 예약 건을 조회합니다.
	 *
	 * @param paymentScheduleId 조회할 결제 예약 건 아이디
	 * @returns 결제 예약 건 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {PaymentScheduleNotFoundError} 결제 예약건이 존재하지 않는 경우
	 */
	getPaymentSchedule(paymentScheduleId: string) {
		return this.send(
			createGetPaymentScheduleRequest(paymentScheduleId, this.storeId),
		);
	}

	/**
	 * 주어진 조건에 맞는 결제 예약 건들을 조회합니다.
	 *
	 * `filter.from`, `filter.until` 파라미터의 기본값이
	 * 결제 시점 기준 지난 90일에 속하는 건을 조회하도록 되어 있으니,
	 * 미래 예약 상태의 건을 조회하기 위해서는
	 * 해당 파라미터를 직접 설정해 주셔야 합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param options 결제 예약 건 다건 조회를 위한 입력 정보
	 * @returns 조회된 예약 결제 건 리스트
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	getPaymentSchedules(
		pageNumber: number,
		pageSize: number,
		options?: {
			/**
			 * 결제 예약 건 다건 조회 시 정렬 조건
			 */
			sort?: PaymentScheduleSortInput;
			/**
			 * 결제 예약 건 다건 조회를 위한 입력 정보
			 */
			filter?: PaymentScheduleFilterInput;
		},
	) {
		return this.send(
			createGetPaymentSchedulesRequest(
				pageNumber,
				pageSize,
				options?.sort,
				options?.filter,
			),
		);
	}

	/**
	 * 주어진 빌링키에 대응되는 빌링키 정보를 조회합니다.
	 *
	 * @param billingKey 조회할 빌링키
	 * @returns 빌링키 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {BillingKeyNotFoundError} 빌링키가 존재하지 않는 경우
	 */
	getBillingKey(billingKey: string) {
		return this.send(createGetBillingKeyRequest(billingKey, this.storeId));
	}

	/**
	 * 주어진 결제 아이디에 대응되는 현금 영수증 내역을 조회합니다.
	 *
	 * @param paymentId 결제 건 아이디
	 * @returns 현금 영수증 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {CashReceiptNotFoundError} 현금영수증이 존재하지 않는 경우
	 */
	getCashReceipt(paymentId: string) {
		return this.send(createGetCashReceiptRequest(paymentId, this.storeId));
	}

	/**
	 * 주어진 아이디에 대응되는 본인인증 내역을 조회합니다.
	 *
	 * @param identityVerificationId 조회할 본인인증 아이디
	 * @returns 본인 인증 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {IdentityVerificationNotFoundError} 요청된 본인인증 건이 존재하지 않는 경우
	 */
	getIdentityVerification(identityVerificationId: string) {
		return this.send(
			createGetIdentityVerificationRequest(identityVerificationId),
		);
	}

	/**
	 * 여러 할인 분담을 조회합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param filter 할인 분담 정책 다건 조회를 위한 필터 조건
	 * @returns 조회된 할인 분담 정책 리스트와 페이지 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	getDiscountSharePolicies(
		pageNumber: number,
		pageSize: number,
		filter: DiscountSharePolicyFilterInput,
	) {
		return this.send(
			createGetDiscountSharePoliciesRequest(pageNumber, pageSize, filter),
		);
	}

	/**
	 * 주어진 아이디에 대응되는 할인 분담을 조회합니다.
	 *
	 * @param id 조회할 할인 분담 정책 아이디
	 * @returns 할인 분담 정책
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {DiscountSharePolicyNotFoundError} 할인 분담 정책이 존재하지 않는 경우
	 */
	getDiscountSharePolicy(id: string) {
		return this.send(createGetDiscountSharePolicyRequest(id));
	}

	/**
	 * 여러 추가 수수료 정책을 조회합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param filter 추가 수수료 정책 다건 조회를 위한 필터 조건추가 수수료 정책 다건 조회를 위한 필터 조건
	 * @returns 조회된 추가 수수료 정책 리스트와 페이지 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	getAdditionalFeePolicies(
		pageNumber: number,
		pageSize: number,
		filter?: AdditionalFeePolicyFilterInput,
	) {
		return this.send(
			createGetAdditionalFeePoliciesRequest(pageNumber, pageSize, filter),
		);
	}

	/**
	 * 주어진 아이디에 대응되는 추가 수수료 정책을 조회합니다.
	 *
	 * @param id 조회할 추가 수수료 정책 아이디
	 * @returns 추가 수수료 정책
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {AdditionalFeePolicyNotFoundError} 추가 수수료 정책이 존재하지 않는 경우
	 */
	getAdditionalFeePolicy(id: string) {
		return this.send(createGetAdditionalFeePolicyRequest(id));
	}

	/**
	 * 여러 계약을 조회합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param filter 계약 다건 조회를 위한 필터 조건
	 * @returns 조회된 계약 리스트와 페이지 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	getContracts(
		pageNumber: number,
		pageSize: number,
		filter?: ContractFilterInput,
	) {
		return this.send(createGetContractsRequest(pageNumber, pageSize, filter));
	}

	/**
	 * 주어진 아이디에 대응되는 계약을 조회합니다.
	 *
	 * @param id 조회할 계약 아이디
	 * @returns 계약 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {ContractNotFoundError} 계약이 존재하지 않는 경우
	 */
	getContract(id: string) {
		return this.send(createGetContractRequest(id));
	}

	/**
	 * 여러 파트너를 조회합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param filter 파트너 필터 입력 정보
	 * @returns 조회된 파트너 리스트와 페이지 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	getPartners(
		pageNumber: number,
		pageSize: number,
		filter?: PartnerFilterInput,
	) {
		return this.send(createGetPartnersRequest(pageNumber, pageSize, filter));
	}

	/**
	 * 파트너 객체를 조회합니다.
	 *
	 * @param id 조회하고 싶은 파트너 아이디
	 * @returns 파트너 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {PartnerNotFoundError} 파트너가 존재하지 않는 경우
	 */
	getPartner(id: string) {
		return this.send(createGetPartnerRequest(id));
	}

	/**
	 * 정산건을 조회합니다.
	 *
	 * @param id 조회하고 싶은 정산건 아이디
	 * @returns 정산건 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {TransferNotFoundError} 정산건이 존재하지 않는 경우
	 */
	getTransfer(id: string) {
		return this.send(createGetTransferRequest(id));
	}

	/**
	 * 여러 정산건을 조회합니다.
	 *
	 * @param pageNumber 0부터 시작하는 페이지 번호
	 * @param pageSize 각 페이지 당 포함할 객체 수
	 * @param filter 정산건 필터 입력 정보
	 * @returns 정산건 요약 리스트와 페이지 정보
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 */
	getTransferSummaries(
		pageNumber: number,
		pageSize: number,
		filter?: TransferFilterInput,
	) {
		return this.send(
			createGetTransferSummariesRequest(pageNumber, pageSize, filter),
		);
	}

	/**
	 * 계좌의 예금주를 조회합니다.
	 *
	 * @param bank 은행
	 * @param accountNumber '-'를 제외한 계좌 번호
	 * @param options 실명 조회를 위한 추가 옵션
	 * @returns 조회된 예금주 명
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {NotSupportedBankError} 지원하지 않는 은행인 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 * @throws {PlatformNotEnabledError} 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
	 * @throws {ForbiddenError} 요청이 거절된 경우
	 * @throws {ExternalApiTemporarilyFailedError} 외부 api의 일시적인 오류
	 * @throws {ExternalApiFailedError} 외부 api 오류
	 */
	getBankAccountHolder(
		bank: Bank,
		accountNumber: string,
		options?: GetBankAccountHolderOptions,
	) {
		return this.send(
			createGetBankAccountHolderRequest(bank, accountNumber, options),
		);
	}

	/**
	 * 주어진 아이디에 대응되는 카카오페이 주문 건을 조회합니다.
	 *
	 * 해당 API 사용이 필요한 경우 포트원 기술지원팀으로 문의 주시길 바랍니다.
	 *
	 * @param pgTxId 카카오페이 주문 번호 (tid)
	 * @param channelKey 채널 키
	 * @returns 카카오페이 주문 조회 응답 객체
	 * @throws {InvalidInputError} 요청된 입력 정보가 유효하지 않은 경우
	 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
	 */
	getKakaopayOrder(pgTxId: string, channelKey: string) {
		return this.send(createGetKakaopayOrderRequest(pgTxId, channelKey));
	}
}
