import type Schema from "../__generated__/schema";
import type { WebhookVerificationFailureReason } from "./webhook";

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

/**
 * 요청된 입력 정보가 유효하지 않은 경우에 발생하는 에러입니다.
 */
export class InvalidRequestError extends PortOneError {
	readonly _tag = "PortOneInvalidRequestError";

	constructor(response: Schema.InvalidRequestError) {
		super(response.message ?? "입력 정보가 올바르지 않습니다.");
		Object.setPrototypeOf(this, InvalidRequestError.prototype);
		this.name = "InvalidRequestError";
	}
}

/**
 * SDK에 전달한 인증 정보가 올바르지 않은 경우에 발생하는 에러입니다.
 *
 * 에러가 발생하는 경우, 인증 정보가 유효한지 확인하시어
 * 문제를 수정해주시기 바랍니다.
 */
export class UnauthorizedError extends PortOneError {
	readonly _tag = "PortOneUnauthorizedError";

	constructor(response: Schema.UnauthorizedError) {
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

	constructor(response: Schema.ForbiddenError) {
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

	constructor(response: Schema.AlreadyPaidError) {
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

	constructor(response: Schema.CancelAmountExceedsCancellableAmountError) {
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
		response: Schema.CancelTaxAmountExceedsCancellableTaxAmountError,
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
		response: Schema.CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError,
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

	constructor(response: Schema.CancellableAmountConsistencyBrokenError) {
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

	constructor(response: Schema.PaymentAlreadyCancelledError) {
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

	constructor(response: Schema.PaymentNotFoundError) {
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

	constructor(response: Schema.PaymentNotPaidError) {
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

	constructor(response: Schema.PgProviderError) {
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

	constructor(response: Schema.SumOfPartsExceedsCancelAmountError) {
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

	constructor(response: Schema.BillingKeyAlreadyDeletedError) {
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

	constructor(response: Schema.BillingKeyNotFoundError) {
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

	constructor(response: Schema.ChannelNotFoundError) {
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

	constructor(response: Schema.SumOfPartsExceedsTotalAmountError) {
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

	constructor(response: Schema.PaymentNotWaitingForDepositError) {
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

	constructor(response: Schema.WebhookNotFoundError) {
		super(response.message ?? "웹훅 내역이 존재하지 않습니다.");
		Object.setPrototypeOf(this, WebhookNotFoundError.prototype);
		this.name = "WebhookNotFoundError";
	}
}

/**
 *
 */
export class BillingKeyNotIssuedError extends PortOneError {
	readonly _tag = "PortOneBillingKeyNotIssuedError";

	constructor(response: Schema.BillingKeyNotIssuedError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, BillingKeyNotIssuedError.prototype);
		this.name = "BillingKeyNotIssuedError";
	}
}

/**
 * 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우에 발생하는 에러입니다.
 */
export class ChannelSpecificError extends PortOneError {
	readonly _tag = "PortOneChannelSpecificError";
	readonly failures: Schema.ChannelSpecificFailure[];
	readonly succeededChannels: Schema.SelectedChannel[];

	constructor(response: Schema.ChannelSpecificError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, ChannelSpecificError.prototype);
		this.name = "ChannelSpecificError";
		this.failures = response.failures;
		this.succeededChannels = response.succeededChannels;
	}
}

/**
 * 결제 예약건이 이미 존재하는 경우에 발생하는 에러입니다.
 */
export class PaymentScheduleAlreadyExistsError extends PortOneError {
	readonly _tag = "PortOnePaymentScheduleAlreadyExistsError";

	constructor(response: Schema.PaymentScheduleAlreadyExistsError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, PaymentScheduleAlreadyExistsError.prototype);
		this.name = "PaymentScheduleAlreadyExistsError";
	}
}

/**
 * 부분 취소 시, 취소하게 될 경우 남은 금액이 프로모션의 최소 결제 금액보다 작아지는 경우에 발생하는 에러입니다.
 */
export class RemainedAmountLessThanPromotionMinPaymentAmountError extends PortOneError {
	readonly _tag = "PortOneRemainedAmountLessThanPromotionMinPaymentAmountError";

	constructor(
		response: Schema.RemainedAmountLessThanPromotionMinPaymentAmountError,
	) {
		super(response.message ?? "");
		Object.setPrototypeOf(
			this,
			RemainedAmountLessThanPromotionMinPaymentAmountError.prototype,
		);
		this.name = "RemainedAmountLessThanPromotionMinPaymentAmountError";
	}
}

/**
 * 프로모션 할인 금액이 결제 시도 금액 이상인 경우에 발생하는 에러입니다.
 */
export class DiscountAmountExceedsTotalAmountError extends PortOneError {
	readonly _tag = "PortOneDiscountAmountExceedsTotalAmountError";

	constructor(response: Schema.DiscountAmountExceedsTotalAmountError) {
		super(response.message ?? "");
		Object.setPrototypeOf(
			this,
			DiscountAmountExceedsTotalAmountError.prototype,
		);
		this.name = "DiscountAmountExceedsTotalAmountError";
	}
}

/**
 * 결제 예약건이 이미 처리된 경우에 발생하는 에러입니다.
 */
export class PaymentScheduleAlreadyProcessedError extends PortOneError {
	readonly _tag = "PortOnePaymentScheduleAlreadyProcessedError";

	constructor(response: Schema.PaymentScheduleAlreadyProcessedError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, PaymentScheduleAlreadyProcessedError.prototype);
		this.name = "PaymentScheduleAlreadyProcessedError";
	}
}

/**
 * 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우에 발생하는 에러입니다.
 */
export class PromotionPayMethodDoesNotMatchError extends PortOneError {
	readonly _tag = "PortOnePromotionPayMethodDoesNotMatchError";

	constructor(response: Schema.PromotionPayMethodDoesNotMatchError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, PromotionPayMethodDoesNotMatchError.prototype);
		this.name = "PromotionPayMethodDoesNotMatchError";
	}
}

/**
 * 결제 예약건이 이미 취소된 경우에 발생하는 에러입니다.
 */
export class PaymentScheduleAlreadyRevokedError extends PortOneError {
	readonly _tag = "PortOnePaymentScheduleAlreadyRevokedError";

	constructor(response: Schema.PaymentScheduleAlreadyRevokedError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, PaymentScheduleAlreadyRevokedError.prototype);
		this.name = "PaymentScheduleAlreadyRevokedError";
	}
}

/**
 * 결제 예약건이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class PaymentScheduleNotFoundError extends PortOneError {
	readonly _tag = "PortOnePaymentScheduleNotFoundError";

	constructor(response: Schema.PaymentScheduleNotFoundError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, PaymentScheduleNotFoundError.prototype);
		this.name = "PaymentScheduleNotFoundError";
	}
}

/**
 * 결제가 이미 완료되었거나 대기중인 경우에 발생하는 에러입니다.
 */
export class AlreadyPaidOrWaitingError extends PortOneError {
	readonly _tag = "PortOneAlreadyPaidOrWaitingError";

	constructor(response: Schema.AlreadyPaidOrWaitingError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, AlreadyPaidOrWaitingError.prototype);
		this.name = "AlreadyPaidOrWaitingError";
	}
}

/**
 * 본인인증 건이 이미 API로 요청된 상태인 경우에 발생하는 에러입니다.
 */
export class IdentityVerificationAlreadySentError extends PortOneError {
	readonly _tag = "PortOneIdentityVerificationAlreadySentError";

	constructor(response: Schema.IdentityVerificationAlreadySentError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, IdentityVerificationAlreadySentError.prototype);
		this.name = "IdentityVerificationAlreadySentError";
	}
}

/**
 * 본인인증 건이 이미 인증 완료된 상태인 경우에 발생하는 에러입니다.
 */
export class IdentityVerificationAlreadyVerifiedError extends PortOneError {
	readonly _tag = "PortOneIdentityVerificationAlreadyVerifiedError";

	constructor(response: Schema.IdentityVerificationAlreadyVerifiedError) {
		super(response.message ?? "");
		Object.setPrototypeOf(
			this,
			IdentityVerificationAlreadyVerifiedError.prototype,
		);
		this.name = "IdentityVerificationAlreadyVerifiedError";
	}
}

/**
 * 요청된 본인인증 건이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class IdentityVerificationNotFoundError extends PortOneError {
	readonly _tag = "PortOneIdentityVerificationNotFoundError";

	constructor(response: Schema.IdentityVerificationNotFoundError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, IdentityVerificationNotFoundError.prototype);
		this.name = "IdentityVerificationNotFoundError";
	}
}

/**
 * 본인인증 건이 API로 요청된 상태가 아닌 경우에 발생하는 에러입니다.
 */
export class IdentityVerificationNotSentError extends PortOneError {
	readonly _tag = "PortOneIdentityVerificationNotSentError";

	constructor(response: Schema.IdentityVerificationNotSentError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, IdentityVerificationNotSentError.prototype);
		this.name = "IdentityVerificationNotSentError";
	}
}

/**
 * 현금영수증이 발급되지 않은 경우에 발생하는 에러입니다.
 */
export class CashReceiptNotIssuedError extends PortOneError {
	readonly _tag = "PortOneCashReceiptNotIssuedError";

	constructor(response: Schema.CashReceiptNotIssuedError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, CashReceiptNotIssuedError.prototype);
		this.name = "CashReceiptNotIssuedError";
	}
}

/**
 * 현금영수증이 존재하지 않는 경우에 발생하는 에러입니다.
 */
export class CashReceiptNotFoundError extends PortOneError {
	readonly _tag = "PortOneCashReceiptNotFoundError";

	constructor(response: Schema.CashReceiptNotFoundError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, CashReceiptNotFoundError.prototype);
		this.name = "CashReceiptNotFoundError";
	}
}

/**
 * 현금영수증이 이미 발급된 경우에 발생하는 에러입니다.
 */
export class CashReceiptAlreadyIssuedError extends PortOneError {
	readonly _tag = "PortOneCashReceiptAlreadyIssuedError";

	constructor(response: Schema.CashReceiptAlreadyIssuedError) {
		super(response.message ?? "");
		Object.setPrototypeOf(this, CashReceiptAlreadyIssuedError.prototype);
		this.name = "CashReceiptAlreadyIssuedError";
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

/**
 * 웹훅 검증이 실패했을 때 발생하는 에러입니다.
 *
 * `reason` 필드를 통해 상세한 실패 원인을 확인할 수 있습니다.
 */
export class WebhookVerificationError extends PortOneError {
	readonly _tag = "WebhookVerificationError";

	/**
	 * 웹훅 검증이 실패한 상세 사유을 나타냅니다.
	 */
	readonly reason: WebhookVerificationFailureReason;

	/**
	 * 웹훅 검증 실패 사유로부터 에러 메시지를 생성합니다.
	 *
	 * @param reason 에러 메시지를 생성할 실패 사유
	 * @returns 에러 메시지
	 */
	static getMessage(reason: WebhookVerificationFailureReason): string {
		switch (reason) {
			case "MISSING_REQUIRED_HEADERS":
				return "필수 헤더가 누락되었습니다.";
			case "NO_MATCHING_SIGNATURE":
				return "올바른 웹훅 시그니처를 찾을 수 없습니다.";
			case "INVALID_SIGNATURE":
				return "웹훅 시그니처가 유효하지 않습니다.";
			case "TIMESTAMP_TOO_OLD":
				return "웹훅 시그니처의 타임스탬프가 만료 기한을 초과했습니다.";
			case "TIMESTAMP_TOO_NEW":
				return "웹훅 시그니처의 타임스탬프가 미래 시간으로 설정되어 있습니다.";
		}
	}

	constructor(
		reason: WebhookVerificationFailureReason,
		options?: ErrorOptions,
	) {
		super(WebhookVerificationError.getMessage(reason), options);
		Object.setPrototypeOf(this, WebhookVerificationError.prototype);
		this.name = "WebhookVerificationError";
		this.reason = reason;
	}
}
