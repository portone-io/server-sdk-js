/**
 * 포트원 SDK에서 발생하는 모든 에러의 기반 타입입니다.
 *
 * PortOneError를 상속하는 모든 에러는 `_tag` 필드를 가지며,
 * 해당 필드의 값을 통해 손쉽게 타입 검사를 수행할 수 있습니다.
 */
export abstract class PortOneError extends Error {
	/**
	 * 에러 타입을 구분하기 위한 필드입니다.
	 *
	 * Effect 등의 라이브러리를 사용하실 때, 해당 필드를 통해 각 타입에 대한 에러를 구분하여 처리하실 수 있습니다.
	 */
	abstract readonly _tag: string;

	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
		Object.setPrototypeOf(this, PortOneError.prototype);
		this.name = "PortOneError";
		this.stack = new Error(message).stack;
	}
}

/**
 * SDK에 전달한 사용자 입력이 잘못되었을 때 발생하는 에러입니다.
 *
 * 해당 에러는 대부분 사용자의 실수로 발생합니다.
 * 에러가 발생하는 경우, 에러가 발생한 함수의 문서를 참고하여
 * 문제를 수정해주시기 바랍니다.
 */
export class InvalidInputError extends PortOneError {
	readonly _tag = "PortOneInvalidInputError";

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, InvalidInputError.prototype);
		this.name = "InvalidInputError";
	}
}

/**
 * SDK에 전달한 인증 정보가 잘못되었을 때 발생하는 에러입니다.
 *
 * 에러가 발생하는 경우, 인증 정보가 유효한지 확인하시어
 * 문제를 수정해주시기 바랍니다.
 */
export class UnauthorizedError extends PortOneError {
	readonly _tag = "PortOneUnauthorizedError";

	constructor(message?: string) {
		super(message ?? "인증 정보가 유효하지 않습니다.");
		Object.setPrototypeOf(this, UnauthorizedError.prototype);
		this.name = "UnauthorizedError";
	}
}

/**
 * 서버로부터 요청이 거절되었을 때 발생하는 에러입니다.
 */
export class ForbiddenError extends PortOneError {
	readonly _tag = "PortOneForbiddenError";

	constructor(message?: string) {
		super(message ?? "서버로부터 요청이 거절되었습니다.");
		Object.setPrototypeOf(this, ForbiddenError.prototype);
		this.name = "ForbiddenError";
	}
}

/**
 * 조회를 요청한 결제 건이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class PaymentNotFoundError extends PortOneError {
	readonly _tag = "PortOnePaymentNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 결제 건이 존재하지 않습니다.");
		Object.setPrototypeOf(this, PaymentNotFoundError.prototype);
		this.name = "PaymentNotFoundError";
	}
}

/**
 * 조회를 요청한 결제 예약 건이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class PaymentScheduleNotFoundError extends PortOneError {
	readonly _tag = "PortOnePaymentScheduleNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 결제 예약 건이 존재하지 않습니다.");
		Object.setPrototypeOf(this, PaymentScheduleNotFoundError.prototype);
		this.name = "PaymentScheduleNotFoundError";
	}
}

/**
 * 조회를 요청한 빌링키가 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class BillingKeyNotFoundError extends PortOneError {
	readonly _tag = "PortOneBillingKeyNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 빌링키가 존재하지 않습니다.");
		Object.setPrototypeOf(this, BillingKeyNotFoundError.prototype);
		this.name = "BillingKeyNotFoundError";
	}
}

/**
 * 조회를 요청한 현금 영수증이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class CashReceiptNotFoundError extends PortOneError {
	readonly _tag = "PortOneCashReceiptNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 현금 영수증이 존재하지 않습니다.");
		Object.setPrototypeOf(this, CashReceiptNotFoundError.prototype);
		this.name = "CashReceiptNotFoundError";
	}
}

/**
 * 조회를 요청한 본인인증 내역이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class IdentityVerificationNotFoundError extends PortOneError {
	readonly _tag = "PortOneIdentityVerificationNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 본인인증 내역이 존재하지 않습니다.");
		Object.setPrototypeOf(this, IdentityVerificationNotFoundError.prototype);
		this.name = "IdentityVerificationNotFoundError";
	}
}

/**
 * 플랫폼 기능이 활성화되지 않은 상태에서 플랫폼 기능을 사용하려고 할 경우에 발생하는 에러입니다.
 */
export class PlatformNotEnabledError extends PortOneError {
	readonly _tag = "PortOnePlatformNotEnabledError";

