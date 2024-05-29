import { InvalidInputError, PortOneError, UnknownError } from "./error";
import { timingSafeEqual } from "./utils/timingSafeEqual";
import { tryCatch } from "./utils/try";

const WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60; // 5분

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

/**
 * 웹훅 검증 실패 사유입니다.
 *
 * `WebhookVerificationError.getMessage()`에 전달하여 에러 메시지를 얻을 수 있습니다.
 */
export type WebhookVerificationFailureReason =
	| "MISSING_REQUIRED_HEADERS"
	| "NO_MATCHING_SIGNATURE"
	| "INVALID_SIGNATURE"
	| "TIMESTAMP_TOO_OLD"
	| "TIMESTAMP_TOO_NEW";

/**
 * 웹훅 요청에 필수적으로 포함되는 헤더들입니다.
 */
export interface WebhookUnbrandedRequiredHeaders {
	"webhook-id": string;
	"webhook-timestamp": string;
	"webhook-signature": string;
}

/**
 * 웹훅 인스턴스에서 사용할 옵션입니다.
 */
export interface WebhookOptions {
	/**
	 * 웹훅 시크릿의 포맷입니다.
	 *
	 * - `"raw"`인 경우, `secret` 파라미터의 값을 그대로 사용합니다.
	 * - 지정하지 않을 경우, `secret` 파라미터의 값을 base64 문자열로 간주합니다.
	 */
	format?: "raw";
}

const prefix = "whsec_";

/**
 * 웹훅 페이로드를 검증합니다.
 *
 * @param secret 웹훅 시크릿
 * @param payload 웹훅 페이로드. Uint8Array를 전달할 시 UTF-8 데이터로 간주합니다.
 * @param headers 웹훅 요청 시 포함된 헤더
 * @returns 검증 후 디코딩된 웹훅 페이로드를 반환하는 Promise
 * @throws {InvalidInputError} 입력받은 웹훅 페이로드 또는 시크릿이 유효하지 않을 때 발생합니다.
 * @throws {WebhookVerificationError} 웹훅 검증에 실패했을 때 발생합니다.
 * @throws {UnknownError} 웹훅 검증 과정에서 알 수 없는 오류가 발생했을 때 발생합니다.
 */
export async function verify(
	secret: string | Uint8Array | { value: string; format: "raw" },
	payload: string | Uint8Array,
	headers: WebhookUnbrandedRequiredHeaders | Record<string, string>,
): Promise<unknown> {
	try {
		const mappedHeaders: Record<string, string> = Object.fromEntries(
			Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]),
		);

		const msgId = mappedHeaders["webhook-id"];
		const msgSignature = mappedHeaders["webhook-signature"];
		const msgTimestamp = mappedHeaders["webhook-timestamp"];

		if (!msgSignature || !msgId || !msgTimestamp) {
			throw new WebhookVerificationError("MISSING_REQUIRED_HEADERS");
		}

		const timestamp = verifyTimestamp(msgTimestamp);

		const decodedPayload = tryCatch(
			() => decodePayload(payload),
			() => {
				throw new InvalidInputError(
					"`payload` 파라미터의 타입이 잘못되었습니다.",
				);
			},
		);
		const computedSignature = await sign(
			secret,
			msgId,
			timestamp,
			decodedPayload,
		);
		const expectedSignature = computedSignature.split(",")[1];

		const passedSignatures = msgSignature.split(" ");

		const encoder = new TextEncoder();
		for (const versionedSignature of passedSignatures) {
			const [version, signature] = versionedSignature.split(",");
			if (version !== "v1") continue;

			if (
				timingSafeEqual(
					encoder.encode(signature),
					encoder.encode(expectedSignature),
				)
			) {
				return JSON.parse(decodedPayload);
			}
		}
		throw new WebhookVerificationError("NO_MATCHING_SIGNATURE");
	} catch (e) {
		if (e instanceof PortOneError) throw e;
		throw new UnknownError(e);
	}
}

/**
 * 웹훅 페이로드를 서명하여 웹훅 본문을 생성합니다.
 *
 * @param msgId 웹훅 본문에 지정할 고유 ID
 * @param timestamp 웹훅 생성 시도 시각
 * @param payload 웹훅 페이로드. Uint8Array를 전달할 시 UTF-8 데이터로 간주합니다.
 * @returns 서명된 웹훅 본문을 반환하는 Promise
 * @throws {InvalidInputError} 입력받은 웹훅 페이로드가 유효하지 않을 때 발생합니다.
 * @throws {UnknownError} 서명 과정에서 알 수 없는 오류가 일어났을 때 발생합니다.
 */
