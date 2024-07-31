import type { components } from "./schema";

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
 * SDK에 전달한 사용자 입력이 잘못되었을 경우에 발생하는 에러입니다.
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

export function InvalidRequestError(
	response: components["schemas"]["InvalidRequestError"],
) {
	return new InvalidInputError(
		response.message ?? "사용자 입력이 잘못되었습니다.",
	);
}

/**
 * SDK에 전달한 인증 정보가 올바르지 않은 경우에 발생하는 에러입니다.
 *
 * 에러가 발생하는 경우, 인증 정보가 유효한지 확인하시어
 * 문제를 수정해주시기 바랍니다.
 */
export class UnauthorizedError extends PortOneError {
	readonly _tag = "PortOneUnauthorizedError";

	constructor(response: components["schemas"]["UnauthorizedError"]) {
		super(response.message ?? "인증 정보가 유효하지 않습니다.");
		Object.setPrototypeOf(this, UnauthorizedError.prototype);
		this.name = "UnauthorizedError";
	}
}

/**
 * 요청이 거절된 경우에 발생하는 에러입니다.
 */
export class ForbiddenError extends PortOneError {
	readonly _tag = "PortOneForbiddenError";

	constructor(response: components["schemas"]["ForbiddenError"]) {
		super(response.message ?? "서버로부터 요청이 거절되었습니다.");
		Object.setPrototypeOf(this, ForbiddenError.prototype);
		this.name = "ForbiddenError";
	}
}

/**
 * 이미 결제가 완료된 건에 대하여 사전 등록을 시도할 경우에 발생하는 에러입니다.
 */
export class AlreadyPaidError extends PortOneError {
	readonly _tag = "PortOneAlreadyPaidError";

	constructor(response: components["schemas"]["AlreadyPaidError"]) {
		super(response.message ?? "이미 결제가 완료되었습니다.");
		Object.setPrototypeOf(this, AlreadyPaidError.prototype);
		this.name = "AlreadyPaidError";
	}
}

/**
 * 결제 취소 금액이 취소 가능 금액을 초과한 경우에 발생하는 에러입니다.
 */
export class CancelAmountExceedsCancellableAmountError extends PortOneError {
	readonly _tag = "PortOneCancelAmountExceedsCancellableAmountError";

	constructor(
		response: components["schemas"]["CancelAmountExceedsCancellableAmountError"],
	) {
		super(
			response.message ?? "결제 취소 금액이 취소 가능 금액을 초과했습니다.",
		);
		Object.setPrototypeOf(
			this,
			CancelAmountExceedsCancellableAmountError.prototype,
		);
		this.name = "CancelAmountExceedsCancellableAmountError";
	}
}

/**
 * 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우에 발생하는 에러입니다.
 */
export class CancelTaxAmountExceedsCancellableTaxAmountError extends PortOneError {
	readonly _tag = "PortOneCancelTaxAmountExceedsCancellableTaxAmountError";

	constructor(
		response: components["schemas"]["CancelTaxAmountExceedsCancellableTaxAmountError"],
	) {
		super(
			response.message ??
				"취소 과세 금액이 취소 가능한 과세 금액을 초과했습니다.",
		);
		Object.setPrototypeOf(
			this,
			CancelTaxAmountExceedsCancellableTaxAmountError.prototype,
		);
		this.name = "CancelTaxAmountExceedsCancellableTaxAmountError";
	}
}

/**
 * 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우에 발생하는 에러입니다.
 */
export class CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError extends PortOneError {
	readonly _tag =
		"PortOneCancelTaxFreeAmountExceedsCancellableTaxFreeAmountError";

	constructor(
		response: components["schemas"]["CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError"],
	) {
		super(
			response.message ??
				"취소 면세 금액이 취소 가능한 면세 금액을 초과했습니다.",
		);
		Object.setPrototypeOf(
			this,
			CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError.prototype,
		);
		this.name = "CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError";
	}
}

/**
 * 취소 가능 잔액 검증에 실패한 경우에 발생하는 에러입니다.
 */
export class CancellableAmountConsistencyBrokenError extends PortOneError {
	readonly _tag = "PortOneCancellableAmountConsistencyBrokenError";

	constructor(
		response: components["schemas"]["CancellableAmountConsistencyBrokenError"],
	) {
		super(response.message ?? "취소 가능 잔액 검증에 실패했습니다.");
		Object.setPrototypeOf(
			this,
			CancellableAmountConsistencyBrokenError.prototype,
		);
		this.name = "CancellableAmountConsistencyBrokenError";
	}
}

/**
 * 결제가 이미 취소된 경우에 발생하는 에러입니다.
 */
export class PaymentAlreadyCancelledError extends PortOneError {
	readonly _tag = "PortOnePaymentAlreadyCancelledError";

	constructor(response: components["schemas"]["PaymentAlreadyCancelledError"]) {
		super(response.message ?? "결제가 이미 취소되었습니다.");
		Object.setPrototypeOf(this, PaymentAlreadyCancelledError.prototype);
		this.name = "PaymentAlreadyCancelledError";
	}
}

/**
 * 결제 건이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class PaymentNotFoundError extends PortOneError {
	readonly _tag = "PortOnePaymentNotFoundError";

	constructor(response: components["schemas"]["PaymentNotFoundError"]) {
		super(response.message ?? "결제 건이 존재하지 않습니다.");
		Object.setPrototypeOf(this, PaymentNotFoundError.prototype);
		this.name = "PaymentNotFoundError";
	}
}

/**
 * 결제가 완료되지 않은 경우에 발생하는 에러입니다.
 */
