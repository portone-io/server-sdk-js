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