export async function sign(
	secret: string | Uint8Array | { value: string; format: "raw" },
	msgId: string,
	timestamp: Date,
	payload: string | Uint8Array,
): Promise<string> {
	try {
		const cryptoKey = await getCryptoKeyFromSecret(secret);
		const decodedPayload = decodePayload(payload);
		const encoder = new TextEncoder();
		const timestampNumber = Math.floor(timestamp.getTime() / 1000);
		const toSign = encoder.encode(
			`${msgId}.${timestampNumber}.${decodedPayload}`,
		);

		const signature = await crypto.subtle.sign("HMAC", cryptoKey, toSign);
		const signatureBase64 = btoa(
			String.fromCharCode(...new Uint8Array(signature)),
		);
		return `v1,${signatureBase64}`;
	} catch (e) {
		if (e instanceof PortOneError) throw e;
		throw new UnknownError(e);
	}
}

const secrets = new Map<string, CryptoKey>();

/**
 * 웹훅 시크릿 입력으로부터 CryptoKey를 가져옵니다.
 *
 * @throws {InvalidInputError} 입력받은 웹훅 시크릿이 유효하지 않을 때 발생합니다.
 */
async function getCryptoKeyFromSecret(
	secret: string | Uint8Array | { value: string; format: "raw" },
) {
	if (!secret) throw new InvalidInputError("시크릿은 비어 있을 수 없습니다.");

	let rawSecret: Uint8Array;
	if (secret instanceof Uint8Array) {
		rawSecret = secret;
	} else if (typeof secret === "string") {
		const secretBase64 = secret.startsWith(prefix)
			? secret.substring(prefix.length)
			: secret;
		const secretDecoded = atob(secretBase64);
		rawSecret = Uint8Array.from(secretDecoded, (c) => c.charCodeAt(0));
	} else if (secret.format === "raw") {
		rawSecret = Uint8Array.from(secret.value, (c) => c.charCodeAt(0));
	} else {
		throw new InvalidInputError("`secret` 파라미터의 타입이 잘못되었습니다.");
	}

	const decoder = new TextDecoder();
	const mapKey = decoder.decode(rawSecret);

	let cryptoKey = secrets.get(mapKey);
	if (cryptoKey) return cryptoKey;

	cryptoKey = await importKey(rawSecret);
	secrets.set(mapKey, cryptoKey);
	return cryptoKey;
}

/**
 * payload 파라미터를 디코딩합니다.
 *
 * @throws {InvalidInputError} 입력받은 웹훅 페이로드가 유효하지 않은 형식일 때 발생합니다.
 */
function decodePayload(payload: string | Uint8Array): string {
	if (typeof payload === "string") return payload;
	if (payload instanceof Uint8Array) return new TextDecoder().decode(payload);
	throw new InvalidInputError("`payload` 파라미터의 타입이 잘못되었습니다.");
}

/**
 * 웹훅의 타임스탬프 정보를 검증합니다.
 *
 * @throws {WebhookVerificationError} 타임스탬프가 유효하지 않을 때 발생합니다.
 */
function verifyTimestamp(timestampHeader: string): Date {
	const now = Math.floor(Date.now() / 1000);
	const timestamp = Number.parseInt(timestampHeader, 10);
	if (Number.isNaN(timestamp)) {
		throw new WebhookVerificationError("INVALID_SIGNATURE");
	}

	if (now - timestamp > WEBHOOK_TOLERANCE_IN_SECONDS) {
		throw new WebhookVerificationError("TIMESTAMP_TOO_OLD");
	}
	if (timestamp > now + WEBHOOK_TOLERANCE_IN_SECONDS) {
		throw new WebhookVerificationError("TIMESTAMP_TOO_NEW");
	}
	return new Date(timestamp * 1000);
}

/**
 * HMAC-SHA256 사이닝을 위해 키를 임포트합니다.
 *
 * @param raw Uint8Array 형식의 키
 * @returns HMAC-SHA256 사이닝을 위한 키를 반환하는 Promise
 * @throws {InvalidInputError} 입력받은 키가 유효하지 않을 때 발생합니다.
 */
async function importKey(raw: Uint8Array): Promise<CryptoKey> {
	try {
		const key = await crypto.subtle.importKey(
			"raw",
			raw,
			{ name: "HMAC", hash: "SHA-256" },
			false,
			["sign"],
		);
		return key;
	} catch (e) {
		if (e instanceof TypeError) {
			throw new InvalidInputError("시크릿이 올바른 형식의 값이 아닙니다.");
		}
		throw e;
	}
}
