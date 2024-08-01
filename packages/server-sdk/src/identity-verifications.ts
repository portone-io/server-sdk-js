import type { components } from "../__generated__/schema";
import type { ApiClient } from "./client";
import {
	ChannelNotFoundError,
	ForbiddenError,
	IdentityVerificationAlreadySentError,
	IdentityVerificationAlreadyVerifiedError,
	IdentityVerificationNotFoundError,
	IdentityVerificationNotSentError,
	InvalidRequestError,
	PgProviderError,
	UnauthorizedError,
	UnknownError,
} from "./error";
import type { Prettify } from "./utils/types";

export function IdentityVerificationApi(client: ReturnType<typeof ApiClient>) {
	return {
		/**
		 * 주어진 아이디에 대응되는 본인인증 내역을 조회합니다.
		 *
		 * @param identityVerificationId 조회할 본인인증 아이디
		 * @returns 본인 인증 객체 또는 `null`
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async getIdentityVerification(identityVerificationId: string) {
			const response = await client.send(
				"/identity-verifications/{identityVerificationId}",
				"get",
				{
					path: {
						identityVerificationId,
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
					case "IDENTITY_VERIFICATION_NOT_FOUND":
						return null;
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
		 * SMS 또는 APP 방식을 이용하여 본인인증 요청을 전송합니다.
		 *
		 * @param identityVerificationId 본인인증 아이디
		 * @param options 본인인증 요청을 전송하기 위한 추가 정보
		 * @throws {ChannelNotFoundError} 요청된 채널이 존재하지 않는 경우
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {IdentityVerificationAlreadySentError} 본인인증 건이 이미 API로 요청된 상태인 경우
		 * @throws {IdentityVerificationAlreadyVerifiedError} 본인인증 건이 이미 인증 완료된 상태인 경우
		 * @throws {IdentityVerificationNotFoundError} 요청된 본인인증 건이 존재하지 않는 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async sendIdentityVerification(
			identityVerificationId: string,
			options: Prettify<
				Omit<components["schemas"]["SendIdentityVerificationBody"], "storeId">
			>,
		) {
			const response = await client.send(
				"/identity-verifications/{identityVerificationId}/send",
				"post",
				{
					path: {
						identityVerificationId,
					},
					body: {
						storeId: client.storeId,
						...options,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "CHANNEL_NOT_FOUND":
						throw new ChannelNotFoundError(response.error);
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "IDENTITY_VERIFICATION_ALREADY_SENT":
						throw new IdentityVerificationAlreadySentError(response.error);
					case "IDENTITY_VERIFICATION_ALREADY_VERIFIED":
						throw new IdentityVerificationAlreadyVerifiedError(response.error);
					case "IDENTITY_VERIFICATION_NOT_FOUND":
						throw new IdentityVerificationNotFoundError(response.error);
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
		},

		/**
		 * 요청된 본인인증에 대한 확인을 진행합니다.
		 * @param identityVerificationId 본인인증 아이디
		 * @param otp OTP (One-Time Password) SMS 방식에서만 사용됩니다.
		 * @returns 완료된 본인인증 내역
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {IdentityVerificationAlreadyVerifiedError} 본인인증 건이 이미 인증 완료된 상태인 경우
		 * @throws {IdentityVerificationNotFoundError} 요청된 본인인증 건이 존재하지 않는 경우
		 * @throws {IdentityVerificationNotSentError} 본인인증 건이 API로 요청된 상태가 아닌 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async confirmIdentityVerification(
			identityVerificationId: string,
			otp?: string,
		) {
			const response = await client.send(
				"/identity-verifications/{identityVerificationId}/confirm",
				"post",
				{
					path: {
						identityVerificationId,
					},
					body: {
						storeId: client.storeId,
						otp,
					},
				},
			);
			if ("error" in response) {
				switch (response.error.type) {
					case "FORBIDDEN":
						throw new ForbiddenError(response.error);
					case "IDENTITY_VERIFICATION_ALREADY_VERIFIED":
						throw new IdentityVerificationAlreadyVerifiedError(response.error);
					case "IDENTITY_VERIFICATION_NOT_FOUND":
						throw new IdentityVerificationNotFoundError(response.error);
					case "IDENTITY_VERIFICATION_NOT_SENT":
						throw new IdentityVerificationNotSentError(response.error);
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
			return response.success.identityVerification;
		},

		/**
		 * SMS 본인인증 요청을 재전송합니다.
		 * @param identityVerificationId 본인인증 아이디
		 * @throws {ForbiddenError} 요청이 거절된 경우
		 * @throws {IdentityVerificationAlreadyVerifiedError} 본인인증 건이 이미 인증 완료된 상태인 경우
		 * @throws {IdentityVerificationNotFoundError} 요청된 본인인증 건이 존재하지 않는 경우
		 * @throws {IdentityVerificationNotSentError} 본인인증 건이 API로 요청된 상태가 아닌 경우
		 * @throws {InvalidRequestError} 요청된 입력 정보가 유효하지 않은 경우
		 * @throws {PgProviderError} PG사에서 오류를 전달한 경우
		 * @throws {UnauthorizedError} 인증 정보가 올바르지 않은 경우
		 */
		async resendIdentityVerification(identityVerificationId: string) {
			const response = await client.send(
				"/identity-verifications/{identityVerificationId}/resend",
				"post",
				{
					path: {
						identityVerificationId,
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
					case "IDENTITY_VERIFICATION_ALREADY_VERIFIED":
						throw new IdentityVerificationAlreadyVerifiedError(response.error);
					case "IDENTITY_VERIFICATION_NOT_FOUND":
						throw new IdentityVerificationNotFoundError(response.error);
					case "IDENTITY_VERIFICATION_NOT_SENT":
						throw new IdentityVerificationNotSentError(response.error);
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
		},
	};
}