export class PaymentNotPaidError extends PortOneError {
	readonly _tag = "PortOnePaymentNotPaidError";

	constructor(response: components["schemas"]["PaymentNotPaidError"]) {
		super(response.message ?? "결제가 완료되지 않았습니다.");
		Object.setPrototypeOf(this, PaymentNotPaidError.prototype);
		this.name = "PaymentNotPaidError";
	}
}

/**
 * PG사에서 오류를 전달한 경우에 발생하는 에러입니다.
 */
export class PgProviderError extends PortOneError {
	readonly _tag = "PortOnePgProviderError";

	readonly pgCode: string;
	readonly pgMessage: string;

	constructor(response: components["schemas"]["PgProviderError"]) {
		super(response.message ?? "PG사에서 오류를 전달했습니다.");
		Object.setPrototypeOf(this, PgProviderError.prototype);
		this.name = "PgProviderError";
		this.pgCode = response.pgCode;
		this.pgMessage = response.pgMessage;
	}
}

/**
 * 면세 금액 등 하위 항목들의 합이 전체 취소 금액을 초과한 경우에 발생하는 에러입니다.
 */
export class SumOfPartsExceedsCancelAmountError extends PortOneError {
	readonly _tag = "PortOneSumOfPartsExceedsCancelAmountError";

	constructor(
		response: components["schemas"]["SumOfPartsExceedsCancelAmountError"],
	) {
		super(
			response.message ?? "하위 항목들의 합이 전체 취소 금액을 초과했습니다.",
		);
		Object.setPrototypeOf(this, SumOfPartsExceedsCancelAmountError.prototype);
		this.name = "SumOfPartsExceedsCancelAmountError";
	}
}

/**
 * 빌링키가 이미 삭제된 경우에 발생하는 에러입니다.
 */
export class BillingKeyAlreadyDeletedError extends PortOneError {
	readonly _tag = "PortOneBillingKeyAlreadyDeletedError";

	constructor(
		response: components["schemas"]["BillingKeyAlreadyDeletedError"],
	) {
		super(response.message ?? "빌링키가 이미 삭제되었습니다.");
		Object.setPrototypeOf(this, BillingKeyAlreadyDeletedError.prototype);
		this.name = "BillingKeyAlreadyDeletedError";
	}
}

/**
 * 빌링키가 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class BillingKeyNotFoundError extends PortOneError {
	readonly _tag = "PortOneBillingKeyNotFoundError";

	constructor(response: components["schemas"]["BillingKeyNotFoundError"]) {
		super(response.message ?? "빌링키가 존재하지 않습니다.");
		Object.setPrototypeOf(this, BillingKeyNotFoundError.prototype);
		this.name = "BillingKeyNotFoundError";
	}
}

/**
 * 요청된 채널이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class ChannelNotFoundError extends PortOneError {
	readonly _tag = "PortOneChannelNotFoundError";

	constructor(response: components["schemas"]["ChannelNotFoundError"]) {
		super(response.message ?? "요청된 채널이 존재하지 않습니다.");
		Object.setPrototypeOf(this, ChannelNotFoundError.prototype);
		this.name = "ChannelNotFoundError";
	}
}

/**
 * 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우에 발생하는 에러입니다.
 */
export class SumOfPartsExceedsTotalAmountError extends PortOneError {
	readonly _tag = "PortOneSumOfPartsExceedsTotalAmountError";

	constructor(
		response: components["schemas"]["SumOfPartsExceedsTotalAmountError"],
	) {
		super(
			response.message ?? "하위 항목들의 합이 전체 결제 금액을 초과했습니다.",
		);
		Object.setPrototypeOf(this, SumOfPartsExceedsTotalAmountError.prototype);
		this.name = "SumOfPartsExceedsTotalAmountError";
	}
}

/**
 * 결제 건이 입금 대기 상태가 아닌 경우에 발생하는 에러입니다.
 */
export class PaymentNotWaitingForDepositError extends PortOneError {
	readonly _tag = "PortOnePaymentNotWaitingForDepositError";

	constructor(
		response: components["schemas"]["PaymentNotWaitingForDepositError"],
	) {
		super(response.message ?? "결제 건이 입금 대기 상태가 아닙니다.");
		Object.setPrototypeOf(this, PaymentNotWaitingForDepositError.prototype);
		this.name = "PaymentNotWaitingForDepositError";
	}
}

/**
 * 웹훅 내역이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class WebhookNotFoundError extends PortOneError {
	readonly _tag = "PortOneWebhookNotFoundError";

	constructor(response: components["schemas"]["WebhookNotFoundError"]) {
		super(response.message ?? "웹훅 내역이 존재하지 않습니다.");
		Object.setPrototypeOf(this, WebhookNotFoundError.prototype);
		this.name = "WebhookNotFoundError";
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
	readonly type: string;

	constructor(cause: never) {
		const response = cause as {
			type: string;
			message?: string;
		};
		super(response.message ?? "알 수 없는 에러가 발생했습니다.", { cause });
		Object.setPrototypeOf(this, UnknownError.prototype);
		this.name = "UnknownError";
		this.type = response.type;
	}
}