	constructor(message?: string) {
		super(message ?? "플랫폼 기능이 활성화되지 않았습니다.");
		Object.setPrototypeOf(this, PlatformNotEnabledError.prototype);
		this.name = "PlatformNotEnabledError";
	}
}

/**
 * 조회를 요청한 파트너가 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class PartnerNotFoundError extends PortOneError {
	readonly _tag = "PortOnePartnerNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 파트너가 존재하지 않습니다.");
		Object.setPrototypeOf(this, PartnerNotFoundError.prototype);
		this.name = "PartnerNotFoundError";
	}
}

/**
 * 조회를 요청한 정산건이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class TransferNotFoundError extends PortOneError {
	readonly _tag = "PortOneTransferNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 정산건이 존재하지 않습니다.");
		Object.setPrototypeOf(this, TransferNotFoundError.prototype);
		this.name = "TransferNotFoundError";
	}
}

/**
 * 해당 요청을 지원하지 않는 은행인 경우에 발생하는 에러입니다.
 */
export class NotSupportedBankError extends PortOneError {
	readonly _tag = "PortOneNotSupportedBankError";

	constructor(message?: string) {
		super(message ?? "해당 요청을 지원하지 않는 은행입니다.");
		Object.setPrototypeOf(this, NotSupportedBankError.prototype);
		this.name = "NotSupportedBankError";
	}
}

/**
 * 외부 API에서 일시적인 오류가 발생했을 경우에 발생하는 에러입니다.
 */
export class ExternalApiTemporarilyFailedError extends PortOneError {
	readonly _tag = "PortOneExternalApiTemporarilyFailedError";

	constructor(message?: string) {
		super(message ?? "외부 API에서 일시적인 오류가 발생했습니다.");
		Object.setPrototypeOf(this, ExternalApiTemporarilyFailedError.prototype);
		this.name = "ExternalApiTemporarilyFailedError";
	}
}

/**
 * 외부 API에서 오류가 발생했을 경우에 발생하는 에러입니다.
 */
export class ExternalApiFailedError extends PortOneError {
	readonly _tag = "PortOneExternalApiFailedError";

	constructor(message?: string) {
		super(message ?? "외부 API에서 오류가 발생했습니다.");
		Object.setPrototypeOf(this, ExternalApiFailedError.prototype);
		this.name = "ExternalApiFailedError";
	}
}

/**
 * 조회를 요청한 할인 분담 정책이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class DiscountSharePolicyNotFoundError extends PortOneError {
	readonly _tag = "PortOneDiscountSharePolicyNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 할인 분담 정책이 존재하지 않습니다.");
		Object.setPrototypeOf(this, DiscountSharePolicyNotFoundError.prototype);
		this.name = "DiscountSharePolicyNotFoundError";
	}
}

/**
 * 조회를 요청한 추가 수수료 정책이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class AdditionalFeePolicyNotFoundError extends PortOneError {
	readonly _tag = "PortOneAdditionalFeePolicyNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 추가 수수료 정책이 존재하지 않습니다.");
		Object.setPrototypeOf(this, AdditionalFeePolicyNotFoundError.prototype);
		this.name = "AdditionalFeePolicyNotFoundError";
	}
}

/**
 * 조회를 요청한 계약이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class ContractNotFoundError extends PortOneError {
	readonly _tag = "PortOneContractNotFoundError";

	constructor(message?: string) {
		super(message ?? "해당 계약이 존재하지 않습니다.");
		Object.setPrototypeOf(this, ContractNotFoundError.prototype);
		this.name = "ContractNotFoundError";
	}
}

/**
 * SDK 내에서 알 수 없는 오류가 일어났을 때 발생하는 에러입니다.
 *
 * 해당 에러는 주로 포트원 SDK 혹은 서버 내부 오류로 인해 발생합니다.
 * 에러가 발생하는 경우, 포트원 고객센터에 문의하시기 바랍니다.
 *
 * `cause` 필드에 담긴 에러를 통해 오류가 발생한 원인을 확인할 수 있습니다.
 */
export class UnknownError extends PortOneError {
	readonly _tag = "PortOneUnknownError";

	constructor(cause: unknown, options?: Omit<ErrorOptions, "cause">) {
		super("알 수 없는 에러가 발생했습니다.", { ...options, cause });
		Object.setPrototypeOf(this, UnknownError.prototype);
		this.name = "UnknownError";
	}
}
