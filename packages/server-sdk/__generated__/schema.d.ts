export type Paths = {
	"/login/api-secret": {
		/**
		 * API secret 를 사용한 토큰 발급
		 *
		 * API secret 를 통해 API 인증에 사용할 토큰을 가져옵니다.
		 */
		post: {
			parameters: {
				body: LoginViaApiSecretBody;
			};
			/**
			 * 성공 응답으로 토큰을 반환합니다.
			 */
			success: LoginViaApiSecretResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 */
			error: LoginViaApiSecretError;
		};
	};
	"/token/refresh": {
		/**
		 * 토큰 갱신
		 *
		 * 리프레시 토큰을 사용해 유효기간이 연장된 새로운 토큰을 재발급합니다.
		 */
		post: {
			parameters: {
				body: RefreshTokenBody;
			};
			/**
			 */
			success: RefreshTokenResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 */
			error: RefreshTokenError;
		};
	};
	"/platform": {
		/**
		 *
		 * 고객사의 플랫폼 정보를 조회합니다. 요청된 Authorization header 를 통해 자동으로 요청자의 고객사를 특정합니다.
		 */
		get: {
			parameters: Record<string, never>;
			/**
			 * 성공 응답으로 플랫폼 객체를 반환합니다.
			 */
			success: Platform;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 */
			error: GetPlatformError;
		};
		/**
		 *
		 * 고객사의 플랫폼 관련 정보를 업데이트합니다. 요청된 Authorization header 를 통해 자동으로 요청자의 고객사를 특정합니다.
		 */
		patch: {
			parameters: {
				body: UpdatePlatformBody;
			};
			/**
			 * 성공 응답
			 */
			success: UpdatePlatformResponse;
			/**
			 * *   `PlatformInvalidSettlementFormulaError`
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: UpdatePlatformError;
		};
	};
	"/platform/discount-share-policy-filter-options": {
		/**
		 *
		 * 할인 분담 정책 다건 조회 시 필요한 필터 옵션을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 보관 조회 여부
					 *
					 * true 이면 보관된 할인 분담의 필터 옵션을 조회하고, false 이면 보관되지 않은 할인 분담의 필터 옵션을 조회합니다. 기본값은 false 입니다.
					 */
					isArchived?: boolean;
				};
			};
			/**
			 * 성공 응답으로 조회된 할인 분담 정책 필터 옵션을 반환합니다.
			 */
			success: PlatformDiscountSharePolicyFilterOptions;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformDiscountSharePolicyFilterOptionsError;
		};
	};
	"/platform/discount-share-policies": {
		/**
		 * 할인 분담 정책 다건 조회
		 *
		 * 여러 할인 분담을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetPlatformDiscountSharePoliciesBody;
			};
			/**
			 * 성공 응답으로 조회된 할인 분담 정책 리스트와 페이지 정보가 반환됩니다.
			 */
			success: GetPlatformDiscountSharePoliciesResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformDiscountSharePoliciesError;
		};
		/**
		 * 할인 분담 정책 생성
		 *
		 * 새로운 할인 분담을 생성합니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformDiscountSharePolicyBody;
			};
			/**
			 * 성공 응답으로 생성된 할인 분담 정책이 반환됩니다.
			 */
			success: CreatePlatformDiscountSharePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyAlreadyExistsError`
			 */
			error: CreatePlatformDiscountSharePolicyError;
		};
	};
	"/platform/discount-share-policies/{id}": {
		/**
		 * 할인 분담 정책 조회
		 *
		 * 주어진 아이디에 대응되는 할인 분담을 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 조회할 할인 분담 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 할인 분담 정책을 반환합니다.
			 */
			success: PlatformDiscountSharePolicy;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 */
			error: GetPlatformDiscountSharePolicyError;
		};
		/**
		 * 할인 분담 정책 수정
		 *
		 * 주어진 아이디에 대응되는 할인 분담을 업데이트합니다.
		 */
		patch: {
			parameters: {
				body: UpdatePlatformDiscountSharePolicyBody;
				path: {
					/**
					 *
					 * 업데이트할 할인 분담 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 업데이트된 할인 분담 정책을 반환합니다.
			 */
			success: UpdatePlatformDiscountSharePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 * *   `PlatformArchivedDiscountSharePolicyError`: 보관된 할인 분담 정책을 업데이트하려고 하는 경우
			 */
			error: UpdatePlatformDiscountSharePolicyError;
		};
	};
	"/platform/discount-share-policies/{id}/schedule": {
		/**
		 *
		 * 주어진 아이디에 대응되는 할인 분담의 예약 업데이트를 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 할인 분담 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 할인 분담 정책을 반환합니다.
			 */
			success: PlatformDiscountSharePolicy;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 */
			error: GetPlatformDiscountSharePolicyScheduleError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 할인 분담에 예약 업데이트를 재설정합니다.
		 */
		put: {
			parameters: {
				body: ReschedulePlatformDiscountSharePolicyBody;
				path: {
					/**
					 *
					 * 할인 분담 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 할인 분담 정책을 반환합니다.
			 */
			success: ReschedulePlatformDiscountSharePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 */
			error: RescheduleDiscountSharePolicyError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 할인 분담에 업데이트를 예약합니다.
		 */
		post: {
			parameters: {
				body: SchedulePlatformDiscountSharePolicyBody;
				path: {
					/**
					 *
					 * 할인 분담 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 할인 분담 정책이 반환됩니다.
			 */
			success: SchedulePlatformDiscountSharePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 * *   `PlatformDiscountSharePolicyScheduleAlreadyExistsError`
			 */
			error: ScheduleDiscountSharePolicyError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 할인 분담의 예약 업데이트를 취소합니다.
		 */
		delete: {
			parameters: {
				path: {
					/**
					 *
					 * 할인 분담 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CancelPlatformDiscountSharePolicyScheduleResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 */
			error: CancelPlatformDiscountSharePolicyScheduleError;
		};
	};
	"/platform/discount-share-policies/{id}/archive": {
		/**
		 * 할인 분담 정책 보관
		 *
		 * 주어진 아이디에 대응되는 할인 분담을 보관합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 할인 분담 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 보관된 할인 분담 객체를 반환합니다.
			 */
			success: ArchivePlatformDiscountSharePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 * *   `PlatformCannotArchiveScheduledDiscountSharePolicyError`: 예약된 업데이트가 있는 할인 분담 정책을 보관하려고 하는 경우
			 */
			error: ArchivePlatformDiscountSharePolicyError;
		};
	};
	"/platform/discount-share-policies/{id}/recover": {
		/**
		 * 할인 분담 정책 복원
		 *
		 * 주어진 아이디에 대응되는 할인 분담을 복원합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 할인 분담 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 복원된 할인 분담 객체를 반환합니다.
			 */
			success: RecoverPlatformDiscountSharePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformDiscountSharePolicyNotFoundError`
			 */
			error: RecoverPlatformDiscountSharePolicyError;
		};
	};
	"/platform/additional-fee-policies": {
		/**
		 * 추가 수수료 정책 다건 조회
		 *
		 * 여러 추가 수수료 정책을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetPlatformAdditionalFeePoliciesBody;
			};
			/**
			 * 성공 응답으로 조회된 추가 수수료 정책 리스트와 페이지 정보를 반환합니다.
			 */
			success: GetPlatformAdditionalFeePoliciesResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformAdditionalFeePoliciesError;
		};
		/**
		 * 추가 수수료 정책 생성
		 *
		 * 새로운 추가 수수료 정책을 생성합니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformAdditionalFeePolicyBody;
			};
			/**
			 * 성공 응답
			 */
			success: CreatePlatformAdditionalFeePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyAlreadyExistsError`
			 */
			error: CreatePlatformAdditionalFeePolicyError;
		};
	};
	"/platform/additional-fee-policies/{id}": {
		/**
		 * 추가 수수료 정책 조회
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책을 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 조회할 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 추가 수수료 정책을 반환합니다.
			 */
			success: PlatformAdditionalFeePolicy;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 */
			error: GetPlatformAdditionalFeePolicyError;
		};
		/**
		 * 추가 수수료 정책 수정
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책을 업데이트합니다.
		 */
		patch: {
			parameters: {
				body: UpdatePlatformAdditionalFeePolicyBody;
				path: {
					/**
					 *
					 * 업데이트할 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 업데이트된 추가 수수료 정책이 반환됩니다.
			 */
			success: UpdatePlatformAdditionalFeePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 * *   `PlatformArchivedAdditionalFeePolicyError`: 보관된 추가 수수료 정책을 업데이트하려고 하는 경우
			 */
			error: UpdatePlatformAdditionalFeePolicyError;
		};
	};
	"/platform/additional-fee-policies/{id}/schedule": {
		/**
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책의 예약 업데이트를 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 추가 수수료 정책을 반환합니다.
			 */
			success: PlatformAdditionalFeePolicy;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 */
			error: GetPlatformAdditionalFeePolicyScheduleError;
		};
		/**
		 *
		 */
		put: {
			parameters: {
				body: ReschedulePlatformAdditionalFeePolicyBody;
				path: {
					/**
					 *
					 * 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 추가 수수료 정책이 반환됩니다.
			 */
			success: ReschedulePlatformAdditionalFeePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 */
			error: RescheduleAdditionalFeePolicyError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책에 업데이트를 예약합니다.
		 */
		post: {
			parameters: {
				body: SchedulePlatformAdditionalFeePolicyBody;
				path: {
					/**
					 *
					 * 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 추가 수수료 정책을 반환합니다.
			 */
			success: SchedulePlatformAdditionalFeePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 * *   `PlatformAdditionalFeePolicyScheduleAlreadyExistsError`
			 * *   `PlatformArchivedAdditionalFeePolicyError`: 보관된 추가 수수료 정책을 업데이트하려고 하는 경우
			 */
			error: ScheduleAdditionalFeePolicyError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책의 예약 업데이트를 취소합니다.
		 */
		delete: {
			parameters: {
				path: {
					/**
					 *
					 * 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CancelPlatformAdditionalFeePolicyScheduleResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 */
			error: CancelPlatformAdditionalFeePolicyScheduleError;
		};
	};
	"/platform/additional-fee-policies/{id}/archive": {
		/**
		 * 추가 수수료 정책 보관
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책을 보관합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 보관된 추가 수수료 정책 객체를 반환합니다.
			 */
			success: ArchivePlatformAdditionalFeePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 * *   `PlatformCannotArchiveScheduledAdditionalFeePolicyError`: 예약된 업데이트가 있는 추가 수수료 정책을 보관하려고 하는 경우
			 */
			error: ArchivePlatformAdditionalFeePolicyError;
		};
	};
	"/platform/additional-fee-policies/{id}/recover": {
		/**
		 * 추가 수수료 정책 복원
		 *
		 * 주어진 아이디에 대응되는 추가 수수료 정책을 복원합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 추가 수수료 정책 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 복원된 추가 수수료 정책 객체를 반환합니다.
			 */
			success: RecoverPlatformAdditionalFeePolicyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformAdditionalFeePolicyNotFoundError`
			 */
			error: RecoverPlatformAdditionalFeePolicyError;
		};
	};
	"/platform/partner-filter-options": {
		/**
		 *
		 * 파트너 다건 조회 시 필요한 필터 옵션을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 보관 조회 여부
					 *
					 * true 이면 보관된 파트너의 필터 옵션을 조회하고, false 이면 보관되지 않은 파트너의 필터 옵션을 조회합니다. 기본값은 false 입니다.
					 */
					isArchived?: boolean;
				};
			};
			/**
			 * 성공 응답으로 조회된 파트너 필터 옵션을 반환합니다.
			 */
			success: PlatformPartnerFilterOptions;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformPartnerFilterOptionsError;
		};
	};
	"/platform/partners": {
		/**
		 * 파트너 다건 조회
		 *
		 * 여러 파트너를 조회합니다.
		 */
		get: {
			parameters: {
				body: GetPlatformPartnersBody;
			};
			/**
			 * 성공 응답으로 조회된 파트너 리스트와 페이지 정보가 반환됩니다.
			 */
			success: GetPlatformPartnersResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformPartnersError;
		};
		/**
		 * 파트너 생성
		 *
		 * 새로운 파트너를 생성합니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformPartnerBody;
			};
			/**
			 * 성공 응답으로 생성된 파트너 객체가 반환됩니다.
			 */
			success: CreatePlatformPartnerResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformAccountVerificationFailedError`: 파트너 계좌 인증이 실패한 경우
			 * *   `PlatformCurrencyNotSupportedError`: 지원 되지 않는 통화를 선택한 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformAccountVerificationNotFoundError`: 파트너 계좌 검증 아이디를 찾을 수 없는 경우
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformPartnerIdAlreadyExistsError`
			 * *   `PlatformAccountVerificationAlreadyUsedError`: 파트너 계좌 검증 아이디를 이미 사용한 경우
			 */
			error: CreatePlatformPartnerError;
		};
	};
	"/platform/partners/{id}": {
		/**
		 * 파트너 조회
		 *
		 * 파트너 객체를 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 조회하고 싶은 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 파트너 객체가 반환됩니다.
			 */
			success: PlatformPartner;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 */
			error: GetPlatformPartnerError;
		};
		/**
		 * 파트너 수정
		 *
		 * 주어진 아이디에 대응되는 파트너 정보를 업데이트합니다.
		 */
		patch: {
			parameters: {
				body: UpdatePlatformPartnerBody;
				path: {
					/**
					 *
					 * 업데이트할 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 업데이트된 파트너 객체가 반환됩니다.
			 */
			success: UpdatePlatformPartnerResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformAccountVerificationFailedError`: 파트너 계좌 인증이 실패한 경우
			 * *   `PlatformInsufficientDataToChangePartnerTypeError`: 파트너 타입 수정에 필요한 데이터가 부족한 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformAccountVerificationNotFoundError`: 파트너 계좌 검증 아이디를 찾을 수 없는 경우
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformArchivedPartnerError`: 보관된 파트너를 업데이트하려고 하는 경우
			 * *   `PlatformAccountVerificationAlreadyUsedError`: 파트너 계좌 검증 아이디를 이미 사용한 경우
			 */
			error: UpdatePlatformPartnerError;
		};
	};
	"/platform/partners/batch": {
		/**
		 * 파트너 다건 생성
		 *
		 * 새로운 파트너를 다건 생성합니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformPartnersBody;
			};
			/**
			 * 성공 응답
			 */
			success: CreatePlatformPartnersResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformPartnerIdsDuplicatedError`
			 * *   `PlatformCurrencyNotSupportedError`: 지원 되지 않는 통화를 선택한 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractsNotFoundError`
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformPartnerIdsAlreadyExistError`
			 */
			error: CreatePlatformPartnersError;
		};
	};
	"/platform/partners/{id}/schedule": {
		/**
		 *
		 * 주어진 아이디에 대응되는 파트너의 예약 업데이트를 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 파트너 객체를 반환합니다.
			 */
			success: PlatformPartner;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 */
			error: GetPlatformPartnerScheduleError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 파트너에 예약 업데이트를 재설정합니다.
		 */
		put: {
			parameters: {
				body: ReschedulePlatformPartnerBody;
				path: {
					/**
					 *
					 * 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 파트너 객체를 반환합니다.
			 */
			success: ReschedulePlatformPartnerResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 * *   `PlatformContractNotFoundError`
			 */
			error: ReschedulePartnerError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 파트너에 업데이트를 예약합니다.
		 */
		post: {
			parameters: {
				body: SchedulePlatformPartnerBody;
				path: {
					/**
					 *
					 * 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 파트너 객체가 반환됩니다.
			 */
			success: SchedulePlatformPartnerResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformAccountVerificationFailedError`: 파트너 계좌 인증이 실패한 경우
			 * *   `PlatformInsufficientDataToChangePartnerTypeError`: 파트너 타입 수정에 필요한 데이터가 부족한 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformAccountVerificationNotFoundError`: 파트너 계좌 검증 아이디를 찾을 수 없는 경우
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformPartnerScheduleAlreadyExistsError`
			 * *   `PlatformArchivedPartnerError`: 보관된 파트너를 업데이트하려고 하는 경우
			 * *   `PlatformAccountVerificationAlreadyUsedError`: 파트너 계좌 검증 아이디를 이미 사용한 경우
			 */
			error: SchedulePartnerError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 파트너의 예약 업데이트를 취소합니다.
		 */
		delete: {
			parameters: {
				path: {
					/**
					 *
					 * 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CancelPlatformPartnerScheduleResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 */
			error: CancelPlatformPartnerScheduleError;
		};
	};
	"/platform/partners/schedule": {
		/**
		 *
		 */
		post: {
			parameters: {
				body: SchedulePlatformPartnersBody;
			};
			/**
			 */
			success: SchedulePlatformPartnersResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformPartnerSchedulesAlreadyExistError`
			 * *   `PlatformArchivedPartnersCannotBeScheduledError`: 보관된 파트너들을 예약 업데이트하려고 하는 경우
			 */
			error: SchedulePlatformPartnersError;
		};
	};
	"/platform/partners/{id}/archive": {
		/**
		 * 파트너 복원
		 *
		 * 주어진 아이디에 대응되는 파트너를 보관합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 보관된 파트너 객체를 반환합니다.
			 */
			success: ArchivePlatformPartnerResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 * *   `PlatformCannotArchiveScheduledPartnerError`: 예약된 업데이트가 있는 파트너를 보관하려고 하는 경우
			 */
			error: ArchivePlatformPartnerError;
		};
	};
	"/platform/partners/{id}/recover": {
		/**
		 * 파트너 복원
		 *
		 * 주어진 아이디에 대응되는 파트너를 복원합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 파트너 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 복원된 파트너 객체를 반환합니다.
			 */
			success: RecoverPlatformPartnerResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 */
			error: RecoverPlatformPartnerError;
		};
	};
	"/platform/contracts": {
		/**
		 * 계약 다건 조회
		 *
		 * 여러 계약을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetPlatformContractsBody;
			};
			/**
			 * 성공 응답으로 조회된 계약 리스트와 페이지 정보를 반환합니다.
			 */
			success: GetPlatformContractsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformContractsError;
		};
		/**
		 * 계약 생성
		 *
		 * 새로운 계약을 생성합니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformContractBody;
			};
			/**
			 * 성공 응답으로 생성된 계약 객체가 반환됩니다.
			 */
			success: CreatePlatformContractResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractAlreadyExistsError`
			 */
			error: CreatePlatformContractError;
		};
	};
	"/platform/contracts/{id}": {
		/**
		 * 계약 조회
		 *
		 * 주어진 아이디에 대응되는 계약을 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 조회할 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 계약 객체를 반환합니다.
			 */
			success: PlatformContract;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 */
			error: GetPlatformContractError;
		};
		/**
		 * 계약 수정
		 *
		 * 주어진 아이디에 대응되는 계약을 업데이트합니다.
		 */
		patch: {
			parameters: {
				body: UpdatePlatformContractBody;
				path: {
					/**
					 *
					 * 업데이트할 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 업데이트된 계약 객체가 반환됩니다.
			 */
			success: UpdatePlatformContractResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformArchivedContractError`: 보관된 계약을 업데이트하려고 하는 경우
			 */
			error: UpdatePlatformContractError;
		};
	};
	"/platform/contracts/{id}/schedule": {
		/**
		 *
		 * 주어진 아이디에 대응되는 계약의 예약 업데이트를 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 계약 객체를 반환합니다.
			 */
			success: PlatformContract;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 */
			error: GetPlatformContractScheduleError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 계약에 예약 업데이트를 재설정합니다.
		 */
		put: {
			parameters: {
				body: ReschedulePlatformContractBody;
				path: {
					/**
					 *
					 * 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 계약 객체를 반환합니다.
			 */
			success: ReschedulePlatformContractResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `PlatformContractNotFoundError`
			 */
			error: RescheduleContractError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 계약에 업데이트를 예약합니다.
		 */
		post: {
			parameters: {
				body: SchedulePlatformContractBody;
				path: {
					/**
					 *
					 * 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 예약된 계약 객체를 반환합니다.
			 */
			success: SchedulePlatformContractResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformContractScheduleAlreadyExistsError`
			 * *   `PlatformArchivedContractError`: 보관된 계약을 업데이트하려고 하는 경우
			 */
			error: ScheduleContractError;
		};
		/**
		 *
		 * 주어진 아이디에 대응되는 계약의 예약 업데이트를 취소합니다.
		 */
		delete: {
			parameters: {
				path: {
					/**
					 *
					 * 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CancelPlatformContractScheduleResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 */
			error: CancelPlatformContractScheduleError;
		};
	};
	"/platform/contracts/{id}/archive": {
		/**
		 * 계약 보관
		 *
		 * 주어진 아이디에 대응되는 계약을 보관합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 보관된 계약 객체를 반환합니다.
			 */
			success: ArchivePlatformContractResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformCannotArchiveScheduledContractError`: 예약된 업데이트가 있는 계약을 보관하려고 하는 경우
			 */
			error: ArchivePlatformContractError;
		};
	};
	"/platform/contracts/{id}/recover": {
		/**
		 * 계약 복원
		 *
		 * 주어진 아이디에 대응되는 계약을 복원합니다.
		 */
		post: {
			parameters: {
				path: {
					/**
					 *
					 * 계약 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 복원된 계약 객체를 반환합니다.
			 */
			success: RecoverPlatformContractResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformContractNotFoundError`
			 */
			error: RecoverPlatformContractError;
		};
	};
	"/platform/transfers/{id}": {
		/**
		 * 정산건 조회
		 *
		 * 정산건을 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 조회하고 싶은 정산건 아이디
					 */
					id: string;
				};
			};
			/**
			 * 성공 응답으로 정산건 객체가 반환됩니다.
			 */
			success: PlatformTransfer;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformTransferNotFoundError`
			 */
			error: GetPlatformTransferError;
		};
		/**
		 * 정산건 삭제
		 *
		 * scheduled, in\_process 상태의 정산건만 삭제가능합니다.
		 */
		delete: {
			parameters: {
				path: {
					/**
					 *
					 * 정산건 아이디
					 */
					id: string;
				};
			};
			/**
			 */
			success: DeletePlatformTransferResponse;
			/**
			 * *   `PlatformCancelOrderTransfersExistsError`
			 * *   `PlatformTransferNonDeletableStatusError`
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformTransferNotFoundError`
			 */
			error: DeletePlatformTransferError;
		};
	};
	"/platform/transfer-summaries": {
		/**
		 * 정산건 다건 조회
		 *
		 * 성공 응답으로 조회된 정산건 요약 리스트와 페이지 정보가 반환됩니다.
		 */
		get: {
			parameters: {
				body: GetPlatformTransferSummariesBody;
			};
			/**
			 */
			success: GetPlatformTransferSummariesResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformTransferSummariesError;
		};
	};
	"/platform/transfers/order": {
		/**
		 * 주문 정산건 생성
		 *
		 * 성공 응답으로 생성된 주문 정산건 객체가 반환됩니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformOrderTransferBody;
			};
			/**
			 */
			success: CreateOrderTransferResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformDiscountExceededOrderAmountError`
			 * *   `PlatformProductIdDuplicatedError`
			 * *   `PlatformSettlementPaymentAmountExceededPortOnePaymentError`: 정산 요청 결제 금액이 포트원 결제 내역의 결제 금액을 초과한 경우
			 * *   `PlatformSettlementTaxFreeAmountExceededPortOnePaymentError`: 정산 요청 면세 금액이 포트원 결제 내역의 면세 금액을 초과한 경우
			 * *   `PlatformSettlementSupplyWithVatAmountExceededPortOnePaymentError`: 정산 요청 공급대가가 포트원 결제 내역의 공급대가를 초과한 경우
			 * *   `PlatformContractPlatformFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError`
			 * *   `PlatformAdditionalFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError`
			 * *   `PlatformCurrencyNotSupportedError`: 지원 되지 않는 통화를 선택한 경우
			 * *   `PlatformTaxFreeAmountOverFlowError`: 면세 금액이 결제금액을 초과한 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 * *   `PlatformContractNotFoundError`
			 * *   `PlatformAdditionalFeePoliciesNotFoundError`
			 * *   `PlatformDiscountSharePoliciesNotFoundError`
			 * *   `PlatformPaymentNotFoundError`
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformTransferAlreadyExistsError`
			 */
			error: CreatePlatformOrderTransferError;
		};
	};
	"/platform/transfers/order-cancel": {
		/**
		 * 주문 취소 정산건 생성
		 *
		 * 성공 응답으로 생성된 주문 취소 정산건 객체가 반환됩니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformOrderCancelTransferBody;
			};
			/**
			 */
			success: CreateOrderCancelTransferResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformOrderDetailMismatchedError`
			 * *   `PlatformDiscountSharePolicyIdDuplicatedError`
			 * *   `PlatformCancellableAmountExceededError`: 취소 가능한 금액이 초과한 경우
			 * *   `PlatformCancellableDiscountAmountExceededError`
			 * *   `PlatformProductIdDuplicatedError`
			 * *   `PlatformCancellableProductQuantityExceededError`
			 * *   `PlatformOrderTransferAlreadyCancelledError`
			 * *   `PlatformDiscountCancelExceededOrderCancelAmountError`
			 * *   `PlatformCancellationAndPaymentTypeMismatchedError`
			 * *   `PlatformSettlementCancelAmountExceededPortOneCancelError`: 정산 취소 요청 금액이 포트원 결제 취소 내역의 취소 금액을 초과한 경우
			 * *   `PlatformCannotSpecifyTransferError`: 정산 건 식별에 실패한 경우
			 * *   `PlatformTaxFreeAmountOverFlowError`: 면세 금액이 결제금액을 초과한 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformTransferNotFoundError`
			 * *   `PlatformCancellationNotFoundError`
			 * *   `PlatformPaymentNotFoundError`
			 * *   `PlatformProductIdNotFoundError`
			 * *   `PlatformTransferDiscountSharePolicyNotFoundError`
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 * *   `PlatformTransferAlreadyExistsError`
			 */
			error: CreatePlatformOrderCancelTransferError;
		};
	};
	"/platform/transfers/manual": {
		/**
		 * 수기 정산건 생성
		 *
		 * 성공 응답으로 생성된 수기 정산건 객체가 반환됩니다.
		 */
		post: {
			parameters: {
				body: CreatePlatformManualTransferBody;
			};
			/**
			 */
			success: CreateManualTransferResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformPartnerNotFoundError`
			 * *   `PlatformUserDefinedPropertyNotFoundError`: 사용자 정의 속성이 존재 하지 않는 경우
			 */
			error: CreatePlatformManualTransferError;
		};
	};
	"/platform/transfer-summaries/sheet-file": {
		/**
		 * 정산 상세 내역 다운로드
		 *
		 * 정산 상세 내역을 csv 파일로 다운로드 합니다.
		 */
		get: {
			parameters: {
				body: DownloadPlatformTransferSheetBody;
			};
			/**
			 */
			success: {};
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 */
			error: DownloadPlatformTransferSheetError;
		};
	};
	"/platform/partner-settlements": {
		/**
		 *
		 */
		get: {
			parameters: {
				body: GetPlatformPartnerSettlementsBody;
			};
			/**
			 */
			success: GetPlatformPartnerSettlementsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformPartnerSettlementsError;
		};
	};
	"/platform/payouts": {
		/**
		 *
		 */
		get: {
			parameters: {
				body: GetPlatformPayoutsBody;
			};
			/**
			 */
			success: GetPlatformPayoutsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformPayoutsError;
		};
	};
	"/platform/bulk-payouts": {
		/**
		 *
		 */
		get: {
			parameters: {
				body: GetPlatformBulkPayoutsBody;
			};
			/**
			 */
			success: GetPlatformBulkPayoutsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPlatformBulkPayoutsError;
		};
	};
	"/platform/bank-accounts/{bank}/{accountNumber}/holder": {
		/**
		 * 예금주 조회
		 *
		 * 계좌의 예금주를 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 생년월일
					 *
					 * 실명 조회를 위해 추가로 보낼 수 있습니다. birthdate과 businessRegistrationNumber 중 하나만 사용해야 합니다.
					 */
					birthdate?: string;
					/**
					 *
					 * 사업자등록번호
					 *
					 * 실명 조회를 위해 추가로 보낼 수 있습니다. birthdate과 businessRegistrationNumber 중 하나만 사용해야 합니다.
					 */
					businessRegistrationNumber?: string;
				};
				path: {
					/**
					 *
					 * 은행
					 */
					bank: Bank;
					/**
					 *
					 * '-'를 제외한 계좌 번호
					 */
					accountNumber: string;
				};
			};
			/**
			 * 성공 응답으로 조회된 예금주 명이 반환됩니다.
			 */
			success: PlatformAccountHolder;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PlatformNotSupportedBankError`: 지원하지 않는 은행인 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `PlatformNotEnabledError`: 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PlatformExternalApiTemporarilyFailedError`: 외부 api의 일시적인 오류
			 * *   `PlatformExternalApiFailedError`: 외부 api 오류
			 */
			error: GetPlatformAccountHolderError;
		};
	};
	"/identity-verifications/{identityVerificationId}": {
		/**
		 * 본인인증 단건 조회
		 *
		 * 주어진 아이디에 대응되는 본인인증 내역을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 조회할 본인인증 아이디
					 */
					identityVerificationId: string;
				};
			};
			/**
			 * 성공 응답으로 본인 인증 객체를 반환합니다.
			 */
			success: IdentityVerification;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `IdentityVerificationNotFoundError`: 요청된 본인인증 건이 존재하지 않는 경우
			 */
			error: GetIdentityVerificationError;
		};
	};
	"/identity-verifications/{identityVerificationId}/send": {
		/**
		 * 본인인증 요청 전송
		 *
		 * SMS 또는 APP 방식을 이용하여 본인인증 요청을 전송합니다.
		 */
		post: {
			parameters: {
				body: SendIdentityVerificationBody;
				path: {
					/**
					 *
					 * 본인인증 아이디
					 */
					identityVerificationId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: SendIdentityVerificationResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `IdentityVerificationNotFoundError`: 요청된 본인인증 건이 존재하지 않는 경우
			 * *   `ChannelNotFoundError`: 요청된 채널이 존재하지 않는 경우
			 * *   `IdentityVerificationAlreadyVerifiedError`: 본인인증 건이 이미 인증 완료된 상태인 경우
			 * *   `IdentityVerificationAlreadySentError`: 본인인증 건이 이미 API로 요청된 상태인 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: SendIdentityVerificationError;
		};
	};
	"/identity-verifications/{identityVerificationId}/confirm": {
		/**
		 * 본인인증 확인
		 *
		 * 요청된 본인인증에 대한 확인을 진행합니다.
		 */
		post: {
			parameters: {
				body: ConfirmIdentityVerificationBody;
				path: {
					/**
					 *
					 * 본인인증 아이디
					 */
					identityVerificationId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: ConfirmIdentityVerificationResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `IdentityVerificationNotFoundError`: 요청된 본인인증 건이 존재하지 않는 경우
			 * *   `IdentityVerificationNotSentError`: 본인인증 건이 API로 요청된 상태가 아닌 경우
			 * *   `IdentityVerificationAlreadyVerifiedError`: 본인인증 건이 이미 인증 완료된 상태인 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: ConfirmIdentityVerificationError;
		};
	};
	"/identity-verifications/{identityVerificationId}/resend": {
		/**
		 * SMS 본인인증 요청 재전송
		 *
		 * SMS 본인인증 요청을 재전송합니다.
		 */
		post: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 본인인증 아이디
					 */
					identityVerificationId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: ResendIdentityVerificationResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `IdentityVerificationNotFoundError`: 요청된 본인인증 건이 존재하지 않는 경우
			 * *   `IdentityVerificationNotSentError`: 본인인증 건이 API로 요청된 상태가 아닌 경우
			 * *   `IdentityVerificationAlreadyVerifiedError`: 본인인증 건이 이미 인증 완료된 상태인 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: ResendIdentityVerificationError;
		};
	};
	"/payments/{paymentId}/pre-register": {
		/**
		 * 결제 정보 사전 등록
		 *
		 * 결제 정보를 사전 등록합니다.
		 */
		post: {
			parameters: {
				body: PreRegisterPaymentBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: PreRegisterPaymentResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `AlreadyPaidError`: 결제가 이미 완료된 경우
			 */
			error: PreRegisterPaymentError;
		};
	};
	"/billing-keys/{billingKey}": {
		/**
		 * 빌링키 단건 조회
		 *
		 * 주어진 빌링키에 대응되는 빌링키 정보를 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 조회할 빌링키
					 */
					billingKey: string;
				};
			};
			/**
			 * 성공 응답으로 빌링키 정보를 반환합니다.
			 */
			success: BillingKeyInfo;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `BillingKeyNotFoundError`: 빌링키가 존재하지 않는 경우
			 */
			error: GetBillingKeyInfoError;
		};
		/**
		 * 빌링키 삭제
		 *
		 * 빌링키를 삭제합니다.
		 */
		delete: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 삭제할 빌링키
					 */
					billingKey: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: DeleteBillingKeyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `BillingKeyNotIssuedError`
			 * *   `BillingKeyNotFoundError`: 빌링키가 존재하지 않는 경우
			 * *   `BillingKeyAlreadyDeletedError`: 빌링키가 이미 삭제된 경우
			 * *   `PaymentScheduleAlreadyExistsError`: 결제 예약건이 이미 존재하는 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 * *   `ChannelSpecificError`: 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
			 */
			error: DeleteBillingKeyError;
		};
	};
	"/billing-keys": {
		/**
		 * 빌링키 다건 조회
		 *
		 * 주어진 조건에 맞는 빌링키들을 페이지 기반으로 조회합니다.
		 */
		get: {
			parameters: {
				body: GetBillingKeyInfosBody;
			};
			/**
			 * 성공 응답으로 조회된 빌링키 리스트와 페이지 정보가 반환됩니다.
			 */
			success: GetBillingKeyInfosResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetBillingKeyInfosError;
		};
		/**
		 * 빌링키 발급
		 *
		 * 빌링키 발급을 요청합니다.
		 */
		post: {
			parameters: {
				body: IssueBillingKeyBody;
			};
			/**
			 * 성공 응답
			 */
			success: IssueBillingKeyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `ChannelNotFoundError`: 요청된 채널이 존재하지 않는 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 * *   `ChannelSpecificError`: 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
			 */
			error: IssueBillingKeyError;
		};
	};
	"/payments/{paymentId}/cash-receipt": {
		/**
		 * 현금 영수증 단건 조회
		 *
		 * 주어진 결제 아이디에 대응되는 현금 영수증 내역을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답으로 현금 영수증 객체를 반환합니다.
			 */
			success: CashReceipt;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `CashReceiptNotFoundError`: 현금영수증이 존재하지 않는 경우
			 */
			error: GetCashReceiptError;
		};
	};
	"/payments/{paymentId}": {
		/**
		 * 결제 단건 조회
		 *
		 * 주어진 아이디에 대응되는 결제 건을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 조회할 결제 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답으로 결제 건 객체를 반환합니다.
			 */
			success: Payment;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 */
			error: GetPaymentError;
		};
	};
	"/payments": {
		/**
		 * 결제 다건 조회(페이지 기반)
		 *
		 * 주어진 조건에 맞는 결제 건들을 페이지 기반으로 조회합니다.
		 */
		get: {
			parameters: {
				body: GetPaymentsBody;
			};
			/**
			 * 성공 응답으로 조회된 결제 건 리스트와 페이지 정보가 반환됩니다.
			 */
			success: GetPaymentsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentsError;
		};
	};
	"/payments-by-cursor": {
		/**
		 * 결제 대용량 다건 조회(커서 기반)
		 *
		 * 기간 내 모든 결제 건을 커서 기반으로 조회합니다. 결제 건의 생성일시를 기준으로 주어진 기간 내 존재하는 모든 결제 건이 조회됩니다.
		 */
		get: {
			parameters: {
				body: GetAllPaymentsByCursorBody;
			};
			/**
			 * 성공 응답으로 조회된 결제 건 리스트와 커서 정보가 반환됩니다.
			 */
			success: GetAllPaymentsByCursorResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAllPaymentsError;
		};
	};
	"/payment-schedules/{paymentScheduleId}": {
		/**
		 * 결제 예약 단건 조회
		 *
		 * 주어진 아이디에 대응되는 결제 예약 건을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 조회할 결제 예약 건 아이디
					 */
					paymentScheduleId: string;
				};
			};
			/**
			 * 성공 응답으로 결제 예약 건 객체를 반환합니다.
			 */
			success: PaymentSchedule;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentScheduleNotFoundError`: 결제 예약건이 존재하지 않는 경우
			 */
			error: GetPaymentScheduleError;
		};
	};
	"/payment-schedules": {
		/**
		 * 결제 예약 다건 조회
		 *
		 * 주어진 조건에 맞는 결제 예약 건들을 조회합니다. `filter.from`, `filter.until` 파라미터의 기본값이 결제 시점 기준 지난 90일에 속하는 건을 조회하도록 되어 있으니, 미래 예약 상태의 건을 조회하기 위해서는 해당 파라미터를 직접 설정해 주셔야 합니다.
		 */
		get: {
			parameters: {
				body: GetPaymentSchedulesBody;
			};
			/**
			 * 성공 응답으로 조회된 예약 결제 건 리스트가 반환됩니다.
			 */
			success: GetPaymentSchedulesResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentSchedulesError;
		};
		/**
		 * 결제 예약 취소
		 *
		 * 결제 예약 건을 취소합니다.
		 */
		delete: {
			parameters: {
				body: RevokePaymentSchedulesBody;
			};
			/**
			 * 성공 응답
			 */
			success: RevokePaymentSchedulesResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentScheduleNotFoundError`: 결제 예약건이 존재하지 않는 경우
			 * *   `BillingKeyNotFoundError`: 빌링키가 존재하지 않는 경우
			 * *   `PaymentScheduleAlreadyProcessedError`: 결제 예약건이 이미 처리된 경우
			 * *   `PaymentScheduleAlreadyRevokedError`: 결제 예약건이 이미 취소된 경우
			 * *   `BillingKeyAlreadyDeletedError`: 빌링키가 이미 삭제된 경우
			 */
			error: RevokePaymentSchedulesError;
		};
	};
	"/payments/{paymentId}/schedule": {
		/**
		 * 결제 예약
		 *
		 * 결제를 예약합니다.
		 */
		post: {
			parameters: {
				body: CreatePaymentScheduleBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CreatePaymentScheduleResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `BillingKeyNotFoundError`: 빌링키가 존재하지 않는 경우
			 * *   `AlreadyPaidOrWaitingError`: 결제가 이미 완료되었거나 대기중인 경우
			 * *   `SumOfPartsExceedsTotalAmountError`: 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우
			 * *   `BillingKeyAlreadyDeletedError`: 빌링키가 이미 삭제된 경우
			 * *   `PaymentScheduleAlreadyExistsError`: 결제 예약건이 이미 존재하는 경우
			 */
			error: CreatePaymentScheduleError;
		};
	};
	"/payments/{paymentId}/cancel": {
		/**
		 * 결제 취소
		 *
		 * 결제 취소를 요청합니다.
		 */
		post: {
			parameters: {
				body: CancelPaymentBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CancelPaymentResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `PaymentNotPaidError`: 결제가 완료되지 않은 경우
			 * *   `PaymentAlreadyCancelledError`: 결제가 이미 취소된 경우
			 * *   `CancellableAmountConsistencyBrokenError`: 취소 가능 잔액 검증에 실패한 경우
			 * *   `CancelAmountExceedsCancellableAmountError`: 결제 취소 금액이 취소 가능 금액을 초과한 경우
			 * *   `SumOfPartsExceedsCancelAmountError`: 면세 금액 등 하위 항목들의 합이 전체 취소 금액을 초과한 경우
			 * *   `CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError`: 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우
			 * *   `CancelTaxAmountExceedsCancellableTaxAmountError`: 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우
			 * *   `RemainedAmountLessThanPromotionMinPaymentAmountError`: 부분 취소 시, 취소하게 될 경우 남은 금액이 프로모션의 최소 결제 금액보다 작아지는 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: CancelPaymentError;
		};
	};
	"/payments/{paymentId}/billing-key": {
		/**
		 * 빌링키 결제
		 *
		 * 빌링키로 결제를 진행합니다.
		 */
		post: {
			parameters: {
				body: BillingKeyPaymentInput;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: PayWithBillingKeyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PromotionPayMethodDoesNotMatchError`: 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
			 * *   `DiscountAmountExceedsTotalAmountError`: 프로모션 할인 금액이 결제 시도 금액 이상인 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `BillingKeyNotFoundError`: 빌링키가 존재하지 않는 경우
			 * *   `ChannelNotFoundError`: 요청된 채널이 존재하지 않는 경우
			 * *   `AlreadyPaidError`: 결제가 이미 완료된 경우
			 * *   `SumOfPartsExceedsTotalAmountError`: 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우
			 * *   `BillingKeyAlreadyDeletedError`: 빌링키가 이미 삭제된 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: PayWithBillingKeyError;
		};
	};
	"/payments/{paymentId}/instant": {
		/**
		 * 수기 결제
		 *
		 * 수기 결제를 진행합니다.
		 */
		post: {
			parameters: {
				body: InstantPaymentInput;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: PayInstantlyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `PromotionPayMethodDoesNotMatchError`: 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
			 * *   `DiscountAmountExceedsTotalAmountError`: 프로모션 할인 금액이 결제 시도 금액 이상인 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `ChannelNotFoundError`: 요청된 채널이 존재하지 않는 경우
			 * *   `AlreadyPaidError`: 결제가 이미 완료된 경우
			 * *   `SumOfPartsExceedsTotalAmountError`: 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: PayInstantlyError;
		};
	};
	"/cash-receipts": {
		/**
		 * 현금 영수증 수동 발급
		 *
		 * 현금 영수증 발급을 요청합니다.
		 */
		post: {
			parameters: {
				body: IssueCashReceiptBody;
			};
			/**
			 * 성공 응답
			 */
			success: IssueCashReceiptResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `ChannelNotFoundError`: 요청된 채널이 존재하지 않는 경우
			 * *   `CashReceiptAlreadyIssuedError`: 현금영수증이 이미 발급된 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: IssueCashReceiptError;
		};
	};
	"/payments/{paymentId}/cash-receipt/cancel": {
		/**
		 * 현금 영수증 취소
		 *
		 * 현금 영수증 취소를 요청합니다.
		 */
		post: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CancelCashReceiptResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `CashReceiptNotIssuedError`: 현금영수증이 발급되지 않은 경우
			 * *   `CashReceiptNotFoundError`: 현금영수증이 존재하지 않는 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: CancelCashReceiptError;
		};
	};
	"/payments/{paymentId}/virtual-account/close": {
		/**
		 * 가상계좌 말소
		 *
		 * 발급된 가상계좌를 말소합니다.
		 */
		post: {
			parameters: {
				query: {
					/**
					 *
					 * 상점 아이디
					 *
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: CloseVirtualAccountResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `PaymentNotWaitingForDepositError`: 결제 건이 입금 대기 상태가 아닌 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: CloseVirtualAccountError;
		};
	};
	"/payments/{paymentId}/escrow/logistics": {
		/**
		 * 에스크로 배송 정보 등록
		 *
		 * 에스크로 배송 정보를 등록합니다.
		 */
		post: {
			parameters: {
				body: RegisterEscrowLogisticsBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: ApplyEscrowLogisticsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `PaymentNotPaidError`: 결제가 완료되지 않은 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: ApplyEscrowLogisticsError;
		};
		/**
		 * 에스크로 배송 정보 수정
		 *
		 * 에스크로 배송 정보를 수정합니다.
		 */
		patch: {
			parameters: {
				body: ModifyEscrowLogisticsBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: ModifyEscrowLogisticsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `PaymentNotPaidError`: 결제가 완료되지 않은 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: ModifyEscrowLogisticsError;
		};
	};
	"/payments/{paymentId}/escrow/complete": {
		/**
		 * 에스크로 구매 확정
		 *
		 * 에스크로 결제를 구매 확정 처리합니다
		 */
		post: {
			parameters: {
				body: ConfirmEscrowBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: ConfirmEscrowResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `PaymentNotPaidError`: 결제가 완료되지 않은 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: ConfirmEscrowError;
		};
	};
	"/payments/{paymentId}/resend-webhook": {
		/**
		 * 웹훅 재발송
		 *
		 * 웹훅을 재발송합니다.
		 */
		post: {
			parameters: {
				body: ResendWebhookBody;
				path: {
					/**
					 *
					 * 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: ResendWebhookResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `WebhookNotFoundError`: 웹훅 내역이 존재하지 않는 경우
			 */
			error: ResendWebhookError;
		};
	};
	"/analytics/charts/payment": {
		/**
		 *
		 * 고객사의 결제 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentChartBody;
			};
			/**
			 * 성공 응답으로 결제 현황을 반환합니다.
			 */
			success: AnalyticsPaymentChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsPaymentChartError;
		};
	};
	"/analytics/charts/payment-insight": {
		/**
		 *
		 * 고객사의 결제 현황 인사이트를 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentChartInsightBody;
			};
			/**
			 * 성공 응답으로 결제 현황 인사이트를 반환합니다.
			 */
			success: AnalyticsPaymentChartInsight;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsPaymentChartInsightError;
		};
	};
	"/analytics/charts/average-amount": {
		/**
		 *
		 * 고객사의 평균 거래액 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsAverageAmountChartBody;
			};
			/**
			 * 성공 응답으로 평균 거래액 현황을 반환합니다.
			 */
			success: AnalyticsAverageAmountChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAverageAmountChartError;
		};
	};
	"/analytics/charts/payment-method": {
		/**
		 *
		 * 고객사의 결제수단 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentMethodChartBody;
			};
			/**
			 * 성공 응답으로 결제수단 현황을 반환합니다.
			 */
			success: AnalyticsPaymentMethodChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentMethodChartError;
		};
	};
	"/analytics/charts/payment-method-trend": {
		/**
		 *
		 * 고객사의 결제수단 트렌드를 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentMethodTrendChartBody;
			};
			/**
			 * 성공 응답으로 결제수단 트렌드를 반환합니다.
			 */
			success: AnalyticsPaymentMethodTrendChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentMethodTrendChartError;
		};
	};
	"/analytics/charts/card": {
		/**
		 *
		 * 고객사의 카드결제 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsCardChartBody;
			};
			/**
			 * 성공 응답으로 카드결제 현황을 반환합니다.
			 */
			success: AnalyticsCardChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsCardChartError;
		};
	};
	"/analytics/charts/card-company": {
		/**
		 *
		 * 고객사의 카드사별 결제 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsCardCompanyChartBody;
			};
			/**
			 * 성공 응답으로 카드사별 결제 현황을 반환합니다.
			 */
			success: AnalyticsCardCompanyChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsCardCompanyChartError;
		};
	};
	"/analytics/charts/easy-pay": {
		/**
		 *
		 * 고객사의 간편결제 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsEasyPayChartBody;
			};
			/**
			 * 성공 응답으로 간편결제 현황을 반환합니다.
			 */
			success: AnalyticsEasyPayChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsEasyPayChartError;
		};
	};
	"/analytics/charts/easy-pay-provider": {
		/**
		 *
		 * 고객사의 간편결제사별 결제 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsEasyPayProviderChartBody;
			};
			/**
			 * 성공 응답으로 간편결제사별 결제 현황을 반환합니다.
			 */
			success: AnalyticsEasyPayProviderChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsEasyPayProviderChartError;
		};
	};
	"/analytics/charts/pg-company": {
		/**
		 *
		 * 고객사의 결제대행사 현황을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPgCompanyChartBody;
			};
			/**
			 * 성공 응답으로 결제대행사 현황을 반환합니다.
			 */
			success: AnalyticsPgCompanyChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPgCompanyChartError;
		};
	};
	"/analytics/charts/pg-company-trend": {
		/**
		 *
		 * 고객사의 결제대행사별 거래 추이를 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPgCompanyTrendChartBody;
			};
			/**
			 * 성공 응답으로 결제대행사별 거래 추이를 반환합니다.
			 */
			success: AnalyticsPgCompanyTrendChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPgCompanyTrendChartError;
		};
	};
	"/analytics/overseas-payment-usage": {
		/**
		 *
		 * 고객사의 해외 결제 사용 여부를 조회합니다.
		 */
		get: {
			parameters: Record<string, never>;
			/**
			 * 성공 응답으로 해외 결제 사용 여부을 반환합니다.
			 */
			success: AnalyticsOverseasPaymentUsage;
			/**
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsOverseasPaymentUsageError;
		};
	};
	"/analytics/cancellation-rate": {
		/**
		 *
		 * 고객사의 환불율을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsCancellationRateBody;
			};
			/**
			 * 성공 응답으로 환불율을 반환합니다.
			 */
			success: AnalyticsCancellationRate;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetAnalyticsCancellationRateError;
		};
	};
	"/analytics/charts/payment-status": {
		/**
		 *
		 * 고객사의 결제상태 이력 집계를 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentStatusChartBody;
			};
			/**
			 * 성공 응답으로 결제상태 이력 집계 결과를 반환합니다.
			 */
			success: AnalyticsPaymentStatusChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentStatusChartError;
		};
	};
	"/analytics/charts/payment-status/by-method": {
		/**
		 *
		 * 고객사의 결제수단별 결제전환율을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentStatusByPaymentMethodChartBody;
			};
			/**
			 * 성공 응답으로 결제수단별 결제전환율 조회 결과를 반환합니다.
			 */
			success: AnalyticsPaymentStatusByPaymentMethodChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentStatusByPaymentMethodChartError;
		};
	};
	"/analytics/charts/payment-status/by-pg-company": {
		/**
		 *
		 * 고객사의 PG사별 결제전환율을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentStatusByPgCompanyChartBody;
			};
			/**
			 * 성공 응답으로 PG사별 결제전환율 조회 결과를 반환합니다.
			 */
			success: AnalyticsPaymentStatusByPgCompanyChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentStatusByPgCompanyChartError;
		};
	};
	"/analytics/charts/payment-status/by-payment-client": {
		/**
		 *
		 * 고객사의 결제환경별 결제전환율을 조회합니다.
		 */
		get: {
			parameters: {
				body: GetAnalyticsPaymentStatusByPaymentClientChartBody;
			};
			/**
			 * 성공 응답으로 결제환경별 결제전환율 조회 결과를 반환합니다.
			 */
			success: AnalyticsPaymentStatusByPaymentClientChart;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 */
			error: GetPaymentStatusByPaymentClientChartError;
		};
	};
	"/b2b-preview/member-companies/{brn}": {
		/**
		 * 연동 사업자 조회
		 *
		 * 포트원 B2B 서비스에 연동된 사업자를 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
				};
			};
			/**
			 * 성공 응답으로 사업자 객체를 반환합니다.
			 */
			success: B2bMemberCompany;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bMemberCompanyNotFoundError`: 연동 사업자가 존재하지 않는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bMemberCompanyError;
		};
		/**
		 * 연동 사업자 정보 수정
		 *
		 * 연동 사업자 정보를 수정합니다.
		 */
		patch: {
			parameters: {
				body: UpdateB2bMemberCompanyBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: UpdateB2bMemberCompanyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bMemberCompanyNotFoundError`: 연동 사업자가 존재하지 않는 경우
			 */
			error: UpdateB2bMemberCompanyError;
		};
	};
	"/b2b-preview/member-companies": {
		/**
		 * 사업자 연동
		 *
		 * 포트원 B2B 서비스에 사업자를 연동합니다.
		 */
		post: {
			parameters: {
				body: RegisterB2bMemberCompanyBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답
			 */
			success: RegisterB2bMemberCompanyResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bIdAlreadyExistsError`: ID가 이미 사용중인 경우
			 * *   `B2bCompanyAlreadyRegisteredError`: 사업자가 이미 연동되어 있는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: RegisterB2bMemberCompanyError;
		};
	};
	"/b2b-preview/member-companies/{brn}/contacts/{contactId}": {
		/**
		 * 담당자 조회
		 *
		 * 연동 사업자에 등록된 담당자를 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 담당자 ID
					 */
					contactId: string;
				};
			};
			/**
			 * 성공 응답으로 담당자 객체를 반환합니다.
			 */
			success: B2bCompanyContact;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bMemberCompanyNotFoundError`: 연동 사업자가 존재하지 않는 경우
			 * *   `B2bContactNotFoundError`: 담당자가 존재하지 않는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bMemberCompanyContactError;
		};
		/**
		 * 담당자 정보 수정
		 *
		 * 담당자 정보를 수정합니다.
		 */
		patch: {
			parameters: {
				body: UpdateB2bMemberCompanyContactBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 담당자 ID
					 */
					contactId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: UpdateB2bMemberCompanyContactResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bContactNotFoundError`: 담당자가 존재하지 않는 경우
			 * *   `B2bMemberCompanyNotFoundError`: 연동 사업자가 존재하지 않는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: UpdateB2bMemberCompanyContactError;
		};
	};
	"/b2b-preview/member-companies/{brn}/certificate/registration-url": {
		/**
		 * 사업자 인증서 등록 URL 조회
		 *
		 * 연동 사업자의 인증서를 등록하기 위한 URL을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
				};
			};
			/**
			 * 성공 응답으로 URL을 반환합니다.
			 */
			success: GetB2bCertificateRegistrationUrlResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bMemberCompanyNotFoundError`: 연동 사업자가 존재하지 않는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bCertificateRegistrationUrlError;
		};
	};
	"/b2b-preview/member-companies/{brn}/certificate": {
		/**
		 * 인증서 조회
		 *
		 * 연동 사업자의 인증서를 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
				};
			};
			/**
			 * 성공 응답으로 인증서 객체를 반환합니다.
			 */
			success: B2bCertificate;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bMemberCompanyNotFoundError`: 연동 사업자가 존재하지 않는 경우
			 * *   `B2bCertificateUnregisteredError`: 인증서가 등록되어 있지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bCertificateError;
		};
	};
	"/b2b-preview/member-companies/contacts/id-existence": {
		/**
		 * 담당자 ID 존재 여부 확인
		 *
		 * 담당자 ID가 이미 사용중인지 확인합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 담당자 ID
					 */
					contactId: string;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답입니다.
			 */
			success: GetB2bContactIdExistenceResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: getB2bContactIdExistenceError;
		};
	};
	"/b2b-preview/bank-accounts/{bank}/{accountNumber}/holder": {
		/**
		 * 예금주 조회
		 *
		 * 원하는 계좌의 예금주를 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 은행
					 */
					bank: Bank;
					/**
					 *
					 * '-'를 제외한 계좌 번호
					 */
					accountNumber: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: GetB2bBankAccountHolderResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bBankAccountNotFoundError`: 계좌가 존재하지 않는 경우
			 * *   `B2bForeignExchangeAccountError`: 계좌 정보 조회가 불가능한 외화 계좌인 경우
			 * *   `B2bSuspendedAccountError`: 정지 계좌인 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 * *   `B2bRegularMaintenanceTimeError`: 금융기관 시스템이 정기 점검 중인 경우
			 * *   `B2bFinancialSystemFailureError`: 금융기관 장애
			 * *   `B2bFinancialSystemUnderMaintenanceError`: 금융기관 시스템이 점검 중인 경우
			 * *   `B2bFinancialSystemCommunicationError`: 금융기관과의 통신에 실패한 경우
			 */
			error: GetB2bAccountHolderError;
		};
	};
	"/b2b-preview/company/{brn}/state": {
		/**
		 * 사업자 상태 조회
		 *
		 * 원하는 사업자의 상태를 조회합니다. 포트원 B2B 서비스에 연동 및 등록되지 않은 사업자도 조회 가능합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
				};
			};
			/**
			 * 성공 응답으로 사업자 상태 객체를 반환합니다.
			 */
			success: B2bCompanyState;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bCompanyNotFoundError`: 사업자가 존재하지 않는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 * *   `B2bHometaxUnderMaintenanceError`: 홈택스가 점검중이거나 순단이 발생한 경우
			 */
			error: GetB2bCompanyStateError;
		};
	};
	"/b2b-preview/tax-invoices/request-reverse-issuance": {
		/**
		 * 세금계산서 역발행 요청
		 *
		 * 공급자에게 세금계산서 역발행을 요청합니다.
		 */
		post: {
			parameters: {
				body: RequestB2bTaxInvoiceReverseIssuanceRequestBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bSupplierNotFoundError`: 공급자가 존재하지 않은 경우
			 * *   `B2bRecipientNotFoundError`: 공급받는자가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: RequestB2bTaxInvoiceReverseIssuanceError;
		};
	};
	"/b2b-preview/tax-invoices/{documentKey}": {
		/**
		 * 세금 계산서 조회
		 *
		 * 등록된 세금 계산서를 공급자 혹은 공급받는자 문서번호로 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bTaxInvoiceError;
		};
		/**
		 * 세금계산서 삭제
		 *
		 * 세금계산서를 삭제합니다.
		 */
		delete: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
				};
			};
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNonDeletableStatusError`: 세금계산서가 삭제 가능한 상태가 아닌 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: DeleteB2bTaxInvoiceError;
		};
	};
	"/b2b-preview/tax-invoices/issue": {
		/**
		 * 세금계산서 발행
		 *
		 * 역발행의 경우 역발행요청(REQUESTED) 상태, 정발행의 경우 임시저장(REGISTERED) 상태의 세금계산서를 발행합니다.
		 */
		post: {
			parameters: {
				body: IssueB2bTaxInvoiceRequestBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotRequestedStatusError`: 세금계산서가 역발행 대기 상태가 아닌 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: IssueB2bTaxInvoiceError;
		};
	};
	"/b2b-preview/tax-invoices/cancel-request": {
		/**
		 * 세금계산서 역발행 요청 취소
		 *
		 * 공급받는자가 공급자에게 세금계산서 역발행 요청한 것을 취소합니다.
		 */
		post: {
			parameters: {
				body: CancelB2bTaxInvoiceRequestBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotRequestedStatusError`: 세금계산서가 역발행 대기 상태가 아닌 경우
			 * *   `B2bTaxInvoiceNoRecipientDocumentKeyError`: 세금계산서에 공급받는자 문서 번호가 기입되지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: CancelB2bTaxInvoiceRequestError;
		};
	};
	"/b2b-preview/tax-invoices/cancel-issuance": {
		/**
		 * 세금계산서 역발행 취소
		 *
		 * 공급자가 발행 완료한 세금계산서를 국세청 전송 전 취소합니다.
		 */
		post: {
			parameters: {
				body: CancelB2bTaxInvoiceIssuanceBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotIssuedStatusError`: 세금계산서가 발행된(ISSUED) 상태가 아닌 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: CancelB2bTaxInvoiceIssuanceError;
		};
	};
	"/b2b-preview/tax-invoices/refuse-request": {
		/**
		 * 세금계산서 역발행 요청 거부
		 *
		 * 공급자가 공급받는자로부터 요청받은 세금계산서 역발행 건을 거부합니다.
		 */
		post: {
			parameters: {
				body: RefuseB2bTaxInvoiceRequestBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotRequestedStatusError`: 세금계산서가 역발행 대기 상태가 아닌 경우
			 * *   `B2bTaxInvoiceNoSupplierDocumentKeyError`: 세금계산서에 공급자 문서 번호가 기입되지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: RefuseB2bTaxInvoiceRequestError;
		};
	};
	"/b2b-preview/tax-invoices": {
		/**
		 * 세금 계산서 다건조회
		 *
		 * 조회 기간 내 등록된 세금 계산서를 다건 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 페이지 번호
					 *
					 * 0부터 시작하는 페이지 번호. 기본 값은 0.
					 */
					pageNumber?: number;
					/**
					 *
					 * 페이지 크기
					 *
					 * 각 페이지 당 포함할 객체 수. 기본 값은 500이며 최대 1000까지 요청가능합니다.
					 */
					pageSize?: number;
					/**
					 *
					 * 조회 시작일
					 */
					from: string;
					/**
					 *
					 * 조회 종료일
					 */
					until: string;
					/**
					 *
					 * 조회 기간 기준
					 */
					dateType: B2bSearchDateType;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 */
			success: GetB2bTaxInvoicesResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bTaxInvoicesError;
		};
	};
	"/b2b-preview/tax-invoices/{documentKey}/popup-url": {
		/**
		 * 세금 계산서 팝업 URL 조회
		 *
		 * 등록된 세금 계산서 팝업 URL을 공급자 혹은 공급받는자 문서번호로 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 메뉴 포함 여부
					 *
					 * 팝업 URL에 메뉴 레이아웃을 포함 여부를 결정합니다. 기본 값은 true입니다.
					 */
					includeMenu?: boolean;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
				};
			};
			/**
			 */
			success: GetB2bTaxInvoicePopupUrlResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bTaxInvoicePopupUrlError;
		};
	};
	"/b2b-preview/tax-invoices/{documentKey}/print-url": {
		/**
		 * 세금 계산서 프린트 URL 조회
		 *
		 * 등록된 세금 계산서 프린트 URL을 공급자 혹은 공급받는자 문서번호로 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
				};
			};
			/**
			 */
			success: GetB2bTaxInvoicePrintUrlResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bTaxInvoicePrintUrlError;
		};
	};
	"/b2b-preview/tax-invoices/{documentKey}/pdf-download-url": {
		/**
		 * 세금 계산서 PDF 다운로드 URL 조회
		 *
		 * 등록된 세금 계산서 PDF 다운로드 URL을 공급자 혹은 공급받는자 문서번호로 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
				};
			};
			/**
			 */
			success: GetB2bTaxInvoicePdfDownloadUrlResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bTaxInvoicePdfDownloadUrlError;
		};
	};
	"/b2b-preview/tax-invoices/register": {
		/**
		 * 세금계산서 임시 저장
		 *
		 * 세금계산서 임시 저장을 요청합니다.
		 */
		post: {
			parameters: {
				body: RequestB2bTaxInvoiceRegisterBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bSupplierNotFoundError`: 공급자가 존재하지 않은 경우
			 * *   `B2bRecipientNotFoundError`: 공급받는자가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: RequestB2bTaxInvoiceRegisterError;
		};
	};
	"/b2b-preview/tax-invoices/request": {
		/**
		 * 세금계산서 역발행 요청
		 *
		 * 임시저장(REGISTERED) 상태의 역발행 세금계산서를 공급자에게 발행 요청합니다.
		 */
		post: {
			parameters: {
				body: RequestB2bTaxInvoiceRequestBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * 성공 응답으로 세금계산서를 반환합니다.
			 */
			success: B2bTaxInvoice;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotRegisteredStatusError`: 세금계산서가 임시저장 상태가 아닌 경우
			 * *   `B2bTaxInvoiceNoRecipientDocumentKeyError`: 세금계산서에 공급받는자 문서 번호가 기입되지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: requestB2bTaxInvoiceError;
		};
	};
	"/b2b-preview/tax-invoices/file-upload-link": {
		/**
		 * 세금계산서 파일 업로드 링크 생성
		 *
		 * 세금계산서의 첨부파일를 업로드할 링크를 생성합니다.
		 */
		post: {
			parameters: {
				body: CreateB2bTaxInvoiceFileUploadLinkBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 */
			success: CreateB2bTaxInvoiceFileUploadLinkResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 */
			error: CreateB2bTaxInvoiceFileUploadLinkCreateError;
		};
	};
	"/b2b-preview/tax-invoices/attach-file": {
		/**
		 * 세금계산서 파일 첨부
		 *
		 * 세금계산서에 파일을 첨부합니다.
		 */
		post: {
			parameters: {
				body: AttachB2bTaxInvoiceFileBody;
				query: {
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
			};
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotRegisteredStatusError`: 세금계산서가 임시저장 상태가 아닌 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bFileNotFoundError`: 업로드한 파일을 찾을 수 없는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: AttachB2bTaxInvoiceFileError;
		};
	};
	"/b2b-preview/tax-invoices/{documentKey}/attachments": {
		/**
		 * 세금계산서 첨부파일 목록 조회
		 *
		 * 세금계산서에 첨부된 파일 목록을 조회합니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
				};
			};
			/**
			 */
			success: GetB2bTaxInvoiceAttachmentsResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: GetB2bTaxInvoiceAttachmentsError;
		};
	};
	"/b2b-preview/tax-invoices/{documentKey}/attachments/{attachmentId}": {
		/**
		 * 세금계산서 첨부파일 삭제
		 *
		 * 세금계산서 첨부파일을 삭제합니다.
		 */
		delete: {
			parameters: {
				query: {
					/**
					 *
					 * 사업자등록번호
					 */
					brn: string;
					/**
					 *
					 * 문서 번호 유형
					 *
					 * path 파라미터로 전달된 문서번호 유형. 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
					 */
					documentKeyType?: B2bTaxInvoiceDocumentKeyType;
					/**
					 *
					 * 테스트 모드 여부
					 *
					 * true 이면 테스트 모드로 실행되며, false 이거나 주어지지 않은 경우 테스트 모드를 사용하지 않습니다.
					 */
					test?: boolean;
				};
				path: {
					/**
					 *
					 * 세금계산서 문서 번호
					 */
					documentKey: string;
					/**
					 *
					 * 첨부파일 아이디
					 */
					attachmentId: string;
				};
			};
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `B2bTaxInvoiceNotRegisteredStatusError`: 세금계산서가 임시저장 상태가 아닌 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `B2bNotEnabledError`: B2B 기능이 활성화되지 않은 경우
			 * *   `B2bTaxInvoiceNotFoundError`: 세금계산서가 존재하지 않은 경우
			 * *   `B2bTaxInvoiceAttachmentNotFoundError`: 세금계산서의 첨부파일을 찾을 수 없는 경우
			 * *   `B2bExternalServiceError`: 외부 서비스에서 에러가 발생한 경우
			 */
			error: DeleteB2bTaxInvoiceAttachmentError;
		};
	};
	"/kakaopay/payment/order": {
		/**
		 * 카카오페이 주문 조회 API
		 *
		 * 주어진 아이디에 대응되는 카카오페이 주문 건을 조회합니다. 해당 API 사용이 필요한 경우 포트원 기술지원팀으로 문의 주시길 바랍니다.
		 */
		get: {
			parameters: {
				query: {
					/**
					 *
					 * 카카오페이 주문 번호 (tid)
					 */
					pgTxId: string;
					/**
					 *
					 * 채널 키
					 */
					channelKey: string;
				};
			};
			/**
			 * 성공 응답으로 카카오페이 주문 조회 응답 객체를 반환합니다.
			 */
			success: GetKakaopayPaymentOrderResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 */
			error: GetKakaopayPaymentOrderError;
		};
	};
	"/payments/{paymentId}/register-store-receipt": {
		/**
		 * 영수증 내 하위 상점 거래 등록
		 *
		 * 결제 내역 매출전표에 하위 상점의 거래를 등록합니다. 지원되는 PG사: KG이니시스(이용 전 콘솔 -> 결제연동 탭에서 INIApi Key 등록 필요)
		 */
		post: {
			parameters: {
				body: RegisterStoreReceiptBody;
				path: {
					/**
					 *
					 * 등록할 하위 상점 결제 건 아이디
					 */
					paymentId: string;
				};
			};
			/**
			 * 성공 응답
			 */
			success: RegisterStoreReceiptResponse;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PaymentNotFoundError`: 결제 건이 존재하지 않는 경우
			 * *   `PaymentNotPaidError`: 결제가 완료되지 않은 경우
			 * *   `PgProviderError`: PG사에서 오류를 전달한 경우
			 */
			error: RegisterStoreReceiptError;
		};
	};
	"/promotions/{promotionId}": {
		/**
		 * 프로모션 단건 조회
		 *
		 * 주어진 아이디에 대응되는 프로모션을 조회합니다.
		 */
		get: {
			parameters: {
				path: {
					/**
					 *
					 * 조회할 프로모션 아이디
					 */
					promotionId: string;
				};
			};
			/**
			 * 성공 응답으로 프로모션 객체를 반환합니다.
			 */
			success: Promotion;
			/**
			 * *   `InvalidRequestError`: 요청된 입력 정보가 유효하지 않은 경우
			 * *   `UnauthorizedError`: 인증 정보가 올바르지 않은 경우
			 * *   `ForbiddenError`: 요청이 거절된 경우
			 * *   `PromotionNotFoundError`: 프로모션이 존재하지 않는 경우
			 */
			error: GetPromotionError;
		};
	};
};

/**
 * API Secret 로그인을 위한 입력 정보
 *
 * API Secret 로그인을 위한 입력 정보
 */
export type LoginViaApiSecretBody = {
	/**
	 * 발급받은 API secret
	 *
	 */
	apiSecret: string;
};

/**
 * API key 로그인 성공 응답
 *
 * API key 로그인 성공 응답
 */
export type LoginViaApiSecretResponse = {
	/**
	 * 인증에 사용하는 엑세스 토큰
	 *
	 * 하루의 유효기간을 가지고 있습니다.
	 */
	accessToken: string;
	/**
	 * 토큰 재발급 및 유효기간 연장을 위해 사용하는 리프레시 토큰
	 *
	 * 일주일의 유효기간을 가지고 있으며, 리프레시 토큰을 통해 유효기간이 연장된 새로운 엑세스 토큰을 발급받을 수 있습니다.
	 */
	refreshToken: string;
};

/**
 * LoginViaApiSecretError
 *
 */
export type LoginViaApiSecretError = InvalidRequestError | UnauthorizedError;

/**
 * 토큰 재발급을 위한 입력 정보
 *
 * 토큰 재발급을 위한 입력 정보
 */
export type RefreshTokenBody = {
	/**
	 * 리프레시 토큰
	 *
	 */
	refreshToken: string;
};

/**
 * 토큰 재발급 성공 응답
 *
 * 토큰 재발급 성공 응답
 */
export type RefreshTokenResponse = {
	/**
	 * 인증에 사용하는 엑세스 토큰
	 *
	 * 하루의 유효기간을 가지고 있습니다.
	 */
	accessToken: string;
	/**
	 * 토큰 재발급 및 유효기간 연장을 위해 사용하는 리프레시 토큰
	 *
	 * 일주일의 유효기간을 가지고 있으며, 리프레시 토큰을 통해 유효기간이 연장된 새로운 엑세스 토큰을 발급받을 수 있습니다.
	 */
	refreshToken: string;
};

/**
 * RefreshTokenError
 *
 */
export type RefreshTokenError = InvalidRequestError | UnauthorizedError;

/**
 * 고객사의 플랫폼 기능 관련 정보
 *
 * 고객사의 플랫폼 기능 관련 정보
 */
export type Platform = {
	/**
	 * 해당 플랫폼의 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너 정산금액의 소수점 처리 방식
	 *
	 */
	roundType: PlatformRoundType;
	/**
	 * 수수료 및 할인 분담 정책 관련 계산식
	 *
	 */
	settlementFormula: PlatformSettlementFormula;
	/**
	 * 정산 규칙
	 *
	 */
	settlementRule: PlatformSettlementRule;
};

/**
 * GetPlatformError
 *
 */
export type GetPlatformError =
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 플랫폼 업데이트를 위한 입력 정보
 *
 * 플랫폼 업데이트를 위한 입력 정보
 *
 * 값이 명시되지 않은 필드는 업데이트하지 않습니다.
 */
export type UpdatePlatformBody = {
	/**
	 * 파트너 정산금액의 소수점 처리 방식
	 *
	 */
	roundType?: PlatformRoundType;
	/**
	 * 수수료 및 할인 분담 정책 관련 계산식
	 *
	 */
	settlementFormula?: UpdatePlatformBodySettlementFormula;
	/**
	 * 정산 규칙
	 *
	 */
	settlementRule?: UpdatePlatformBodySettlementRule;
};

/**
 * 플랫폼 업데이트 결과 정보
 *
 * 플랫폼 업데이트 결과 정보
 */
export type UpdatePlatformResponse = {
	/**
	 * 업데이트된 플랫폼 정보
	 *
	 */
	platform: Platform;
};

/**
 * UpdatePlatformError
 *
 */
export type UpdatePlatformError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformInvalidSettlementFormulaError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 필터 옵션 조회 성공 응답 정보
 *
 * 할인 분담 정책 필터 옵션 조회 성공 응답 정보
 */
export type PlatformDiscountSharePolicyFilterOptions = {
	/**
	 * 조회된 파트너 분담율 리스트
	 *
	 */
	partnerShareRates: number[];
};

/**
 * GetPlatformDiscountSharePolicyFilterOptionsError
 *
 */
export type GetPlatformDiscountSharePolicyFilterOptionsError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 다건 조회를 위한 입력 정보
 *
 * 할인 분담 정책 다건 조회를 위한 입력 정보
 */
export type GetPlatformDiscountSharePoliciesBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 */
	page?: PageInput;
	/**
	 * 조회할 할인 분담 정책 조건 필터
	 *
	 */
	filter?: PlatformDiscountSharePolicyFilterInput;
};

/**
 * 할인 분담 정책 다건 조회 성공 응답 정보
 *
 * 할인 분담 정책 다건 조회 성공 응답 정보
 */
export type GetPlatformDiscountSharePoliciesResponse = {
	/**
	 * 조회된 할인 분담 정책 리스트
	 *
	 */
	items: PlatformDiscountSharePolicy[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetPlatformDiscountSharePoliciesError
 *
 */
export type GetPlatformDiscountSharePoliciesError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 생성을 위한 입력 정보
 *
 * 할인 분담 정책 생성을 위한 입력 정보
 */
export type CreatePlatformDiscountSharePolicyBody = {
	/**
	 * 할인 분담에 부여할 고유 아이디
	 *
	 * 명시하지 않는 경우 포트원이 임의의 아이디를 발급해드립니다.
	 */
	id?: string;
	/**
	 * 할인 분담에 부여할 이름
	 *
	 */
	name: string;
	/**
	 * 파트너가 분담할 할인금액의 비율을 의미하는 밀리 퍼센트 단위 (10^-5) 의 음이 아닌 정수이며, 파트너가 부담할 금액은 \`할인금액 \* partnerShareRate \* 10^5\` 로 책정합니다.
	 *
	 */
	partnerShareRate: number;
	/**
	 * 해당 할인 분담에 대한 메모 ex) 파트너 브랜드 쿠폰
	 *
	 */
	memo?: string;
};

/**
 * 할인 분담 정책 생성 성공 응답
 *
 * 할인 분담 정책 생성 성공 응답
 */
export type CreatePlatformDiscountSharePolicyResponse = {
	/**
	 * 생성된 할인 분담 정책
	 *
	 */
	discountSharePolicy: PlatformDiscountSharePolicy;
};

/**
 * CreatePlatformDiscountSharePolicyError
 *
 */
export type CreatePlatformDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyAlreadyExistsError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책
 *
 * 할인 분담 정책
 *
 * 할인 분담은 고객사의 주문건에 쿠폰 및 포인트와 같은 할인금액이 적용될 때, 파트너 정산 시 할인금액에 대한 분담 정책을 가지는 객체입니다. 할인 유형에 대한 아이디와 메모, 그리고 파트너 분담율을 가집니다.
 */
export type PlatformDiscountSharePolicy = {
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 할인 분담 정책 이름
	 *
	 */
	name: string;
	/**
	 * 할인 분담율
	 *
	 * 파트너가 분담할 할인금액의 비율을 의미하는 밀리 퍼센트 단위 (10^-5) 의 음이 아닌 정수이며, 파트너가 부담할 금액은 `할인금액 * partnerShareRate * 10^5` 로 책정합니다.
	 */
	partnerShareRate: number;
	/**
	 * 해당 할인 분담에 대한 메모
	 *
	 */
	memo?: string;
	/**
	 * 보관 여부
	 *
	 */
	isArchived: boolean;
	/**
	 * 변경 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * GetPlatformDiscountSharePolicyError
 *
 */
export type GetPlatformDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 업데이트를 위한 입력 정보
 *
 * 할인 분담 정책 업데이트를 위한 입력 정보
 *
 * 값이 명시되지 않은 필드는 업데이트하지 않습니다.
 */
export type UpdatePlatformDiscountSharePolicyBody = {
	/**
	 * 할인 분담 정책 이름
	 *
	 */
	name?: string;
	/**
	 * 할인 분담율
	 *
	 * 파트너가 분담할 할인금액의 비율을 의미하는 밀리 퍼센트 단위 (10^-5) 의 음이 아닌 정수이며, 파트너가 부담할 금액은 `할인금액 * partnerShareRate * 10^5` 로 책정합니다.
	 */
	partnerShareRate?: number;
	/**
	 * 해당 할인 분담에 대한 메모
	 *
	 */
	memo?: string;
};

/**
 * 할인 분담 정책 업데이트 성공 응답
 *
 * 할인 분담 정책 업데이트 성공 응답
 */
export type UpdatePlatformDiscountSharePolicyResponse = {
	/**
	 * 업데이트된 할인 분담 정책
	 *
	 */
	discountSharePolicy: PlatformDiscountSharePolicy;
};

/**
 * UpdatePlatformDiscountSharePolicyError
 *
 */
export type UpdatePlatformDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformArchivedDiscountSharePolicyError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * GetPlatformDiscountSharePolicyScheduleError
 *
 */
export type GetPlatformDiscountSharePolicyScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 예약 업데이트 재설정을 위한 입력 정보
 *
 * 할인 분담 정책 예약 업데이트 재설정을 위한 입력 정보
 */
export type ReschedulePlatformDiscountSharePolicyBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformDiscountSharePolicyBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 할인 분담 정책 예약 업데이트 재설정 성공 응답
 *
 * 할인 분담 정책 예약 업데이트 재설정 성공 응답
 */
export type ReschedulePlatformDiscountSharePolicyResponse = {
	/**
	 * 예약된 할인 분담 정보
	 *
	 */
	scheduledDiscountSharePolicy: PlatformDiscountSharePolicy;
};

/**
 * RescheduleDiscountSharePolicyError
 *
 */
export type RescheduleDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 업데이트 예약을 위한 입력 정보
 *
 * 할인 분담 정책 업데이트 예약을 위한 입력 정보
 */
export type SchedulePlatformDiscountSharePolicyBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformDiscountSharePolicyBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 할인 분담 정책 업데이트 예약 성공 응답
 *
 * 할인 분담 정책 업데이트 예약 성공 응답
 */
export type SchedulePlatformDiscountSharePolicyResponse = {
	/**
	 * 예약된 할인 분담 정보
	 *
	 */
	scheduledDiscountSharePolicy: PlatformDiscountSharePolicy;
};

/**
 * ScheduleDiscountSharePolicyError
 *
 */
export type ScheduleDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformDiscountSharePolicyScheduleAlreadyExistsError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 정책 예약 업데이트 취소 성공 응답
 *
 * 할인 분담 정책 예약 업데이트 취소 성공 응답
 */
export type CancelPlatformDiscountSharePolicyScheduleResponse = {};

/**
 * CancelPlatformDiscountSharePolicyScheduleError
 *
 */
export type CancelPlatformDiscountSharePolicyScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 보관 성공 응답
 *
 * 할인 분담 보관 성공 응답
 */
export type ArchivePlatformDiscountSharePolicyResponse = {
	/**
	 * 보관된 할인 분담
	 *
	 */
	discountSharePolicy: PlatformDiscountSharePolicy;
};

/**
 * ArchivePlatformDiscountSharePolicyError
 *
 */
export type ArchivePlatformDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformCannotArchiveScheduledDiscountSharePolicyError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 할인 분담 복원 성공 응답
 *
 * 할인 분담 복원 성공 응답
 */
export type RecoverPlatformDiscountSharePolicyResponse = {
	/**
	 * 복원된 할인 분담
	 *
	 */
	discountSharePolicy: PlatformDiscountSharePolicy;
};

/**
 * RecoverPlatformDiscountSharePolicyError
 *
 */
export type RecoverPlatformDiscountSharePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformDiscountSharePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 다건 조회를 위한 입력 정보
 *
 * 추가 수수료 정책 다건 조회를 위한 입력 정보
 */
export type GetPlatformAdditionalFeePoliciesBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 */
	page?: PageInput;
	/**
	 * 조회할 추가 수수료 정책 조건 필터
	 *
	 */
	filter?: PlatformAdditionalFeePolicyFilterInput;
};

/**
 * 추가 수수료 정책 다건 조회 성공 응답 정보
 *
 * 추가 수수료 정책 다건 조회 성공 응답 정보
 */
export type GetPlatformAdditionalFeePoliciesResponse = {
	/**
	 * 조회된 추가 수수료 정책 리스트
	 *
	 */
	items: PlatformAdditionalFeePolicy[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetPlatformAdditionalFeePoliciesError
 *
 */
export type GetPlatformAdditionalFeePoliciesError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 생성을 위한 입력 정보
 *
 * 추가 수수료 정책 생성을 위한 입력 정보
 */
export type CreatePlatformAdditionalFeePolicyBody = {
	/**
	 * 생성할 추가 수수료 정책 아이디
	 *
	 * 명시하지 않으면 id 가 임의로 생성됩니다.
	 */
	id?: string;
	/**
	 * 이름
	 *
	 */
	name: string;
	/**
	 * 수수료 정보
	 *
	 */
	fee: PlatformFeeInput;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 부가세 부담 주체
	 *
	 */
	vatPayer: PlatformPayer;
};

/**
 * 플랫폼 생성 성공 응답 정보
 *
 * 플랫폼 생성 성공 응답 정보
 */
export type CreatePlatformAdditionalFeePolicyResponse = {
	/**
	 * 생성된 추가 수수료 정책
	 *
	 */
	additionalFeePolicy: PlatformAdditionalFeePolicy;
};

/**
 * CreatePlatformAdditionalFeePolicyError
 *
 */
export type CreatePlatformAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyAlreadyExistsError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책
 *
 * 추가 수수료 정책
 *
 * 추가 수수료 정책는 고객사의 주문건에 대한 중개수수료에 별도로 추가로 부여되는 수수료입니다. 대표적인 사용 예시로 풀필먼트 수수료, 로켓배송 수수료, 마케팅 채널 수수료등이 있습니다.
 */
export type PlatformAdditionalFeePolicy = {
	/**
	 * 추가 수수료 정책 고유 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 추가 수수료 정책 이름
	 *
	 */
	name: string;
	/**
	 * 책정 수수료
	 *
	 */
	fee: PlatformFee;
	/**
	 * 해당 추가 수수료 정책에 대한 메모
	 *
	 */
	memo?: string;
	/**
	 * 부가세를 부담할 주체
	 *
	 */
	vatPayer: PlatformPayer;
	/**
	 * 보관 여부
	 *
	 */
	isArchived: boolean;
	/**
	 * 변경 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * GetPlatformAdditionalFeePolicyError
 *
 */
export type GetPlatformAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 업데이트를 위한 입력 정보
 *
 * 추가 수수료 정책 업데이트를 위한 입력 정보
 *
 * 값이 명시하지 않은 필드는 업데이트되지 않습니다.
 */
export type UpdatePlatformAdditionalFeePolicyBody = {
	/**
	 * 책정 수수료
	 *
	 */
	fee?: PlatformFeeInput;
	/**
	 * 추가 수수료 정책 이름
	 *
	 */
	name?: string;
	/**
	 * 해당 추가 수수료 정책에 대한 메모
	 *
	 */
	memo?: string;
	/**
	 * 부가세를 부담할 주체
	 *
	 */
	vatPayer?: PlatformPayer;
};

/**
 * 추가 수수료 정책 업데이트 성공 응답
 *
 * 추가 수수료 정책 업데이트 성공 응답
 */
export type UpdatePlatformAdditionalFeePolicyResponse = {
	/**
	 * 업데이트된 추가 수수료 정책
	 *
	 */
	additionalFeePolicy: PlatformAdditionalFeePolicy;
};

/**
 * UpdatePlatformAdditionalFeePolicyError
 *
 */
export type UpdatePlatformAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformArchivedAdditionalFeePolicyError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * GetPlatformAdditionalFeePolicyScheduleError
 *
 */
export type GetPlatformAdditionalFeePolicyScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 예약 업데이트 재설정을 위한 입력 정보
 *
 * 추가 수수료 정책 예약 업데이트 재설정을 위한 입력 정보
 */
export type ReschedulePlatformAdditionalFeePolicyBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformAdditionalFeePolicyBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 추가 수수료 정책 예약 업데이트 재설정 성공 응답
 *
 * 추가 수수료 정책 예약 업데이트 재설정 성공 응답
 */
export type ReschedulePlatformAdditionalFeePolicyResponse = {
	/**
	 * 예약된 추가 수수료 정책
	 *
	 */
	scheduledAdditionalFeePolicy: PlatformAdditionalFeePolicy;
};

/**
 * RescheduleAdditionalFeePolicyError
 *
 */
export type RescheduleAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 업데이트 예약을 위한 입력 정보
 *
 * 추가 수수료 정책 업데이트 예약을 위한 입력 정보
 */
export type SchedulePlatformAdditionalFeePolicyBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformAdditionalFeePolicyBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 추가 수수료 정책 업데이트 예약 성공 응답
 *
 * 추가 수수료 정책 업데이트 예약 성공 응답
 */
export type SchedulePlatformAdditionalFeePolicyResponse = {
	/**
	 * 예약된 추가 수수료 정책
	 *
	 */
	scheduledAdditionalFeePolicy: PlatformAdditionalFeePolicy;
};

/**
 * ScheduleAdditionalFeePolicyError
 *
 */
export type ScheduleAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformAdditionalFeePolicyScheduleAlreadyExistsError
	| PlatformArchivedAdditionalFeePolicyError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 예약 업데이트 취소 성공 응답
 *
 * 추가 수수료 정책 예약 업데이트 취소 성공 응답
 */
export type CancelPlatformAdditionalFeePolicyScheduleResponse = {};

/**
 * CancelPlatformAdditionalFeePolicyScheduleError
 *
 */
export type CancelPlatformAdditionalFeePolicyScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 보관 성공 응답
 *
 * 추가 수수료 정책 보관 성공 응답
 */
export type ArchivePlatformAdditionalFeePolicyResponse = {
	/**
	 * 보관된 추가 수수료 정책
	 *
	 */
	additionalFeePolicy: PlatformAdditionalFeePolicy;
};

/**
 * ArchivePlatformAdditionalFeePolicyError
 *
 */
export type ArchivePlatformAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformCannotArchiveScheduledAdditionalFeePolicyError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 추가 수수료 정책 복원 성공 응답
 *
 * 추가 수수료 정책 복원 성공 응답
 */
export type RecoverPlatformAdditionalFeePolicyResponse = {
	/**
	 * 복원된 추가 수수료 정책
	 *
	 */
	additionalFeePolicy: PlatformAdditionalFeePolicy;
};

/**
 * RecoverPlatformAdditionalFeePolicyError
 *
 */
export type RecoverPlatformAdditionalFeePolicyError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePolicyNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 파트너 필터 옵션 조회 성공 응답 정보
 *
 * 파트너 필터 옵션 조회 성공 응답 정보
 */
export type PlatformPartnerFilterOptions = {
	/**
	 * 조회된 태그 리스트
	 *
	 */
	tags: string[];
	/**
	 * 조회된 파트너 계약 요약 정보 리스트
	 *
	 */
	contractSummary: PlatformPartnerContractSummary[];
};

/**
 * GetPlatformPartnerFilterOptionsError
 *
 */
export type GetPlatformPartnerFilterOptionsError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 파트너 다건 조회를 위한 입력 정보
 *
 * 파트너 다건 조회를 위한 입력 정보
 */
export type GetPlatformPartnersBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 */
	page?: PageInput;
	/**
	 * 조회할 파트너 조건 필터
	 *
	 */
	filter?: PlatformPartnerFilterInput;
};

/**
 * 파트너 다건 조회 성공 응답 정보
 *
 * 파트너 다건 조회 성공 응답 정보
 */
export type GetPlatformPartnersResponse = {
	/**
	 * 조회된 파트너 리스트
	 *
	 */
	items: PlatformPartner[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetPlatformPartnersError
 *
 */
export type GetPlatformPartnersError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 파트너 생성을 위한 입력 정보
 *
 * 파트너 생성을 위한 입력 정보
 */
export type CreatePlatformPartnerBody = {
	/**
	 * 파트너에 부여할 고유 아이디
	 *
	 * 고객사 서버에 등록된 파트너 지칭 아이디와 동일하게 설정하는 것을 권장합니다. 명시하지 않는 경우 포트원이 임의의 아이디를 발급해드립니다.
	 */
	id?: string;
	/**
	 * 파트너 법인명 혹은 이름
	 *
	 */
	name: string;
	/**
	 * 파트너 담당자 연락 정보
	 *
	 */
	contact: CreatePlatformPartnerBodyContact;
	/**
	 * 정산 계좌
	 *
	 * 파트너의 사업자등록번호가 존재하는 경우 명시합니다. 별도로 검증하지는 않으며, 번호와 기호 모두 입력 가능합니다.
	 */
	account: CreatePlatformPartnerBodyAccount;
	/**
	 * 기본 계약 아이디
	 *
	 * 이미 존재하는 계약 아이디를 등록해야 합니다.
	 */
	defaultContractId: string;
	/**
	 * 파트너에 대한 메모
	 *
	 * 총 256자까지 입력할 수 있습니다.
	 */
	memo?: string;
	/**
	 * 파트너에 부여할 태그 리스트
	 *
	 * 최대 10개까지 입력할 수 있습니다.
	 */
	tags: string[];
	/**
	 * 파트너 유형별 추가 정보
	 *
	 * 사업자/원천징수 대상자 중 추가할 파트너의 유형에 따른 정보를 입력해야 합니다.
	 */
	type: CreatePlatformPartnerBodyType;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties?: PlatformProperties;
};

/**
 * 파트너 생성 성공 응답
 *
 * 파트너 생성 성공 응답
 */
export type CreatePlatformPartnerResponse = {
	/**
	 * 생성된 파트너
	 *
	 */
	partner: PlatformPartner;
};

/**
 * CreatePlatformPartnerError
 *
 */
export type CreatePlatformPartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAccountVerificationAlreadyUsedError
	| PlatformAccountVerificationFailedError
	| PlatformAccountVerificationNotFoundError
	| PlatformContractNotFoundError
	| PlatformCurrencyNotSupportedError
	| PlatformNotEnabledError
	| PlatformPartnerIdAlreadyExistsError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * 파트너
 *
 * 파트너
 *
 * 파트너는 고객사가 정산해주어야 할 대상입니다. 기본 사업자 정보와 정산정보, 그리고 적용될 계약의 정보를 등록 및 관리할 수 있습니다.
 */
export type PlatformPartner = {
	/**
	 * 파트너 고유 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너 법인명 혹은 이름
	 *
	 */
	name: string;
	/**
	 * 파트너 담당자 연락 정보
	 *
	 */
	contact: PlatformContact;
	/**
	 * 정산 계좌
	 *
	 */
	account: PlatformAccount;
	/**
	 * 파트너의 상태
	 *
	 */
	status: PlatformPartnerStatus;
	/**
	 * 파트너에 설정된 기본 계약 아이디
	 *
	 */
	defaultContractId: string;
	/**
	 * 파트너에 대한 메모
	 *
	 */
	memo?: string;
	/**
	 * 파트너의 태그 리스트
	 *
	 */
	tags: string[];
	/**
	 * 파트너 유형별 정보
	 *
	 */
	type: PlatformPartnerType;
	/**
	 * 보관 여부
	 *
	 */
	isArchived: boolean;
	/**
	 * 변경 적용 시점
	 *
	 */
	appliedAt: string;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformProperties;
};

/**
 * GetPlatformPartnerError
 *
 */
export type GetPlatformPartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| UnauthorizedError;

/**
 * 파트너 업데이트를 위한 입력 정보
 *
 * 파트너 업데이트를 위한 입력 정보
 *
 * 값이 명시되지 않은 필드는 업데이트되지 않습니다.
 */
export type UpdatePlatformPartnerBody = {
	/**
	 * 파트너 법인명 혹은 이름
	 *
	 */
	name?: string;
	/**
	 * 파트너 담당자 연락 정보
	 *
	 */
	contact?: UpdatePlatformPartnerBodyContact;
	/**
	 * 정산 계좌
	 *
	 */
	account?: UpdatePlatformPartnerBodyAccount;
	/**
	 * 파트너에 설정된 기본 계약 아이디
	 *
	 */
	defaultContractId?: string;
	/**
	 * 파트너에 대한 메모
	 *
	 */
	memo?: string;
	/**
	 * 파트너의 태그 리스트
	 *
	 */
	tags?: string[];
	/**
	 * 파트너 유형별 정보
	 *
	 */
	type?: UpdatePlatformPartnerBodyType;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties?: PlatformProperties;
};

/**
 * 파트너 업데이트 성공 응답
 *
 * 파트너 업데이트 성공 응답
 */
export type UpdatePlatformPartnerResponse = {
	/**
	 * 업데이트된 파트너
	 *
	 */
	partner: PlatformPartner;
};

/**
 * UpdatePlatformPartnerError
 *
 */
export type UpdatePlatformPartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAccountVerificationAlreadyUsedError
	| PlatformAccountVerificationFailedError
	| PlatformAccountVerificationNotFoundError
	| PlatformArchivedPartnerError
	| PlatformContractNotFoundError
	| PlatformInsufficientDataToChangePartnerTypeError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * 파트너 다건 생성을 위한 입력 정보
 *
 * 파트너 다건 생성을 위한 입력 정보
 */
export type CreatePlatformPartnersBody = {
	/**
	 * 생성할 파트너 리스트 정보
	 *
	 */
	partners: CreatePlatformPartnerBody[];
};

/**
 * 파트너 다건 생성 성공 응답
 *
 * 파트너 다건 생성 성공 응답
 */
export type CreatePlatformPartnersResponse = {
	/**
	 * 생성된 파트너 리스트
	 *
	 */
	partners: PlatformPartner[];
};

/**
 * CreatePlatformPartnersError
 *
 */
export type CreatePlatformPartnersError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractsNotFoundError
	| PlatformCurrencyNotSupportedError
	| PlatformNotEnabledError
	| PlatformPartnerIdsAlreadyExistError
	| PlatformPartnerIdsDuplicatedError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * GetPlatformPartnerScheduleError
 *
 */
export type GetPlatformPartnerScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| UnauthorizedError;

/**
 * 파트너 예약 업데이트 재설정을 위한 입력 정보
 *
 * 파트너 예약 업데이트 재설정을 위한 입력 정보
 */
export type ReschedulePlatformPartnerBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformPartnerBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 파트너 예약 업데이트 재설정 성공 응답
 *
 * 파트너 예약 업데이트 재설정 성공 응답
 */
export type ReschedulePlatformPartnerResponse = {
	/**
	 * 예약된 파트너 정보
	 *
	 */
	scheduledPartner: PlatformPartner;
};

/**
 * ReschedulePartnerError
 *
 */
export type ReschedulePartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| UnauthorizedError;

/**
 * 파트너 업데이트 예약을 위한 입력 정보
 *
 * 파트너 업데이트 예약을 위한 입력 정보
 */
export type SchedulePlatformPartnerBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformPartnerBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 파트너 업데이트 예약 성공 응답
 *
 * 파트너 업데이트 예약 성공 응답
 */
export type SchedulePlatformPartnerResponse = {
	/**
	 * 예약된 파트너 정보
	 *
	 */
	scheduledPartner: PlatformPartner;
};

/**
 * SchedulePartnerError
 *
 */
export type SchedulePartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAccountVerificationAlreadyUsedError
	| PlatformAccountVerificationFailedError
	| PlatformAccountVerificationNotFoundError
	| PlatformArchivedPartnerError
	| PlatformContractNotFoundError
	| PlatformInsufficientDataToChangePartnerTypeError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| PlatformPartnerScheduleAlreadyExistsError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * 파트너 예약 업데이트 취소 성공 응답
 *
 * 파트너 예약 업데이트 취소 성공 응답
 */
export type CancelPlatformPartnerScheduleResponse = {};

/**
 * CancelPlatformPartnerScheduleError
 *
 */
export type CancelPlatformPartnerScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| UnauthorizedError;

/**
 * SchedulePlatformPartnersBody
 *
 */
export type SchedulePlatformPartnersBody = {
	/**
	 *
	 */
	filter?: PlatformPartnerFilterInput;
	/**
	 *
	 */
	update: SchedulePlatformPartnersBodyUpdate;
	/**
	 *
	 */
	appliedAt: string;
};

/**
 * SchedulePlatformPartnersResponse
 *
 */
export type SchedulePlatformPartnersResponse = {};

/**
 * SchedulePlatformPartnersError
 *
 */
export type SchedulePlatformPartnersError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformArchivedPartnersCannotBeScheduledError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| PlatformPartnerSchedulesAlreadyExistError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * 파트너 보관 성공 응답
 *
 * 파트너 보관 성공 응답
 */
export type ArchivePlatformPartnerResponse = {
	/**
	 * 보관된 파트너
	 *
	 */
	partner: PlatformPartner;
};

/**
 * ArchivePlatformPartnerError
 *
 */
export type ArchivePlatformPartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformCannotArchiveScheduledPartnerError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| UnauthorizedError;

/**
 * 파트너 복원 성공 응답
 *
 * 파트너 복원 성공 응답
 */
export type RecoverPlatformPartnerResponse = {
	/**
	 * 복원된 파트너
	 *
	 */
	partner: PlatformPartner;
};

/**
 * RecoverPlatformPartnerError
 *
 */
export type RecoverPlatformPartnerError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| UnauthorizedError;

/**
 * 계약 다건 조회를 위한 입력 정보
 *
 * 계약 다건 조회를 위한 입력 정보
 */
export type GetPlatformContractsBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 */
	page?: PageInput;
	/**
	 * 조회할 계약 조건 필터
	 *
	 */
	filter?: PlatformContractFilterInput;
};

/**
 * 계약 다건 조회 성공 응답
 *
 * 계약 다건 조회 성공 응답
 */
export type GetPlatformContractsResponse = {
	/**
	 * 조회된 계약 리스트
	 *
	 */
	items: PlatformContract[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetPlatformContractsError
 *
 */
export type GetPlatformContractsError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 객체 생성을 위한 입력 정보
 *
 * 계약 객체 생성을 위한 입력 정보
 */
export type CreatePlatformContractBody = {
	/**
	 * 계약에 부여할 고유 아이디
	 *
	 * 명시하지 않는 경우 포트원이 임의의 아이디를 발급해드립니다.
	 */
	id?: string;
	/**
	 * 계약 이름
	 *
	 */
	name: string;
	/**
	 * 계약 내부 표기를 위한 메모
	 *
	 */
	memo?: string;
	/**
	 * 중개수수료
	 *
	 */
	platformFee: PlatformFeeInput;
	/**
	 * 정산 주기
	 *
	 */
	settlementCycle: PlatformSettlementCycleInput;
	/**
	 * 중개수수료에 대한 부가세 부담 주체
	 *
	 */
	platformFeeVatPayer: PlatformPayer;
	/**
	 * 정산 시 결제금액 부가세 감액 여부
	 *
	 */
	subtractPaymentVatAmount: boolean;
};

/**
 * 계약 객체 생성 성공 응답
 *
 * 계약 객체 생성 성공 응답
 */
export type CreatePlatformContractResponse = {
	/**
	 * 생성된 계약 객체
	 *
	 */
	contract: PlatformContract;
};

/**
 * CreatePlatformContractError
 *
 */
export type CreatePlatformContractError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractAlreadyExistsError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약
 *
 * 계약
 *
 * 계약은 플랫폼 고객사가 파트너에게 정산해줄 대금과 정산일을 계산하는 데 적용되는 정보입니다. 고객사의 플랫폼에서 재화 및 서비스를 판매하기 위한 중개수수료와 판매금에 대한 정산일로 구성되어 있습니다.
 */
export type PlatformContract = {
	/**
	 * 계약 고유 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 계약 이름
	 *
	 */
	name: string;
	/**
	 * 계약 내부 표기를 위한 메모
	 *
	 */
	memo?: string;
	/**
	 * 중개수수료
	 *
	 */
	platformFee: PlatformFee;
	/**
	 * 정산 주기
	 *
	 */
	settlementCycle: PlatformSettlementCycle;
	/**
	 * 중개수수료에 대한 부가세 부담 주체
	 *
	 */
	platformFeeVatPayer: PlatformPayer;
	/**
	 * 정산 시 결제금액 부가세 감액 여부
	 *
	 * false인 경우 정산금에서 결제 금액 부가세를 감액하지 않고, true인 경우 정산금에서 결제 금액 부가세를 감액합니다.
	 */
	subtractPaymentVatAmount: boolean;
	/**
	 * 보관 여부
	 *
	 */
	isArchived: boolean;
	/**
	 * 변경 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * GetPlatformContractError
 *
 */
export type GetPlatformContractError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 업데이트를 위한 입력 정보. 값이 명시되지 않은 필드는 업데이트되지 않습니다.
 *
 * 계약 업데이트를 위한 입력 정보. 값이 명시되지 않은 필드는 업데이트되지 않습니다.
 *
 * 값이 명시되지 않은 필드는 업데이트되지 않습니다.
 */
export type UpdatePlatformContractBody = {
	/**
	 * 계약 이름
	 *
	 */
	name?: string;
	/**
	 * 계약 내부 표기를 위한 메모
	 *
	 */
	memo?: string;
	/**
	 * 중개수수료
	 *
	 */
	platformFee?: PlatformFeeInput;
	/**
	 * 정산 주기
	 *
	 */
	settlementCycle?: PlatformSettlementCycleInput;
	/**
	 * 중개수수료에 대한 부가세 부담 주체
	 *
	 */
	platformFeeVatPayer?: PlatformPayer;
	/**
	 * 정산 시 결제금액 부가세 감액 여부
	 *
	 */
	subtractPaymentVatAmount?: boolean;
};

/**
 * 계약 객체 업데이트 성공 응답
 *
 * 계약 객체 업데이트 성공 응답
 */
export type UpdatePlatformContractResponse = {
	/**
	 * 업데이트된 계약 객체
	 *
	 */
	contract: PlatformContract;
};

/**
 * UpdatePlatformContractError
 *
 */
export type UpdatePlatformContractError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformArchivedContractError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * GetPlatformContractScheduleError
 *
 */
export type GetPlatformContractScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 예약 업데이트 재설정을 위한 입력 정보
 *
 * 계약 예약 업데이트 재설정을 위한 입력 정보
 */
export type ReschedulePlatformContractBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformContractBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 계약 예약 업데이트 재설정 성공 응답
 *
 * 계약 예약 업데이트 재설정 성공 응답
 */
export type ReschedulePlatformContractResponse = {
	/**
	 * 예약된 계약 정보
	 *
	 */
	scheduledContract: PlatformContract;
};

/**
 * RescheduleContractError
 *
 */
export type RescheduleContractError =
	| InvalidRequestError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 업데이트 예약을 위한 입력 정보
 *
 * 계약 업데이트 예약을 위한 입력 정보
 */
export type SchedulePlatformContractBody = {
	/**
	 * 반영할 업데이트 내용
	 *
	 */
	update: UpdatePlatformContractBody;
	/**
	 * 업데이트 적용 시점
	 *
	 */
	appliedAt: string;
};

/**
 * 계약 업데이트 예약 성공 응답
 *
 * 계약 업데이트 예약 성공 응답
 */
export type SchedulePlatformContractResponse = {
	/**
	 * 예약된 계약 정보
	 *
	 */
	scheduledContract: PlatformContract;
};

/**
 * ScheduleContractError
 *
 */
export type ScheduleContractError =
	| InvalidRequestError
	| PlatformArchivedContractError
	| PlatformContractNotFoundError
	| PlatformContractScheduleAlreadyExistsError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 예약 업데이트 취소 성공 응답
 *
 * 계약 예약 업데이트 취소 성공 응답
 */
export type CancelPlatformContractScheduleResponse = {};

/**
 * CancelPlatformContractScheduleError
 *
 */
export type CancelPlatformContractScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 보관 성공 응답
 *
 * 계약 보관 성공 응답
 */
export type ArchivePlatformContractResponse = {
	/**
	 * 보관된 계약
	 *
	 */
	contract: PlatformContract;
};

/**
 * ArchivePlatformContractError
 *
 */
export type ArchivePlatformContractError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformCannotArchiveScheduledContractError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 계약 복원 성공 응답
 *
 * 계약 복원 성공 응답
 */
export type RecoverPlatformContractResponse = {
	/**
	 * 복원된 계약
	 *
	 */
	contract: PlatformContract;
};

/**
 * RecoverPlatformContractError
 *
 */
export type RecoverPlatformContractError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformContractNotFoundError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 정산건
 *
 * 정산건
 *
 * 정산건은 파트너에 정산해줄 정산 금액과 정산 방식 등이 포함되어 있는 정산 정보입니다. 정산 방식은은 주문 정산, 주문 취소 정산, 수기 정산이 있습니다.
 */
export type PlatformTransfer =
	| PlatformManualTransfer
	| PlatformOrderTransfer
	| PlatformOrderCancelTransfer;

/**
 * GetPlatformTransferError
 *
 */
export type GetPlatformTransferError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| PlatformTransferNotFoundError
	| UnauthorizedError;

/**
 * DeletePlatformTransferResponse
 *
 */
export type DeletePlatformTransferResponse = {};

/**
 * DeletePlatformTransferError
 *
 */
export type DeletePlatformTransferError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformCancelOrderTransfersExistsError
	| PlatformNotEnabledError
	| PlatformTransferNonDeletableStatusError
	| PlatformTransferNotFoundError
	| UnauthorizedError;

/**
 * 정산건 요약 다건 조회를 위한 입력 정보
 *
 * 정산건 요약 다건 조회를 위한 입력 정보
 */
export type GetPlatformTransferSummariesBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 */
	page?: PageInput;
	/**
	 * 조회할 정산건 조건 필터
	 *
	 */
	filter?: PlatformTransferFilterInput;
};

/**
 * GetPlatformTransferSummariesResponse
 *
 */
export type GetPlatformTransferSummariesResponse = {
	/**
	 *
	 */
	transferSummaries: PlatformTransferSummary[];
	/**
	 *
	 */
	page: PageInfo;
};

/**
 * GetPlatformTransferSummariesError
 *
 */
export type GetPlatformTransferSummariesError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 주문 정산건 생성을 위한 입력 정보
 *
 * 주문 정산건 생성을 위한 입력 정보
 */
export type CreatePlatformOrderTransferBody = {
	/**
	 * 파트너 아이디
	 *
	 */
	partnerId: string;
	/**
	 * 계약 아이디
	 *
	 * 기본값은 파트너의 기본 계약 아이디 입니다.
	 */
	contractId?: string;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 결제 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 주문 정보
	 *
	 */
	orderDetail: CreatePlatformOrderTransferBodyOrderDetail;
	/**
	 * 주문 면세 금액
	 *
	 * 주문 항목과 면세 금액을 같이 전달하시면 최종 면세 금액은 주문 항목의 면세 금액이 아닌 전달해주신 면세 금액으로 적용됩니다.
	 */
	taxFreeAmount?: number;
	/**
	 * 정산 시작일
	 *
	 * 기본값은 결제 일시 입니다.
	 */
	settlementStartDate?: string;
	/**
	 * 할인 정보
	 *
	 */
	discounts: CreatePlatformOrderTransferBodyDiscount[];
	/**
	 * 추가 수수료 정보
	 *
	 */
	additionalFees: CreatePlatformOrderTransferBodyAdditionalFee[];
	/**
	 * 외부 결제 상세 정보
	 *
	 * 해당 정보가 존재하는 경우 외부 결제 정산건 으로 등록되고, 존재하지않은 경우 포트원 결제 정산건으로 등록됩니다.
	 */
	externalPaymentDetail?: CreatePlatformOrderTransferBodyExternalPaymentDetail;
	/**
	 * 테스트 모드 여부
	 *
	 * 기본값은 false 입니다.
	 */
	isForTest?: boolean;
	/**
	 * 정산 파라미터 (실험기능)
	 *
	 */
	parameters?: TransferParameters;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties?: PlatformUserDefinedPropertyKeyValue[];
};

/**
 * CreateOrderTransferResponse
 *
 */
export type CreateOrderTransferResponse = {
	/**
	 *
	 */
	transfer: PlatformOrderTransfer;
};

/**
 * CreatePlatformOrderTransferError
 *
 */
export type CreatePlatformOrderTransferError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformAdditionalFeePoliciesNotFoundError
	| PlatformAdditionalFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError
	| PlatformContractNotFoundError
	| PlatformContractPlatformFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError
	| PlatformCurrencyNotSupportedError
	| PlatformDiscountExceededOrderAmountError
	| PlatformDiscountSharePoliciesNotFoundError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| PlatformPaymentNotFoundError
	| PlatformProductIdDuplicatedError
	| PlatformSettlementPaymentAmountExceededPortOnePaymentError
	| PlatformSettlementSupplyWithVatAmountExceededPortOnePaymentError
	| PlatformSettlementTaxFreeAmountExceededPortOnePaymentError
	| PlatformTaxFreeAmountOverFlowError
	| PlatformTransferAlreadyExistsError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * 주문 취소 정산 등록을 위한 입력 정보
 *
 * 주문 취소 정산 등록을 위한 입력 정보
 *
 * 하나의 payment에 하나의 정산 건만 존재하는 경우에는 (partnerId, paymentId)로 취소 정산을 등록하실 수 있습니다. 하나의 payment에 여러 개의 정산 건이 존재하는 경우에는 transferId를 필수로 입력해야 합니다. transferId를 입력한 경우 (partnerId, paymentId)는 생략 가능합니다.
 */
export type CreatePlatformOrderCancelTransferBody = {
	/**
	 * 파트너 아이디
	 *
	 */
	partnerId?: string;
	/**
	 * 결제 아이디
	 *
	 */
	paymentId?: string;
	/**
	 * 정산건 아이디
	 *
	 */
	transferId?: string;
	/**
	 * 취소 내역 아이디
	 *
	 */
	cancellationId: string;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 주문 취소 정보
	 *
	 */
	orderDetail?: CreatePlatformOrderCancelTransferBodyOrderDetail;
	/**
	 * 주문 취소 면세 금액
	 *
	 * 주문 취소 항목과 취소 면세 금액을 같이 전달하시면 최종 취소 면세 금액은 주문 취소 항목의 면세 금액이 아닌 전달해주신 취소 면세 금액으로 적용됩니다.
	 */
	taxFreeAmount?: number;
	/**
	 * 할인 정보
	 *
	 */
	discounts: CreatePlatformOrderCancelTransferBodyDiscount[];
	/**
	 * 정산 시작일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementStartDate?: string;
	/**
	 * 외부 결제 상세 정보
	 *
	 * 해당 정보가 존재하는 경우 외부 결제 취소 정산건으로 등록되고, 존재하지않은 경우 포트원 결제 취소 정산건으로 등록됩니다.
	 */
	externalCancellationDetail?: CreatePlatformOrderCancelTransferBodyExternalCancellationDetail;
	/**
	 * 테스트 모드 여부
	 *
	 * 기본값은 false 입니다.
	 */
	isForTest?: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties?: PlatformUserDefinedPropertyKeyValue[];
};

/**
 * CreateOrderCancelTransferResponse
 *
 */
export type CreateOrderCancelTransferResponse = {
	/**
	 *
	 */
	transfer: PlatformOrderCancelTransfer;
};

/**
 * CreatePlatformOrderCancelTransferError
 *
 */
export type CreatePlatformOrderCancelTransferError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformCancellableAmountExceededError
	| PlatformCancellableDiscountAmountExceededError
	| PlatformCancellableProductQuantityExceededError
	| PlatformCancellationAndPaymentTypeMismatchedError
	| PlatformCancellationNotFoundError
	| PlatformCannotSpecifyTransferError
	| PlatformDiscountCancelExceededOrderCancelAmountError
	| PlatformDiscountSharePolicyIdDuplicatedError
	| PlatformNotEnabledError
	| PlatformOrderDetailMismatchedError
	| PlatformOrderTransferAlreadyCancelledError
	| PlatformPaymentNotFoundError
	| PlatformProductIdDuplicatedError
	| PlatformProductIdNotFoundError
	| PlatformSettlementCancelAmountExceededPortOneCancelError
	| PlatformTaxFreeAmountOverFlowError
	| PlatformTransferAlreadyExistsError
	| PlatformTransferDiscountSharePolicyNotFoundError
	| PlatformTransferNotFoundError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * 수기 정산건 생성을 위한 입력 정보
 *
 * 수기 정산건 생성을 위한 입력 정보
 */
export type CreatePlatformManualTransferBody = {
	/**
	 * 파트너 아이디
	 *
	 */
	partnerId: string;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 정산 금액
	 *
	 */
	settlementAmount: number;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 테스트 모드 여부
	 *
	 * 기본값은 false 입니다.
	 */
	isForTest?: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties?: PlatformUserDefinedPropertyKeyValue[];
};

/**
 * CreateManualTransferResponse
 *
 */
export type CreateManualTransferResponse = {
	/**
	 *
	 */
	transfer: PlatformManualTransfer;
};

/**
 * CreatePlatformManualTransferError
 *
 */
export type CreatePlatformManualTransferError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| PlatformPartnerNotFoundError
	| PlatformUserDefinedPropertyNotFoundError
	| UnauthorizedError;

/**
 * DownloadPlatformTransferSheetBody
 *
 */
export type DownloadPlatformTransferSheetBody = {
	/**
	 *
	 */
	filter?: PlatformTransferFilterInput;
	/**
	 * 다운로드 할 시트 컬럼
	 *
	 */
	fields?: PlatformTransferSheetField[];
	/**
	 *
	 */
	transferUserDefinedPropertyKeys?: string[];
	/**
	 *
	 */
	partnerUserDefinedPropertyKeys?: string[];
};

/**
 * DownloadPlatformTransferSheetError
 *
 */
export type DownloadPlatformTransferSheetError =
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 정산내역 다건 조회를 위한 입력 정보
 *
 * 정산내역 다건 조회를 위한 입력 정보
 */
export type GetPlatformPartnerSettlementsBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 */
	page?: PageInput;
	/**
	 * 조회할 정산내역 조건 필터
	 *
	 */
	filter: PlatformPartnerSettlementFilterInput;
	/**
	 *
	 */
	isForTest: boolean;
};

/**
 * 정산내역 다건 조회 성공 응답 정보
 *
 * 정산내역 다건 조회 성공 응답 정보
 */
export type GetPlatformPartnerSettlementsResponse = {
	/**
	 * 조회된 정산내역 리스트
	 *
	 */
	items: PlatformPartnerSettlement[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
	/**
	 * 정산내역 상태 별 갯수
	 *
	 */
	counts: PlatformPartnerSettlementStatusStats;
};

/**
 * GetPlatformPartnerSettlementsError
 *
 */
export type GetPlatformPartnerSettlementsError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * GetPlatformPayoutsBody
 *
 */
export type GetPlatformPayoutsBody = {
	/**
	 *
	 */
	isForTest?: boolean;
	/**
	 *
	 */
	page?: PageInput;
	/**
	 *
	 */
	filter?: PlatformPayoutFilterInput;
};

/**
 * GetPlatformPayoutsResponse
 *
 */
export type GetPlatformPayoutsResponse = {
	/**
	 *
	 */
	items: PlatformPayout[];
	/**
	 *
	 */
	page: PageInfo;
	/**
	 *
	 */
	counts: PlatformPayoutStatusStats;
};

/**
 * GetPlatformPayoutsError
 *
 */
export type GetPlatformPayoutsError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * GetPlatformBulkPayoutsBody
 *
 */
export type GetPlatformBulkPayoutsBody = {
	/**
	 *
	 */
	isForTest?: boolean;
	/**
	 *
	 */
	page?: PageInput;
	/**
	 *
	 */
	filter?: PlatformBulkPayoutFilterInput;
};

/**
 * GetPlatformBulkPayoutsResponse
 *
 */
export type GetPlatformBulkPayoutsResponse = {
	/**
	 *
	 */
	items: PlatformBulkPayout[];
	/**
	 *
	 */
	page: PageInfo;
	/**
	 *
	 */
	counts: PlatformBulkPayoutStatusStats;
};

/**
 * GetPlatformBulkPayoutsError
 *
 */
export type GetPlatformBulkPayoutsError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformNotEnabledError
	| UnauthorizedError;

/**
 * 은행
 *
 * 은행
 */
export type Bank =
	| "BANK_OF_KOREA"
	| "KDB"
	| "IBK"
	| "KOOKMIN"
	| "SUHYUP"
	| "KEXIM"
	| "NONGHYUP"
	| "LOCAL_NONGHYUP"
	| "WOORI"
	| "STANDARD_CHARTERED"
	| "CITI"
	| "DAEGU"
	| "BUSAN"
	| "KWANGJU"
	| "JEJU"
	| "JEONBUK"
	| "KYONGNAM"
	| "KFCC"
	| "SHINHYUP"
	| "SAVINGS_BANK"
	| "MORGAN_STANLEY"
	| "HSBC"
	| "DEUTSCHE"
	| "JPMC"
	| "MIZUHO"
	| "MUFG"
	| "BANK_OF_AMERICA"
	| "BNP_PARIBAS"
	| "ICBC"
	| "BANK_OF_CHINA"
	| "NFCF"
	| "UOB"
	| "BOCOM"
	| "CCB"
	| "POST"
	| "KODIT"
	| "KIBO"
	| "HANA"
	| "SHINHAN"
	| "K_BANK"
	| "KAKAO"
	| "TOSS"
	| "MISC_FOREIGN"
	| "SGI"
	| "KCIS"
	| "YUANTA_SECURITIES"
	| "KB_SECURITIES"
	| "SANGSANGIN_SECURITIES"
	| "HANYANG_SECURITIES"
	| "LEADING_SECURITIES"
	| "BNK_SECURITIES"
	| "IBK_SECURITIES"
	| "DAOL_SECURITIES"
	| "MIRAE_ASSET_SECURITIES"
	| "SAMSUNG_SECURITIES"
	| "KOREA_SECURITIES"
	| "NH_SECURITIES"
	| "KYOBO_SECURITIES"
	| "HI_SECURITIES"
	| "HYUNDAI_MOTOR_SECURITIES"
	| "KIWOOM_SECURITIES"
	| "EBEST_SECURITIES"
	| "SK_SECURITIES"
	| "DAISHIN_SECURITIES"
	| "HANHWA_SECURITIES"
	| "HANA_SECURITIES"
	| "TOSS_SECURITIES"
	| "SHINHAN_SECURITIES"
	| "DB_SECURITIES"
	| "EUGENE_SECURITIES"
	| "MERITZ_SECURITIES"
	| "KAKAO_PAY_SECURITIES"
	| "BOOKOOK_SECURITIES"
	| "SHINYOUNG_SECURITIES"
	| "CAPE_SECURITIES"
	| "KOREA_SECURITIES_FINANCE"
	| "KOREA_FOSS_SECURITIES"
	| "WOORI_INVESTMENT_BANK";

/**
 * 예금주 조회 성공 응답 정보
 *
 * 예금주 조회 성공 응답 정보
 */
export type PlatformAccountHolder = {
	/**
	 * 계좌 예금주 이름
	 *
	 */
	holderName: string;
	/**
	 * 계좌 검증 아이디
	 *
	 */
	accountVerificationId: string;
};

/**
 * GetPlatformAccountHolderError
 *
 */
export type GetPlatformAccountHolderError =
	| ForbiddenError
	| InvalidRequestError
	| PlatformExternalApiFailedError
	| PlatformExternalApiTemporarilyFailedError
	| PlatformNotEnabledError
	| PlatformNotSupportedBankError
	| UnauthorizedError;

/**
 * 본인인증 내역
 *
 * 본인인증 내역
 */
export type IdentityVerification =
	| FailedIdentityVerification
	| ReadyIdentityVerification
	| VerifiedIdentityVerification;

/**
 * GetIdentityVerificationError
 *
 */
export type GetIdentityVerificationError =
	| ForbiddenError
	| IdentityVerificationNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 본인인증 요청을 위한 입력 정보
 *
 * 본인인증 요청을 위한 입력 정보
 */
export type SendIdentityVerificationBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 채널 키
	 *
	 */
	channelKey: string;
	/**
	 * 고객 정보
	 *
	 */
	customer: SendIdentityVerificationBodyCustomer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * PG사별 추가 파라미터 ("PG사별 연동 가이드" 참고)
	 *
	 */
	bypass?: {};
	/**
	 * 통신사
	 *
	 */
	operator: IdentityVerificationOperator;
	/**
	 * 본인인증 방식
	 *
	 */
	method: IdentityVerificationMethod;
};

/**
 * 본인인증 요청 전송 성공 응답
 *
 * 본인인증 요청 전송 성공 응답
 */
export type SendIdentityVerificationResponse = {};

/**
 * SendIdentityVerificationError
 *
 */
export type SendIdentityVerificationError =
	| ChannelNotFoundError
	| ForbiddenError
	| IdentityVerificationAlreadySentError
	| IdentityVerificationAlreadyVerifiedError
	| IdentityVerificationNotFoundError
	| InvalidRequestError
	| PgProviderError
	| UnauthorizedError;

/**
 * 본인인증 확인을 위한 입력 정보
 *
 * 본인인증 확인을 위한 입력 정보
 */
export type ConfirmIdentityVerificationBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * OTP (One-Time Password)
	 *
	 * SMS 방식에서만 사용됩니다.
	 */
	otp?: string;
};

/**
 * 본인인증 확인 성공 응답
 *
 * 본인인증 확인 성공 응답
 */
export type ConfirmIdentityVerificationResponse = {
	/**
	 * 완료된 본인인증 내역
	 *
	 */
	identityVerification: VerifiedIdentityVerification;
};

/**
 * ConfirmIdentityVerificationError
 *
 */
export type ConfirmIdentityVerificationError =
	| ForbiddenError
	| IdentityVerificationAlreadyVerifiedError
	| IdentityVerificationNotFoundError
	| IdentityVerificationNotSentError
	| InvalidRequestError
	| PgProviderError
	| UnauthorizedError;

/**
 * 본인인증 요청 재전송 성공 응답
 *
 * 본인인증 요청 재전송 성공 응답
 */
export type ResendIdentityVerificationResponse = {};

/**
 * ResendIdentityVerificationError
 *
 */
export type ResendIdentityVerificationError =
	| ForbiddenError
	| IdentityVerificationAlreadyVerifiedError
	| IdentityVerificationNotFoundError
	| IdentityVerificationNotSentError
	| InvalidRequestError
	| PgProviderError
	| UnauthorizedError;

/**
 * 결제 정보 사전 등록 입력 정보
 *
 * 결제 정보 사전 등록 입력 정보
 */
export type PreRegisterPaymentBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount?: number;
	/**
	 * 결제 면세 금액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 통화 단위
	 *
	 */
	currency?: Currency;
};

/**
 * 결제 사전 등록 성공 응답
 *
 * 결제 사전 등록 성공 응답
 */
export type PreRegisterPaymentResponse = {};

/**
 * PreRegisterPaymentError
 *
 */
export type PreRegisterPaymentError =
	| AlreadyPaidError
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 빌링키 정보
 *
 * 빌링키 정보
 */
export type BillingKeyInfo = DeletedBillingKeyInfo | IssuedBillingKeyInfo;

/**
 * GetBillingKeyInfoError
 *
 */
export type GetBillingKeyInfoError =
	| BillingKeyNotFoundError
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 빌링키 삭제 성공 응답
 *
 * 빌링키 삭제 성공 응답
 */
export type DeleteBillingKeyResponse = {
	/**
	 * 빌링키 삭제 완료 시점
	 *
	 */
	deletedAt: string;
};

/**
 * DeleteBillingKeyError
 *
 */
export type DeleteBillingKeyError =
	| BillingKeyAlreadyDeletedError
	| BillingKeyNotFoundError
	| BillingKeyNotIssuedError
	| ChannelSpecificError
	| ForbiddenError
	| InvalidRequestError
	| PaymentScheduleAlreadyExistsError
	| PgProviderError
	| UnauthorizedError;

/**
 * GetBillingKeyInfosBody
 *
 * 빌링키 다건 조회를 위한 입력 정보
 */
export type GetBillingKeyInfosBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 * 미 입력 시 number: 0, size: 10 으로 기본값이 적용됩니다.
	 */
	page?: PageInput;
	/**
	 * 정렬 조건
	 *
	 * 미 입력 시 sortBy: TIME\_TO\_PAY, sortOrder: DESC 으로 기본값이 적용됩니다.
	 */
	sort?: BillingKeySortInput;
	/**
	 * 조회할 빌링키 조건 필터
	 *
	 * V1 빌링키 건의 경우 일부 필드에 대해 필터가 적용되지 않을 수 있습니다.
	 */
	filter?: BillingKeyFilterInput;
};

/**
 * 빌링키 다건 조회 성공 응답 정보
 *
 * 빌링키 다건 조회 성공 응답 정보
 */
export type GetBillingKeyInfosResponse = {
	/**
	 * 조회된 빌링키 리스트
	 *
	 */
	items: BillingKeyInfo[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetBillingKeyInfosError
 *
 */
export type GetBillingKeyInfosError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 빌링키 발급 요청 양식
 *
 * 빌링키 발급 요청 양식
 */
export type IssueBillingKeyBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 빌링키 결제 수단 정보
	 *
	 */
	method: InstantBillingKeyPaymentMethodInput;
	/**
	 * 채널 키
	 *
	 * 채널 키 또는 채널 그룹 ID 필수
	 */
	channelKey?: string;
	/**
	 * 채널 그룹 ID
	 *
	 * 채널 키 또는 채널 그룹 ID 필수
	 */
	channelGroupId?: string;
	/**
	 * 고객 정보
	 *
	 */
	customer?: CustomerInput;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * PG사별 추가 파라미터 ("PG사별 연동 가이드" 참고)
	 *
	 */
	bypass?: {};
	/**
	 * 웹훅 주소
	 *
	 * 빌링키 발급 시 요청을 받을 웹훅 주소입니다. 상점에 설정되어 있는 값보다 우선적으로 적용됩니다. 입력된 값이 없을 경우에는 빈 배열로 해석됩니다.
	 */
	noticeUrls?: string[];
};

/**
 * 빌링키 발급 성공 응답
 *
 * 빌링키 발급 성공 응답
 */
export type IssueBillingKeyResponse = {
	/**
	 * 빌링키 정보
	 *
	 */
	billingKeyInfo: BillingKeyInfoSummary;
	/**
	 * 발급에 실패한 채널이 있을시 실패 정보
	 *
	 */
	channelSpecificFailures?: ChannelSpecificFailure[];
};

/**
 * IssueBillingKeyError
 *
 */
export type IssueBillingKeyError =
	| ChannelNotFoundError
	| ChannelSpecificError
	| ForbiddenError
	| InvalidRequestError
	| PgProviderError
	| UnauthorizedError;

/**
 * 현금영수증 내역
 *
 * 현금영수증 내역
 */
export type CashReceipt =
	| CancelledCashReceipt
	| IssuedCashReceipt
	| IssueFailedCashReceipt;

/**
 * GetCashReceiptError
 *
 */
export type GetCashReceiptError =
	| CashReceiptNotFoundError
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 결제 건
 *
 * 결제 건
 */
export type Payment =
	| CancelledPayment
	| FailedPayment
	| PaidPayment
	| PartialCancelledPayment
	| PayPendingPayment
	| ReadyPayment
	| VirtualAccountIssuedPayment;

/**
 * GetPaymentError
 *
 */
export type GetPaymentError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| UnauthorizedError;

/**
 * GetPaymentsBody
 *
 * 결제 건 다건 조회를 위한 입력 정보
 */
export type GetPaymentsBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 * 미 입력 시 number: 0, size: 10 으로 기본값이 적용됩니다.
	 */
	page?: PageInput;
	/**
	 * 조회할 결제 건 조건 필터
	 *
	 * V1 결제 건의 경우 일부 필드에 대해 필터가 적용되지 않을 수 있습니다.
	 */
	filter?: PaymentFilterInput;
};

/**
 * 결제 건 다건 조회 성공 응답 정보
 *
 * 결제 건 다건 조회 성공 응답 정보
 */
export type GetPaymentsResponse = {
	/**
	 * 조회된 결제 건 리스트
	 *
	 */
	items: Payment[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetPaymentsError
 *
 */
export type GetPaymentsError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * GetAllPaymentsByCursorBody
 *
 * 결제 건 커서 기반 대용량 다건 조회를 위한 입력 정보
 */
export type GetAllPaymentsByCursorBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 결제 건 생성시점 범위 조건의 시작
	 *
	 * 값을 입력하지 않으면 end의 90일 전으로 설정됩니다.
	 */
	from?: string;
	/**
	 * 결제 건 생성시점 범위 조건의 끝
	 *
	 * 값을 입력하지 않으면 현재 시점으로 설정됩니다.
	 */
	until?: string;
	/**
	 * 커서
	 *
	 * 결제 건 리스트 중 어디서부터 읽어야 할지 가리키는 값입니다. 최초 요청일 경우 값을 입력하지 마시되, 두번째 요청 부터는 이전 요청 응답값의 cursor를 입력해주시면 됩니다.
	 */
	cursor?: string;
	/**
	 * 페이지 크기
	 *
	 * 미입력 시 기본값은 10 이며 최대 1000까지 허용
	 */
	size?: number;
};

/**
 * 결제 건 커서 기반 대용량 다건 조회 성공 응답 정보
 *
 * 결제 건 커서 기반 대용량 다건 조회 성공 응답 정보
 */
export type GetAllPaymentsByCursorResponse = {
	/**
	 * 조회된 결제 건 및 커서 정보 리스트
	 *
	 */
	items: PaymentWithCursor[];
};

/**
 * GetAllPaymentsError
 *
 */
export type GetAllPaymentsError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 결제 예약 건
 *
 * 결제 예약 건
 */
export type PaymentSchedule =
	| FailedPaymentSchedule
	| PendingPaymentSchedule
	| RevokedPaymentSchedule
	| ScheduledPaymentSchedule
	| StartedPaymentSchedule
	| SucceededPaymentSchedule;

/**
 * GetPaymentScheduleError
 *
 */
export type GetPaymentScheduleError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentScheduleNotFoundError
	| UnauthorizedError;

/**
 * 결제 예약 다건 조회를 위한 입력 정보
 *
 * 결제 예약 다건 조회를 위한 입력 정보
 *
 * 조회 결과는 결제 예정 시점(timeToPay) 기준 최신 순으로 정렬됩니다.
 */
export type GetPaymentSchedulesBody = {
	/**
	 * 요청할 페이지 정보
	 *
	 * 미 입력 시 number: 0, size: 10 으로 기본값이 적용됩니다.
	 */
	page?: PageInput;
	/**
	 * 정렬 조건
	 *
	 * 미 입력 시 sortBy: TIME\_TO\_PAY, sortOrder: DESC 으로 기본값이 적용됩니다.
	 */
	sort?: PaymentScheduleSortInput;
	/**
	 * 조회할 결제 예약 건의 조건 필터
	 *
	 */
	filter?: PaymentScheduleFilterInput;
};

/**
 * 결제 예약 다건 조회 성공 응답 정보
 *
 * 결제 예약 다건 조회 성공 응답 정보
 */
export type GetPaymentSchedulesResponse = {
	/**
	 * 조회된 결제 예약 건 리스트
	 *
	 */
	items: PaymentSchedule[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetPaymentSchedulesError
 *
 */
export type GetPaymentSchedulesError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 결제 예약 건 취소 요청 입력 정보
 *
 * 결제 예약 건 취소 요청 입력 정보
 *
 * billingKey, scheduleIds 중 하나 이상은 필수로 입력합니다. billingKey 만 입력된 경우 -> 해당 빌링키로 예약된 모든 결제 예약 건들이 취소됩니다. scheduleIds 만 입력된 경우 -> 입력된 결제 예약 건 아이디에 해당하는 예약 건들이 취소됩니다. billingKey, scheduleIds 모두 입력된 경우 -> 입력된 결제 예약 건 아이디에 해당하는 예약 건들이 취소됩니다. 그리고 예약한 빌링키가 입력된 빌링키와 일치하는지 검증합니다. 위 정책에 따라 선택된 결제 예약 건들 중 하나라도 취소에 실패할 경우, 모든 취소 요청이 실패합니다.
 */
export type RevokePaymentSchedulesBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey?: string;
	/**
	 * 결제 예약 건 아이디 목록
	 *
	 */
	scheduleIds?: string[];
};

/**
 * 결제 예약 건 취소 성공 응답
 *
 * 결제 예약 건 취소 성공 응답
 */
export type RevokePaymentSchedulesResponse = {
	/**
	 * 취소 완료된 결제 예약 건 아이디 목록
	 *
	 */
	revokedScheduleIds: string[];
	/**
	 * 결제 예약 건 취소 완료 시점
	 *
	 */
	revokedAt?: string;
};

/**
 * RevokePaymentSchedulesError
 *
 */
export type RevokePaymentSchedulesError =
	| BillingKeyAlreadyDeletedError
	| BillingKeyNotFoundError
	| ForbiddenError
	| InvalidRequestError
	| PaymentScheduleAlreadyProcessedError
	| PaymentScheduleAlreadyRevokedError
	| PaymentScheduleNotFoundError
	| UnauthorizedError;

/**
 * 결제 예약 요청 입력 정보
 *
 * 결제 예약 요청 입력 정보
 */
export type CreatePaymentScheduleBody = {
	/**
	 * 빌링키 결제 입력 정보
	 *
	 */
	payment: BillingKeyPaymentInput;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
};

/**
 * 결제 예약 성공 응답
 *
 * 결제 예약 성공 응답
 */
export type CreatePaymentScheduleResponse = {
	/**
	 * 결제 예약 건
	 *
	 */
	schedule: PaymentScheduleSummary;
};

/**
 * CreatePaymentScheduleError
 *
 */
export type CreatePaymentScheduleError =
	| AlreadyPaidOrWaitingError
	| BillingKeyAlreadyDeletedError
	| BillingKeyNotFoundError
	| ForbiddenError
	| InvalidRequestError
	| PaymentScheduleAlreadyExistsError
	| SumOfPartsExceedsTotalAmountError
	| UnauthorizedError;

/**
 * 결제 취소 요청 입력 정보
 *
 * 결제 취소 요청 입력 정보
 */
export type CancelPaymentBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 취소 총 금액
	 *
	 * 값을 입력하지 않으면 전액 취소됩니다.
	 */
	amount?: number;
	/**
	 * 취소 금액 중 면세 금액
	 *
	 * 값을 입력하지 않으면 전액 과세 취소됩니다.
	 */
	taxFreeAmount?: number;
	/**
	 * 취소 금액 중 부가세액
	 *
	 * 값을 입력하지 않으면 자동 계산됩니다.
	 */
	vatAmount?: number;
	/**
	 * 취소 사유
	 *
	 */
	reason: string;
	/**
	 * 취소 요청자
	 *
	 * 고객에 의한 취소일 경우 Customer, 관리자에 의한 취소일 경우 Admin으로 입력합니다.
	 */
	requester?: CancelRequester;
	/**
	 * 결제 건의 취소 가능 잔액
	 *
	 * 본 취소 요청 이전의 취소 가능 잔액으로써, 값을 입력하면 잔액이 일치하는 경우에만 취소가 진행됩니다. 값을 입력하지 않으면 별도의 검증 처리를 수행하지 않습니다.
	 */
	currentCancellableAmount?: number;
	/**
	 * 환불 계좌
	 *
	 * 계좌 환불일 경우 입력합니다. 계좌 환불이 필요한 경우는 가상계좌 환불, 휴대폰 익월 환불 등이 있습니다.
	 */
	refundAccount?: CancelPaymentBodyRefundAccount;
};

/**
 * 결제 취소 성공 응답
 *
 * 결제 취소 성공 응답
 */
export type CancelPaymentResponse = {
	/**
	 * 결체 취소 내역
	 *
	 */
	cancellation: PaymentCancellation;
};

/**
 * CancelPaymentError
 *
 */
export type CancelPaymentError =
	| CancellableAmountConsistencyBrokenError
	| CancelAmountExceedsCancellableAmountError
	| CancelTaxAmountExceedsCancellableTaxAmountError
	| CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError
	| ForbiddenError
	| InvalidRequestError
	| PaymentAlreadyCancelledError
	| PaymentNotFoundError
	| PaymentNotPaidError
	| PgProviderError
	| RemainedAmountLessThanPromotionMinPaymentAmountError
	| SumOfPartsExceedsCancelAmountError
	| UnauthorizedError;

/**
 * 빌링키 결제 요청 입력 정보
 *
 * 빌링키 결제 요청 입력 정보
 */
export type BillingKeyPaymentInput = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 빌링키 결제에 사용할 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 채널 키
	 *
	 * 다수 채널에 대해 발급된 빌링키에 대해, 결제 채널을 특정하고 싶을 때 명시
	 */
	channelKey?: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 고객 정보
	 *
	 */
	customer?: CustomerInput;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 결제 금액 세부 입력 정보
	 *
	 */
	amount: PaymentAmountInput;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 무이자 할부 이자를 고객사가 부담할지 여부
	 *
	 */
	useFreeInterestFromMerchant?: boolean;
	/**
	 * 카드 포인트 사용 여부
	 *
	 */
	useCardPoint?: boolean;
	/**
	 * 현금영수증 정보
	 *
	 */
	cashReceipt?: CashReceiptInput;
	/**
	 * 결제 국가
	 *
	 */
	country?: Country;
	/**
	 * 웹훅 주소
	 *
	 * 결제 승인/실패 시 요청을 받을 웹훅 주소입니다. 상점에 설정되어 있는 값보다 우선적으로 적용됩니다. 입력된 값이 없을 경우에는 빈 배열로 해석됩니다.
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 * 입력된 값이 없을 경우에는 빈 배열로 해석됩니다.
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 개수
	 *
	 */
	productCount?: number;
	/**
	 * 상품 유형
	 *
	 */
	productType?: PaymentProductType;
	/**
	 * 배송지 주소
	 *
	 */
	shippingAddress?: SeparatedAddressInput;
	/**
	 * 해당 결제에 적용할 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * PG사별 추가 파라미터 ("PG사별 연동 가이드" 참고)
	 *
	 */
	bypass?: {};
};

/**
 * 빌링키 결제 성공 응답
 *
 * 빌링키 결제 성공 응답
 */
export type PayWithBillingKeyResponse = {
	/**
	 * 결제 건 요약 정보
	 *
	 */
	payment: BillingKeyPaymentSummary;
};

/**
 * PayWithBillingKeyError
 *
 */
export type PayWithBillingKeyError =
	| AlreadyPaidError
	| BillingKeyAlreadyDeletedError
	| BillingKeyNotFoundError
	| ChannelNotFoundError
	| DiscountAmountExceedsTotalAmountError
	| ForbiddenError
	| InvalidRequestError
	| PgProviderError
	| PromotionPayMethodDoesNotMatchError
	| SumOfPartsExceedsTotalAmountError
	| UnauthorizedError;

/**
 * 수기 결제 요청 정보
 *
 * 수기 결제 요청 정보
 */
export type InstantPaymentInput = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 채널 키
	 *
	 * 채널 키 또는 채널 그룹 ID 필수
	 */
	channelKey?: string;
	/**
	 * 채널 그룹 ID
	 *
	 * 채널 키 또는 채널 그룹 ID 필수
	 */
	channelGroupId?: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method: InstantPaymentMethodInput;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 * 기본값은 false 입니다.
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 * 기본값은 false 입니다.
	 */
	isEscrow?: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer?: CustomerInput;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 결제 금액 세부 입력 정보
	 *
	 */
	amount: PaymentAmountInput;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 결제 국가
	 *
	 */
	country?: Country;
	/**
	 * 웹훅 주소
	 *
	 * 결제 승인/실패 시 요청을 받을 웹훅 주소입니다. 상점에 설정되어 있는 값보다 우선적으로 적용됩니다. 입력된 값이 없을 경우에는 빈 배열로 해석됩니다.
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 * 입력된 값이 없을 경우에는 빈 배열로 해석됩니다.
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 개수
	 *
	 */
	productCount?: number;
	/**
	 * 상품 유형
	 *
	 */
	productType?: PaymentProductType;
	/**
	 * 배송지 주소
	 *
	 */
	shippingAddress?: SeparatedAddressInput;
	/**
	 * 해당 결제에 적용할 프로모션 아이디
	 *
	 */
	promotionId?: string;
};

/**
 * 수기 결제 성공 응답
 *
 * 수기 결제 성공 응답
 */
export type PayInstantlyResponse = {
	/**
	 * 결제 건 요약 정보
	 *
	 */
	payment: InstantPaymentSummary;
};

/**
 * PayInstantlyError
 *
 */
export type PayInstantlyError =
	| AlreadyPaidError
	| ChannelNotFoundError
	| DiscountAmountExceedsTotalAmountError
	| ForbiddenError
	| InvalidRequestError
	| PgProviderError
	| PromotionPayMethodDoesNotMatchError
	| SumOfPartsExceedsTotalAmountError
	| UnauthorizedError;

/**
 * 현금영수증 발급 요청 양식
 *
 * 현금영수증 발급 요청 양식
 */
export type IssueCashReceiptBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 결제 건 아이디
	 *
	 * 외부 결제 건에 대한 수동 발급의 경우, 아이디를 직접 채번하여 입력합니다.
	 */
	paymentId: string;
	/**
	 * 채널 키
	 *
	 */
	channelKey: string;
	/**
	 * 현금 영수증 유형
	 *
	 */
	type: CashReceiptType;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 화폐
	 *
	 */
	currency: Currency;
	/**
	 * 금액 세부 입력 정보
	 *
	 */
	amount: PaymentAmountInput;
	/**
	 * 상품 유형
	 *
	 */
	productType?: PaymentProductType;
	/**
	 * 고객 정보
	 *
	 */
	customer: IssueCashReceiptCustomerInput;
	/**
	 * 결제 일자
	 *
	 */
	paidAt?: string;
};

/**
 * 현금 영수증 발급 성공 응답
 *
 * 현금 영수증 발급 성공 응답
 */
export type IssueCashReceiptResponse = {
	/**
	 *
	 */
	cashReceipt: CashReceiptSummary;
};

/**
 * IssueCashReceiptError
 *
 */
export type IssueCashReceiptError =
	| CashReceiptAlreadyIssuedError
	| ChannelNotFoundError
	| ForbiddenError
	| InvalidRequestError
	| PgProviderError
	| UnauthorizedError;

/**
 * 현금 영수증 취소 성공 응답
 *
 * 현금 영수증 취소 성공 응답
 */
export type CancelCashReceiptResponse = {
	/**
	 * 취소 금액
	 *
	 */
	cancelledAmount: number;
	/**
	 * 현금 영수증 취소 완료 시점
	 *
	 */
	cancelledAt: string;
};

/**
 * CancelCashReceiptError
 *
 */
export type CancelCashReceiptError =
	| CashReceiptNotFoundError
	| CashReceiptNotIssuedError
	| ForbiddenError
	| InvalidRequestError
	| PgProviderError
	| UnauthorizedError;

/**
 * 가상계좌 말소 성공 응답
 *
 * 가상계좌 말소 성공 응답
 */
export type CloseVirtualAccountResponse = {
	/**
	 * 가상계좌 말소 시점
	 *
	 */
	closedAt: string;
};

/**
 * CloseVirtualAccountError
 *
 */
export type CloseVirtualAccountError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| PaymentNotWaitingForDepositError
	| PgProviderError
	| UnauthorizedError;

/**
 * 에스크로 배송 정보 등록 입력 정보
 *
 * 에스크로 배송 정보 등록 입력 정보
 */
export type RegisterEscrowLogisticsBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 에스크로 발송자 정보
	 *
	 */
	sender?: PaymentEscrowSenderInput;
	/**
	 * 에스크로 수취인 정보
	 *
	 */
	receiver?: PaymentEscrowReceiverInput;
	/**
	 * 에스크로 물류 정보
	 *
	 */
	logistics: PaymentLogistics;
	/**
	 * 이메일 알림 전송 여부
	 *
	 * 에스크로 구매 확정 시 이메일로 알림을 보낼지 여부입니다.
	 */
	sendEmail?: boolean;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
};

/**
 * 에스크로 배송 정보 등록 성공 응답
 *
 * 에스크로 배송 정보 등록 성공 응답
 */
export type ApplyEscrowLogisticsResponse = {
	/**
	 * 송장 번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 시점
	 *
	 */
	sentAt: string;
	/**
	 * 에스크로 정보 등록 시점
	 *
	 */
	appliedAt: string;
};

/**
 * ApplyEscrowLogisticsError
 *
 */
export type ApplyEscrowLogisticsError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| PaymentNotPaidError
	| PgProviderError
	| UnauthorizedError;

/**
 * 에스크로 배송 정보 수정 입력 정보
 *
 * 에스크로 배송 정보 수정 입력 정보
 */
export type ModifyEscrowLogisticsBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 에스크로 발송자 정보
	 *
	 */
	sender?: PaymentEscrowSenderInput;
	/**
	 * 에스크로 수취인 정보
	 *
	 */
	receiver?: PaymentEscrowReceiverInput;
	/**
	 * 에스크로 물류 정보
	 *
	 */
	logistics: PaymentLogistics;
	/**
	 * 이메일 알림 전송 여부
	 *
	 * 에스크로 구매 확정 시 이메일로 알림을 보낼지 여부입니다.
	 */
	sendEmail?: boolean;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
};

/**
 * 에스크로 배송 정보 수정 성공 응답
 *
 * 에스크로 배송 정보 수정 성공 응답
 */
export type ModifyEscrowLogisticsResponse = {
	/**
	 * 송장 번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 시점
	 *
	 */
	sentAt: string;
	/**
	 * 에스크로 정보 수정 시점
	 *
	 */
	modifiedAt: string;
};

/**
 * ModifyEscrowLogisticsError
 *
 */
export type ModifyEscrowLogisticsError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| PaymentNotPaidError
	| PgProviderError
	| UnauthorizedError;

/**
 * 에스크로 구매 확정 입력 정보
 *
 * 에스크로 구매 확정 입력 정보
 */
export type ConfirmEscrowBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 확인 주체가 상점인지 여부
	 *
	 * 구매확정요청 주체가 고객사 관리자인지 구매자인지 구분하기 위한 필드입니다. 네이버페이 전용 파라미터이며, 구분이 모호한 경우 고객사 관리자(true)로 입력합니다.
	 */
	fromStore?: boolean;
};

/**
 * 에스크로 구매 확정 성공 응답
 *
 * 에스크로 구매 확정 성공 응답
 */
export type ConfirmEscrowResponse = {
	/**
	 * 에스크로 구매 확정 시점
	 *
	 */
	completedAt: string;
};

/**
 * ConfirmEscrowError
 *
 */
export type ConfirmEscrowError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| PaymentNotPaidError
	| PgProviderError
	| UnauthorizedError;

/**
 * ResendWebhookBody
 *
 * 웹훅 재발송을 위한 입력 정보
 */
export type ResendWebhookBody = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 웹훅 아이디
	 *
	 * 입력하지 않으면 결제 건의 가장 최근 웹훅 아이디가 기본 적용됩니다
	 */
	webhookId?: string;
};

/**
 * 웹훅 재발송 응답 정보
 *
 * 웹훅 재발송 응답 정보
 */
export type ResendWebhookResponse = {
	/**
	 * 재발송 웹훅 정보
	 *
	 */
	webhook: PaymentWebhook;
};

/**
 * ResendWebhookError
 *
 */
export type ResendWebhookError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| UnauthorizedError
	| WebhookNotFoundError;

/**
 * 고객사의 결제 현황 조회를 위한 입력 정보
 *
 * 고객사의 결제 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentChartBody = {
	/**
	 * 조회할 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled?: boolean;
	/**
	 * 결제 현황 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
};

/**
 * 고객사의 결제 현황 차트 정보
 *
 * 고객사의 결제 현황 차트 정보
 */
export type AnalyticsPaymentChart = {
	/**
	 *
	 */
	stats: AnalyticsPaymentChartStat[];
};

/**
 * GetAnalyticsPaymentChartError
 *
 */
export type GetAnalyticsPaymentChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제 현황 인사이트 조회를 위한 입력 정보
 *
 * 고객사의 결제 현황 인사이트 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentChartInsightBody = {
	/**
	 * 조회할 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled?: boolean;
	/**
	 * 타임존 시간 오프셋
	 *
	 * 입력된 시간 오프셋 기준으로 일, 주, 월이 집계 됩니다.
	 */
	timezoneHourOffset: number;
};

/**
 * 고객사의 결제 현황 인사이트 정보
 *
 * 고객사의 결제 현황 인사이트 정보
 */
export type AnalyticsPaymentChartInsight = {
	/**
	 * 월간 최고 거래액 발생일
	 *
	 */
	highestDateInMonth?: number;
	/**
	 * 월간 최저 거래액 발생일
	 *
	 */
	lowestDateInMonth?: number;
	/**
	 * 주간 최고 거래액 발생 요일
	 *
	 */
	highestDayInWeek?: DayOfWeek;
	/**
	 * 주간 최저 거래액 발생 요일
	 *
	 */
	lowestDayInWeek?: DayOfWeek;
	/**
	 * 일간 최고 거래액 발생 시간
	 *
	 */
	highestHourInDay: number;
	/**
	 * 일간 최저 거래액 발생 시간
	 *
	 */
	lowestHourInDay: number;
};

/**
 * GetAnalyticsPaymentChartInsightError
 *
 */
export type GetAnalyticsPaymentChartInsightError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 평균 거래액 현황 조회를 위한 입력 정보
 *
 * 고객사의 평균 거래액 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsAverageAmountChartBody = {
	/**
	 * 조회할 평균 거래액 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 평균 거래액 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 평균 거래액 현황 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
};

/**
 * 고객사의 평균 거래액 현황 조회 응답
 *
 * 고객사의 평균 거래액 현황 조회 응답
 */
export type AnalyticsAverageAmountChart = {
	/**
	 *
	 */
	stats: AnalyticsAverageAmountChartStat[];
	/**
	 *
	 */
	summary: AnalyticsAverageAmountChartSummary;
};

/**
 * GetAverageAmountChartError
 *
 */
export type GetAverageAmountChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제수단 현황 조회를 위한 입력 정보
 *
 * 고객사의 결제수단 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentMethodChartBody = {
	/**
	 * 조회할 결제수단 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제수단 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
};

/**
 * 고객사의 결제수단 현황 차트 정보
 *
 * 고객사의 결제수단 현황 차트 정보
 */
export type AnalyticsPaymentMethodChart = {
	/**
	 *
	 */
	stats: AnalyticsPaymentMethodChartStat[];
};

/**
 * GetPaymentMethodChartError
 *
 */
export type GetPaymentMethodChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제수단 트렌드 조회를 위한 입력 정보
 *
 * 고객사의 결제수단 트렌드 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentMethodTrendChartBody = {
	/**
	 * 조회할 결제수단 트렌드의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제수단 트렌드의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 결제 결제수단 트렌드 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
};

/**
 * 고객사의 결제수단 트렌드 차트 정보
 *
 * 고객사의 결제수단 트렌드 차트 정보
 */
export type AnalyticsPaymentMethodTrendChart = {
	/**
	 * 결제수단별 결제금액, 결제 건수 데이터
	 *
	 * (timestamp, paymentMethod) 를 기준으로 오름차순 정렬되어 주어집니다.
	 */
	stats: AnalyticsPaymentMethodTrendChartStat[];
};

/**
 * GetPaymentMethodTrendChartError
 *
 */
export type GetPaymentMethodTrendChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 카드결제 현황 조회를 위한 입력 정보
 *
 * 고객사의 카드결제 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsCardChartBody = {
	/**
	 * 조회할 카드결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 카드결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 카드결제 현황 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
};

/**
 * 고객사의 카드결제 현황 차트 정보
 *
 * 고객사의 카드결제 현황 차트 정보
 */
export type AnalyticsCardChart = {
	/**
	 *
	 */
	stats: AnalyticsCardChartStat[];
};

/**
 * GetAnalyticsCardChartError
 *
 */
export type GetAnalyticsCardChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 카드사별 결제 현황 조회를 위한 입력 정보
 *
 * 고객사의 카드사별 결제 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsCardCompanyChartBody = {
	/**
	 * 조회할 카드사별 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 카드사별 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 카드사별 결제 현황 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
	/**
	 * 조회할 카드사
	 *
	 */
	cardCompanies: CardCompany[];
	/**
	 * 나머지 집계에 포함되지 않을 카드사
	 *
	 */
	excludesFromRemainders: CardCompany[];
};

/**
 * 고객사의 카드사별 결제 현황 조회 응답
 *
 * 고객사의 카드사별 결제 현황 조회 응답
 */
export type AnalyticsCardCompanyChart = {
	/**
	 *
	 */
	stats: AnalyticsCardCompanyChartStat[];
	/**
	 *
	 */
	remainderStats: AnalyticsCardCompanyChartRemainderStat[];
	/**
	 *
	 */
	summary: AnalyticsCardCompanyChartSummary;
};

/**
 * GetAnalyticsCardCompanyChartError
 *
 */
export type GetAnalyticsCardCompanyChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 간편결제 현황 조회를 위한 입력 정보
 *
 * 고객사의 간편결제 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsEasyPayChartBody = {
	/**
	 * 조회할 간편결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 간편결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 간편결제 현황 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
};

/**
 * 고객사의 간편결제 현황 차트 정보
 *
 * 고객사의 간편결제 현황 차트 정보
 */
export type AnalyticsEasyPayChart = {
	/**
	 *
	 */
	stats: AnalyticsEasyPayChartStat[];
};

/**
 * GetAnalyticsEasyPayChartError
 *
 */
export type GetAnalyticsEasyPayChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 간편결제사별 결제 현황 조회를 위한 입력 정보
 *
 * 고객사의 간편결제사별 결제 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsEasyPayProviderChartBody = {
	/**
	 * 조회할 간편결제사별 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 간편결제사별 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 간편결제사별 결제 현황 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
	/**
	 * 조회할 간편결제사
	 *
	 */
	easyPayProviders: EasyPayProvider[];
	/**
	 * 나머지 집계에 포함되지 않을 간편결제사
	 *
	 */
	excludesFromRemainders: EasyPayProvider[];
};

/**
 * 고객사의 간편결제사별 결제 현황 차트 정보
 *
 * 고객사의 간편결제사별 결제 현황 차트 정보
 */
export type AnalyticsEasyPayProviderChart = {
	/**
	 *
	 */
	stats: AnalyticsEasyPayProviderChartStat[];
	/**
	 *
	 */
	remainderStats: AnalyticsEasyPayProviderChartRemainderStat[];
	/**
	 *
	 */
	summary: AnalyticsEasyPayProviderChartSummary;
};

/**
 * GetAnalyticsEasyPayProviderChartError
 *
 */
export type GetAnalyticsEasyPayProviderChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제대행사 현황 조회를 위한 입력 정보
 *
 * 고객사의 결제대행사 현황 조회를 위한 입력 정보
 */
export type GetAnalyticsPgCompanyChartBody = {
	/**
	 * 조회할 결제대행사 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제대행사 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
};

/**
 * 고객사의 결제대행사 현황 차트 정보
 *
 * 고객사의 결제대행사 현황 차트 정보
 */
export type AnalyticsPgCompanyChart = {
	/**
	 *
	 */
	stats: AnalyticsPgCompanyChartStat[];
};

/**
 * GetPgCompanyChartError
 *
 */
export type GetPgCompanyChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제대행사별 거래 추이 조회를 위한 입력 정보
 *
 * 고객사의 결제대행사별 거래 추이 조회를 위한 입력 정보
 */
export type GetAnalyticsPgCompanyTrendChartBody = {
	/**
	 * 조회할 결제대행사별 거래 추이의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제대행사별 거래 추이의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
	/**
	 * 결제취소건 제외 여부
	 *
	 * true 이면 결제취소내역은 응답에 포함 및 반영되지 않습니다. false 또는 값을 명시하지 않은 경우 결제취소내역이 응답에 반영됩니다.
	 */
	excludeCancelled: boolean;
	/**
	 * 결제 결제대행사별 거래 추이 조회 단위
	 *
	 * 시간별, 월별 단위만 지원됩니다.
	 */
	timeGranularity: AnalyticsTimeGranularity;
	/**
	 * 조회할 결제대행사
	 *
	 */
	pgCompanies: PgCompany[];
};

/**
 * 고객사의 결제대행사별 거래 추이 차트 정보
 *
 * 고객사의 결제대행사별 거래 추이 차트 정보
 */
export type AnalyticsPgCompanyTrendChart = {
	/**
	 *
	 */
	stats: AnalyticsPgCompanyTrendChartStat[];
};

/**
 * GetPgCompanyTrendChartError
 *
 */
export type GetPgCompanyTrendChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 해외 결제 사용 여부
 *
 * 고객사의 해외 결제 사용 여부
 */
export type AnalyticsOverseasPaymentUsage = {
	/**
	 *
	 */
	isUsing: boolean;
};

/**
 * GetAnalyticsOverseasPaymentUsageError
 *
 */
export type GetAnalyticsOverseasPaymentUsageError =
	| ForbiddenError
	| UnauthorizedError;

/**
 * 고객사의 환불율 조회를 위한 입력 정보
 *
 * 고객사의 환불율 조회를 위한 입력 정보
 */
export type GetAnalyticsCancellationRateBody = {
	/**
	 * 환불율 조회 기간의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 환불율 조회 기간의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
};

/**
 * 고객사의 환불율 정보
 *
 * 고객사의 환불율 정보
 */
export type AnalyticsCancellationRate = {
	/**
	 *
	 */
	cancellationRate: number;
};

/**
 * GetAnalyticsCancellationRateError
 *
 */
export type GetAnalyticsCancellationRateError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제상태 이력 집계 조회를 위한 입력 정보
 *
 * 고객사의 결제상태 이력 집계 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentStatusChartBody = {
	/**
	 * 조회할 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
};

/**
 * 고객사의 결제 상태 차트 정보
 *
 * 고객사의 결제 상태 차트 정보
 */
export type AnalyticsPaymentStatusChart = {
	/**
	 *
	 */
	stats: AnalyticsPaymentStatusChartStat[];
};

/**
 * GetPaymentStatusChartError
 *
 */
export type GetPaymentStatusChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제수단별 결제전환율 조회를 위한 입력 정보
 *
 * 고객사의 결제수단별 결제전환율 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentStatusByPaymentMethodChartBody = {
	/**
	 * 조회할 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
};

/**
 * 고객사의 결제 수단 별 결제 상태 차트 정보
 *
 * 고객사의 결제 수단 별 결제 상태 차트 정보
 */
export type AnalyticsPaymentStatusByPaymentMethodChart = {
	/**
	 *
	 */
	stats: AnalyticsPaymentStatusByPaymentMethodChartStat[];
};

/**
 * GetPaymentStatusByPaymentMethodChartError
 *
 */
export type GetPaymentStatusByPaymentMethodChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 PG사별 결제전환율 조회를 위한 입력 정보
 *
 * 고객사의 PG사별 결제전환율 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentStatusByPgCompanyChartBody = {
	/**
	 * 조회할 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
};

/**
 * 고객사의 PG사 별 결제 상태 차트 정보
 *
 * 고객사의 PG사 별 결제 상태 차트 정보
 */
export type AnalyticsPaymentStatusByPgCompanyChart = {
	/**
	 *
	 */
	stats: AnalyticsPaymentStatusByPgCompanyChartStat[];
};

/**
 * GetPaymentStatusByPgCompanyChartError
 *
 */
export type GetPaymentStatusByPgCompanyChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 고객사의 결제환경별 결제전환율 조회를 위한 입력 정보
 *
 * 고객사의 결제환경별 결제전환율 조회를 위한 입력 정보
 */
export type GetAnalyticsPaymentStatusByPaymentClientChartBody = {
	/**
	 * 조회할 결제 현황의 시작 시간
	 *
	 */
	from: string;
	/**
	 * 조회할 결제 현황의 끝 시간
	 *
	 */
	until: string;
	/**
	 * 조회할 결제 통화
	 *
	 * 입력된 통화로 발생한 결제내역만 응답에 포함됩니다.
	 */
	currency: Currency;
};

/**
 * 고객사의 결제 환경 별 결제 상태 차트 정보
 *
 * 고객사의 결제 환경 별 결제 상태 차트 정보
 */
export type AnalyticsPaymentStatusByPaymentClientChart = {
	/**
	 *
	 */
	stats: AnalyticsPaymentStatusByPaymentClientChartStat[];
};

/**
 * GetPaymentStatusByPaymentClientChartError
 *
 */
export type GetPaymentStatusByPaymentClientChartError =
	| ForbiddenError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * B2bMemberCompany
 *
 */
export type B2bMemberCompany = {
	/**
	 * 사업자등록번호
	 *
	 * *   없이 숫자로만 구성됩니다.
	 */
	brn: string;
	/**
	 * 회사명
	 *
	 */
	name: string;
	/**
	 * 대표자 성명
	 *
	 */
	ceoName: string;
	/**
	 * 회사 주소
	 *
	 */
	address: string;
	/**
	 * 업태
	 *
	 */
	businessType: string;
	/**
	 * 업종
	 *
	 */
	businessClass: string;
};

/**
 * GetB2bMemberCompanyError
 *
 */
export type GetB2bMemberCompanyError =
	| B2bExternalServiceError
	| B2bMemberCompanyNotFoundError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 연동 사업자 정보 수정 요청
 *
 * 연동 사업자 정보 수정 요청
 */
export type UpdateB2bMemberCompanyBody = {
	/**
	 * 회사명
	 *
	 */
	name?: string;
	/**
	 * 대표자 성명
	 *
	 */
	ceoName?: string;
	/**
	 * 회사 주소
	 *
	 */
	address?: string;
	/**
	 * 업태
	 *
	 */
	businessType?: string;
	/**
	 * 업종
	 *
	 */
	businessClass?: string;
};

/**
 * 연동 사업자 정보 수정 응답
 *
 * 연동 사업자 정보 수정 응답
 */
export type UpdateB2bMemberCompanyResponse = {
	/**
	 * 연동 사업자 정보
	 *
	 */
	memberCompany: B2bMemberCompany;
};

/**
 * UpdateB2bMemberCompanyError
 *
 */
export type UpdateB2bMemberCompanyError =
	| B2bMemberCompanyNotFoundError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 사업자 연동 요청 정보
 *
 * 사업자 연동 요청 정보
 */
export type RegisterB2bMemberCompanyBody = {
	/**
	 * 사업자 정보
	 *
	 */
	company: B2bMemberCompany;
	/**
	 * 담당자 정보
	 *
	 */
	contact: B2bCompanyContactInput;
};

/**
 * 사업자 연동 응답 정보
 *
 * 사업자 연동 응답 정보
 */
export type RegisterB2bMemberCompanyResponse = {
	/**
	 * 사업자 정보
	 *
	 */
	company: B2bMemberCompany;
	/**
	 * 담당자 정보
	 *
	 */
	contact: B2bCompanyContact;
};

/**
 * RegisterB2bMemberCompanyError
 *
 */
export type RegisterB2bMemberCompanyError =
	| B2bCompanyAlreadyRegisteredError
	| B2bExternalServiceError
	| B2bIdAlreadyExistsError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * B2bCompanyContact
 *
 */
export type B2bCompanyContact = {
	/**
	 * 담당자 ID
	 *
	 * 팝빌 로그인 계정으로 사용됩니다.
	 */
	id: string;
	/**
	 * 담당자 성명
	 *
	 */
	name: string;
	/**
	 * 담당자 핸드폰 번호
	 *
	 */
	phoneNumber: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email: string;
	/**
	 * 등록 일시
	 *
	 */
	registeredAt: string;
	/**
	 * 관리자 여부
	 *
	 * true일 경우 관리자, false일 경우 담당자입니다.
	 */
	isManager: boolean;
};

/**
 * GetB2bMemberCompanyContactError
 *
 */
export type GetB2bMemberCompanyContactError =
	| B2bContactNotFoundError
	| B2bExternalServiceError
	| B2bMemberCompanyNotFoundError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 담당자 정보 수정 요청
 *
 * 담당자 정보 수정 요청
 */
export type UpdateB2bMemberCompanyContactBody = {
	/**
	 * 비밀번호
	 *
	 */
	password?: string;
	/**
	 * 담당자 성명
	 *
	 */
	name?: string;
	/**
	 * 담당자 핸드폰 번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email?: string;
};

/**
 * 담당자 정보 수정 응답
 *
 * 담당자 정보 수정 응답
 */
export type UpdateB2bMemberCompanyContactResponse = {
	/**
	 * 담당자 정보
	 *
	 */
	contact: B2bCompanyContact;
};

/**
 * UpdateB2bMemberCompanyContactError
 *
 */
export type UpdateB2bMemberCompanyContactError =
	| B2bContactNotFoundError
	| B2bExternalServiceError
	| B2bMemberCompanyNotFoundError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 인증서 등록 URL 조회 응답 정보
 *
 * 인증서 등록 URL 조회 응답 정보
 */
export type GetB2bCertificateRegistrationUrlResponse = {
	/**
	 * 인증서 등록 URL
	 *
	 */
	url: string;
};

/**
 * GetB2bCertificateRegistrationUrlError
 *
 */
export type GetB2bCertificateRegistrationUrlError =
	| B2bExternalServiceError
	| B2bMemberCompanyNotFoundError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * B2bCertificate
 *
 */
export type B2bCertificate = {
	/**
	 * 등록일시
	 *
	 */
	registeredAt: string;
	/**
	 * 만료일시
	 *
	 */
	expiredAt: string;
	/**
	 * 발행자명
	 *
	 */
	issuerDn: string;
	/**
	 * 본인명
	 *
	 */
	subjectDn: string;
	/**
	 * 인증서 타입
	 *
	 */
	certificateType: B2bCertificateType;
	/**
	 * OID
	 *
	 */
	oid: string;
	/**
	 * 등록 담당자 성명
	 *
	 */
	registrantContactName: string;
	/**
	 * 등록 담당자 ID
	 *
	 */
	registrantContactId: string;
};

/**
 * GetB2bCertificateError
 *
 */
export type GetB2bCertificateError =
	| B2bCertificateUnregisteredError
	| B2bExternalServiceError
	| B2bMemberCompanyNotFoundError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 담당자 ID 존재 여부 응답 정보
 *
 * 담당자 ID 존재 여부 응답 정보
 */
export type GetB2bContactIdExistenceResponse = {
	/**
	 * 존재 여부
	 *
	 */
	exists: boolean;
};

/**
 * getB2bContactIdExistenceError
 *
 */
export type getB2bContactIdExistenceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 예금주 조회 응답 정보
 *
 * 예금주 조회 응답 정보
 */
export type GetB2bBankAccountHolderResponse = {
	/**
	 * 예금주
	 *
	 */
	accountHolder: string;
};

/**
 * GetB2bAccountHolderError
 *
 */
export type GetB2bAccountHolderError =
	| B2bBankAccountNotFoundError
	| B2bExternalServiceError
	| B2bFinancialSystemCommunicationError
	| B2bFinancialSystemFailureError
	| B2bFinancialSystemUnderMaintenanceError
	| B2bForeignExchangeAccountError
	| B2bNotEnabledError
	| B2bRegularMaintenanceTimeError
	| B2bSuspendedAccountError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 사업자 상태
 *
 * 사업자 상태
 */
export type B2bCompanyState = {
	/**
	 * 사업자 과세 유형
	 *
	 */
	taxationType: B2bCompanyStateTaxationType;
	/**
	 * 과세 유형 변경 일자
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	taxationTypeDate?: string;
	/**
	 * 사업자 영업 상태
	 *
	 */
	businessStatus: B2bCompanyStateBusinessStatus;
	/**
	 * 휴폐업 일자
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	closedSuspendedDate?: string;
};

/**
 * GetB2bCompanyStateError
 *
 */
export type GetB2bCompanyStateError =
	| B2bCompanyNotFoundError
	| B2bExternalServiceError
	| B2bHometaxUnderMaintenanceError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 역발행 요청 정보
 *
 * 세금계산서 역발행 요청 정보
 */
export type RequestB2bTaxInvoiceReverseIssuanceRequestBody = {
	/**
	 * 세금계산서 생성 요청 정보
	 *
	 */
	taxInvoice: B2bTaxInvoiceInput;
	/**
	 * 메모
	 *
	 */
	memo?: string;
};

/**
 * B2bTaxInvoice
 *
 */
export type B2bTaxInvoice =
	| B2bTaxInvoiceBeforeSending
	| B2bTaxInvoiceIssuanceCancelled
	| B2bTaxInvoiceRequestRefused
	| B2bTaxInvoiceIssued
	| B2bTaxInvoiceRegistered
	| B2bTaxInvoiceRequested
	| B2bTaxInvoiceRequestCancelled
	| B2bTaxInvoiceSending
	| B2bTaxInvoiceSendingCompleted
	| B2bTaxInvoiceSendingFailed
	| B2bTaxInvoiceWaitingSending;

/**
 * RequestB2bTaxInvoiceReverseIssuanceError
 *
 */
export type RequestB2bTaxInvoiceReverseIssuanceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bRecipientNotFoundError
	| B2bSupplierNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 문서번호 유형
 *
 * 문서번호 유형
 */
export type B2bTaxInvoiceDocumentKeyType = "SUPPLIER" | "RECIPIENT";

/**
 * GetB2bTaxInvoiceError
 *
 */
export type GetB2bTaxInvoiceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * DeleteB2bTaxInvoiceError
 *
 */
export type DeleteB2bTaxInvoiceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNonDeletableStatusError
	| B2bTaxInvoiceNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 발행 정보
 *
 * 세금계산서 발행 정보
 */
export type IssueB2bTaxInvoiceRequestBody = {
	/**
	 * 사업자등록번호
	 *
	 */
	brn: string;
	/**
	 * 세금계산서 문서 번호
	 *
	 */
	documentKey: string;
	/**
	 * 문서 번호 유형
	 *
	 * 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
	 */
	documentKeyType?: B2bTaxInvoiceDocumentKeyType;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 이메일 제목
	 *
	 */
	emailSubject?: string;
};

/**
 * IssueB2bTaxInvoiceError
 *
 */
export type IssueB2bTaxInvoiceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| B2bTaxInvoiceNotRequestedStatusError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 역발행 요청 취소 정보
 *
 * 세금계산서 역발행 요청 취소 정보
 */
export type CancelB2bTaxInvoiceRequestBody = {
	/**
	 * 사업자등록번호
	 *
	 */
	brn: string;
	/**
	 * 세금계산서 문서 번호
	 *
	 */
	documentKey: string;
	/**
	 * 문서 번호 유형
	 *
	 * 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
	 */
	documentKeyType?: B2bTaxInvoiceDocumentKeyType;
	/**
	 * 메모
	 *
	 */
	memo?: string;
};

/**
 * CancelB2bTaxInvoiceRequestError
 *
 */
export type CancelB2bTaxInvoiceRequestError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| B2bTaxInvoiceNotRequestedStatusError
	| B2bTaxInvoiceNoRecipientDocumentKeyError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 역발행 취소 정보
 *
 * 세금계산서 역발행 취소 정보
 */
export type CancelB2bTaxInvoiceIssuanceBody = {
	/**
	 * 사업자등록번호
	 *
	 */
	brn: string;
	/**
	 * 세금계산서 문서 번호
	 *
	 */
	documentKey: string;
	/**
	 * 문서 번호 유형
	 *
	 * 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
	 */
	documentKeyType?: B2bTaxInvoiceDocumentKeyType;
	/**
	 * 메모
	 *
	 */
	memo?: string;
};

/**
 * CancelB2bTaxInvoiceIssuanceError
 *
 */
export type CancelB2bTaxInvoiceIssuanceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotIssuedStatusError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 역발행 요청 거부 정보
 *
 * 세금계산서 역발행 요청 거부 정보
 */
export type RefuseB2bTaxInvoiceRequestBody = {
	/**
	 * 사업자등록번호
	 *
	 */
	brn: string;
	/**
	 * 세금계산서 문서 번호
	 *
	 */
	documentKey: string;
	/**
	 * 문서 번호 유형
	 *
	 * 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
	 */
	documentKeyType?: B2bTaxInvoiceDocumentKeyType;
	/**
	 * 메모
	 *
	 */
	memo?: string;
};

/**
 * RefuseB2bTaxInvoiceRequestError
 *
 */
export type RefuseB2bTaxInvoiceRequestError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| B2bTaxInvoiceNotRequestedStatusError
	| B2bTaxInvoiceNoSupplierDocumentKeyError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 조회 기준
 *
 * 조회 기준
 */
export type B2bSearchDateType = "REGISTER" | "WRITE" | "ISSUE";

/**
 * 세금계산서 다건 조회 성공 응답
 *
 * 세금계산서 다건 조회 성공 응답
 */
export type GetB2bTaxInvoicesResponse = {
	/**
	 * 조회된 세금계산서 목록
	 *
	 */
	items: B2bTaxInvoiceSummary[];
	/**
	 * 조회된 페이지 정보
	 *
	 */
	page: PageInfo;
};

/**
 * GetB2bTaxInvoicesError
 *
 */
export type GetB2bTaxInvoicesError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 팝업 URL 성공 응답
 *
 * 세금계산서 팝업 URL 성공 응답
 */
export type GetB2bTaxInvoicePopupUrlResponse = {
	/**
	 * 세금계산서 팝업 URL
	 *
	 */
	url: string;
};

/**
 * GetB2bTaxInvoicePopupUrlError
 *
 */
export type GetB2bTaxInvoicePopupUrlError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 프린트 URL 성공 응답
 *
 * 세금계산서 프린트 URL 성공 응답
 */
export type GetB2bTaxInvoicePrintUrlResponse = {
	/**
	 * 세금계산서 프린트 URL
	 *
	 */
	url: string;
};

/**
 * GetB2bTaxInvoicePrintUrlError
 *
 */
export type GetB2bTaxInvoicePrintUrlError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 PDF 다운로드 URL 성공 응답
 *
 * 세금계산서 PDF 다운로드 URL 성공 응답
 */
export type GetB2bTaxInvoicePdfDownloadUrlResponse = {
	/**
	 * 세금계산서 PDF 다운로드 URL
	 *
	 */
	url: string;
};

/**
 * GetB2bTaxInvoicePdfDownloadUrlError
 *
 */
export type GetB2bTaxInvoicePdfDownloadUrlError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 임시 저장 정보
 *
 * 세금계산서 임시 저장 정보
 */
export type RequestB2bTaxInvoiceRegisterBody = {
	/**
	 * 세금계산서 생성 요청 정보
	 *
	 */
	taxInvoice: B2bTaxInvoiceInput;
};

/**
 * RequestB2bTaxInvoiceRegisterError
 *
 */
export type RequestB2bTaxInvoiceRegisterError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bRecipientNotFoundError
	| B2bSupplierNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 역발행 요청 정보
 *
 * 세금계산서 역발행 요청 정보
 */
export type RequestB2bTaxInvoiceRequestBody = {
	/**
	 * 사업자등록번호
	 *
	 */
	brn: string;
	/**
	 * 세금계산서 문서 번호
	 *
	 */
	documentKey: string;
	/**
	 * 문서 번호 유형
	 *
	 * 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
	 */
	documentKeyType?: B2bTaxInvoiceDocumentKeyType;
	/**
	 * 메모
	 *
	 */
	memo?: string;
};

/**
 * requestB2bTaxInvoiceError
 *
 */
export type requestB2bTaxInvoiceError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| B2bTaxInvoiceNotRegisteredStatusError
	| B2bTaxInvoiceNoRecipientDocumentKeyError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 파일 업로드 링크 생성
 *
 * 세금계산서 파일 업로드 링크 생성
 */
export type CreateB2bTaxInvoiceFileUploadLinkBody = {
	/**
	 * 파일 이름
	 *
	 */
	fileName: string;
};

/**
 * 세금계산서 파일 업로드 링크 생성 성공 응답
 *
 * 세금계산서 파일 업로드 링크 생성 성공 응답
 */
export type CreateB2bTaxInvoiceFileUploadLinkResponse = {
	/**
	 * 파일 아이디
	 *
	 */
	fileId: string;
	/**
	 * 파일 업로드 링크
	 *
	 */
	url: string;
};

/**
 * CreateB2bTaxInvoiceFileUploadLinkCreateError
 *
 */
export type CreateB2bTaxInvoiceFileUploadLinkCreateError =
	| B2bNotEnabledError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 파일 첨부 정보
 *
 * 세금계산서 파일 첨부 정보
 */
export type AttachB2bTaxInvoiceFileBody = {
	/**
	 * 사업자등록번호
	 *
	 * *   없이 숫자 10자리로 구성됩니다.
	 */
	brn: string;
	/**
	 * 세금계산서 문서 번호
	 *
	 */
	documentKey: string;
	/**
	 * 문서 번호 유형
	 *
	 * 기본 값은 RECIPIENT이며 SUPPLIER, RECIPIENT을 지원합니다.
	 */
	documentKeyType?: B2bTaxInvoiceDocumentKeyType;
	/**
	 * 파일 아이디
	 *
	 */
	fileId: string;
};

/**
 * AttachB2bTaxInvoiceFileError
 *
 */
export type AttachB2bTaxInvoiceFileError =
	| B2bExternalServiceError
	| B2bFileNotFoundError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| B2bTaxInvoiceNotRegisteredStatusError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 세금계산서 첨부파일 목록 조회 성공 응답
 *
 * 세금계산서 첨부파일 목록 조회 성공 응답
 */
export type GetB2bTaxInvoiceAttachmentsResponse = {
	/**
	 * 첨부파일 목록
	 *
	 */
	attachments: B2bTaxInvoiceAttachment[];
};

/**
 * GetB2bTaxInvoiceAttachmentsError
 *
 */
export type GetB2bTaxInvoiceAttachmentsError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceNotFoundError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * DeleteB2bTaxInvoiceAttachmentError
 *
 */
export type DeleteB2bTaxInvoiceAttachmentError =
	| B2bExternalServiceError
	| B2bNotEnabledError
	| B2bTaxInvoiceAttachmentNotFoundError
	| B2bTaxInvoiceNotFoundError
	| B2bTaxInvoiceNotRegisteredStatusError
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 카카오페이 주문 조회 응답
 *
 * 카카오페이 주문 조회 응답
 */
export type GetKakaopayPaymentOrderResponse = {
	/**
	 * HTTP 상태 코드
	 *
	 */
	statusCode: number;
	/**
	 * HTTP 응답 본문 (JSON)
	 *
	 */
	body: string;
};

/**
 * GetKakaopayPaymentOrderError
 *
 */
export type GetKakaopayPaymentOrderError =
	| InvalidRequestError
	| UnauthorizedError;

/**
 * 영수증 내 하위 상점 거래 등록 정보
 *
 * 영수증 내 하위 상점 거래 등록 정보
 */
export type RegisterStoreReceiptBody = {
	/**
	 * 하위 상점 거래 목록
	 *
	 */
	items: RegisterStoreReceiptBodyItem[];
	/**
	 * 상점 아이디
	 *
	 */
	storeId?: string;
};

/**
 * 영수증 내 하위 상점 거래 등록 응답
 *
 * 영수증 내 하위 상점 거래 등록 응답
 */
export type RegisterStoreReceiptResponse = {
	/**
	 * 결제 영수증 URL
	 *
	 */
	receiptUrl?: string;
};

/**
 * RegisterStoreReceiptError
 *
 */
export type RegisterStoreReceiptError =
	| ForbiddenError
	| InvalidRequestError
	| PaymentNotFoundError
	| PaymentNotPaidError
	| PgProviderError
	| UnauthorizedError;

/**
 * 프로모션
 *
 * 프로모션
 */
export type Promotion = CardPromotion;

/**
 * GetPromotionError
 *
 */
export type GetPromotionError =
	| ForbiddenError
	| InvalidRequestError
	| PromotionNotFoundError
	| UnauthorizedError;

/**
 * 요청된 입력 정보가 유효하지 않은 경우
 *
 * 요청된 입력 정보가 유효하지 않은 경우
 *
 * 허가되지 않은 값, 올바르지 않은 형식의 요청 등이 모두 해당됩니다.
 */
export type InvalidRequestError = {
	/**
	 *
	 */
	type: "INVALID_REQUEST";
	/**
	 *
	 */
	message?: string;
};

/**
 * 인증 정보가 올바르지 않은 경우
 *
 * 인증 정보가 올바르지 않은 경우
 */
export type UnauthorizedError = {
	/**
	 *
	 */
	type: "UNAUTHORIZED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 금액에 대한 소수점 처리 방식
 *
 * 금액에 대한 소수점 처리 방식
 */
export type PlatformRoundType = "OFF" | "DOWN" | "UP";

/**
 * 플랫폼 내 발생하는 여러 수수료 및 할인 분담에 관한 계산식 정보
 *
 * 플랫폼 내 발생하는 여러 수수료 및 할인 분담에 관한 계산식 정보
 */
export type PlatformSettlementFormula = {
	/**
	 * 플랫폼 수수료 계산식
	 *
	 */
	platformFee: string;
	/**
	 * 할인 분담액 계산식
	 *
	 */
	discountShare: string;
	/**
	 * 추가 수수료 계산식
	 *
	 */
	additionalFee: string;
};

/**
 * 플랫폼 정산건 처리 방식에 관한 규칙
 *
 * 플랫폼 정산건 처리 방식에 관한 규칙
 */
export type PlatformSettlementRule = {
	/**
	 * paymentId, storeId, partnerId가 같은 주문 정산건에 대한 중복 정산 지원 여부
	 *
	 */
	supportsMultipleOrderTransfersPerPartner: boolean;
	/**
	 * 정산일이 정산시작일보다 작거나 같을 경우 공휴일 후 영업일로 정산일 다시 계산 여부
	 *
	 */
	adjustSettlementDateAfterHolidayIfEarlier: boolean;
	/**
	 * 지급 금액에서 원천징수세 차감 여부
	 *
	 */
	subtractWhtInPayoutAmount: boolean;
};

/**
 * 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
 *
 * 플랫폼 기능이 활성화되지 않아 요청을 처리할 수 없는 경우
 */
export type PlatformNotEnabledError = {
	/**
	 *
	 */
	type: "PLATFORM_NOT_ENABLED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 플랫폼 업데이트 시 변경할 계산식 정보
 *
 * 플랫폼 업데이트 시 변경할 계산식 정보
 *
 * 값이 명시되지 않은 필드는 업데이트하지 않습니다.
 */
export type UpdatePlatformBodySettlementFormula = {
	/**
	 * 플랫폼 수수료 계산식
	 *
	 */
	platformFee?: string;
	/**
	 * 할인 분담액 계산식
	 *
	 */
	discountShare?: string;
	/**
	 * 추가 수수료 계산식
	 *
	 */
	additionalFee?: string;
};

/**
 * 플랫폼 업데이트 시 변경할 정산 규칙 정보
 *
 * 플랫폼 업데이트 시 변경할 정산 규칙 정보
 *
 * 값이 명시되지 않은 필드는 업데이트하지 않습니다.
 */
export type UpdatePlatformBodySettlementRule = {
	/**
	 * paymentId, storeId, partnerId가 같은 주문 정산건에 대한 중복 정산 지원 여부
	 *
	 */
	supportsMultipleOrderTransfersPerPartner?: boolean;
	/**
	 * 정산일이 정산시작일보다 작거나 같을 경우 공휴일 후 영업일로 정산일 다시 계산 여부
	 *
	 */
	adjustSettlementDateAfterHolidayIfEarlier?: boolean;
	/**
	 * 지급 금액에서 원천징수세 차감 여부
	 *
	 */
	subtractWhtInPayoutAmount?: boolean;
};

/**
 * 요청이 거절된 경우
 *
 * 요청이 거절된 경우
 */
export type ForbiddenError = {
	/**
	 *
	 */
	type: "FORBIDDEN";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformInvalidSettlementFormulaError
 *
 */
export type PlatformInvalidSettlementFormulaError = {
	/**
	 *
	 */
	type: "PLATFORM_INVALID_SETTLEMENT_FORMULA";
	/**
	 *
	 */
	platformFee?: PlatformSettlementFormulaError;
	/**
	 *
	 */
	discountShare?: PlatformSettlementFormulaError;
	/**
	 *
	 */
	additionalFee?: PlatformSettlementFormulaError;
	/**
	 *
	 */
	message?: string;
};

/**
 * 다건 조회 API 에 사용되는 페이지 입력 정보
 *
 * 다건 조회 API 에 사용되는 페이지 입력 정보
 */
export type PageInput = {
	/**
	 * 0부터 시작하는 페이지 번호
	 *
	 */
	number?: number;
	/**
	 * 각 페이지 당 포함할 객체 수
	 *
	 */
	size?: number;
};

/**
 * 할인 분담 정책 다건 조회를 위한 필터 조건
 *
 * 할인 분담 정책 다건 조회를 위한 필터 조건
 */
export type PlatformDiscountSharePolicyFilterInput = {
	/**
	 * 보관 조회 여부
	 *
	 * true 이면 보관된 할인 분담 정책을 조회하고, false 이면 보관되지 않은 할인 분담 정책을 조회합니다. 기본값은 false 입니다.
	 */
	isArchived?: boolean;
	/**
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 파트너 분담율을 가진 할인 분담 정책만 조회합니다.
	 */
	partnerShareRates?: number[];
	/**
	 * 검색 키워드
	 *
	 */
	keyword?: PlatformDiscountSharePolicyFilterInputKeyword;
};

/**
 * 반환된 페이지 결과 정보
 *
 * 반환된 페이지 결과 정보
 */
export type PageInfo = {
	/**
	 * 요청된 페이지 번호
	 *
	 */
	number: number;
	/**
	 * 요청된 페이지 당 객체 수
	 *
	 */
	size: number;
	/**
	 * 실제 반환된 객체 수
	 *
	 */
	totalCount: number;
};

/**
 * PlatformDiscountSharePolicyAlreadyExistsError
 *
 */
export type PlatformDiscountSharePolicyAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_SHARE_POLICY_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformDiscountSharePolicyNotFoundError
 *
 */
export type PlatformDiscountSharePolicyNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_SHARE_POLICY_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 보관된 할인 분담 정책을 업데이트하려고 하는 경우
 *
 * 보관된 할인 분담 정책을 업데이트하려고 하는 경우
 */
export type PlatformArchivedDiscountSharePolicyError = {
	/**
	 *
	 */
	type: "PLATFORM_ARCHIVED_DISCOUNT_SHARE_POLICY";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformDiscountSharePolicyScheduleAlreadyExistsError
 *
 */
export type PlatformDiscountSharePolicyScheduleAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_SHARE_POLICY_SCHEDULE_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 예약된 업데이트가 있는 할인 분담 정책을 보관하려고 하는 경우
 *
 * 예약된 업데이트가 있는 할인 분담 정책을 보관하려고 하는 경우
 */
export type PlatformCannotArchiveScheduledDiscountSharePolicyError = {
	/**
	 *
	 */
	type: "PLATFORM_CANNOT_ARCHIVE_SCHEDULED_DISCOUNT_SHARE_POLICY";
	/**
	 *
	 */
	message?: string;
};

/**
 * 추가 수수료 정책 다건 조회를 위한 필터 조건
 *
 * 추가 수수료 정책 다건 조회를 위한 필터 조건
 */
export type PlatformAdditionalFeePolicyFilterInput = {
	/**
	 * 보관 조회 여부
	 *
	 * true 이면 보관된 추가 수수료 정책의 필터 옵션을 조회하고, false 이면 보관되지 않은 추가 수수료 정책의 필터 옵션을 조회합니다. 기본값은 false 입니다.
	 */
	isArchived?: boolean;
	/**
	 * 금액 부담 주체
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 부가세 부담 주체에 해당하는 추가 수수료 정책만 조회합니다.
	 */
	vatPayers?: PlatformPayer[];
	/**
	 * 검색 키워드
	 *
	 */
	keyword?: PlatformAdditionalFeePolicyFilterInputKeyword;
};

/**
 * 수수료 계산 방식을 특정하기 위한 입력 정보
 *
 * 수수료 계산 방식을 특정하기 위한 입력 정보
 *
 * 정률 수수료를 설정하고 싶은 경우 `fixedRate` 필드에, 정액 수수료를 설정하고 싶은 경우 `fixedAmount` 필드에 값을 명시해 요청합니다. 두 필드 모두 값이 들어있지 않은 경우 요청이 거절됩니다.
 */
export type PlatformFeeInput = {
	/**
	 * 정률 수수료
	 *
	 */
	fixedRate?: number;
	/**
	 * 정액 수수료
	 *
	 */
	fixedAmount?: number;
};

/**
 * 금액 부담 주체
 *
 * 금액 부담 주체
 *
 * 플랫폼에서 발생한 결제 수수료, 부가세 등 금액을 부담하는 주체를 나타냅니다.
 */
export type PlatformPayer = "PARTNER" | "MERCHANT";

/**
 * PlatformAdditionalFeePolicyAlreadyExistsError
 *
 */
export type PlatformAdditionalFeePolicyAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_ADDITIONAL_FEE_POLICY_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 플랫폼 중개수수료 정보
 *
 * 플랫폼 중개수수료 정보
 */
export type PlatformFee = PlatformFixedAmountFee | PlatformFixedRateFee;

/**
 * PlatformAdditionalFeePolicyNotFoundError
 *
 */
export type PlatformAdditionalFeePolicyNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_ADDITIONAL_FEE_POLICY_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 보관된 추가 수수료 정책을 업데이트하려고 하는 경우
 *
 * 보관된 추가 수수료 정책을 업데이트하려고 하는 경우
 */
export type PlatformArchivedAdditionalFeePolicyError = {
	/**
	 *
	 */
	type: "PLATFORM_ARCHIVED_ADDITIONAL_FEE_POLICY";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformAdditionalFeePolicyScheduleAlreadyExistsError
 *
 */
export type PlatformAdditionalFeePolicyScheduleAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_ADDITIONAL_FEE_POLICY_SCHEDULE_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 예약된 업데이트가 있는 추가 수수료 정책을 보관하려고 하는 경우
 *
 * 예약된 업데이트가 있는 추가 수수료 정책을 보관하려고 하는 경우
 */
export type PlatformCannotArchiveScheduledAdditionalFeePolicyError = {
	/**
	 *
	 */
	type: "PLATFORM_CANNOT_ARCHIVE_SCHEDULED_ADDITIONAL_FEE_POLICY";
	/**
	 *
	 */
	message?: string;
};

/**
 * 파트너 계약 요약 정보
 *
 * 파트너 계약 요약 정보
 */
export type PlatformPartnerContractSummary = {
	/**
	 * 계약 고유 아이디
	 *
	 */
	id: string;
	/**
	 * 계약 이름
	 *
	 */
	name: string;
};

/**
 * 파트너 필터 입력 정보
 *
 * 파트너 필터 입력 정보
 */
export type PlatformPartnerFilterInput = {
	/**
	 * 보관 조회 여부
	 *
	 * true 이면 보관된 파트너를 조회하고, false 이면 보관되지 않은 파트너를 조회합니다. 기본값은 false 입니다.
	 */
	isArchived?: boolean;
	/**
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 태그를 하나 이상 가지는 파트너만 조회합니다.
	 */
	tags?: string[];
	/**
	 * 은행
	 *
	 * 하나 이상의 값이 존재하는 경우, 해당 리스트에 포함되는 계좌 은행을 가진 파트너만 조회합니다.
	 */
	banks?: Bank[];
	/**
	 * 통화 단위
	 *
	 * 하나 이상의 값이 존재하는 경우, 해당 리스트에 포함되는 계좌 통화를 가진 파트너만 조회합니다.
	 */
	accountCurrencies?: Currency[];
	/**
	 *
	 * 하나 이상의 값이 존재하는 경우, 해당 리스트에 포함되는 아이디를 가진 파트너만 조회합니다.
	 */
	ids?: string[];
	/**
	 *
	 * 하나 이상의 값이 존재하는 경우, 해당 리스트에 포함되는 기본 계약 id를 가진 파트너만 조회합니다.
	 */
	contractIds?: string[];
	/**
	 * 검색 키워드
	 *
	 */
	keyword?: PlatformPartnerFilterInputKeyword;
};

/**
 * 파트너 담당자 정보
 *
 * 파트너 담당자 정보
 */
export type CreatePlatformPartnerBodyContact = {
	/**
	 * 담당자 이름
	 *
	 */
	name: string;
	/**
	 * 담당자 휴대폰 번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email: string;
};

/**
 * 파트너 계좌 등록을 위한 정보
 *
 * 파트너 계좌 등록을 위한 정보
 */
export type CreatePlatformPartnerBodyAccount = {
	/**
	 * 은행
	 *
	 */
	bank: Bank;
	/**
	 * 정산에 사용할 통화
	 *
	 */
	currency: Currency;
	/**
	 * 계좌번호
	 *
	 */
	number: string;
	/**
	 * 예금주명
	 *
	 */
	holder: string;
	/**
	 * 계좌 검증 아이디
	 *
	 */
	accountVerificationId?: string;
};

/**
 * 파트너 생성을 위한 유형별 추가 정보
 *
 * 파트너 생성을 위한 유형별 추가 정보
 */
export type CreatePlatformPartnerBodyType = {
	/**
	 * 사업자 추가 정보
	 *
	 */
	business?: CreatePlatformPartnerBodyTypeBusiness;
	/**
	 * 원천징수 대상자 추가 정보
	 *
	 */
	whtPayer?: CreatePlatformPartnerBodyTypeWhtPayer;
	/**
	 * 원천징수 비대상자 추가 정보
	 *
	 */
	nonWhtPayer?: CreatePlatformPartnerBodyTypeNonWhtPayer;
};

/**
 * PlatformProperties
 *
 */
export type PlatformProperties = {};

/**
 * 파트너 계좌 검증 아이디를 이미 사용한 경우
 *
 * 파트너 계좌 검증 아이디를 이미 사용한 경우
 */
export type PlatformAccountVerificationAlreadyUsedError = {
	/**
	 *
	 */
	type: "PLATFORM_ACCOUNT_VERIFICATION_ALREADY_USED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 파트너 계좌 인증이 실패한 경우
 *
 * 파트너 계좌 인증이 실패한 경우
 */
export type PlatformAccountVerificationFailedError = {
	/**
	 *
	 */
	type: "PLATFORM_ACCOUNT_VERIFICATION_FAILED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 파트너 계좌 검증 아이디를 찾을 수 없는 경우
 *
 * 파트너 계좌 검증 아이디를 찾을 수 없는 경우
 */
export type PlatformAccountVerificationNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_ACCOUNT_VERIFICATION_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformContractNotFoundError
 *
 */
export type PlatformContractNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_CONTRACT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 지원 되지 않는 통화를 선택한 경우
 *
 * 지원 되지 않는 통화를 선택한 경우
 */
export type PlatformCurrencyNotSupportedError = {
	/**
	 *
	 */
	type: "PLATFORM_CURRENCY_NOT_SUPPORTED";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformPartnerIdAlreadyExistsError
 *
 */
export type PlatformPartnerIdAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_PARTNER_ID_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 사용자 정의 속성이 존재 하지 않는 경우
 *
 * 사용자 정의 속성이 존재 하지 않는 경우
 */
export type PlatformUserDefinedPropertyNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_USER_DEFINED_PROPERTY_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 플랫폼 파트너 담당자 연락 정보
 *
 * 플랫폼 파트너 담당자 연락 정보
 *
 * 파트너 담당자에게 연락하기 위한 정보들 입니다.
 */
export type PlatformContact = {
	/**
	 * 담당자 이름
	 *
	 */
	name: string;
	/**
	 * 담당자 휴대폰 번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email: string;
};

/**
 * 플랫폼 정산 계좌
 *
 * 플랫폼 정산 계좌
 *
 * `currency` 가 KRW 일 경우 예금주 조회 API 를 통해 올바른 계좌인지 검증합니다. 그 외의 화폐일 경우 따로 검증하지는 않습니다.
 */
export type PlatformAccount = {
	/**
	 * 은행
	 *
	 */
	bank: Bank;
	/**
	 * 정산에 사용할 통화
	 *
	 */
	currency: Currency;
	/**
	 * 계좌번호
	 *
	 */
	number: string;
	/**
	 * 예금주명
	 *
	 */
	holder: string;
	/**
	 * 계좌 상태
	 *
	 */
	status: PlatformAccountStatus;
};

/**
 * 플랫폼 파트너 상태
 *
 * 플랫폼 파트너 상태
 */
export type PlatformPartnerStatus = "PENDING" | "APPROVED" | "REJECTED";

/**
 * 파트너 유형별 추가 정보
 *
 * 파트너 유형별 추가 정보
 */
export type PlatformPartnerType =
	| PlatformPartnerTypeBusiness
	| PlatformPartnerTypeNonWhtPayer
	| PlatformPartnerTypeWhtPayer;

/**
 * PlatformPartnerNotFoundError
 *
 */
export type PlatformPartnerNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_PARTNER_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 파트너 담당자 업데이트를 위한 정보
 *
 * 파트너 담당자 업데이트를 위한 정보
 */
export type UpdatePlatformPartnerBodyContact = {
	/**
	 * 담당자 이름
	 *
	 */
	name?: string;
	/**
	 * 담당자 휴대폰 번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email?: string;
};

/**
 * 파트너 계좌 업데이트를 위한 입력 정보
 *
 * 파트너 계좌 업데이트를 위한 입력 정보
 */
export type UpdatePlatformPartnerBodyAccount = {
	/**
	 * 은행
	 *
	 */
	bank: Bank;
	/**
	 * 정산에 사용할 통화
	 *
	 */
	currency: Currency;
	/**
	 * 계좌번호
	 *
	 */
	number: string;
	/**
	 * 예금주명
	 *
	 */
	holder: string;
	/**
	 * 계좌 검증 아이디
	 *
	 */
	accountVerificationId?: string;
};

/**
 * 파트너 업데이트를 위한 유형별 추가 정보
 *
 * 파트너 업데이트를 위한 유형별 추가 정보
 *
 * 파트너 유형별 추가 정보를 수정합니다. 기존과 다른 파트너 유형 정보가 입력된 경우, 파트너의 유형 자체가 변경됩니다.
 */
export type UpdatePlatformPartnerBodyType = {
	/**
	 * 사업자 추가 정보
	 *
	 */
	business?: UpdatePlatformPartnerBodyTypeBusiness;
	/**
	 * 원천징수 대상자 추가 정보
	 *
	 */
	whtPayer?: UpdatePlatformPartnerBodyTypeWhtPayer;
	/**
	 * 원천징수 비대상자 추가 정보
	 *
	 */
	nonWhtPayer?: UpdatePlatformPartnerBodyTypeNonWhtPayer;
};

/**
 * 보관된 파트너를 업데이트하려고 하는 경우
 *
 * 보관된 파트너를 업데이트하려고 하는 경우
 */
export type PlatformArchivedPartnerError = {
	/**
	 *
	 */
	type: "PLATFORM_ARCHIVED_PARTNER";
	/**
	 *
	 */
	message?: string;
};

/**
 * 파트너 타입 수정에 필요한 데이터가 부족한 경우
 *
 * 파트너 타입 수정에 필요한 데이터가 부족한 경우
 */
export type PlatformInsufficientDataToChangePartnerTypeError = {
	/**
	 *
	 */
	type: "PLATFORM_INSUFFICIENT_DATA_TO_CHANGE_PARTNER_TYPE";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformContractsNotFoundError
 *
 */
export type PlatformContractsNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_CONTRACTS_NOT_FOUND";
	/**
	 *
	 */
	ids: string[];
	/**
	 *
	 */
	graphqlIds: string[];
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformPartnerIdsAlreadyExistError
 *
 */
export type PlatformPartnerIdsAlreadyExistError = {
	/**
	 *
	 */
	type: "PLATFORM_PARTNER_IDS_ALREADY_EXISTS";
	/**
	 *
	 */
	ids: string[];
	/**
	 *
	 */
	graphqlIds: string[];
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformPartnerIdsDuplicatedError
 *
 */
export type PlatformPartnerIdsDuplicatedError = {
	/**
	 *
	 */
	type: "PLATFORM_PARTNER_IDS_DUPLICATED";
	/**
	 *
	 */
	ids: string[];
	/**
	 *
	 */
	graphqlIds: string[];
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformPartnerScheduleAlreadyExistsError
 *
 */
export type PlatformPartnerScheduleAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_PARTNER_SCHEDULE_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * SchedulePlatformPartnersBodyUpdate
 *
 */
export type SchedulePlatformPartnersBodyUpdate = {
	/**
	 *
	 */
	name?: string;
	/**
	 *
	 */
	contact?: SchedulePlatformPartnersBodyUpdateContact;
	/**
	 *
	 */
	type?: SchedulePlatformPartnersBodyUpdateType;
	/**
	 *
	 */
	account?: SchedulePlatformPartnersBodyUpdateAccount;
	/**
	 *
	 */
	defaultContractId?: string;
	/**
	 *
	 */
	memo?: string;
	/**
	 *
	 */
	tags?: string[];
	/**
	 *
	 */
	userDefinedProperties?: PlatformProperties;
};

/**
 * 보관된 파트너들을 예약 업데이트하려고 하는 경우
 *
 * 보관된 파트너들을 예약 업데이트하려고 하는 경우
 */
export type PlatformArchivedPartnersCannotBeScheduledError = {
	/**
	 *
	 */
	type: "PLATFORM_ARCHIVED_PARTNERS_CANNOT_BE_SCHEDULED";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformPartnerSchedulesAlreadyExistError
 *
 */
export type PlatformPartnerSchedulesAlreadyExistError = {
	/**
	 *
	 */
	type: "PLATFORM_PARTNER_SCHEDULES_ALREADY_EXIST";
	/**
	 *
	 */
	ids: string[];
	/**
	 *
	 */
	graphqlIds: string[];
	/**
	 *
	 */
	message?: string;
};

/**
 * 예약된 업데이트가 있는 파트너를 보관하려고 하는 경우
 *
 * 예약된 업데이트가 있는 파트너를 보관하려고 하는 경우
 */
export type PlatformCannotArchiveScheduledPartnerError = {
	/**
	 *
	 */
	type: "PLATFORM_CANNOT_ARCHIVE_SCHEDULED_PARTNER";
	/**
	 *
	 */
	message?: string;
};

/**
 * 계약 다건 조회를 위한 필터 조건
 *
 * 계약 다건 조회를 위한 필터 조건
 */
export type PlatformContractFilterInput = {
	/**
	 * 금액 부담 주체
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 수수료 부담 주체를 가진 계약만 조회합니다.
	 */
	platformFeePayers?: PlatformPayer[];
	/**
	 * 플랫폼 정산 주기 계산 방식
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 정산 주기 계산 방식을 가진 계약만 조회합니다.
	 */
	cycleTypes?: PlatformSettlementCycleType[];
	/**
	 * 플랫폼 정산 기준일
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 정산 기준일을 가진 계약만 조회합니다.
	 */
	datePolicies?: PlatformSettlementCycleDatePolicy[];
	/**
	 * 보관 조회 여부
	 *
	 * true 이면 보관된 계약을 조회하고, false 이면 보관되지 않은 계약을 조회합니다. 기본값은 false 입니다.
	 */
	isArchived?: boolean;
	/**
	 * 검색 키워드
	 *
	 */
	keyword?: PlatformContractFilterInputKeyword;
};

/**
 * 플랫폼 정산 주기 입력 정보
 *
 * 플랫폼 정산 주기 입력 정보
 */
export type PlatformSettlementCycleInput = {
	/**
	 * 지체일 (d+n 의 n)
	 *
	 * 정산시작일(통상 주문완료일)로부터 더해진 다음 날짜로부터 가장 가까운 날에 정산이 됩니다. 최소 1 에서 최대 10 까지 지정할 수 있습니다.
	 */
	lagDays: number;
	/**
	 * 기준일로, 정산일 계산 시 공휴일을 고려하기 위한 정보입니다.
	 *
	 */
	datePolicy: PlatformSettlementCycleDatePolicy;
	/**
	 * 정산 주기 계산 방식
	 *
	 */
	method: PlatformSettlementCycleMethodInput;
};

/**
 * PlatformContractAlreadyExistsError
 *
 */
export type PlatformContractAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_CONTRACT_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산 주기
 *
 * 정산 주기
 *
 * 지체일, 정산일, 기준일로 구성되며, 해당 요소들의 조합으로 실제 정산일을 계산합니다.
 */
export type PlatformSettlementCycle = {
	/**
	 * 지체일 (d+n 의 n)
	 *
	 * 정산시작일(통상 주문완료일)로부터 더해진 다음 날짜로부터 가장 가까운 날에 정산이 됩니다. 최소 1 에서 최대 10 까지 지정할 수 있습니다.
	 */
	lagDays: number;
	/**
	 * 기준일로, 정산일 계산 시 공휴일을 고려하기 위한 정보입니다.
	 *
	 */
	datePolicy: PlatformSettlementCycleDatePolicy;
	/**
	 * 정산 주기 계산 방식
	 *
	 */
	method: PlatformSettlementCycleMethod;
};

/**
 * 보관된 계약을 업데이트하려고 하는 경우
 *
 * 보관된 계약을 업데이트하려고 하는 경우
 */
export type PlatformArchivedContractError = {
	/**
	 *
	 */
	type: "PLATFORM_ARCHIVED_CONTRACT";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformContractScheduleAlreadyExistsError
 *
 */
export type PlatformContractScheduleAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_CONTRACT_SCHEDULE_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 예약된 업데이트가 있는 계약을 보관하려고 하는 경우
 *
 * 예약된 업데이트가 있는 계약을 보관하려고 하는 경우
 */
export type PlatformCannotArchiveScheduledContractError = {
	/**
	 *
	 */
	type: "PLATFORM_CANNOT_ARCHIVE_SCHEDULED_CONTRACT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 수기 정산건
 *
 * 수기 정산건
 */
export type PlatformManualTransfer = {
	/**
	 *
	 */
	type: "MANUAL";
	/**
	 * 정산건 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너
	 *
	 */
	partner: PlatformPartner;
	/**
	 * 정산 상태
	 *
	 */
	status: PlatformTransferStatus;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 정산 통화
	 *
	 */
	settlementCurrency: Currency;
	/**
	 *
	 */
	payoutId?: string;
	/**
	 *
	 */
	payoutGraphqlId?: string;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 * 정산 금액
	 *
	 */
	settlementAmount: number;
};

/**
 * 주문 정산건
 *
 * 주문 정산건
 */
export type PlatformOrderTransfer = {
	/**
	 *
	 */
	type: "ORDER";
	/**
	 * 정산건 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너
	 *
	 */
	partner: PlatformPartner;
	/**
	 * 정산 상태
	 *
	 */
	status: PlatformTransferStatus;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 정산 통화
	 *
	 */
	settlementCurrency: Currency;
	/**
	 *
	 */
	payoutId?: string;
	/**
	 *
	 */
	payoutGraphqlId?: string;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 * 정산 금액 정보
	 *
	 */
	amount: PlatformOrderSettlementAmount;
	/**
	 * 계약
	 *
	 */
	contract: PlatformContract;
	/**
	 * 결제 정보
	 *
	 */
	payment: PlatformPayment;
	/**
	 * 정산 시작일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementStartDate: string;
	/**
	 * 주문 항목 리스트
	 *
	 */
	orderLines: PlatformOrderTransferOrderLine[];
	/**
	 * 정산 금액 계산 시 사용된 추가 수수료 정보
	 *
	 */
	additionalFees: PlatformOrderTransferAdditionalFee[];
	/**
	 * 정산 금액 계산 시 사용된 할인 정보
	 *
	 */
	discounts: PlatformOrderTransferDiscount[];
	/**
	 * 정산 파라미터 (실험기능)
	 *
	 */
	parameters: TransferParameters;
};

/**
 * 주문 취소 정산건
 *
 * 주문 취소 정산건
 */
export type PlatformOrderCancelTransfer = {
	/**
	 *
	 */
	type: "ORDER_CANCEL";
	/**
	 * 정산건 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너
	 *
	 */
	partner: PlatformPartner;
	/**
	 * 정산 상태
	 *
	 */
	status: PlatformTransferStatus;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 정산 통화
	 *
	 */
	settlementCurrency: Currency;
	/**
	 *
	 */
	payoutId?: string;
	/**
	 *
	 */
	payoutGraphqlId?: string;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 * 정산 금액 정보
	 *
	 */
	amount: PlatformOrderSettlementAmount;
	/**
	 * 계약
	 *
	 */
	contract: PlatformContract;
	/**
	 * 결제 정보
	 *
	 */
	payment: PlatformPayment;
	/**
	 * 정산 시작일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementStartDate: string;
	/**
	 * 주문 항목 리스트
	 *
	 */
	orderLines: PlatformOrderTransferOrderLine[];
	/**
	 * 정산 금액 계산 시 사용된 추가 수수료 정보
	 *
	 */
	additionalFees: PlatformOrderTransferAdditionalFee[];
	/**
	 * 정산 금액 계산 시 사용된 할인 정보
	 *
	 */
	discounts: PlatformOrderTransferDiscount[];
	/**
	 * 주문 취소 정보
	 *
	 */
	cancellation: PlatformOrderTransferCancellation;
	/**
	 * 정산 파라미터 (실험기능)
	 *
	 */
	parameters: TransferParameters;
};

/**
 * PlatformTransferNotFoundError
 *
 */
export type PlatformTransferNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_TRANSFER_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformCancelOrderTransfersExistsError
 *
 */
export type PlatformCancelOrderTransfersExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_CANCEL_ORDER_TRANSFERS_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformTransferNonDeletableStatusError
 *
 */
export type PlatformTransferNonDeletableStatusError = {
	/**
	 *
	 */
	type: "PLATFORM_TRANSFER_NON_DELETABLE_STATUS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산건 필터 입력 정보
 *
 * 정산건 필터 입력 정보
 *
 * 정산 시작일 범위와 정산 일 범위는 둘 중 하나만 입력 가능합니다.
 */
export type PlatformTransferFilterInput = {
	/**
	 * 정산 시작일 범위
	 *
	 */
	settlementStartDateRange?: DateRange;
	/**
	 * 정산 일 범위
	 *
	 */
	settlementDateRange?: DateRange;
	/**
	 * 파트너 태그 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 태그를 하나 이상 가지는 파트너에 대한 정산건만 조회합니다.
	 */
	partnerTags?: string[];
	/**
	 * 계약 아이디 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 계약 아이디를 가지는 정산건만 조회합니다.
	 */
	contractIds?: string[];
	/**
	 * 할인 분담 정책 아이디 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 할인 분담 정책 아이디를 하나 이상 가지는 정산건만 조회합니다.
	 */
	discountSharePolicyIds?: string[];
	/**
	 * 추가 수수료 정책 아이디 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 추가 수수료 아이디를 하나 이상 가지는 정산건만 조회합니다.
	 */
	additionalFeePolicyIds?: string[];
	/**
	 * 결제 수단 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 결제 수단을 가지는 파트너만 조회합니다.
	 */
	paymentMethodTypes?: PaymentMethodType[];
	/**
	 * 채널 키 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 채널 키를 가지는 정산건만 조회합니다.
	 */
	channelKeys?: string[];
	/**
	 * 정산 방식 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 정산 방식의 정산건만 조회합니다.
	 */
	types?: PlatformTransferType[];
	/**
	 * 정산 상태 리스트
	 *
	 * 하나 이상의 값이 존재하는 경우 해당 리스트에 포함되는 정산 상태인 정산건만 조회합니다.
	 */
	statuses?: PlatformTransferStatus[];
	/**
	 * 검색 키워드
	 *
	 */
	keyword?: PlatformTransferFilterInputKeyword;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest?: boolean;
};

/**
 * PlatformTransferSummary
 *
 */
export type PlatformTransferSummary =
	| PlatformManualTransferSummary
	| PlatformOrderTransferSummary
	| PlatformOrderCancelTransferSummary;

/**
 * 주문 정보
 *
 * 주문 정보
 *
 * 주문 금액 또는 주문 항목 하나만 입력 가능합니다.
 */
export type CreatePlatformOrderTransferBodyOrderDetail = {
	/**
	 * 주문 금액
	 *
	 */
	orderAmount?: number;
	/**
	 * 주문 항목 리스트
	 *
	 */
	orderLines?: CreatePlatformOrderTransferBodyOrderLine[];
};

/**
 * 할인 정보
 *
 * 할인 정보
 */
export type CreatePlatformOrderTransferBodyDiscount = {
	/**
	 * 할인 분담 정책 아이디
	 *
	 */
	sharePolicyId: string;
	/**
	 * 할인 금액
	 *
	 */
	amount: number;
};

/**
 * 추가 수수료 정보
 *
 * 추가 수수료 정보
 */
export type CreatePlatformOrderTransferBodyAdditionalFee = {
	/**
	 * 추가 수수료 정책 아이디
	 *
	 */
	policyId: string;
};

/**
 * 외부 결제 상세 정보
 *
 * 외부 결제 상세 정보
 */
export type CreatePlatformOrderTransferBodyExternalPaymentDetail = {
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 주문 명
	 *
	 */
	orderName?: string;
	/**
	 * 결제 일시
	 *
	 */
	paidAt?: string;
	/**
	 * 결제 수단
	 *
	 */
	method?: PlatformPaymentMethodInput;
};

/**
 * TransferParameters
 *
 */
export type TransferParameters = {};

/**
 * 사용자 정의 속성
 *
 * 사용자 정의 속성
 */
export type PlatformUserDefinedPropertyKeyValue = {
	/**
	 * 사용자 정의 속성 키
	 *
	 */
	key: string;
	/**
	 * 사용자 정의 속성 값
	 *
	 */
	value: PlatformUserDefinedPropertyValue;
};

/**
 * PlatformAdditionalFeePoliciesNotFoundError
 *
 */
export type PlatformAdditionalFeePoliciesNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_ADDITIONAL_FEE_POLICIES_NOT_FOUND";
	/**
	 *
	 */
	ids: string[];
	/**
	 *
	 */
	graphqlIds: string[];
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformAdditionalFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError
 *
 */
export type PlatformAdditionalFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError =
	{
		/**
		 *
		 */
		type: "PLATFORM_ADDITIONAL_FIXED_AMOUNT_FEE_CURRENCY_AND_SETTLEMENT_CURRENCY_MISMATCHED";
		/**
		 *
		 */
		id: string;
		/**
		 *
		 */
		graphqlId: string;
		/**
		 *
		 */
		feeCurrency: Currency;
		/**
		 *
		 */
		settlementCurrency: Currency;
		/**
		 *
		 */
		message?: string;
	};

/**
 * PlatformContractPlatformFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError
 *
 */
export type PlatformContractPlatformFixedAmountFeeCurrencyAndSettlementCurrencyMismatchedError =
	{
		/**
		 *
		 */
		type: "PLATFORM_CONTRACT_PLATFORM_FIXED_AMOUNT_FEE_CURRENCY_AND_SETTLEMENT_CURRENCY_MISMATCHED";
		/**
		 *
		 */
		id: string;
		/**
		 *
		 */
		graphqlId: string;
		/**
		 *
		 */
		feeCurrency: Currency;
		/**
		 *
		 */
		settlementCurrency: Currency;
		/**
		 *
		 */
		message?: string;
	};

/**
 * PlatformDiscountExceededOrderAmountError
 *
 */
export type PlatformDiscountExceededOrderAmountError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_EXCEEDED_ORDER_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformDiscountSharePoliciesNotFoundError
 *
 */
export type PlatformDiscountSharePoliciesNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_SHARE_POLICIES_NOT_FOUND";
	/**
	 *
	 */
	ids: string[];
	/**
	 *
	 */
	graphqlIds: string[];
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformPaymentNotFoundError
 *
 */
export type PlatformPaymentNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_PAYMENT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformProductIdDuplicatedError
 *
 */
export type PlatformProductIdDuplicatedError = {
	/**
	 *
	 */
	type: "PLATFORM_PRODUCT_ID_DUPLICATED";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산 요청 결제 금액이 포트원 결제 내역의 결제 금액을 초과한 경우
 *
 * 정산 요청 결제 금액이 포트원 결제 내역의 결제 금액을 초과한 경우
 */
export type PlatformSettlementPaymentAmountExceededPortOnePaymentError = {
	/**
	 *
	 */
	type: "PLATFORM_SETTLEMENT_PAYMENT_AMOUNT_EXCEEDED_PORT_ONE_PAYMENT";
	/**
	 *
	 */
	registeredSettlementPaymentAmount: number;
	/**
	 *
	 */
	requestSettlementPaymentAmount: number;
	/**
	 *
	 */
	portOnePaymentAmount: number;
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산 요청 공급대가가 포트원 결제 내역의 공급대가를 초과한 경우
 *
 * 정산 요청 공급대가가 포트원 결제 내역의 공급대가를 초과한 경우
 */
export type PlatformSettlementSupplyWithVatAmountExceededPortOnePaymentError = {
	/**
	 *
	 */
	type: "PLATFORM_SETTLEMENT_SUPPLY_WITH_VAT_AMOUNT_EXCEEDED_PORT_ONE_PAYMENT";
	/**
	 *
	 */
	registeredSettlementSupplyWithVatAmount: number;
	/**
	 *
	 */
	requestSettlementSupplyWithVatAmount: number;
	/**
	 *
	 */
	portOneSupplyWithVatAmount: number;
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산 요청 면세 금액이 포트원 결제 내역의 면세 금액을 초과한 경우
 *
 * 정산 요청 면세 금액이 포트원 결제 내역의 면세 금액을 초과한 경우
 */
export type PlatformSettlementTaxFreeAmountExceededPortOnePaymentError = {
	/**
	 *
	 */
	type: "PLATFORM_SETTLEMENT_TAX_FREE_AMOUNT_EXCEEDED_PORT_ONE_PAYMENT";
	/**
	 *
	 */
	registeredSettlementTaxFreeAmount: number;
	/**
	 *
	 */
	requestSettlementTaxFreeAmount: number;
	/**
	 *
	 */
	portOneTaxFreeAmount: number;
	/**
	 *
	 */
	message?: string;
};

/**
 * 면세 금액이 결제금액을 초과한 경우
 *
 * 면세 금액이 결제금액을 초과한 경우
 */
export type PlatformTaxFreeAmountOverFlowError = {
	/**
	 *
	 */
	type: "PLATFORM_TAX_FREE_AMOUNT_OVER_FLOW";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformTransferAlreadyExistsError
 *
 */
export type PlatformTransferAlreadyExistsError = {
	/**
	 *
	 */
	type: "PLATFORM_TRANSFER_ALREADY_EXISTS";
	/**
	 *
	 */
	transferId: string;
	/**
	 *
	 */
	transferGraphqlId: string;
	/**
	 *
	 */
	message?: string;
};

/**
 * 주문 취소 정보
 *
 * 주문 취소 정보
 *
 * orderAmount, orderLines, all 중에서 하나만 입력하여야 합니다.
 */
export type CreatePlatformOrderCancelTransferBodyOrderDetail = {
	/**
	 * 주문 취소 금액
	 *
	 */
	orderAmount?: number;
	/**
	 * 주문 취소 항목 리스트
	 *
	 */
	orderLines?: CreatePlatformOrderCancelTransferBodyOrderLine[];
	/**
	 * 전체 금액 취소
	 *
	 */
	all?: CreatePlatformOrderCancelTransferBodyOrderDetailAll;
};

/**
 * 할인 정보
 *
 * 할인 정보
 */
export type CreatePlatformOrderCancelTransferBodyDiscount = {
	/**
	 * 할인 분담 정책 아이디
	 *
	 */
	sharePolicyId: string;
	/**
	 * 할인 금액
	 *
	 */
	amount: number;
};

/**
 * 외부 결제 상세 정보
 *
 * 외부 결제 상세 정보
 */
export type CreatePlatformOrderCancelTransferBodyExternalCancellationDetail = {
	/**
	 * 취소 일시
	 *
	 */
	cancelledAt?: string;
};

/**
 * 취소 가능한 금액이 초과한 경우
 *
 * 취소 가능한 금액이 초과한 경우
 */
export type PlatformCancellableAmountExceededError = {
	/**
	 *
	 */
	type: "PLATFORM_CANCELLABLE_AMOUNT_EXCEEDED";
	/**
	 *
	 */
	cancellableAmount: number;
	/**
	 *
	 */
	amountType: PlatformCancellableAmountType;
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformCancellableDiscountAmountExceededError
 *
 */
export type PlatformCancellableDiscountAmountExceededError = {
	/**
	 *
	 */
	type: "PLATFORM_CANCELLABLE_DISCOUNT_AMOUNT_EXCEEDED";
	/**
	 *
	 */
	discountSharePolicyId: string;
	/**
	 *
	 */
	discountSharePolicyGraphqlId: string;
	/**
	 *
	 */
	cancellableAmount: number;
	/**
	 *
	 */
	productId?: string;
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformCancellableProductQuantityExceededError
 *
 */
export type PlatformCancellableProductQuantityExceededError = {
	/**
	 *
	 */
	type: "PLATFORM_CANCELLABLE_PRODUCT_QUANTITY_EXCEEDED";
	/**
	 *
	 */
	productId: string;
	/**
	 *
	 */
	cancellableQuantity: number;
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformCancellationAndPaymentTypeMismatchedError
 *
 */
export type PlatformCancellationAndPaymentTypeMismatchedError = {
	/**
	 *
	 */
	type: "PLATFORM_CANCELLATION_AND_PAYMENT_TYPE_MISMATCHED";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformCancellationNotFoundError
 *
 */
export type PlatformCancellationNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_CANCELLATION_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산 건 식별에 실패한 경우
 *
 * 정산 건 식별에 실패한 경우
 */
export type PlatformCannotSpecifyTransferError = {
	/**
	 *
	 */
	type: "PLATFORM_CANNOT_SPECIFY_TRANSFER";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformDiscountCancelExceededOrderCancelAmountError
 *
 */
export type PlatformDiscountCancelExceededOrderCancelAmountError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_CANCEL_EXCEEDED_ORDER_CANCEL_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformDiscountSharePolicyIdDuplicatedError
 *
 */
export type PlatformDiscountSharePolicyIdDuplicatedError = {
	/**
	 *
	 */
	type: "PLATFORM_DISCOUNT_SHARE_POLICY_ID_DUPLICATED";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformOrderDetailMismatchedError
 *
 */
export type PlatformOrderDetailMismatchedError = {
	/**
	 *
	 */
	type: "PLATFORM_ORDER_DETAIL_MISMATCHED";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformOrderTransferAlreadyCancelledError
 *
 */
export type PlatformOrderTransferAlreadyCancelledError = {
	/**
	 *
	 */
	type: "PLATFORM_ORDER_TRANSFER_ALREADY_CANCELLED";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformProductIdNotFoundError
 *
 */
export type PlatformProductIdNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_PRODUCT_ID_NOT_FOUND";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	message?: string;
};

/**
 * 정산 취소 요청 금액이 포트원 결제 취소 내역의 취소 금액을 초과한 경우
 *
 * 정산 취소 요청 금액이 포트원 결제 취소 내역의 취소 금액을 초과한 경우
 */
export type PlatformSettlementCancelAmountExceededPortOneCancelError = {
	/**
	 *
	 */
	type: "PLATFORM_SETTLEMENT_CANCEL_AMOUNT_EXCEEDED_PORT_ONE_CANCEL";
	/**
	 *
	 */
	registeredSettlementCancelAmount: number;
	/**
	 *
	 */
	requestSettlementCancelAmount: number;
	/**
	 *
	 */
	portOneCancelAmount: number;
	/**
	 *
	 */
	amountType: PlatformPortOnePaymentCancelAmountType;
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformTransferDiscountSharePolicyNotFoundError
 *
 */
export type PlatformTransferDiscountSharePolicyNotFoundError = {
	/**
	 *
	 */
	type: "PLATFORM_TRANSFER_DISCOUNT_SHARE_POLICY_NOT_FOUND";
	/**
	 *
	 */
	discountSharePolicyId: string;
	/**
	 *
	 */
	discountSharePolicyGraphqlId: string;
	/**
	 *
	 */
	productId?: string;
	/**
	 *
	 */
	message?: string;
};

/**
 * 다운로드 할 시트 컬럼
 *
 * 다운로드 할 시트 컬럼
 */
export type PlatformTransferSheetField =
	| "STATUS"
	| "TRANSFER_ID"
	| "PARTNER_NAME"
	| "SETTLEMENT_DATE"
	| "SETTLEMENT_START_DATE"
	| "TYPE"
	| "PAYMENT_ID"
	| "ORDER_NAME"
	| "PAYMENT_METHOD"
	| "SETTLEMENT_AMOUNT"
	| "SETTLEMENT_ORDER_AMOUNT"
	| "SETTLEMENT_PAYMENT_AMOUNT"
	| "SETTLEMENT_PAYMENT_VAT_AMOUNT"
	| "SETTLEMENT_PAYMENT_VAT_BURDEN_AMOUNT"
	| "SETTLEMENT_SUPPLY_AMOUNT"
	| "SETTLEMENT_TAX_FREE_AMOUNT"
	| "SETTLEMENT_PLATFORM_FEE_AMOUNT"
	| "SETTLEMENT_PLATFORM_FEE_VAT_AMOUNT"
	| "SETTLEMENT_DISCOUNT_AMOUNT"
	| "SETTLEMENT_DISCOUNT_SHARE_AMOUNT"
	| "SETTLEMENT_ADDITIONAL_FEE_AMOUNT"
	| "SETTLEMENT_ADDITIONAL_FEE_VAT_AMOUNT"
	| "SETTLEMENT_CURRENCY"
	| "PARTNER_TYPE"
	| "TAXATION_TYPE"
	| "INCOME_TYPE"
	| "TAXATION_TYPE_OR_INCOME_TYPE";

/**
 * PlatformPartnerSettlementFilterInput
 *
 */
export type PlatformPartnerSettlementFilterInput = {
	/**
	 *
	 */
	settlementDates?: string[];
	/**
	 *
	 */
	contractIds?: string[];
	/**
	 *
	 */
	partnerTags?: string[];
	/**
	 * 통화 단위
	 *
	 */
	settlementCurrencies?: Currency[];
	/**
	 * 정산 상태
	 *
	 */
	statuses?: PlatformPartnerSettlementStatus[];
	/**
	 *
	 */
	partnerIds?: string[];
	/**
	 * 정산 유형
	 *
	 */
	settlementTypes?: PlatformPartnerSettlementType[];
	/**
	 *
	 */
	keyword?: PlatformPartnerSettlementFilterKeywordInput;
};

/**
 * PlatformPartnerSettlement
 *
 */
export type PlatformPartnerSettlement =
	| PlatformPartnerManualSettlement
	| PlatformPartnerOrderSettlement
	| PlatformPartnerOrderCancelSettlement;

/**
 * PlatformPartnerSettlementStatusStats
 *
 */
export type PlatformPartnerSettlementStatusStats = {
	/**
	 *
	 */
	payoutPrepared: number;
	/**
	 *
	 */
	payoutWithheld: number;
	/**
	 *
	 */
	payoutFailed: number;
	/**
	 *
	 */
	inPayout: number;
	/**
	 *
	 */
	paidOut: number;
};

/**
 * PlatformPayoutFilterInput
 *
 */
export type PlatformPayoutFilterInput = {
	/**
	 *
	 */
	statuses?: PlatformPayoutStatus[];
	/**
	 *
	 */
	partnerIds?: string[];
	/**
	 *
	 */
	criteria: PlatformPayoutFilterInputCriteria;
	/**
	 * 은행
	 *
	 */
	payoutAccountBanks?: Bank[];
	/**
	 *
	 */
	partnerTags?: string[];
	/**
	 * 통화 단위
	 *
	 */
	payoutCurrencies?: Currency[];
};

/**
 * PlatformPayout
 *
 */
export type PlatformPayout = {
	/**
	 * 지급 고유 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	method: PlatformPayoutMethod;
	/**
	 *
	 */
	status: PlatformPayoutStatus;
	/**
	 *
	 */
	statusUpdatedAt: string;
	/**
	 *
	 */
	memo?: string;
	/**
	 *
	 */
	partner: PlatformPartner;
	/**
	 *
	 */
	account: PlatformPayoutAccount;
	/**
	 *
	 */
	currency: Currency;
	/**
	 *
	 */
	amount: number;
	/**
	 *
	 */
	settlementAmount: number;
	/**
	 *
	 */
	incomeTaxAmount: number;
	/**
	 *
	 */
	localIncomeTaxAmount: number;
	/**
	 *
	 */
	withdrawalMemo?: string;
	/**
	 *
	 */
	depositMemo?: string;
	/**
	 *
	 */
	createdAt: string;
};

/**
 * PlatformPayoutStatusStats
 *
 */
export type PlatformPayoutStatusStats = {
	/**
	 *
	 */
	prepared: number;
	/**
	 *
	 */
	cancelled: number;
	/**
	 *
	 */
	stopped: number;
	/**
	 *
	 */
	processing: number;
	/**
	 *
	 */
	succeeded: number;
	/**
	 *
	 */
	failed: number;
};

/**
 * PlatformBulkPayoutFilterInput
 *
 */
export type PlatformBulkPayoutFilterInput = {
	/**
	 *
	 */
	statuses?: PlatformBulkPayoutStatus[];
	/**
	 *
	 */
	methods?: PlatformPayoutMethod[];
	/**
	 *
	 */
	criteria?: PlatformBulkPayoutFilterInputCriteria;
};

/**
 * PlatformBulkPayout
 *
 */
export type PlatformBulkPayout = {
	/**
	 * 일괄 지급 고유 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	name: string;
	/**
	 *
	 */
	creatorId: string;
	/**
	 *
	 */
	method: PlatformPayoutMethod;
	/**
	 *
	 */
	arePayoutsGenerated: boolean;
	/**
	 *
	 */
	totalPayoutAmount: number;
	/**
	 *
	 */
	status: PlatformBulkPayoutStatus;
	/**
	 *
	 */
	payoutStats: PlatformBulkPayoutStats;
	/**
	 *
	 */
	statusUpdatedAt: string;
	/**
	 *
	 */
	createdAt: string;
	/**
	 *
	 */
	updatedAt: string;
};

/**
 * PlatformBulkPayoutStatusStats
 *
 */
export type PlatformBulkPayoutStatusStats = {
	/**
	 *
	 */
	preparing: number;
	/**
	 *
	 */
	prepared: number;
	/**
	 *
	 */
	ongoing: number;
	/**
	 *
	 */
	stopped: number;
	/**
	 *
	 */
	cancelled: number;
	/**
	 *
	 */
	completed: number;
};

/**
 * 외부 api 오류
 *
 * 외부 api 오류
 */
export type PlatformExternalApiFailedError = {
	/**
	 *
	 */
	type: "PLATFORM_EXTERNAL_API_FAILED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 외부 api의 일시적인 오류
 *
 * 외부 api의 일시적인 오류
 */
export type PlatformExternalApiTemporarilyFailedError = {
	/**
	 *
	 */
	type: "PLATFORM_EXTERNAL_API_TEMPORARILY_FAILED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 지원하지 않는 은행인 경우
 *
 * 지원하지 않는 은행인 경우
 */
export type PlatformNotSupportedBankError = {
	/**
	 *
	 */
	type: "PLATFORM_NOT_SUPPORTED_BANK";
	/**
	 *
	 */
	message?: string;
};

/**
 * 실패한 본인인증 내역
 *
 * 실패한 본인인증 내역
 */
export type FailedIdentityVerification = {
	/**
	 *
	 */
	status: "FAILED";
	/**
	 * 본인인증 내역 아이디
	 *
	 */
	id: string;
	/**
	 * 사용된 본인인증 채널
	 *
	 */
	channel?: SelectedChannel;
	/**
	 * 요청 시 고객 정보
	 *
	 */
	requestedCustomer: IdentityVerificationRequestedCustomer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 본인인증 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
};

/**
 * 준비 상태의 본인인증 내역
 *
 * 준비 상태의 본인인증 내역
 */
export type ReadyIdentityVerification = {
	/**
	 *
	 */
	status: "READY";
	/**
	 * 본인인증 내역 아이디
	 *
	 */
	id: string;
	/**
	 * 사용된 본인인증 채널
	 *
	 */
	channel?: SelectedChannel;
	/**
	 * 요청 시 고객 정보
	 *
	 */
	requestedCustomer: IdentityVerificationRequestedCustomer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 본인인증 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
};

/**
 * 완료된 본인인증 내역
 *
 * 완료된 본인인증 내역
 */
export type VerifiedIdentityVerification = {
	/**
	 *
	 */
	status: "VERIFIED";
	/**
	 * 본인인증 내역 아이디
	 *
	 */
	id: string;
	/**
	 * 사용된 본인인증 채널
	 *
	 */
	channel?: SelectedChannel;
	/**
	 * 인증된 고객 정보
	 *
	 */
	verifiedCustomer: IdentityVerificationVerifiedCustomer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 본인인증 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 본인인증 완료 시점
	 *
	 */
	verifiedAt: string;
	/**
	 * 본인인증 내역 PG사 아이디
	 *
	 */
	pgTxId: string;
	/**
	 * PG사 응답 데이터
	 *
	 */
	pgRawResponse: string;
};

/**
 * 요청된 본인인증 건이 존재하지 않는 경우
 *
 * 요청된 본인인증 건이 존재하지 않는 경우
 */
export type IdentityVerificationNotFoundError = {
	/**
	 *
	 */
	type: "IDENTITY_VERIFICATION_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 본인인증 요청을 위한 고객 정보
 *
 * 본인인증 요청을 위한 고객 정보
 */
export type SendIdentityVerificationBodyCustomer = {
	/**
	 * 식별 아이디
	 *
	 */
	id?: string;
	/**
	 * 이름
	 *
	 */
	name: string;
	/**
	 * 전화번호
	 *
	 * 특수 문자(-) 없이 숫자만 입력합니다.
	 */
	phoneNumber: string;
	/**
	 * 주민등록번호 앞 7자리
	 *
	 * SMS 방식의 경우 필수로 입력합니다.
	 */
	identityNumber?: string;
	/**
	 * IP 주소
	 *
	 * 고객의 요청 속도 제한에 사용됩니다.
	 */
	ipAddress: string;
};

/**
 * 본인인증 통신사
 *
 * 본인인증 통신사
 */
export type IdentityVerificationOperator =
	| "SKT"
	| "KT"
	| "LGU"
	| "SKT_MVNO"
	| "KT_MVNO"
	| "LGU_MVNO";

/**
 * 본인인증 방식
 *
 * 본인인증 방식
 */
export type IdentityVerificationMethod = "SMS" | "APP";

/**
 * 요청된 채널이 존재하지 않는 경우
 *
 * 요청된 채널이 존재하지 않는 경우
 */
export type ChannelNotFoundError = {
	/**
	 *
	 */
	type: "CHANNEL_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 본인인증 건이 이미 API로 요청된 상태인 경우
 *
 * 본인인증 건이 이미 API로 요청된 상태인 경우
 */
export type IdentityVerificationAlreadySentError = {
	/**
	 *
	 */
	type: "IDENTITY_VERIFICATION_ALREADY_SENT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 본인인증 건이 이미 인증 완료된 상태인 경우
 *
 * 본인인증 건이 이미 인증 완료된 상태인 경우
 */
export type IdentityVerificationAlreadyVerifiedError = {
	/**
	 *
	 */
	type: "IDENTITY_VERIFICATION_ALREADY_VERIFIED";
	/**
	 *
	 */
	message?: string;
};

/**
 * PG사에서 오류를 전달한 경우
 *
 * PG사에서 오류를 전달한 경우
 */
export type PgProviderError = {
	/**
	 *
	 */
	type: "PG_PROVIDER";
	/**
	 *
	 */
	message?: string;
	/**
	 *
	 */
	pgCode: string;
	/**
	 *
	 */
	pgMessage: string;
};

/**
 * 본인인증 건이 API로 요청된 상태가 아닌 경우
 *
 * 본인인증 건이 API로 요청된 상태가 아닌 경우
 */
export type IdentityVerificationNotSentError = {
	/**
	 *
	 */
	type: "IDENTITY_VERIFICATION_NOT_SENT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 통화 단위
 *
 * 통화 단위
 */
export type Currency =
	| "KRW"
	| "USD"
	| "JPY"
	| "AED"
	| "AFN"
	| "ALL"
	| "AMD"
	| "ANG"
	| "AOA"
	| "ARS"
	| "AUD"
	| "AWG"
	| "AZN"
	| "BAM"
	| "BBD"
	| "BDT"
	| "BGN"
	| "BHD"
	| "BIF"
	| "BMD"
	| "BND"
	| "BOB"
	| "BOV"
	| "BRL"
	| "BSD"
	| "BTN"
	| "BWP"
	| "BYN"
	| "BZD"
	| "CAD"
	| "CDF"
	| "CHE"
	| "CHF"
	| "CHW"
	| "CLF"
	| "CLP"
	| "CNY"
	| "COP"
	| "COU"
	| "CRC"
	| "CUC"
	| "CUP"
	| "CVE"
	| "CZK"
	| "DJF"
	| "DKK"
	| "DOP"
	| "DZD"
	| "EGP"
	| "ERN"
	| "ETB"
	| "EUR"
	| "FJD"
	| "FKP"
	| "GBP"
	| "GEL"
	| "GHS"
	| "GIP"
	| "GMD"
	| "GNF"
	| "GTQ"
	| "GYD"
	| "HKD"
	| "HNL"
	| "HRK"
	| "HTG"
	| "HUF"
	| "IDR"
	| "ILS"
	| "INR"
	| "IQD"
	| "IRR"
	| "ISK"
	| "JMD"
	| "JOD"
	| "KES"
	| "KGS"
	| "KHR"
	| "KMF"
	| "KPW"
	| "KWD"
	| "KYD"
	| "KZT"
	| "LAK"
	| "LBP"
	| "LKR"
	| "LRD"
	| "LSL"
	| "LYD"
	| "MAD"
	| "MDL"
	| "MGA"
	| "MKD"
	| "MMK"
	| "MNT"
	| "MOP"
	| "MRU"
	| "MUR"
	| "MVR"
	| "MWK"
	| "MXN"
	| "MXV"
	| "MYR"
	| "MZN"
	| "NAD"
	| "NGN"
	| "NIO"
	| "NOK"
	| "NPR"
	| "NZD"
	| "OMR"
	| "PAB"
	| "PEN"
	| "PGK"
	| "PHP"
	| "PKR"
	| "PLN"
	| "PYG"
	| "QAR"
	| "RON"
	| "RSD"
	| "RUB"
	| "RWF"
	| "SAR"
	| "SBD"
	| "SCR"
	| "SDG"
	| "SEK"
	| "SGD"
	| "SHP"
	| "SLE"
	| "SLL"
	| "SOS"
	| "SRD"
	| "SSP"
	| "STN"
	| "SVC"
	| "SYP"
	| "SZL"
	| "THB"
	| "TJS"
	| "TMT"
	| "TND"
	| "TOP"
	| "TRY"
	| "TTD"
	| "TWD"
	| "TZS"
	| "UAH"
	| "UGX"
	| "USN"
	| "UYI"
	| "UYU"
	| "UYW"
	| "UZS"
	| "VED"
	| "VES"
	| "VND"
	| "VUV"
	| "WST"
	| "XAF"
	| "XAG"
	| "XAU"
	| "XBA"
	| "XBB"
	| "XBC"
	| "XBD"
	| "XCD"
	| "XDR"
	| "XOF"
	| "XPD"
	| "XPF"
	| "XPT"
	| "XSU"
	| "XTS"
	| "XUA"
	| "XXX"
	| "YER"
	| "ZAR"
	| "ZMW"
	| "ZWL";

/**
 * 결제가 이미 완료된 경우
 *
 * 결제가 이미 완료된 경우
 */
export type AlreadyPaidError = {
	/**
	 *
	 */
	type: "ALREADY_PAID";
	/**
	 *
	 */
	message?: string;
};

/**
 * 빌링키 삭제 완료 상태 건
 *
 * 빌링키 삭제 완료 상태 건
 */
export type DeletedBillingKeyInfo = {
	/**
	 *
	 */
	status: "DELETED";
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 빌링키 결제수단 상세 정보
	 *
	 * 추후 슈퍼빌링키 기능 제공 시 여러 결제수단 정보가 담길 수 있습니다.
	 */
	methods?: BillingKeyPaymentMethod[];
	/**
	 * 빌링키 발급 시 사용된 채널
	 *
	 * 추후 슈퍼빌링키 기능 제공 시 여러 채널 정보가 담길 수 있습니다.
	 */
	channels: SelectedChannel[];
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 고객사가 채번하는 빌링키 발급 건 고유 아이디
	 *
	 */
	issueId?: string;
	/**
	 * 빌링키 발급 건 이름
	 *
	 */
	issueName?: string;
	/**
	 * 발급 요청 시점
	 *
	 */
	requestedAt?: string;
	/**
	 * 발급 시점
	 *
	 */
	issuedAt: string;
	/**
	 * 채널 그룹
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 채널 별 빌링키 발급 응답
	 *
	 * 슈퍼빌링키의 경우, 빌링키 발급이 성공하더라도 일부 채널에 대한 발급은 실패할 수 있습니다.
	 */
	pgBillingKeyIssueResponses?: PgBillingKeyIssueResponse[];
	/**
	 * 발급 삭제 시점
	 *
	 */
	deletedAt: string;
};

/**
 * 빌링키 발급 완료 상태 건
 *
 * 빌링키 발급 완료 상태 건
 */
export type IssuedBillingKeyInfo = {
	/**
	 *
	 */
	status: "ISSUED";
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 빌링키 결제수단 상세 정보
	 *
	 * 추후 슈퍼빌링키 기능 제공 시 여러 결제수단 정보가 담길 수 있습니다.
	 */
	methods?: BillingKeyPaymentMethod[];
	/**
	 * 빌링키 발급 시 사용된 채널
	 *
	 * 추후 슈퍼빌링키 기능 제공 시 여러 채널 정보가 담길 수 있습니다.
	 */
	channels: SelectedChannel[];
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 고객사가 채번하는 빌링키 발급 건 고유 아이디
	 *
	 */
	issueId?: string;
	/**
	 * 빌링키 발급 건 이름
	 *
	 */
	issueName?: string;
	/**
	 * 발급 요청 시점
	 *
	 */
	requestedAt?: string;
	/**
	 * 발급 시점
	 *
	 */
	issuedAt: string;
	/**
	 * 채널 그룹
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 채널 별 빌링키 발급 응답
	 *
	 * 슈퍼빌링키의 경우, 빌링키 발급이 성공하더라도 일부 채널에 대한 빌링키 발급은 실패할 수 있습니다.
	 */
	pgBillingKeyIssueResponses?: PgBillingKeyIssueResponse[];
};

/**
 * 빌링키가 존재하지 않는 경우
 *
 * 빌링키가 존재하지 않는 경우
 */
export type BillingKeyNotFoundError = {
	/**
	 *
	 */
	type: "BILLING_KEY_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 빌링키가 이미 삭제된 경우
 *
 * 빌링키가 이미 삭제된 경우
 */
export type BillingKeyAlreadyDeletedError = {
	/**
	 *
	 */
	type: "BILLING_KEY_ALREADY_DELETED";
	/**
	 *
	 */
	message?: string;
};

/**
 * BillingKeyNotIssuedError
 *
 */
export type BillingKeyNotIssuedError = {
	/**
	 *
	 */
	type: "BILLING_KEY_NOT_ISSUED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
 *
 * 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
 */
export type ChannelSpecificError = {
	/**
	 *
	 */
	type: "CHANNEL_SPECIFIC";
	/**
	 *
	 */
	message?: string;
	/**
	 *
	 */
	failures: ChannelSpecificFailure[];
	/**
	 * (결제, 본인인증 등에) 선택된 채널 정보
	 *
	 */
	succeededChannels: SelectedChannel[];
};

/**
 * 결제 예약건이 이미 존재하는 경우
 *
 * 결제 예약건이 이미 존재하는 경우
 */
export type PaymentScheduleAlreadyExistsError = {
	/**
	 *
	 */
	type: "PAYMENT_SCHEDULE_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 빌링키 다건 조회 시 정렬 조건
 *
 * 빌링키 다건 조회 시 정렬 조건
 */
export type BillingKeySortInput = {
	/**
	 * 정렬 기준 필드
	 *
	 * 어떤 필드를 기준으로 정렬할 지 결정합니다. 비워서 보낼 경우, REQUESTED\_AT이 기본값으로 설정됩니다.
	 */
	by?: BillingKeySortBy;
	/**
	 * 정렬 순서
	 *
	 * 어떤 순서로 정렬할 지 결정합니다. 비워서 보낼 경우, DESC(내림차순)가 기본값으로 설정됩니다.
	 */
	order?: SortOrder;
};

/**
 * 빌링키 다건 조회를 위한 입력 정보
 *
 * 빌링키 다건 조회를 위한 입력 정보
 */
export type BillingKeyFilterInput = {
	/**
	 * 상점 아이디
	 *
	 * Merchant 사용자만 사용가능하며, 지정되지 않은 경우 고객사 전체 빌링키를 조회합니다.
	 */
	storeId?: string;
	/**
	 * 조회 기준 시점 유형
	 *
	 */
	timeRangeField?: BillingKeyTimeRangeField;
	/**
	 * 조회 기준 시점 범위의 시작
	 *
	 * 값을 입력하지 않으면 end의 90일 전으로 설정됩니다.
	 */
	from?: string;
	/**
	 * 조회 기준 시점 범위의 끝
	 *
	 * 값을 입력하지 않으면 현재 시점으로 설정됩니다.
	 */
	until?: string;
	/**
	 * 빌링키 상태 리스트
	 *
	 * 값을 입력하지 않으면 빌링키 상태 필터링이 적용되지 않습니다.
	 */
	status?: BillingKeyStatus[];
	/**
	 * 채널 그룹 아이디 리스트
	 *
	 * 값을 입력하지 않으면 스마트 라우팅 그룹 아이디 필터링이 적용되지 않습니다.
	 */
	channelGroupIds?: string[];
	/**
	 * 고객 ID
	 *
	 */
	customerId?: string;
	/**
	 * 플랫폼 유형
	 *
	 */
	platformType?: PaymentClientType;
	/**
	 * 통합 검색 필터
	 *
	 */
	textSearch?: BillingKeyTextSearch;
	/**
	 * PG사 결제 모듈 리스트
	 *
	 * 값을 입력하지 않으면 PG사 결제 모듈 필터링이 적용되지 않습니다.
	 */
	pgProviders?: PgProvider[];
	/**
	 * PG사 리스트
	 *
	 * 값을 입력하지 않으면 PG사 필터링이 적용되지 않습니다.
	 */
	pgCompanies?: PgCompany[];
	/**
	 * 결제수단 리스트
	 *
	 * 값을 입력하지 않으면 결제수단 필터링이 적용되지 않습니다.
	 */
	methods?: BillingKeyPaymentMethodType[];
	/**
	 * 포트원 버전
	 *
	 */
	version?: PortOneVersion;
};

/**
 * 빌링키 발급 시 결제 수단 입력 양식
 *
 * 빌링키 발급 시 결제 수단 입력 양식
 */
export type InstantBillingKeyPaymentMethodInput = {
	/**
	 *
	 */
	card?: InstantBillingKeyPaymentMethodInputCard;
};

/**
 * 고객 정보 입력 정보
 *
 * 고객 정보 입력 정보
 */
export type CustomerInput = {
	/**
	 * 고객 아이디
	 *
	 * 고객사가 지정한 고객의 고유 식별자입니다.
	 */
	id?: string;
	/**
	 * 이름
	 *
	 */
	name?: CustomerNameInput;
	/**
	 * 출생 연도
	 *
	 */
	birthYear?: string;
	/**
	 * 출생월
	 *
	 */
	birthMonth?: string;
	/**
	 * 출생일
	 *
	 */
	birthDay?: string;
	/**
	 * 국가
	 *
	 */
	country?: Country;
	/**
	 * 성별
	 *
	 */
	gender?: Gender;
	/**
	 * 이메일
	 *
	 */
	email?: string;
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 주소
	 *
	 */
	address?: SeparatedAddressInput;
	/**
	 * 우편번호
	 *
	 */
	zipcode?: string;
	/**
	 * 사업자 등록 번호
	 *
	 */
	businessRegistrationNumber?: string;
};

/**
 * BillingKeyInfoSummary
 *
 */
export type BillingKeyInfoSummary = {
	/**
	 * 발급된 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 발급된 채널
	 *
	 */
	channels?: SelectedChannel[];
	/**
	 * 빌링크 발급 완료 시점
	 *
	 */
	issuedAt: string;
};

/**
 * ChannelSpecificFailure
 *
 */
export type ChannelSpecificFailure =
	| ChannelSpecificFailureInvalidRequest
	| ChannelSpecificFailurePgProvider;

/**
 * 발급 취소
 *
 * 발급 취소
 */
export type CancelledCashReceipt = {
	/**
	 *
	 */
	status: "CANCELLED";
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 현금영수증 발급에 사용된 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 금액
	 *
	 */
	amount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세액
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 수동 발급 여부
	 *
	 */
	isManual: boolean;
	/**
	 * 현금영수증 유형
	 *
	 */
	type?: CashReceiptType;
	/**
	 * PG사 현금영수증 아이디
	 *
	 */
	pgReceiptId?: string;
	/**
	 * 승인번호
	 *
	 */
	issueNumber: string;
	/**
	 * 현금영수증 URL
	 *
	 */
	url?: string;
	/**
	 * 발급 시점
	 *
	 */
	issuedAt: string;
	/**
	 * 취소 시점
	 *
	 */
	cancelledAt: string;
};

/**
 * 발급 완료
 *
 * 발급 완료
 */
export type IssuedCashReceipt = {
	/**
	 *
	 */
	status: "ISSUED";
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 현금영수증 발급에 사용된 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 금액
	 *
	 */
	amount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세액
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 수동 발급 여부
	 *
	 */
	isManual: boolean;
	/**
	 * 현금영수증 유형
	 *
	 */
	type?: CashReceiptType;
	/**
	 * PG사 현금영수증 아이디
	 *
	 */
	pgReceiptId?: string;
	/**
	 * 승인 번호
	 *
	 */
	issueNumber: string;
	/**
	 * 현금영수증 URL
	 *
	 */
	url?: string;
	/**
	 * 발급 시점
	 *
	 */
	issuedAt: string;
};

/**
 * 발급 실패
 *
 * 발급 실패
 */
export type IssueFailedCashReceipt = {
	/**
	 *
	 */
	status: "ISSUE_FAILED";
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 현금영수증 발급에 사용된 채널
	 *
	 */
	channel?: SelectedChannel;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 수동 발급 여부
	 *
	 */
	isManual: boolean;
};

/**
 * 현금영수증이 존재하지 않는 경우
 *
 * 현금영수증이 존재하지 않는 경우
 */
export type CashReceiptNotFoundError = {
	/**
	 *
	 */
	type: "CASH_RECEIPT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 취소 상태 건
 *
 * 결제 취소 상태 건
 */
export type CancelledPayment = {
	/**
	 *
	 */
	status: "CANCELLED";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 결제 건 포트원 채번 아이디
	 *
	 * V1 결제 건의 경우 imp\_uid에 해당합니다.
	 */
	transactionId: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
	/**
	 * 결제 완료 시점
	 *
	 */
	paidAt?: string;
	/**
	 * PG사 거래 아이디
	 *
	 */
	pgTxId?: string;
	/**
	 * 현금영수증
	 *
	 */
	cashReceipt?: PaymentCashReceipt;
	/**
	 * 거래 영수증 URL
	 *
	 */
	receiptUrl?: string;
	/**
	 * 결제 취소 내역
	 *
	 */
	cancellations: PaymentCancellation[];
	/**
	 * 결제 취소 시점
	 *
	 */
	cancelledAt: string;
};

/**
 * 결제 실패 상태 건
 *
 * 결제 실패 상태 건
 */
export type FailedPayment = {
	/**
	 *
	 */
	status: "FAILED";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 결제 건 포트원 채번 아이디
	 *
	 * V1 결제 건의 경우 imp\_uid에 해당합니다.
	 */
	transactionId: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel?: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
	/**
	 * 결제 실패 시점
	 *
	 */
	failedAt: string;
};

/**
 * 결제 완료 상태 건
 *
 * 결제 완료 상태 건
 */
export type PaidPayment = {
	/**
	 *
	 */
	status: "PAID";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 결제 건 포트원 채번 아이디
	 *
	 * V1 결제 건의 경우 imp\_uid에 해당합니다.
	 */
	transactionId: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
	/**
	 * 결제 완료 시점
	 *
	 */
	paidAt: string;
	/**
	 * PG사 거래 아이디
	 *
	 */
	pgTxId?: string;
	/**
	 * PG사 거래 응답 본문
	 *
	 */
	pgResponse?: string;
	/**
	 * 현금영수증
	 *
	 */
	cashReceipt?: PaymentCashReceipt;
	/**
	 * 거래 영수증 URL
	 *
	 */
	receiptUrl?: string;
};

/**
 * 결제 부분 취소 상태 건
 *
 * 결제 부분 취소 상태 건
 */
export type PartialCancelledPayment = {
	/**
	 *
	 */
	status: "PARTIAL_CANCELLED";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 결제 건 포트원 채번 아이디
	 *
	 * V1 결제 건의 경우 imp\_uid에 해당합니다.
	 */
	transactionId: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
	/**
	 * 결제 완료 시점
	 *
	 */
	paidAt?: string;
	/**
	 * PG사 거래 아이디
	 *
	 */
	pgTxId?: string;
	/**
	 * 현금영수증
	 *
	 */
	cashReceipt?: PaymentCashReceipt;
	/**
	 * 거래 영수증 URL
	 *
	 */
	receiptUrl?: string;
	/**
	 * 결제 취소 내역
	 *
	 */
	cancellations: PaymentCancellation[];
	/**
	 * 결제 취소 시점
	 *
	 */
	cancelledAt: string;
};

/**
 * 결제 완료 대기 상태 건
 *
 * 결제 완료 대기 상태 건
 */
export type PayPendingPayment = {
	/**
	 *
	 */
	status: "PAY_PENDING";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
	/**
	 * PG사 거래 아이디
	 *
	 */
	pgTxId?: string;
};

/**
 * 준비 상태의 결제 건
 *
 * 준비 상태의 결제 건
 */
export type ReadyPayment = {
	/**
	 *
	 */
	status: "READY";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 결제 건 포트원 채번 아이디
	 *
	 * V1 결제 건의 경우 imp\_uid에 해당합니다.
	 */
	transactionId: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel?: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제의 배송 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
};

/**
 * 가상계좌 발급 완료 상태 건
 *
 * 가상계좌 발급 완료 상태 건
 */
export type VirtualAccountIssuedPayment = {
	/**
	 *
	 */
	status: "VIRTUAL_ACCOUNT_ISSUED";
	/**
	 * 결제 건 아이디
	 *
	 */
	id: string;
	/**
	 * 결제 건 포트원 채번 아이디
	 *
	 * V1 결제 건의 경우 imp\_uid에 해당합니다.
	 */
	transactionId: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 *
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 *
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 *
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
	 *
	 */
	version: PortOneVersion;
	/**
	 * 결제 예약 건 아이디
	 *
	 * 결제 예약을 이용한 경우에만 존재
	 */
	scheduleId?: string;
	/**
	 * 결제 시 사용된 빌링키
	 *
	 * 빌링키 결제인 경우에만 존재
	 */
	billingKey?: string;
	/**
	 * 웹훅 발송 내역
	 *
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 *
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 *
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 *
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 *
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 *
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense?: boolean;
	/**
	 * 에스크로 결제 정보
	 *
	 * 에스크로 결제인 경우 존재합니다.
	 */
	escrow?: PaymentEscrow;
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 *
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData?: string;
	/**
	 * 국가 코드
	 *
	 */
	country?: Country;
	/**
	 * PG사 거래 아이디
	 *
	 */
	pgTxId?: string;
};

/**
 * 결제 건이 존재하지 않는 경우
 *
 * 결제 건이 존재하지 않는 경우
 */
export type PaymentNotFoundError = {
	/**
	 *
	 */
	type: "PAYMENT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 건 다건 조회를 위한 입력 정보
 *
 * 결제 건 다건 조회를 위한 입력 정보
 */
export type PaymentFilterInput = {
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId?: string;
	/**
	 * 상점 아이디
	 *
	 * Merchant 사용자만 사용가능하며, 지정되지 않은 경우 고객사 전체 결제 건을 조회합니다.
	 */
	storeId?: string;
	/**
	 * 조회 기준 시점 유형
	 *
	 */
	timestampType?: PaymentTimestampType;
	/**
	 * 결제 요청/상태 승인 시점 범위의 시작
	 *
	 * 값을 입력하지 않으면 end의 90일 전으로 설정됩니다.
	 */
	from?: string;
	/**
	 * 결제 요청/상태 승인 시점 범위의 끝
	 *
	 * 값을 입력하지 않으면 현재 시점으로 설정됩니다.
	 */
	until?: string;
	/**
	 * 결제 상태 리스트
	 *
	 * 값을 입력하지 않으면 결제상태 필터링이 적용되지 않습니다.
	 */
	status?: PaymentStatus[];
	/**
	 * 결제수단 리스트
	 *
	 * 값을 입력하지 않으면 결제수단 필터링이 적용되지 않습니다.
	 */
	methods?: PaymentMethodType[];
	/**
	 * PG사 리스트
	 *
	 * 값을 입력하지 않으면 결제대행사 필터링이 적용되지 않습니다.
	 */
	pgProvider?: PgProvider[];
	/**
	 * 테스트 결제 필터링
	 *
	 */
	isTest?: boolean;
	/**
	 * 결제 예약 건 필터링
	 *
	 */
	isScheduled?: boolean;
	/**
	 * 결제 건 정렬 기준
	 *
	 */
	sortBy?: PaymentSortBy;
	/**
	 * 결제 건 정렬 방식
	 *
	 */
	sortOrder?: SortOrder;
	/**
	 * 포트원 버전
	 *
	 */
	version?: PortOneVersion;
	/**
	 * 웹훅 상태
	 *
	 */
	webhookStatus?: PaymentWebhookStatus;
	/**
	 * 플랫폼 유형
	 *
	 */
	platformType?: PaymentClientType;
	/**
	 * 통화
	 *
	 */
	currency?: Currency;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow?: boolean;
	/**
	 * 에스크로 결제의 배송 정보 상태
	 *
	 */
	escrowStatus?: PaymentFilterInputEscrowStatus;
	/**
	 * 카드 브랜드
	 *
	 */
	cardBrand?: CardBrand;
	/**
	 * 카드 유형
	 *
	 */
	cardType?: CardType;
	/**
	 * 카드 소유주 유형
	 *
	 */
	cardOwnerType?: CardOwnerType;
	/**
	 * 상품권 종류
	 *
	 */
	giftCertificateType?: PaymentMethodGiftCertificateType;
	/**
	 * 현금영수증 유형
	 *
	 */
	cashReceiptType?: CashReceiptInputType;
	/**
	 * 현금영수증 상태
	 *
	 */
	cashReceiptStatus?: PaymentCashReceiptStatus;
	/**
	 * 현금영수증 발급 시간 범위
	 *
	 */
	cashReceiptIssuedAtRange?: DateTimeRange;
	/**
	 * 현금영수증 취소 시간 범위
	 *
	 */
	cashReceiptCancelledAtRange?: DateTimeRange;
	/**
	 * 통합 검색 리스트 필터
	 *
	 */
	textSearch?: PaymentTextSearch[];
};

/**
 * 결제 건 및 커서 정보
 *
 * 결제 건 및 커서 정보
 */
export type PaymentWithCursor = {
	/**
	 * 결제 건 정보
	 *
	 */
	payment: Payment;
	/**
	 * 해당 결제 건의 커서 정보
	 *
	 */
	cursor: string;
};

/**
 * 결제 실패 상태
 *
 * 결제 실패 상태
 */
export type FailedPaymentSchedule = {
	/**
	 *
	 */
	status: "FAILED";
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 *
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 *
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 *
	 */
	startedAt: string;
	/**
	 * 결제 완료 시점
	 *
	 */
	completedAt: string;
};

/**
 * 결제 대기 상태
 *
 * 결제 대기 상태
 */
export type PendingPaymentSchedule = {
	/**
	 *
	 */
	status: "PENDING";
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 *
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 *
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 *
	 */
	startedAt: string;
	/**
	 * 결제 완료 시점
	 *
	 */
	completedAt: string;
};

/**
 * 결제 예약 취소 상태
 *
 * 결제 예약 취소 상태
 */
export type RevokedPaymentSchedule = {
	/**
	 *
	 */
	status: "REVOKED";
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 *
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 *
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
	/**
	 * 결제 취소 시점
	 *
	 */
	revokedAt: string;
};

/**
 * 결제 예약 완료 상태
 *
 * 결제 예약 완료 상태
 */
export type ScheduledPaymentSchedule = {
	/**
	 *
	 */
	status: "SCHEDULED";
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 *
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 *
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
};

/**
 * 결제 시작 상태
 *
 * 결제 시작 상태
 */
export type StartedPaymentSchedule = {
	/**
	 *
	 */
	status: "STARTED";
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 *
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 *
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 *
	 */
	startedAt: string;
};

/**
 * 결제 성공 상태
 *
 * 결제 성공 상태
 */
export type SucceededPaymentSchedule = {
	/**
	 *
	 */
	status: "SUCCEEDED";
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
	/**
	 * 고객사 아이디
	 *
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 *
	 */
	paymentId: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey: string;
	/**
	 * 주문명
	 *
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 *
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 *
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 *
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 *
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 *
	 */
	vatAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 *
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 *
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 *
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 *
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 *
	 */
	startedAt: string;
	/**
	 * 결제 완료 시점
	 *
	 */
	completedAt: string;
};

/**
 * 결제 예약건이 존재하지 않는 경우
 *
 * 결제 예약건이 존재하지 않는 경우
 */
export type PaymentScheduleNotFoundError = {
	/**
	 *
	 */
	type: "PAYMENT_SCHEDULE_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 예약 건 다건 조회 시 정렬 조건
 *
 * 결제 예약 건 다건 조회 시 정렬 조건
 */
export type PaymentScheduleSortInput = {
	/**
	 * 정렬 기준 필드
	 *
	 * 어떤 필드를 기준으로 정렬할 지 결정합니다. 비워서 보낼 경우, TIME\_TO\_PAY가 기본값으로 설정됩니다.
	 */
	by?: PaymentScheduleSortBy;
	/**
	 * 정렬 순서
	 *
	 * 어떤 순서로 정렬할 지 결정합니다. 비워서 보낼 경우, DESC(내림차순)가 기본값으로 설정됩니다.
	 */
	order?: SortOrder;
};

/**
 * 결제 예약 건 다건 조회를 위한 입력 정보
 *
 * 결제 예약 건 다건 조회를 위한 입력 정보
 */
export type PaymentScheduleFilterInput = {
	/**
	 * 상점 아이디
	 *
	 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
	 */
	storeId?: string;
	/**
	 * 빌링키
	 *
	 */
	billingKey?: string;
	/**
	 * 결제 예정 시점 조건 범위의 시작
	 *
	 * 값을 입력하지 않으면 파라미터 end의 90일 전으로 설정됩니다.
	 */
	from?: string;
	/**
	 * 결제 예정 시점 조건 범위의 끝
	 *
	 * 값을 입력하지 않으면 현재 시점으로 설정됩니다.
	 */
	until?: string;
	/**
	 * 결제 예약 건 상태 리스트
	 *
	 * 값을 입력하지 않으면 상태 필터링이 적용되지 않습니다.
	 */
	status?: PaymentScheduleStatus[];
};

/**
 * 결제 예약건이 이미 처리된 경우
 *
 * 결제 예약건이 이미 처리된 경우
 */
export type PaymentScheduleAlreadyProcessedError = {
	/**
	 *
	 */
	type: "PAYMENT_SCHEDULE_ALREADY_PROCESSED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 예약건이 이미 취소된 경우
 *
 * 결제 예약건이 이미 취소된 경우
 */
export type PaymentScheduleAlreadyRevokedError = {
	/**
	 *
	 */
	type: "PAYMENT_SCHEDULE_ALREADY_REVOKED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 예약 건
 *
 * 결제 예약 건
 */
export type PaymentScheduleSummary = {
	/**
	 * 결제 예약 건 아이디
	 *
	 */
	id: string;
};

/**
 * 결제가 이미 완료되었거나 대기중인 경우
 *
 * 결제가 이미 완료되었거나 대기중인 경우
 */
export type AlreadyPaidOrWaitingError = {
	/**
	 *
	 */
	type: "ALREADY_PAID_OR_WAITING";
	/**
	 *
	 */
	message?: string;
};

/**
 * 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우
 *
 * 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우
 */
export type SumOfPartsExceedsTotalAmountError = {
	/**
	 *
	 */
	type: "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * CancelRequester
 *
 */
export type CancelRequester = "CUSTOMER" | "ADMIN";

/**
 * 고객 정보 입력 형식
 *
 * 고객 정보 입력 형식
 */
export type CancelPaymentBodyRefundAccount = {
	/**
	 * 은행
	 *
	 */
	bank: Bank;
	/**
	 * 계좌번호
	 *
	 */
	number: string;
	/**
	 * 예금주
	 *
	 */
	holderName: string;
	/**
	 * 예금주 연락처 - 스마트로 가상계좌 결제인 경우에 필요합니다.
	 *
	 */
	holderPhoneNumber?: string;
};

/**
 * 결제 취소 내역
 *
 * 결제 취소 내역
 */
export type PaymentCancellation =
	| FailedPaymentCancellation
	| RequestedPaymentCancellation
	| SucceededPaymentCancellation;

/**
 * 취소 가능 잔액 검증에 실패한 경우
 *
 * 취소 가능 잔액 검증에 실패한 경우
 */
export type CancellableAmountConsistencyBrokenError = {
	/**
	 *
	 */
	type: "CANCELLABLE_AMOUNT_CONSISTENCY_BROKEN";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 취소 금액이 취소 가능 금액을 초과한 경우
 *
 * 결제 취소 금액이 취소 가능 금액을 초과한 경우
 */
export type CancelAmountExceedsCancellableAmountError = {
	/**
	 *
	 */
	type: "CANCEL_AMOUNT_EXCEEDS_CANCELLABLE_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우
 *
 * 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우
 */
export type CancelTaxAmountExceedsCancellableTaxAmountError = {
	/**
	 *
	 */
	type: "CANCEL_TAX_AMOUNT_EXCEEDS_CANCELLABLE_TAX_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우
 *
 * 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우
 */
export type CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError = {
	/**
	 *
	 */
	type: "CANCEL_TAX_FREE_AMOUNT_EXCEEDS_CANCELLABLE_TAX_FREE_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제가 이미 취소된 경우
 *
 * 결제가 이미 취소된 경우
 */
export type PaymentAlreadyCancelledError = {
	/**
	 *
	 */
	type: "PAYMENT_ALREADY_CANCELLED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제가 완료되지 않은 경우
 *
 * 결제가 완료되지 않은 경우
 */
export type PaymentNotPaidError = {
	/**
	 *
	 */
	type: "PAYMENT_NOT_PAID";
	/**
	 *
	 */
	message?: string;
};

/**
 * 부분 취소 시, 취소하게 될 경우 남은 금액이 프로모션의 최소 결제 금액보다 작아지는 경우
 *
 * 부분 취소 시, 취소하게 될 경우 남은 금액이 프로모션의 최소 결제 금액보다 작아지는 경우
 */
export type RemainedAmountLessThanPromotionMinPaymentAmountError = {
	/**
	 *
	 */
	type: "REMAINED_AMOUNT_LESS_THAN_PROMOTION_MIN_PAYMENT_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 면세 금액 등 하위 항목들의 합이 전체 취소 금액을 초과한 경우
 *
 * 면세 금액 등 하위 항목들의 합이 전체 취소 금액을 초과한 경우
 */
export type SumOfPartsExceedsCancelAmountError = {
	/**
	 *
	 */
	type: "SUM_OF_PARTS_EXCEEDS_CANCEL_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 금액 세부 입력 정보
 *
 * 금액 세부 입력 정보
 */
export type PaymentAmountInput = {
	/**
	 * 총 금액
	 *
	 */
	total: number;
	/**
	 * 면세액
	 *
	 */
	taxFree?: number;
	/**
	 * 부가세액
	 *
	 * 고객사에서 직접 계산이 필요한 경우 입력합니다. 입력하지 않으면 면세 금액을 제외한 금액의 1/11 로 자동 계산됩니다.
	 */
	vat?: number;
};

/**
 * 현금영수증 입력 정보
 *
 * 현금영수증 입력 정보
 */
export type CashReceiptInput = {
	/**
	 * 현금영수증 유형
	 *
	 */
	type: CashReceiptInputType;
	/**
	 * 사용자 식별 번호
	 *
	 * 미발행 유형 선택 시 입력하지 않습니다.
	 */
	customerIdentityNumber?: string;
};

/**
 * 국가
 *
 * 국가
 */
export type Country =
	| "AD"
	| "AE"
	| "AF"
	| "AG"
	| "AI"
	| "AL"
	| "AM"
	| "AO"
	| "AQ"
	| "AR"
	| "AS"
	| "AT"
	| "AU"
	| "AW"
	| "AX"
	| "AZ"
	| "BA"
	| "BB"
	| "BD"
	| "BE"
	| "BF"
	| "BG"
	| "BH"
	| "BI"
	| "BJ"
	| "BL"
	| "BM"
	| "BN"
	| "BO"
	| "BQ"
	| "BR"
	| "BS"
	| "BT"
	| "BV"
	| "BW"
	| "BY"
	| "BZ"
	| "CA"
	| "CC"
	| "CD"
	| "CF"
	| "CG"
	| "CH"
	| "CI"
	| "CK"
	| "CL"
	| "CM"
	| "CN"
	| "CO"
	| "CR"
	| "CU"
	| "CV"
	| "CW"
	| "CX"
	| "CY"
	| "CZ"
	| "DE"
	| "DJ"
	| "DK"
	| "DM"
	| "DO"
	| "DZ"
	| "EC"
	| "EE"
	| "EG"
	| "EH"
	| "ER"
	| "ES"
	| "ET"
	| "FI"
	| "FJ"
	| "FK"
	| "FM"
	| "FO"
	| "FR"
	| "GA"
	| "GB"
	| "GD"
	| "GE"
	| "GF"
	| "GG"
	| "GH"
	| "GI"
	| "GL"
	| "GM"
	| "GN"
	| "GP"
	| "GQ"
	| "GR"
	| "GS"
	| "GT"
	| "GU"
	| "GW"
	| "GY"
	| "HK"
	| "HM"
	| "HN"
	| "HR"
	| "HT"
	| "HU"
	| "ID"
	| "IE"
	| "IL"
	| "IM"
	| "IN"
	| "IO"
	| "IQ"
	| "IR"
	| "IS"
	| "IT"
	| "JE"
	| "JM"
	| "JO"
	| "JP"
	| "KE"
	| "KG"
	| "KH"
	| "KI"
	| "KM"
	| "KN"
	| "KP"
	| "KR"
	| "KW"
	| "KY"
	| "KZ"
	| "LA"
	| "LB"
	| "LC"
	| "LI"
	| "LK"
	| "LR"
	| "LS"
	| "LT"
	| "LU"
	| "LV"
	| "LY"
	| "MA"
	| "MC"
	| "MD"
	| "ME"
	| "MF"
	| "MG"
	| "MH"
	| "MK"
	| "ML"
	| "MM"
	| "MN"
	| "MO"
	| "MP"
	| "MQ"
	| "MR"
	| "MS"
	| "MT"
	| "MU"
	| "MV"
	| "MW"
	| "MX"
	| "MY"
	| "MZ"
	| "NA"
	| "NC"
	| "NE"
	| "NF"
	| "NG"
	| "NI"
	| "NL"
	| "NO"
	| "NP"
	| "NR"
	| "NU"
	| "NZ"
	| "OM"
	| "PA"
	| "PE"
	| "PF"
	| "PG"
	| "PH"
	| "PK"
	| "PL"
	| "PM"
	| "PN"
	| "PR"
	| "PS"
	| "PT"
	| "PW"
	| "PY"
	| "QA"
	| "RE"
	| "RO"
	| "RS"
	| "RU"
	| "RW"
	| "SA"
	| "SB"
	| "SC"
	| "SD"
	| "SE"
	| "SG"
	| "SH"
	| "SI"
	| "SJ"
	| "SK"
	| "SL"
	| "SM"
	| "SN"
	| "SO"
	| "SR"
	| "SS"
	| "ST"
	| "SV"
	| "SX"
	| "SY"
	| "SZ"
	| "TC"
	| "TD"
	| "TF"
	| "TG"
	| "TH"
	| "TJ"
	| "TK"
	| "TL"
	| "TM"
	| "TN"
	| "TO"
	| "TR"
	| "TT"
	| "TV"
	| "TW"
	| "TZ"
	| "UA"
	| "UG"
	| "UM"
	| "US"
	| "UY"
	| "UZ"
	| "VA"
	| "VC"
	| "VE"
	| "VG"
	| "VI"
	| "VN"
	| "VU"
	| "WF"
	| "WS"
	| "YE"
	| "YT"
	| "ZA"
	| "ZM"
	| "ZW";

/**
 * 상품 정보
 *
 * 상품 정보
 */
export type PaymentProduct = {
	/**
	 * 상품 고유 식별자
	 *
	 * 고객사가 직접 부여한 식별자입니다.
	 */
	id: string;
	/**
	 * 상품명
	 *
	 */
	name: string;
	/**
	 * 상품 태그
	 *
	 * 카테고리 등으로 활용될 수 있습니다.
	 */
	tag?: string;
	/**
	 * 상품 코드
	 *
	 */
	code?: string;
	/**
	 * 상품 단위가격
	 *
	 */
	amount: number;
	/**
	 * 주문 수량
	 *
	 */
	quantity: number;
};

/**
 * 상품 유형
 *
 * 상품 유형
 */
export type PaymentProductType = "PHYSICAL" | "DIGITAL";

/**
 * 분리 형식 주소 입력 정보
 *
 * 분리 형식 주소 입력 정보
 */
export type SeparatedAddressInput = {
	/**
	 * 상세 주소 1
	 *
	 */
	addressLine1: string;
	/**
	 * 상세 주소 2
	 *
	 */
	addressLine2: string;
	/**
	 * 시/군/구
	 *
	 */
	city?: string;
	/**
	 * 주/도/시
	 *
	 */
	province?: string;
	/**
	 * 국가
	 *
	 */
	country?: Country;
};

/**
 * 빌링키 결제 완료된 결제 건 요약 정보
 *
 * 빌링키 결제 완료된 결제 건 요약 정보
 */
export type BillingKeyPaymentSummary = {
	/**
	 * PG사 결제 아이디
	 *
	 */
	pgTxId: string;
	/**
	 * 결제 완료 시점
	 *
	 */
	paidAt: string;
};

/**
 * 프로모션 할인 금액이 결제 시도 금액 이상인 경우
 *
 * 프로모션 할인 금액이 결제 시도 금액 이상인 경우
 */
export type DiscountAmountExceedsTotalAmountError = {
	/**
	 *
	 */
	type: "DISCOUNT_AMOUNT_EXCEEDS_TOTAL_AMOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
 *
 * 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
 */
export type PromotionPayMethodDoesNotMatchError = {
	/**
	 *
	 */
	type: "PROMOTION_PAY_METHOD_DOES_NOT_MATCH";
	/**
	 *
	 */
	message?: string;
};

/**
 * 수기 결제 수단 입력 정보
 *
 * 수기 결제 수단 입력 정보
 *
 * 하나의 필드만 입력합니다.
 */
export type InstantPaymentMethodInput = {
	/**
	 * 카드
	 *
	 */
	card?: InstantPaymentMethodInputCard;
	/**
	 * 가상계좌
	 *
	 */
	virtualAccount?: InstantPaymentMethodInputVirtualAccount;
};

/**
 * 수기 결제가 완료된 결제 건 요약 정보
 *
 * 수기 결제가 완료된 결제 건 요약 정보
 */
export type InstantPaymentSummary = {
	/**
	 * PG사 결제 아이디
	 *
	 */
	pgTxId: string;
	/**
	 * 결제 완료 시점
	 *
	 */
	paidAt: string;
};

/**
 * 발급 유형
 *
 * 발급 유형
 */
export type CashReceiptType = "PERSONAL" | "CORPORATE";

/**
 * 현금영수증 발급 시 고객 관련 입력 정보
 *
 * 현금영수증 발급 시 고객 관련 입력 정보
 */
export type IssueCashReceiptCustomerInput = {
	/**
	 * 고객 식별값
	 *
	 */
	identityNumber: string;
	/**
	 * 이름
	 *
	 */
	name?: string;
	/**
	 * 이메일
	 *
	 */
	email?: string;
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
};

/**
 * 현금영수증 내역
 *
 * 현금영수증 내역
 */
export type CashReceiptSummary = {
	/**
	 * 발행 번호
	 *
	 */
	issueNumber: string;
	/**
	 * 현금 영수증 URL
	 *
	 */
	url: string;
	/**
	 * PG사 현금영수증 아이디
	 *
	 */
	pgReceiptId: string;
};

/**
 * 현금영수증이 이미 발급된 경우
 *
 * 현금영수증이 이미 발급된 경우
 */
export type CashReceiptAlreadyIssuedError = {
	/**
	 *
	 */
	type: "CASH_RECEIPT_ALREADY_ISSUED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 현금영수증이 발급되지 않은 경우
 *
 * 현금영수증이 발급되지 않은 경우
 */
export type CashReceiptNotIssuedError = {
	/**
	 *
	 */
	type: "CASH_RECEIPT_NOT_ISSUED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 결제 건이 입금 대기 상태가 아닌 경우
 *
 * 결제 건이 입금 대기 상태가 아닌 경우
 */
export type PaymentNotWaitingForDepositError = {
	/**
	 *
	 */
	type: "PAYMENT_NOT_WAITING_FOR_DEPOSIT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 에스크로 발송자 정보
 *
 * 에스크로 발송자 정보
 */
export type PaymentEscrowSenderInput = {
	/**
	 * 이름
	 *
	 */
	name?: string;
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 우편번호
	 *
	 */
	zipcode?: string;
	/**
	 * 수취인과의 관계
	 *
	 */
	relationship?: string;
	/**
	 * 주소
	 *
	 */
	address?: SeparatedAddressInput;
};

/**
 * 에스크로 수취인 정보
 *
 * 에스크로 수취인 정보
 */
export type PaymentEscrowReceiverInput = {
	/**
	 * 이름
	 *
	 */
	name?: string;
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 우편번호
	 *
	 */
	zipcode?: string;
	/**
	 * 주소
	 *
	 */
	address?: SeparatedAddressInput;
};

/**
 * 배송정보
 *
 * 배송정보
 */
export type PaymentLogistics = {
	/**
	 * 물류회사
	 *
	 */
	company: PaymentLogisticsCompany;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송시점
	 *
	 */
	sentAt: string;
	/**
	 * 수령시점
	 *
	 */
	receivedAt?: string;
	/**
	 * 주소
	 *
	 */
	address?: SeparatedAddressInput;
};

/**
 * 성공 웹훅 내역
 *
 * 성공 웹훅 내역
 */
export type PaymentWebhook = {
	/**
	 * 웹훅 발송 시 결제 건 상태
	 *
	 * V1 결제 건인 경우, 값이 존재하지 않습니다.
	 */
	paymentStatus?: PaymentWebhookPaymentStatus;
	/**
	 * 웹훅 아이디
	 *
	 */
	id: string;
	/**
	 * 웹훅 상태
	 *
	 */
	status?: PaymentWebhookStatus;
	/**
	 * 웹훅이 발송된 url
	 *
	 * V1 결제 건인 경우, 값이 존재하지 않습니다.
	 */
	url: string;
	/**
	 * 비동기 웹훅 여부
	 *
	 * V1 결제 건인 경우, 값이 존재하지 않습니다.
	 */
	isAsync?: boolean;
	/**
	 * 현재 발송 횟수
	 *
	 */
	currentExecutionCount?: number;
	/**
	 * 최대 발송 횟수
	 *
	 */
	maxExecutionCount?: number;
	/**
	 * 웹훅 실행 맥락
	 *
	 */
	trigger?: PaymentWebhookTrigger;
	/**
	 * 웹훅 요청 정보
	 *
	 */
	request?: PaymentWebhookRequest;
	/**
	 * 웹훅 응답 정보
	 *
	 */
	response?: PaymentWebhookResponse;
	/**
	 * 웹훅 처리 시작 시점
	 *
	 */
	triggeredAt?: string;
};

/**
 * 웹훅 내역이 존재하지 않는 경우
 *
 * 웹훅 내역이 존재하지 않는 경우
 */
export type WebhookNotFoundError = {
	/**
	 *
	 */
	type: "WEBHOOK_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 조회 시간 단위
 *
 * 조회 시간 단위
 *
 * 하나의 단위 필드만 선택하여 입력합니다.
 */
export type AnalyticsTimeGranularity = {
	/**
	 *
	 */
	minute?: AnalyticsTimeGranularityMinute;
	/**
	 *
	 */
	hour?: AnalyticsTimeGranularityHour;
	/**
	 *
	 */
	day?: AnalyticsTimeGranularityDay;
	/**
	 *
	 */
	week?: AnalyticsTimeGranularityWeek;
	/**
	 *
	 */
	month?: AnalyticsTimeGranularityMonth;
};

/**
 * AnalyticsPaymentChartStat
 *
 * 특정 시점의 거래 건 수와 금액을 나타냅니다.
 */
export type AnalyticsPaymentChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
};

/**
 * 요일
 *
 * 요일
 */
export type DayOfWeek = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";

/**
 * AnalyticsAverageAmountChartStat
 *
 * 특정 시점의 건별 평균 거래액, 고객 당 평균 거래액을 나타냅니다.
 */
export type AnalyticsAverageAmountChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 건별 평균 거래액
	 *
	 */
	paymentAverageAmount: number;
	/**
	 * 고객 당 평균 거래액
	 *
	 */
	customerAverageAmount: number;
};

/**
 * AnalyticsAverageAmountChartSummary
 *
 * 전체 구간의 건별 평균 거래액, 고객 당 평균 거래액을 나타냅니다.
 */
export type AnalyticsAverageAmountChartSummary = {
	/**
	 * 건별 평균 거래액
	 *
	 */
	paymentAverageAmount: number;
	/**
	 * 고객 당 평균 거래액
	 *
	 */
	customerAverageAmount: number;
};

/**
 * AnalyticsPaymentMethodChartStat
 *
 * 결제수단별 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsPaymentMethodChartStat = {
	/**
	 * 결제수단
	 *
	 */
	paymentMethod?: PaymentMethodType;
	/**
	 * 결제수단별 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제수단별 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsPaymentMethodTrendChartStat
 *
 * 특정 시점의 결제수단별 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsPaymentMethodTrendChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 결제수단
	 *
	 */
	paymentMethod?: PaymentMethodType;
	/**
	 * 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsCardChartStat
 *
 * 특정 시점의 카드결제 거래 건 수와 금액을 나타냅니다.
 */
export type AnalyticsCardChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
};

/**
 * 카드사
 *
 * 카드사
 */
export type CardCompany =
	| "KOREA_DEVELOPMENT_BANK"
	| "KFCC"
	| "SHINHYUP"
	| "EPOST"
	| "SAVINGS_BANK_KOREA"
	| "KAKAO_BANK"
	| "K_BANK"
	| "TOSS_BANK"
	| "WOORI_CARD"
	| "BC_CARD"
	| "GWANGJU_CARD"
	| "SAMSUNG_CARD"
	| "SHINHAN_CARD"
	| "HYUNDAI_CARD"
	| "LOTTE_CARD"
	| "SUHYUP_CARD"
	| "CITI_CARD"
	| "NH_CARD"
	| "JEONBUK_CARD"
	| "JEJU_CARD"
	| "HANA_CARD"
	| "KOOKMIN_CARD"
	| "UNIDENTIFIED_GLOBAL_CARD"
	| "CHAI_CARD"
	| "AMEX_CARD"
	| "MIR_CARD"
	| "UNION_CARD"
	| "JCB_CARD"
	| "VISA_CARD"
	| "MASTER_CARD"
	| "DINERS_CARD"
	| "DISCOVER_CARD"
	| "IBK"
	| "NH_BANK"
	| "DAEGU_CARD"
	| "BUSAN_CARD"
	| "SC_BANK"
	| "KYONGNAM_CARD"
	| "WOORI_BANK"
	| "CHINA_BANK"
	| "NFCF"
	| "KB_SECURITIES"
	| "YUANTA_SECURITIES"
	| "NH_SECURITIES"
	| "DB_SECURITIES"
	| "SK_SECURITIES"
	| "EUGENE_SECURITIES"
	| "KYOBO_SECURITIES"
	| "MIRAE_ASSET_SECURITIES"
	| "KOREA_SECURITIES"
	| "HANHWA_SECURITIES"
	| "SSG"
	| "KONA_I"
	| "CHAI"
	| "TOSS_CARD"
	| "PAYCO"
	| "GMONEY_TRANS"
	| "FINT"
	| "KG_MOBILIANS"
	| "HANPASS"
	| "FINSHOT"
	| "BIZPLAY"
	| "NICE"
	| "DANAL"
	| "SECTA"
	| "GME"
	| "LORD_SYSTEM"
	| "NAVERPAY"
	| "KAKAOPAY"
	| "KDBC"
	| "TEEN_CASH"
	| "EGG_MONEY"
	| "ON_CASH"
	| "GALAXIA_MONEY_TREE"
	| "FIRFIN";

/**
 * AnalyticsCardCompanyChartStat
 *
 * 특정 시점의 카드사 별 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsCardCompanyChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 카드사
	 *
	 */
	cardCompany: CardCompany;
	/**
	 * 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsCardCompanyChartRemainderStat
 *
 * 특정 시점의 나머지 카드사들의 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsCardCompanyChartRemainderStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsCardCompanyChartSummary
 *
 * 결제금액, 결제 건수의 총합을 나타냅니다.
 */
export type AnalyticsCardCompanyChartSummary = {
	/**
	 * 결제금액 합
	 *
	 */
	totalAmount: number;
	/**
	 * 결제 건수 합
	 *
	 */
	totalCount: number;
};

/**
 * AnalyticsEasyPayChartStat
 *
 * 특정 시점의 간편결제 거래 건수와 금액을 나타냅니다.
 */
export type AnalyticsEasyPayChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
};

/**
 * 간편 결제사
 *
 * 간편 결제사
 */
export type EasyPayProvider =
	| "SAMSUNGPAY"
	| "KAKAOPAY"
	| "NAVERPAY"
	| "PAYCO"
	| "SSGPAY"
	| "CHAI"
	| "LPAY"
	| "KPAY"
	| "TOSSPAY"
	| "LGPAY"
	| "PINPAY"
	| "APPLEPAY"
	| "SKPAY"
	| "TOSS_BRANDPAY"
	| "KB_APP"
	| "ALIPAY"
	| "HYPHEN";

/**
 * AnalyticsEasyPayProviderChartStat
 *
 * 특정 시점의 간편결제사별 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsEasyPayProviderChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 간편결제사
	 *
	 */
	easyPayProvider: EasyPayProvider;
	/**
	 * 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsEasyPayProviderChartRemainderStat
 *
 * 특정 시점의 나머지 간편결제사들의 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsEasyPayProviderChartRemainderStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsEasyPayProviderChartSummary
 *
 * 결제금액, 결제 건수의 총합을 나타냅니다.
 */
export type AnalyticsEasyPayProviderChartSummary = {
	/**
	 * 결제금액의 합
	 *
	 */
	totalAmount: number;
	/**
	 * 결제 건수의 합
	 *
	 */
	totalCount: number;
};

/**
 * AnalyticsPgCompanyChartStat
 *
 * 결제대행사별 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsPgCompanyChartStat = {
	/**
	 * 결제대행사
	 *
	 */
	pgCompany: PgCompany;
	/**
	 * 결제대행사별 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제대행사별 결제 건수
	 *
	 */
	count: number;
};

/**
 * PG사
 *
 * PG사
 */
export type PgCompany =
	| "INICIS"
	| "NICE"
	| "KCP"
	| "DANAL"
	| "TOSSPAYMENTS"
	| "MOBILIANS"
	| "KICC"
	| "SMARTRO"
	| "DAOU"
	| "BLUEWALNUT"
	| "PAYPAL"
	| "ALIPAY"
	| "EXIMBAY"
	| "PAYMENTWALL"
	| "SETTLE"
	| "GALAXIA"
	| "NAVERPAY"
	| "KAKAOPAY"
	| "SMILEPAY"
	| "KAKAO"
	| "TOSSPAY"
	| "CHAI"
	| "PAYCO"
	| "PAYPLE"
	| "SYRUP"
	| "KSNET"
	| "WELCOME"
	| "JTNET"
	| "KPN"
	| "HYPHEN";

/**
 * AnalyticsPgCompanyTrendChartStat
 *
 * 특정 시점의 결제대행사 별 결제금액, 결제 건수를 나타냅니다.
 */
export type AnalyticsPgCompanyTrendChartStat = {
	/**
	 * 시점
	 *
	 */
	timestamp: string;
	/**
	 * 결제대행사
	 *
	 */
	pgCompany: PgCompany;
	/**
	 * 결제금액
	 *
	 */
	amount: number;
	/**
	 * 결제 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsPaymentStatusChartStat
 *
 * 각 상태의 건수와 금액, 사분위수를 나타냅니다.
 */
export type AnalyticsPaymentStatusChartStat = {
	/**
	 * 결제 건 상태
	 *
	 */
	paymentStatus: PaymentStatus;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
	/**
	 * 해당 상태 비율
	 *
	 */
	averageRatio: number;
	/**
	 * 1 사분위수
	 *
	 */
	firstQuantile: number;
	/**
	 * 중앙값
	 *
	 */
	median: number;
	/**
	 * 3 사분위수
	 *
	 */
	thirdQuantile: number;
};

/**
 * AnalyticsPaymentStatusByPaymentMethodChartStat
 *
 * 각 결제수단, 상태 별 건수와 금액을 나타냅니다.
 */
export type AnalyticsPaymentStatusByPaymentMethodChartStat = {
	/**
	 * 결제수단
	 *
	 */
	paymentMethod?: PaymentMethodType;
	/**
	 * 결제 건 상태
	 *
	 */
	paymentStatus: PaymentStatus;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsPaymentStatusByPgCompanyChartStat
 *
 * 각 상태의 건수와 금액, 사분위수를 나타냅니다.
 */
export type AnalyticsPaymentStatusByPgCompanyChartStat = {
	/**
	 * PG사
	 *
	 */
	pgCompany: PgCompany;
	/**
	 * 결제 건 상태
	 *
	 */
	paymentStatus: PaymentStatus;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
};

/**
 * AnalyticsPaymentStatusByPaymentClientChartStat
 *
 * 고객사의 결제 환경 별 결제 상태 차트 정보
 */
export type AnalyticsPaymentStatusByPaymentClientChartStat = {
	/**
	 * 결제가 발생한 클라이언트 환경
	 *
	 */
	paymentClientType: PaymentClientType;
	/**
	 * 결제 건 상태
	 *
	 */
	paymentStatus: PaymentStatus;
	/**
	 * 거래액
	 *
	 */
	amount: number;
	/**
	 * 거래 건수
	 *
	 */
	count: number;
};

/**
 * 외부 서비스에서 에러가 발생한 경우
 *
 * 외부 서비스에서 에러가 발생한 경우
 */
export type B2bExternalServiceError = {
	/**
	 *
	 */
	type: "B2B_EXTERNAL_SERVICE";
	/**
	 *
	 */
	message: string;
};

/**
 * 연동 사업자가 존재하지 않는 경우
 *
 * 연동 사업자가 존재하지 않는 경우
 */
export type B2bMemberCompanyNotFoundError = {
	/**
	 *
	 */
	type: "B2B_MEMBER_COMPANY_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * B2B 기능이 활성화되지 않은 경우
 *
 * B2B 기능이 활성화되지 않은 경우
 */
export type B2bNotEnabledError = {
	/**
	 *
	 */
	type: "B2B_NOT_ENABLED";
	/**
	 *
	 */
	message?: string;
};

/**
 * B2bCompanyContactInput
 *
 */
export type B2bCompanyContactInput = {
	/**
	 * 담당자 ID
	 *
	 * 팝빌 로그인 계정으로 사용됩니다.
	 */
	id: string;
	/**
	 * 비밀번호
	 *
	 */
	password: string;
	/**
	 * 담당자 성명
	 *
	 */
	name: string;
	/**
	 * 담당자 핸드폰 번호
	 *
	 */
	phoneNumber: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email: string;
};

/**
 * 사업자가 이미 연동되어 있는 경우
 *
 * 사업자가 이미 연동되어 있는 경우
 */
export type B2bCompanyAlreadyRegisteredError = {
	/**
	 *
	 */
	type: "B2B_COMPANY_ALREADY_REGISTERED";
	/**
	 *
	 */
	message?: string;
};

/**
 * ID가 이미 사용중인 경우
 *
 * ID가 이미 사용중인 경우
 */
export type B2bIdAlreadyExistsError = {
	/**
	 *
	 */
	type: "B2B_ID_ALREADY_EXISTS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 담당자가 존재하지 않는 경우
 *
 * 담당자가 존재하지 않는 경우
 */
export type B2bContactNotFoundError = {
	/**
	 *
	 */
	type: "B2B_CONTACT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 인증서 타입
 *
 * 인증서 타입
 */
export type B2bCertificateType = "E_TAX" | "POP_BILL" | "ETC";

/**
 * 인증서가 등록되어 있지 않은 경우
 *
 * 인증서가 등록되어 있지 않은 경우
 */
export type B2bCertificateUnregisteredError = {
	/**
	 *
	 */
	type: "B2B_CERTIFICATE_UNREGISTERED";
	/**
	 *
	 */
	message?: string;
};

/**
 * 계좌가 존재하지 않는 경우
 *
 * 계좌가 존재하지 않는 경우
 */
export type B2bBankAccountNotFoundError = {
	/**
	 *
	 */
	type: "B2B_BANK_ACCOUNT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 금융기관과의 통신에 실패한 경우
 *
 * 금융기관과의 통신에 실패한 경우
 */
export type B2bFinancialSystemCommunicationError = {
	/**
	 *
	 */
	type: "B2B_FINANCIAL_SYSTEM_COMMUNICATION";
	/**
	 *
	 */
	message?: string;
};

/**
 * 금융기관 장애
 *
 * 금융기관 장애
 */
export type B2bFinancialSystemFailureError = {
	/**
	 *
	 */
	type: "B2B_FINANCIAL_SYSTEM_FAILURE";
	/**
	 *
	 */
	message?: string;
};

/**
 * 금융기관 시스템이 점검 중인 경우
 *
 * 금융기관 시스템이 점검 중인 경우
 */
export type B2bFinancialSystemUnderMaintenanceError = {
	/**
	 *
	 */
	type: "B2B_FINANCIAL_SYSTEM_UNDER_MAINTENANCE";
	/**
	 *
	 */
	message?: string;
};

/**
 * 계좌 정보 조회가 불가능한 외화 계좌인 경우
 *
 * 계좌 정보 조회가 불가능한 외화 계좌인 경우
 */
export type B2bForeignExchangeAccountError = {
	/**
	 *
	 */
	type: "B2B_FOREIGN_EXCHANGE_ACCOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 금융기관 시스템이 정기 점검 중인 경우
 *
 * 금융기관 시스템이 정기 점검 중인 경우
 */
export type B2bRegularMaintenanceTimeError = {
	/**
	 *
	 */
	type: "B2B_REGULAR_MAINTENANCE_TIME";
	/**
	 *
	 */
	message?: string;
};

/**
 * 정지 계좌인 경우
 *
 * 정지 계좌인 경우
 */
export type B2bSuspendedAccountError = {
	/**
	 *
	 */
	type: "B2B_SUSPENDED_ACCOUNT";
	/**
	 *
	 */
	message?: string;
};

/**
 * 사업자 과세 유형
 *
 * 사업자 과세 유형
 */
export type B2bCompanyStateTaxationType =
	| "NORMAL"
	| "TAX_FREE"
	| "SIMPLE"
	| "SIMPLE_TAX_INVOICE_ISSUER"
	| "ASSIGNED_ID_NUMBER";

/**
 * 영업 상태
 *
 * 영업 상태
 */
export type B2bCompanyStateBusinessStatus =
	| "IN_BUSINESS"
	| "CLOSED"
	| "SUSPENDED";

/**
 * 사업자가 존재하지 않는 경우
 *
 * 사업자가 존재하지 않는 경우
 */
export type B2bCompanyNotFoundError = {
	/**
	 *
	 */
	type: "B2B_COMPANY_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 홈택스가 점검중이거나 순단이 발생한 경우
 *
 * 홈택스가 점검중이거나 순단이 발생한 경우
 */
export type B2bHometaxUnderMaintenanceError = {
	/**
	 *
	 */
	type: "B2B_HOMETAX_UNDER_MAINTENANCE";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서 생성 요청 정보
 *
 * 세금계산서 생성 요청 정보
 */
export type B2bTaxInvoiceInput = {
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 권
	 *
	 */
	bookVolume?: number;
	/**
	 * 호
	 *
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks?: string[];
	/**
	 * 공급자 문서번호
	 *
	 * 영문 대소문자, 숫자, 특수문자('-','\_')만 이용 가능
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 * 영문 대소문자, 숫자, 특수문자('-','\_')만 이용 가능
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 * 공급자 담당자 휴대폰번호 {supplier.contact.mobile\_phone\_number} 값으로 문자 전송 전송시 포인트 차감되며, 실패시 환불 처리 기본값은 false
	 */
	sendSms?: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items?: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts?: B2bTaxInvoiceAdditionalContact[];
};

/**
 * B2bTaxInvoiceBeforeSending
 *
 */
export type B2bTaxInvoiceBeforeSending = {
	/**
	 *
	 */
	status: "BEFORE_SENDING";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
};

/**
 * B2bTaxInvoiceIssuanceCancelled
 *
 */
export type B2bTaxInvoiceIssuanceCancelled = {
	/**
	 *
	 */
	status: "ISSUANCE_CANCELLED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
	/**
	 * 공급받는자 영업 상태
	 *
	 */
	recipientBusinessStatus?: B2bCompanyStateBusinessStatus;
	/**
	 * 공급받는자 휴폐업일자
	 *
	 * 상태가 CLOSED, SUSPENDED 상태인 경우에만 결과값 반환
	 */
	recipientClosedSuspendedDate?: string;
};

/**
 * B2bTaxInvoiceRequestRefused
 *
 */
export type B2bTaxInvoiceRequestRefused = {
	/**
	 *
	 */
	status: "ISSUANCE_REFUSED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
};

/**
 * B2bTaxInvoiceIssued
 *
 */
export type B2bTaxInvoiceIssued = {
	/**
	 *
	 */
	status: "ISSUED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
};

/**
 * B2bTaxInvoiceRegistered
 *
 */
export type B2bTaxInvoiceRegistered = {
	/**
	 *
	 */
	status: "REGISTERED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
};

/**
 * B2bTaxInvoiceRequested
 *
 */
export type B2bTaxInvoiceRequested = {
	/**
	 *
	 */
	status: "REQUESTED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
};

/**
 * B2bTaxInvoiceRequestCancelled
 *
 */
export type B2bTaxInvoiceRequestCancelled = {
	/**
	 *
	 */
	status: "REQUEST_CANCELLED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
};

/**
 * B2bTaxInvoiceSending
 *
 */
export type B2bTaxInvoiceSending = {
	/**
	 *
	 */
	status: "SENDING";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
	/**
	 * 국세청 전송 일시
	 *
	 */
	ntsSentAt: string;
};

/**
 * B2bTaxInvoiceSendingCompleted
 *
 */
export type B2bTaxInvoiceSendingCompleted = {
	/**
	 *
	 */
	status: "SENDING_COMPLETED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
	/**
	 * 국세청 전송 일시
	 *
	 */
	ntsSentAt: string;
	/**
	 * 국세청 전송 결과
	 *
	 */
	ntsResult?: string;
	/**
	 * 국세청 결과 코드
	 *
	 * 국세청 발급 결과 코드로 영문 3자리 + 숫자 3자리로 구성됨
	 */
	ntsResultCode?: string;
	/**
	 * 국세청 결과 수신 일시
	 *
	 */
	ntsResultReceivedAt: string;
};

/**
 * B2bTaxInvoiceSendingFailed
 *
 */
export type B2bTaxInvoiceSendingFailed = {
	/**
	 *
	 */
	status: "SENDING_FAILED";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
	/**
	 * 국세청 전송 일시
	 *
	 */
	ntsSentAt: string;
	/**
	 * 국세청 전송 결과
	 *
	 */
	ntsResult?: string;
	/**
	 * 국세청 결과 코드
	 *
	 * 국세청 발급 결과 코드로 영문 3자리 + 숫자 3자리로 구성됨
	 */
	ntsResultCode?: string;
	/**
	 * 국세청 결과 수신 일시
	 *
	 */
	ntsResultReceivedAt: string;
};

/**
 * B2bTaxInvoiceWaitingSending
 *
 */
export type B2bTaxInvoiceWaitingSending = {
	/**
	 *
	 */
	status: "WAITING_SENDING";
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 일련번호
	 *
	 */
	serialNum?: string;
	/**
	 * 책번호 - 권
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookVolume?: number;
	/**
	 * 책번호 - 호
	 *
	 * 입력 범위(4자리) : 0 ~ 9999
	 */
	bookIssue?: number;
	/**
	 * 작성일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	writeDate: string;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 합계 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 현금
	 *
	 */
	cashAmount?: number;
	/**
	 * 수표
	 *
	 */
	checkAmount?: number;
	/**
	 * 외상
	 *
	 */
	creditAmount?: number;
	/**
	 * 수표
	 *
	 */
	noteAmount?: number;
	/**
	 * 비고
	 *
	 * 최대 3개
	 */
	remarks: string[];
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급자
	 *
	 */
	supplier: B2bTaxInvoiceCompany;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자
	 *
	 */
	recipient: B2bTaxInvoiceCompany;
	/**
	 * 문자 전송 여부
	 *
	 */
	sendSms: boolean;
	/**
	 * 수정 사유 기재
	 *
	 */
	modification?: B2bModification;
	/**
	 * 품목
	 *
	 * 최대 99개
	 */
	items: B2bTaxInvoiceItem[];
	/**
	 * 추가 담당자
	 *
	 * 최대 3개
	 */
	contacts: B2bTaxInvoiceAdditionalContact[];
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber: string;
};

/**
 * 공급받는자가 존재하지 않은 경우
 *
 * 공급받는자가 존재하지 않은 경우
 */
export type B2bRecipientNotFoundError = {
	/**
	 *
	 */
	type: "B2B_RECIPIENT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 공급자가 존재하지 않은 경우
 *
 * 공급자가 존재하지 않은 경우
 */
export type B2bSupplierNotFoundError = {
	/**
	 *
	 */
	type: "B2B_SUPPLIER_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서가 존재하지 않은 경우
 *
 * 세금계산서가 존재하지 않은 경우
 */
export type B2bTaxInvoiceNotFoundError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서가 삭제 가능한 상태가 아닌 경우
 *
 * 세금계산서가 삭제 가능한 상태가 아닌 경우
 *
 * 삭제 가능한 상태는 `REGISTERED`, `ISSUE_REFUSED`, `REQUEST_CANCELLED_BY_RECIPIENT`, `ISSUE_CANCELLED_BY_SUPPLIER`, `SENDING_FAILED` 입니다.
 */
export type B2bTaxInvoiceNonDeletableStatusError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NON_DELETABLE_STATUS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서가 역발행 대기 상태가 아닌 경우
 *
 * 세금계산서가 역발행 대기 상태가 아닌 경우
 */
export type B2bTaxInvoiceNotRequestedStatusError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NOT_REQUESTED_STATUS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서에 공급받는자 문서 번호가 기입되지 않은 경우
 *
 * 세금계산서에 공급받는자 문서 번호가 기입되지 않은 경우
 */
export type B2bTaxInvoiceNoRecipientDocumentKeyError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NO_RECIPIENT_DOCUMENT_KEY";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서가 발행된(ISSUED) 상태가 아닌 경우
 *
 * 세금계산서가 발행된(ISSUED) 상태가 아닌 경우
 */
export type B2bTaxInvoiceNotIssuedStatusError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NOT_ISSUED_STATUS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서에 공급자 문서 번호가 기입되지 않은 경우
 *
 * 세금계산서에 공급자 문서 번호가 기입되지 않은 경우
 */
export type B2bTaxInvoiceNoSupplierDocumentKeyError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NO_SUPPLIER_DOCUMENT_KEY";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서 요약
 *
 * 세금계산서 요약
 */
export type B2bTaxInvoiceSummary = {
	/**
	 * 과세 유형
	 *
	 */
	taxType: B2bTaxType;
	/**
	 * 공급가액 합계
	 *
	 */
	supplyCostTotalAmount: number;
	/**
	 * 세액 합계
	 *
	 */
	taxTotalAmount: number;
	/**
	 * 영수/청구
	 *
	 */
	purposeType: B2bTaxInvoicePurposeType;
	/**
	 * 공급자 사업자등록번호
	 *
	 */
	supplierBrn: string;
	/**
	 * 공급자 상호
	 *
	 */
	supplierName: string;
	/**
	 * 공급자 문서번호
	 *
	 */
	supplierDocumentKey?: string;
	/**
	 * 공급받는자 사업자등록번호
	 *
	 */
	recipientBrn: string;
	/**
	 * 공급받는자 상호
	 *
	 */
	recipientName: string;
	/**
	 * 공급받는자 문서번호
	 *
	 */
	recipientDocumentKey?: string;
	/**
	 * 공급받는자 영업 상태
	 *
	 */
	recipientBusinessStatus?: B2bCompanyStateBusinessStatus;
	/**
	 * 공급받는자 휴폐업일자
	 *
	 * 상태가 CLOSED, SUSPENDED 상태인 경우에만 결과값 반환
	 */
	recipientClosedSuspendedDate?: string;
	/**
	 * 발행 일시
	 *
	 */
	issuedAt?: string;
	/**
	 * 개봉 일시
	 *
	 */
	openedAt?: string;
	/**
	 * 상태
	 *
	 */
	status: B2bTaxInvoiceStatus;
	/**
	 * 상태 변경 일시
	 *
	 */
	statusUpdatedAt: string;
	/**
	 * 국세청 승인번호
	 *
	 * 세금계산서 발행(전자서명) 시점에 자동으로 부여
	 */
	ntsApproveNumber?: string;
	/**
	 * 국세청 전송 결과
	 *
	 */
	ntsResult?: string;
	/**
	 * 국세청 전송 일시
	 *
	 */
	ntsSentAt?: string;
	/**
	 * 국세청 결과 수신 일시
	 *
	 */
	ntsResultReceivedAt?: string;
	/**
	 * 국세청 결과 코드
	 *
	 * 국세청 발급 결과 코드로 영문 3자리 + 숫자 3자리로 구성됨
	 */
	ntsResultCode?: string;
};

/**
 * 세금계산서가 임시저장 상태가 아닌 경우
 *
 * 세금계산서가 임시저장 상태가 아닌 경우
 */
export type B2bTaxInvoiceNotRegisteredStatusError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_NOT_REGISTERED_STATUS";
	/**
	 *
	 */
	message?: string;
};

/**
 * 업로드한 파일을 찾을 수 없는 경우
 *
 * 업로드한 파일을 찾을 수 없는 경우
 */
export type B2bFileNotFoundError = {
	/**
	 *
	 */
	type: "B2B_FILE_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 세금계산서 첨부파일
 *
 * 세금계산서 첨부파일
 */
export type B2bTaxInvoiceAttachment = {
	/**
	 * 첨부 파일 아이디
	 *
	 */
	id: string;
	/**
	 * 첨부 파일명
	 *
	 */
	name: string;
	/**
	 * 첨부 일시
	 *
	 */
	attachedAt: string;
};

/**
 * 세금계산서의 첨부파일을 찾을 수 없는 경우
 *
 * 세금계산서의 첨부파일을 찾을 수 없는 경우
 */
export type B2bTaxInvoiceAttachmentNotFoundError = {
	/**
	 *
	 */
	type: "B2B_TAX_INVOICE_ATTACHMENT_NOT_FOUND";
	/**
	 *
	 */
	message?: string;
};

/**
 * 하위 상점 거래 정보
 *
 * 하위 상점 거래 정보
 */
export type RegisterStoreReceiptBodyItem = {
	/**
	 * 하위 상점 사업자등록번호
	 *
	 */
	storeBusinessRegistrationNumber: string;
	/**
	 * 하위 상점명
	 *
	 */
	storeName: string;
	/**
	 * 결제 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세액
	 *
	 */
	vatAmount?: number;
	/**
	 * 공급가액
	 *
	 */
	supplyAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
};

/**
 * 카드 프로모션
 *
 * 카드 프로모션
 */
export type CardPromotion = {
	/**
	 *
	 */
	type: "CARD";
	/**
	 * 프로모션 아이디
	 *
	 */
	id: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 프로모션 이름
	 *
	 */
	name: string;
	/**
	 * 할인 유형
	 *
	 */
	discountType: PromotionDiscount;
	/**
	 * 총 예산
	 *
	 */
	totalBudget: number;
	/**
	 * 최소 결제 금액
	 *
	 */
	minPaymentAmount?: number;
	/**
	 * 최대 할인 금액
	 *
	 */
	maxDiscountAmount?: number;
	/**
	 * 소진 금액
	 *
	 */
	spentAmount: number;
	/**
	 * 금액 화폐
	 *
	 */
	currency: Currency;
	/**
	 * 프로모션 시작 시각
	 *
	 */
	startAt: string;
	/**
	 * 프로모션 종료 시각
	 *
	 */
	endAt: string;
	/**
	 * 프로모션 중단 시각
	 *
	 */
	terminatedAt?: string;
	/**
	 * 프로모션 카드사
	 *
	 */
	cardCompany: PromotionCardCompany;
	/**
	 * 프로모션 상태
	 *
	 */
	status: PromotionStatus;
	/**
	 * 프로모션 생성 시각
	 *
	 */
	createdAt: string;
};

/**
 * 프로모션이 존재하지 않는 경우
 *
 * 프로모션이 존재하지 않는 경우
 */
export type PromotionNotFoundError = {
	/**
	 *
	 */
	type: "PROMOTION_NOT_FOUND_ERROR";
	/**
	 *
	 */
	message?: string;
};

/**
 * PlatformSettlementFormulaError
 *
 */
export type PlatformSettlementFormulaError =
	| PlatformSettlementFormulaInvalidFunction
	| PlatformSettlementFormulaInvalidOperator
	| PlatformSettlementFormulaInvalidSyntax
	| PlatformSettlementFormulaInvalidVariable
	| PlatformSettlementFormulaUnexpectedFunctionArguments
	| PlatformSettlementFormulaUnknownError
	| PlatformSettlementFormulaUnsupportedVariable;

/**
 * 검색 키워드 입력 정보
 *
 * 검색 키워드 입력 정보
 *
 * 검색 키워드 적용을 위한 옵션으로, 명시된 키워드를 포함하는 할인 분담 정책만 조회합니다. 하위 필드는 명시된 값 중 한 가지만 적용됩니다.
 */
export type PlatformDiscountSharePolicyFilterInputKeyword = {
	/**
	 *
	 * 해당 값이 포함된 id 를 가진 할인 분담 정책만 조회합니다.
	 */
	id?: string;
	/**
	 *
	 * 해당 값이 포함된 name 을 가진 할인 분담만 조회합니다.
	 */
	name?: string;
};

/**
 * 검색 키워드 입력 정보
 *
 * 검색 키워드 입력 정보
 *
 * 검색 키워드 적용을 위한 옵션으로, 명시된 키워드를 포함하는 추가 수수료 정책만 조회합니다. 하위 필드는 명시된 값 중 한 가지만 적용됩니다.
 */
export type PlatformAdditionalFeePolicyFilterInputKeyword = {
	/**
	 *
	 * 해당 값이 포함된 name 을 가진 추가 수수료 정책만 조회합니다.
	 */
	name?: string;
	/**
	 *
	 * 해당 값이 포함된 id 를 가진 추가 수수료 정책만 조회합니다.
	 */
	id?: string;
	/**
	 *
	 * 해당 값과 같은 수수료 를 가진 추가 수수료 정책만 조회합니다.
	 */
	fee?: string;
};

/**
 * 정액 수수료
 *
 * 정액 수수료
 *
 * 총 금액에 무관하게 정해진 수수료 금액을 책정합니다.
 */
export type PlatformFixedAmountFee = {
	/**
	 *
	 */
	type: "FIXED_AMOUNT";
	/**
	 * 고정된 수수료 금액
	 *
	 */
	amount: number;
};

/**
 * 정률 수수료
 *
 * 정률 수수료
 *
 * 총 금액에 정해진 비율을 곱한 만큼의 수수료를 책정합니다.
 */
export type PlatformFixedRateFee = {
	/**
	 *
	 */
	type: "FIXED_RATE";
	/**
	 * 수수료율
	 *
	 * 총 금액 대비 수수료 비율을 의미하며, 밀리 퍼센트 단위 (10^-5) 의 음이 아닌 정수입니다. `총 금액 * rate * 10^5` (`rate * 10^3 %`) 만큼 수수료를 책정합니다.
	 */
	rate: number;
};

/**
 * 파트너 검색 키워드 입력 정보
 *
 * 파트너 검색 키워드 입력 정보
 *
 * 검색 키워드 적용을 위한 옵션으로, 명시된 키워드를 포함하는 파트너만 조회합니다. 하나의 하위 필드에만 값을 명시하여 요청합니다.
 */
export type PlatformPartnerFilterInputKeyword = {
	/**
	 *
	 * 해당 값이 포함된 id 를 가진 파트너만 조회합니다.
	 */
	id?: string;
	/**
	 *
	 * 해당 값이 포함된 이름 을 가진 파트너만 조회합니다.
	 */
	name?: string;
	/**
	 *
	 * 해당 값이 포함된 이메일 주소를 가진 파트너만 조회합니다.
	 */
	email?: string;
	/**
	 *
	 * 해당 값이 포함된 사업자등록번호를 가진 파트너만 조회합니다.
	 */
	businessRegistrationNumber?: string;
	/**
	 *
	 * 해당 값이 포함된 기본 계약 아이디를 가진 파트너만 조회합니다.
	 */
	defaultContractId?: string;
	/**
	 *
	 * 해당 값이 포함된 메모를 가진 파트너만 조회합니다.
	 */
	memo?: string;
	/**
	 *
	 * 해당 값이 포함된 계좌번호를 가진 파트너만 조회합니다.
	 */
	accountNumber?: string;
	/**
	 *
	 * 해당 값이 포함된 계좌 예금주명을 가진 파트너만 조회합니다.
	 */
	accountHolder?: string;
};

/**
 * CreatePlatformPartnerBodyTypeBusiness
 *
 */
export type CreatePlatformPartnerBodyTypeBusiness = {
	/**
	 * 상호명
	 *
	 */
	companyName: string;
	/**
	 * 사업자 유형
	 *
	 * 값을 입력하지 않으면 일반 과세로 설정됩니다.
	 */
	taxationType?: PlatformPartnerTaxationType;
	/**
	 * 사업자등록번호
	 *
	 */
	businessRegistrationNumber: string;
	/**
	 * 대표자 이름
	 *
	 */
	representativeName: string;
	/**
	 * 사업장 주소
	 *
	 */
	companyAddress?: string;
	/**
	 * 업태
	 *
	 */
	businessType?: string;
	/**
	 * 업종
	 *
	 */
	businessClass?: string;
};

/**
 * CreatePlatformPartnerBodyTypeWhtPayer
 *
 */
export type CreatePlatformPartnerBodyTypeWhtPayer = {
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * CreatePlatformPartnerBodyTypeNonWhtPayer
 *
 */
export type CreatePlatformPartnerBodyTypeNonWhtPayer = {
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * 플랫폼 계좌 상태
 *
 * 플랫폼 계좌 상태
 */
export type PlatformAccountStatus =
	| "VERIFYING"
	| "VERIFIED"
	| "VERIFY_FAILED"
	| "NOT_VERIFIED"
	| "EXPIRED"
	| "UNKNOWN";

/**
 * 사업자 파트너 정보
 *
 * 사업자 파트너 정보
 *
 * 사업자 유형의 파트너 추가 정보 입니다.
 */
export type PlatformPartnerTypeBusiness = {
	/**
	 *
	 */
	type: "BUSINESS";
	/**
	 * 상호명
	 *
	 */
	companyName: string;
	/**
	 * 과세 유형
	 *
	 */
	taxationType: PlatformPartnerTaxationType;
	/**
	 * 사업자 상태
	 *
	 */
	businessStatus: PlatformPartnerBusinessStatus;
	/**
	 * 사업자등록번호
	 *
	 */
	businessRegistrationNumber: string;
	/**
	 * 대표자 이름
	 *
	 */
	representativeName: string;
	/**
	 * 사업장 주소
	 *
	 */
	companyAddress?: string;
	/**
	 * 업태
	 *
	 */
	businessType?: string;
	/**
	 * 업종
	 *
	 */
	businessClass?: string;
};

/**
 * 원천징수 비대상자 파트너 정보
 *
 * 원천징수 비대상자 파트너 정보
 *
 * 비사업자 유형의 파트너 추가 정보 입니다.
 */
export type PlatformPartnerTypeNonWhtPayer = {
	/**
	 *
	 */
	type: "NON_WHT_PAYER";
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * 원천징수 대상자 파트너 정보
 *
 * 원천징수 대상자 파트너 정보
 *
 * 비사업자 유형의 파트너 추가 정보 입니다.
 */
export type PlatformPartnerTypeWhtPayer = {
	/**
	 *
	 */
	type: "WHT_PAYER";
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * UpdatePlatformPartnerBodyTypeBusiness
 *
 */
export type UpdatePlatformPartnerBodyTypeBusiness = {
	/**
	 * 상호명
	 *
	 */
	companyName?: string;
	/**
	 * 사업자 유형
	 *
	 */
	taxationType?: PlatformPartnerTaxationType;
	/**
	 * 사업자등록번호
	 *
	 */
	businessRegistrationNumber?: string;
	/**
	 * 대표자 이름
	 *
	 */
	representativeName?: string;
	/**
	 * 사업장 주소
	 *
	 */
	companyAddress?: string;
	/**
	 * 업태
	 *
	 */
	businessType?: string;
	/**
	 * 업종
	 *
	 */
	businessClass?: string;
};

/**
 * UpdatePlatformPartnerBodyTypeWhtPayer
 *
 */
export type UpdatePlatformPartnerBodyTypeWhtPayer = {
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * UpdatePlatformPartnerBodyTypeNonWhtPayer
 *
 */
export type UpdatePlatformPartnerBodyTypeNonWhtPayer = {
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * 파트너 업데이트를 위한 유형별 추가 정보
 *
 * 파트너 업데이트를 위한 유형별 추가 정보
 */
export type SchedulePlatformPartnersBodyUpdateContact = {
	/**
	 * 담당자 이름
	 *
	 */
	name?: string;
	/**
	 * 담당자 휴대폰 번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 담당자 이메일
	 *
	 */
	email?: string;
};

/**
 * 파트너 유형별 정보 업데이트를 위한 입력 정보
 *
 * 파트너 유형별 정보 업데이트를 위한 입력 정보
 *
 * 파트너 유형별 추가 정보를 수정합니다. 최초 생성된 유형 내에서 세부 정보만 수정할 수 있고 파트너의 유형 자체를 수정할 수는 없습니다.
 */
export type SchedulePlatformPartnersBodyUpdateType = {
	/**
	 * 사업자 추가 정보
	 *
	 */
	business?: SchedulePlatformPartnersBodyUpdateTypeBusiness;
	/**
	 * 원천징수 대상자 추가 정보
	 *
	 */
	whtPayer?: SchedulePlatformPartnersBodyUpdateTypeWhtPayer;
	/**
	 * 원천징수 비대상자 추가 정보
	 *
	 */
	nonWhtPayer?: SchedulePlatformPartnersBodyUpdateTypeNonWhtPayer;
};

/**
 * 파트너 계좌 업데이트를 위한 입력 정보
 *
 * 파트너 계좌 업데이트를 위한 입력 정보
 */
export type SchedulePlatformPartnersBodyUpdateAccount = {
	/**
	 * 은행
	 *
	 */
	bank: Bank;
	/**
	 * 정산에 사용할 통화
	 *
	 */
	currency: Currency;
	/**
	 * 계좌번호
	 *
	 */
	number: string;
	/**
	 * 예금주명
	 *
	 */
	holder: string;
	/**
	 * 계좌 검증 아이디
	 *
	 */
	accountVerificationId?: string;
};

/**
 * 플랫폼 정산 주기 계산 방식
 *
 * 플랫폼 정산 주기 계산 방식
 */
export type PlatformSettlementCycleType =
	| "DAILY"
	| "WEEKLY"
	| "MONTHLY"
	| "MANUAL_DATES";

/**
 * 플랫폼 정산 기준일
 *
 * 플랫폼 정산 기준일
 */
export type PlatformSettlementCycleDatePolicy =
	| "HOLIDAY_BEFORE"
	| "HOLIDAY_AFTER"
	| "CALENDAR_DAY";

/**
 * 검색 키워드 입력 정보
 *
 * 검색 키워드 입력 정보
 *
 * 검색 키워드 적용을 위한 옵션으로, 명시된 키워드를 포함하는 계약만 조회합니다. 하나의 하위 필드에만 값을 명시하여 요청합니다.
 */
export type PlatformContractFilterInputKeyword = {
	/**
	 *
	 * 해당 값이 포함된 id 를 가진 계약만 조회합니다.
	 */
	id?: string;
	/**
	 *
	 * 해당 값이 포함된 name 을 가진 계약만 조회합니다.
	 */
	name?: string;
};

/**
 * 플랫폼 정산 주기 계산 방식 입력 정보
 *
 * 플랫폼 정산 주기 계산 방식 입력 정보
 *
 * 하나의 하위 필드에만 값을 명시하여 요청합니다.
 */
export type PlatformSettlementCycleMethodInput = {
	/**
	 * 매일 정산
	 *
	 */
	daily?: PlatformSettlementCycleMethodDailyInput;
	/**
	 * 매주 정해진 요일에 정산
	 *
	 */
	weekly?: PlatformSettlementCycleMethodWeeklyInput;
	/**
	 * 매월 정해진 날(일)에 정산
	 *
	 */
	monthly?: PlatformSettlementCycleMethodMonthlyInput;
	/**
	 * 정해진 날짜(월, 일)에 정산
	 *
	 */
	manualDates?: PlatformSettlementCycleMethodManualDatesInput;
};

/**
 * 플랫폼 정산 주기 계산 방식
 *
 * 플랫폼 정산 주기 계산 방식
 */
export type PlatformSettlementCycleMethod =
	| PlatformSettlementCycleMethodDaily
	| PlatformSettlementCycleMethodManualDates
	| PlatformSettlementCycleMethodMonthly
	| PlatformSettlementCycleMethodWeekly;

/**
 * 정산 상태
 *
 * 정산 상태
 */
export type PlatformTransferStatus =
	| "SCHEDULED"
	| "IN_PROCESS"
	| "SETTLED"
	| "IN_PAYOUT"
	| "PAID_OUT";

/**
 * 정산 금액 정보
 *
 * 정산 금액 정보
 *
 * 정산 금액과 정산 금액 계산에 사용된 금액 정보들 입니다.
 */
export type PlatformOrderSettlementAmount = {
	/**
	 * 정산 금액
	 *
	 */
	settlement: number;
	/**
	 * 결제 금액
	 *
	 */
	payment: number;
	/**
	 * 결제 금액 부가세
	 *
	 */
	paymentVat: number;
	/**
	 * 결제 금액 부가세 부담금액
	 *
	 * 참조된 계약의 결제 금액 부가세 감액 여부에 따라 false인 경우 0원, true인 경우 결제 금액 부가세입니다.
	 */
	paymentVatBurden: number;
	/**
	 * 면세 금액
	 *
	 */
	taxFree: number;
	/**
	 * 공급가액
	 *
	 */
	supply: number;
	/**
	 * 주문 금액
	 *
	 */
	order: number;
	/**
	 * 중개 수수료
	 *
	 */
	platformFee: number;
	/**
	 * 중개 수수료 부가세
	 *
	 */
	platformFeeVat: number;
	/**
	 * 추가 수수료
	 *
	 */
	additionalFee: number;
	/**
	 * 추가 수수료 부가세
	 *
	 */
	additionalFeeVat: number;
	/**
	 * 할인 금액
	 *
	 */
	discount: number;
	/**
	 * 할인 분담 금액
	 *
	 */
	discountShare: number;
};

/**
 * 결제 정보
 *
 * 결제 정보
 */
export type PlatformPayment = PlatformExternalPayment | PlatformPortOnePayment;

/**
 * 주문 항목
 *
 * 주문 항목
 */
export type PlatformOrderTransferOrderLine = {
	/**
	 * 상품
	 *
	 */
	product: PlatformOrderTransferProduct;
	/**
	 * 상품 수량
	 *
	 */
	quantity: number;
	/**
	 * 상품 할인 정보
	 *
	 */
	discounts: PlatformOrderTransferDiscount[];
	/**
	 * 상품 추가 수수료 정보
	 *
	 */
	additionalFees: PlatformOrderTransferAdditionalFee[];
	/**
	 * 상품 정산 금액 정보
	 *
	 */
	amount: PlatformOrderSettlementAmount;
};

/**
 * 추가 수수료 정보
 *
 * 추가 수수료 정보
 */
export type PlatformOrderTransferAdditionalFee = {
	/**
	 * 추가 수수료 정책
	 *
	 */
	policy: PlatformAdditionalFeePolicy;
	/**
	 * 추가 수수료 금액
	 *
	 */
	amount: number;
	/**
	 * 추가 수수료 부가세 금액
	 *
	 */
	vat: number;
};

/**
 * 할인 정보
 *
 * 할인 정보
 */
export type PlatformOrderTransferDiscount = {
	/**
	 * 할인 분담 정책
	 *
	 */
	sharePolicy: PlatformDiscountSharePolicy;
	/**
	 * 할인 금액
	 *
	 */
	amount: number;
	/**
	 * 할인 분담 금액
	 *
	 */
	shareAmount: number;
};

/**
 * 주문 취소 정보
 *
 * 주문 취소 정보
 */
export type PlatformOrderTransferCancellation = {
	/**
	 * 주문 취소 아이디
	 *
	 */
	id: string;
	/**
	 * 취소 일시
	 *
	 */
	cancelledAt: string;
};

/**
 * DateRange
 *
 */
export type DateRange = {
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	from: string;
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	until: string;
};

/**
 * PaymentMethodType
 *
 */
export type PaymentMethodType =
	| "CARD"
	| "TRANSFER"
	| "VIRTUAL_ACCOUNT"
	| "GIFT_CERTIFICATE"
	| "MOBILE"
	| "EASY_PAY";

/**
 * PlatformTransferType
 *
 */
export type PlatformTransferType = "ORDER" | "ORDER_CANCEL" | "MANUAL";

/**
 * 정산건 검색 키워드 입력 정보
 *
 * 정산건 검색 키워드 입력 정보
 *
 * 검색 키워드 적용을 위한 옵션으로, 명시된 키워드를 포함하는 정산건만 조회합니다. 하나의 하위 필드에만 값을 명시하여 요청합니다.
 */
export type PlatformTransferFilterInputKeyword = {
	/**
	 *
	 * 해당 값이 포함된 정보를 가진 정산건만 조회합니다.
	 */
	all?: string;
	/**
	 *
	 * 해당 값이랑 일치하는 paymentId 를 가진 정산건만 조회합니다.
	 */
	paymentId?: string;
	/**
	 *
	 * 해당 값이랑 일치하는 transferId 를 가진 정산건만 조회합니다.
	 */
	transferId?: string;
	/**
	 *
	 * 해당 값이 포함된 transferMemo 를 가진 정산건만 조회합니다.
	 */
	transferMemo?: string;
	/**
	 *
	 * 해당 값이랑 일치하는 productId 를 가진 정산건만 조회합니다.
	 */
	productId?: string;
	/**
	 *
	 * 해당 값이랑 일치하는 productName 을 가진 정산건만 조회합니다.
	 */
	productName?: string;
	/**
	 *
	 * 해당 값이랑 일치하는 partnerId 를 가진 정산건만 조회합니다.
	 */
	partnerId?: string;
	/**
	 *
	 * 해당 값이 포함된 partnerName 을 가진 정산건만 조회합니다.
	 */
	partnerName?: string;
	/**
	 *
	 * 해당 값이 포함된 partnerMemo 를 가진 정산건만 조회합니다.
	 */
	partnerMemo?: string;
};

/**
 * PlatformManualTransferSummary
 *
 */
export type PlatformManualTransferSummary = {
	/**
	 *
	 */
	type: "MANUAL";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	partner: PlatformTransferSummaryPartner;
	/**
	 *
	 */
	status: PlatformTransferStatus;
	/**
	 *
	 */
	memo?: string;
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 *
	 */
	settlementCurrency: Currency;
	/**
	 *
	 */
	isForTest: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	partnerUserDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 *
	 */
	settlementAmount: number;
};

/**
 * PlatformOrderTransferSummary
 *
 */
export type PlatformOrderTransferSummary = {
	/**
	 *
	 */
	type: "ORDER";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	storeId: string;
	/**
	 *
	 */
	partner: PlatformTransferSummaryPartner;
	/**
	 *
	 */
	status: PlatformTransferStatus;
	/**
	 *
	 */
	memo?: string;
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 *
	 */
	settlementCurrency: Currency;
	/**
	 *
	 */
	isForTest: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	partnerUserDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 *
	 */
	amount: PlatformOrderSettlementAmount;
	/**
	 *
	 */
	payment: PlatformTransferSummaryPayment;
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementStartDate: string;
};

/**
 * PlatformOrderCancelTransferSummary
 *
 */
export type PlatformOrderCancelTransferSummary = {
	/**
	 *
	 */
	type: "ORDER_CANCEL";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	storeId: string;
	/**
	 *
	 */
	partner: PlatformTransferSummaryPartner;
	/**
	 *
	 */
	status: PlatformTransferStatus;
	/**
	 *
	 */
	memo?: string;
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 *
	 */
	settlementCurrency: Currency;
	/**
	 *
	 */
	isForTest: boolean;
	/**
	 * 사용자 정의 속성
	 *
	 */
	partnerUserDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 * 사용자 정의 속성
	 *
	 */
	userDefinedProperties: PlatformUserDefinedPropertyKeyValue[];
	/**
	 *
	 */
	amount: PlatformOrderSettlementAmount;
	/**
	 *
	 */
	payment: PlatformTransferSummaryPayment;
	/**
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementStartDate: string;
};

/**
 * 주문 항목
 *
 * 주문 항목
 */
export type CreatePlatformOrderTransferBodyOrderLine = {
	/**
	 * 상품
	 *
	 */
	product: CreatePlatformOrderTransferBodyProduct;
	/**
	 * 상품 수량
	 *
	 */
	quantity: number;
	/**
	 * 상품 할인 정보
	 *
	 */
	discounts: CreatePlatformOrderTransferBodyDiscount[];
	/**
	 * 상품 추가 수수료 정보
	 *
	 */
	additionalFees: CreatePlatformOrderTransferBodyAdditionalFee[];
};

/**
 * 결제 수단 입력 정보
 *
 * 결제 수단 입력 정보
 */
export type PlatformPaymentMethodInput = {
	/**
	 * 카드
	 *
	 */
	card?: PlatformPaymentMethodCardInput;
	/**
	 * 계좌이체
	 *
	 */
	transfer?: PlatformPaymentMethodTransferInput;
	/**
	 * 가상계좌
	 *
	 */
	virtualAccount?: PlatformPaymentMethodVirtualAccountInput;
	/**
	 * 상품권
	 *
	 */
	giftCertificate?: PlatformPaymentMethodGiftCertificateInput;
	/**
	 * 모바일
	 *
	 */
	mobile?: PlatformPaymentMethodMobileInput;
	/**
	 * 간편 결제
	 *
	 */
	easyPay?: PlatformPaymentMethodEasyPayInput;
};

/**
 * PlatformUserDefinedPropertyValue
 *
 */
export type PlatformUserDefinedPropertyValue = {
	/**
	 *
	 */
	string: string;
};

/**
 * 주문 취소 항목 리스트
 *
 * 주문 취소 항목 리스트
 */
export type CreatePlatformOrderCancelTransferBodyOrderLine = {
	/**
	 * 상품 아이디
	 *
	 */
	productId: string;
	/**
	 * 상품 수량
	 *
	 */
	quantity: number;
	/**
	 * 상품 할인 정보
	 *
	 */
	discounts: CreatePlatformOrderCancelTransferBodyDiscount[];
};

/**
 * 전체 금액 취소
 *
 * 전체 금액 취소
 */
export type CreatePlatformOrderCancelTransferBodyOrderDetailAll = {};

/**
 * 금액 타입
 *
 * 금액 타입
 */
export type PlatformCancellableAmountType = "SUPPLY_WITH_VAT" | "TAX_FREE";

/**
 * 금액 타입
 *
 * 금액 타입
 */
export type PlatformPortOnePaymentCancelAmountType =
	| "SUPPLY_WITH_VAT"
	| "TAX_FREE";

/**
 * 정산 상태
 *
 * 정산 상태
 */
export type PlatformPartnerSettlementStatus =
	| "PAYOUT_PREPARED"
	| "PAYOUT_WITHHELD"
	| "PAYOUT_FAILED"
	| "IN_PAYOUT"
	| "PAID_OUT";

/**
 * 정산 유형
 *
 * 정산 유형
 */
export type PlatformPartnerSettlementType = "MANUAL" | "ORDER" | "ORDER_CANCEL";

/**
 * PlatformPartnerSettlementFilterKeywordInput
 *
 */
export type PlatformPartnerSettlementFilterKeywordInput = {
	/**
	 *
	 */
	partnerSettlementId?: string;
	/**
	 *
	 */
	payoutId?: string;
	/**
	 *
	 */
	bulkPayoutId?: string;
};

/**
 * PlatformPartnerManualSettlement
 *
 */
export type PlatformPartnerManualSettlement = {
	/**
	 *
	 */
	type: "MANUAL";
	/**
	 * 정산내역 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너
	 *
	 */
	partner: PlatformPartner;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 정산 통화
	 *
	 */
	settlementCurrency: Currency;
	/**
	 * 정산 상태
	 *
	 */
	status: PlatformPartnerSettlementStatus;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 정산 금액
	 *
	 */
	amount: number;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest: boolean;
};

/**
 * PlatformPartnerOrderSettlement
 *
 */
export type PlatformPartnerOrderSettlement = {
	/**
	 *
	 */
	type: "ORDER";
	/**
	 * 정산내역 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너
	 *
	 */
	partner: PlatformPartner;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 정산 통화
	 *
	 */
	settlementCurrency: Currency;
	/**
	 * 정산 상태
	 *
	 */
	status: PlatformPartnerSettlementStatus;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 계약
	 *
	 */
	contract: PlatformContract;
	/**
	 * 정산 시작 일 범위
	 *
	 */
	settlementStartDateRange: DateRange;
	/**
	 * 금액 정보
	 *
	 */
	amount: PlatformOrderSettlementAmount;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest: boolean;
};

/**
 * PlatformPartnerOrderCancelSettlement
 *
 */
export type PlatformPartnerOrderCancelSettlement = {
	/**
	 *
	 */
	type: "ORDER_CANCEL";
	/**
	 * 정산내역 아이디
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 * 파트너
	 *
	 */
	partner: PlatformPartner;
	/**
	 * 정산 일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	settlementDate: string;
	/**
	 * 정산 통화
	 *
	 */
	settlementCurrency: Currency;
	/**
	 * 정산 상태
	 *
	 */
	status: PlatformPartnerSettlementStatus;
	/**
	 * 메모
	 *
	 */
	memo?: string;
	/**
	 * 계약
	 *
	 */
	contract: PlatformContract;
	/**
	 * 정산 시작 일 범위
	 *
	 */
	settlementStartDateRange: DateRange;
	/**
	 * 금액 정보
	 *
	 */
	amount: PlatformOrderSettlementAmount;
	/**
	 * 테스트 모드 여부
	 *
	 */
	isForTest: boolean;
};

/**
 * PlatformPayoutStatus
 *
 */
export type PlatformPayoutStatus =
	| "PREPARED"
	| "CANCELLED"
	| "STOPPED"
	| "PROCESSING"
	| "SUCCEEDED"
	| "FAILED";

/**
 * 검색 기준 입력 정보
 *
 * 검색 기준 입력 정보
 */
export type PlatformPayoutFilterInputCriteria = {
	/**
	 *
	 */
	timestampRange?: DateTimeRange;
	/**
	 *
	 */
	payoutId?: string;
	/**
	 *
	 */
	bulkPayoutId?: string;
};

/**
 * PlatformPayoutMethod
 *
 */
export type PlatformPayoutMethod = "DIRECT" | "AGENCY";

/**
 * PlatformPayoutAccount
 *
 */
export type PlatformPayoutAccount = {
	/**
	 *
	 */
	bank: Bank;
	/**
	 *
	 */
	number: string;
	/**
	 *
	 */
	holder: string;
};

/**
 * PlatformBulkPayoutStatus
 *
 */
export type PlatformBulkPayoutStatus =
	| "PREPARING"
	| "PREPARED"
	| "ONGOING"
	| "CANCELLED"
	| "STOPPED"
	| "COMPLETED";

/**
 * PlatformBulkPayoutFilterInputCriteria
 *
 */
export type PlatformBulkPayoutFilterInputCriteria = {
	/**
	 *
	 */
	timestampRange?: DateTimeRange;
	/**
	 *
	 */
	bulkPayoutId?: string;
};

/**
 * PlatformBulkPayoutStats
 *
 */
export type PlatformBulkPayoutStats = {
	/**
	 *
	 */
	amount: PlatformPayoutStatusStats;
	/**
	 *
	 */
	count: PlatformPayoutStatusStats;
};

/**
 * (결제, 본인인증 등에) 선택된 채널 정보
 *
 * (결제, 본인인증 등에) 선택된 채널 정보
 */
export type SelectedChannel = {
	/**
	 * 채널 타입
	 *
	 */
	type: SelectedChannelType;
	/**
	 * 채널 아이디
	 *
	 */
	id?: string;
	/**
	 * 채널 키
	 *
	 */
	key?: string;
	/**
	 * 채널 명
	 *
	 */
	name?: string;
	/**
	 * PG사
	 *
	 */
	pgProvider: PgProvider;
	/**
	 * PG사 고객사 식별 아이디
	 *
	 */
	pgMerchantId: string;
};

/**
 * 요청 시 고객 정보
 *
 * 요청 시 고객 정보
 */
export type IdentityVerificationRequestedCustomer = {
	/**
	 * 식별 아이디
	 *
	 */
	id?: string;
	/**
	 * 이름
	 *
	 */
	name?: string;
	/**
	 * 전화번호
	 *
	 * 특수 문자(-) 없이 숫자로만 이루어진 번호 형식입니다.
	 */
	phoneNumber?: string;
};

/**
 * 인증된 고객 정보
 *
 * 인증된 고객 정보
 */
export type IdentityVerificationVerifiedCustomer = {
	/**
	 * 식별 아이디
	 *
	 */
	id?: string;
	/**
	 * 이름
	 *
	 */
	name: string;
	/**
	 * 통신사
	 *
	 */
	operator?: IdentityVerificationOperator;
	/**
	 * 전화번호
	 *
	 * 특수 문자(-) 없이 숫자로만 이루어진 번호 형식입니다.
	 */
	phoneNumber?: string;
	/**
	 * 생년월일 (yyyy-MM-dd)
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthDate: string;
	/**
	 * 성별
	 *
	 */
	gender: Gender;
	/**
	 * 외국인 여부
	 *
	 */
	isForeigner?: boolean;
	/**
	 * CI (개인 고유 식별키)
	 *
	 */
	ci: string;
	/**
	 * DI (사이트별 개인 고유 식별키)
	 *
	 */
	di: string;
};

/**
 * 빌링키 발급 수단 정보
 *
 * 빌링키 발급 수단 정보
 */
export type BillingKeyPaymentMethod =
	| BillingKeyPaymentMethodCard
	| BillingKeyPaymentMethodEasyPay
	| BillingKeyPaymentMethodMobile
	| BillingKeyPaymentMethodPaypal
	| BillingKeyPaymentMethodTransfer;

/**
 * 고객 정보
 *
 * 고객 정보
 */
export type Customer = {
	/**
	 * 고객 아이디
	 *
	 * 고객사가 지정한 고객의 고유 식별자입니다.
	 */
	id?: string;
	/**
	 * 이름
	 *
	 */
	name?: string;
	/**
	 * 출생 연도
	 *
	 */
	birthYear?: string;
	/**
	 * 성별
	 *
	 */
	gender?: Gender;
	/**
	 * 이메일
	 *
	 */
	email?: string;
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 주소
	 *
	 */
	address?: Address;
	/**
	 * 우편번호
	 *
	 */
	zipcode?: string;
};

/**
 * 채널 그룹 정보
 *
 * 채널 그룹 정보
 */
export type ChannelGroupSummary = {
	/**
	 * 채널 그룹 아이디
	 *
	 */
	id: string;
	/**
	 * 채널 그룹 이름
	 *
	 */
	name: string;
	/**
	 * 테스트 채널 그룹 여부
	 *
	 */
	isForTest: boolean;
};

/**
 * 채널 별 빌링키 발급 응답
 *
 * 채널 별 빌링키 발급 응답
 */
export type PgBillingKeyIssueResponse =
	| FailedPgBillingKeyIssueResponse
	| IssuedPgBillingKeyIssueResponse;

/**
 * 빌링키 정렬 기준
 *
 * 빌링키 정렬 기준
 */
export type BillingKeySortBy =
	| "REQUESTED_AT"
	| "ISSUED_AT"
	| "DELETED_AT"
	| "STATUS_TIMESTAMP";

/**
 * 정렬 방식
 *
 * 정렬 방식
 */
export type SortOrder = "DESC" | "ASC";

/**
 * 빌링키 다건 조회 시, 시각 범위를 적용할 필드
 *
 * 빌링키 다건 조회 시, 시각 범위를 적용할 필드
 */
export type BillingKeyTimeRangeField =
	| "REQUESTED_AT"
	| "ISSUED_AT"
	| "DELETED_AT"
	| "STATUS_TIMESTAMP";

/**
 * 빌링키 상태
 *
 * 빌링키 상태
 */
export type BillingKeyStatus = "ISSUED" | "DELETED";

/**
 * 결제가 발생한 클라이언트 환경
 *
 * 결제가 발생한 클라이언트 환경
 */
export type PaymentClientType = "SDK_MOBILE" | "SDK_PC" | "API";

/**
 * 통합검색 입력 정보
 *
 * 통합검색 입력 정보
 */
export type BillingKeyTextSearch = {
	/**
	 *
	 */
	field: BillingKeyTextSearchField;
	/**
	 *
	 */
	value: string;
};

/**
 * PG사 결제 모듈
 *
 * PG사 결제 모듈
 */
export type PgProvider =
	| "HTML5_INICIS"
	| "PAYPAL"
	| "PAYPAL_V2"
	| "INICIS"
	| "DANAL"
	| "NICE"
	| "DANAL_TPAY"
	| "JTNET"
	| "UPLUS"
	| "NAVERPAY"
	| "KAKAO"
	| "SETTLE"
	| "KCP"
	| "MOBILIANS"
	| "KAKAOPAY"
	| "NAVERCO"
	| "SYRUP"
	| "KICC"
	| "EXIMBAY"
	| "SMILEPAY"
	| "PAYCO"
	| "KCP_BILLING"
	| "ALIPAY"
	| "PAYPLE"
	| "CHAI"
	| "BLUEWALNUT"
	| "SMARTRO"
	| "SMARTRO_V2"
	| "PAYMENTWALL"
	| "TOSSPAYMENTS"
	| "KCP_QUICK"
	| "DAOU"
	| "GALAXIA"
	| "TOSSPAY"
	| "KCP_DIRECT"
	| "SETTLE_ACC"
	| "SETTLE_FIRM"
	| "INICIS_UNIFIED"
	| "KSNET"
	| "PINPAY"
	| "NICE_V2"
	| "TOSS_BRANDPAY"
	| "WELCOME"
	| "TOSSPAY_V2"
	| "INICIS_V2"
	| "KPN"
	| "KCP_V2"
	| "HYPHEN";

/**
 * 빌링키 결제 수단
 *
 * 빌링키 결제 수단
 */
export type BillingKeyPaymentMethodType =
	| "CARD"
	| "MOBILE"
	| "EASY_PAY"
	| "TRANSFER";

/**
 * 포트원 버전
 *
 * 포트원 버전
 */
export type PortOneVersion = "V1" | "V2";

/**
 * 카드 수단 정보 입력 양식
 *
 * 카드 수단 정보 입력 양식
 */
export type InstantBillingKeyPaymentMethodInputCard = {
	/**
	 *
	 */
	credential: CardCredential;
};

/**
 * 고객 이름 입력 정보
 *
 * 고객 이름 입력 정보
 *
 * 두 개의 이름 형식 중 한 가지만 선택하여 입력해주세요.
 */
export type CustomerNameInput = {
	/**
	 * 한 줄 이름 형식
	 *
	 */
	full?: string;
	/**
	 * 분리형 이름 형식
	 *
	 */
	separated?: CustomerSeparatedName;
};

/**
 * 성별
 *
 * 성별
 */
export type Gender = "MALE" | "FEMALE" | "OTHER";

/**
 * 요청된 입력 정보가 유효하지 않은 경우
 *
 * 요청된 입력 정보가 유효하지 않은 경우
 *
 * 허가되지 않은 값, 올바르지 않은 형식의 요청 등이 모두 해당됩니다.
 */
export type ChannelSpecificFailureInvalidRequest = {
	/**
	 *
	 */
	type: "INVALID_REQUEST";
	/**
	 *
	 */
	channel: SelectedChannel;
	/**
	 *
	 */
	message?: string;
};

/**
 * PG사에서 오류를 전달한 경우
 *
 * PG사에서 오류를 전달한 경우
 */
export type ChannelSpecificFailurePgProvider = {
	/**
	 *
	 */
	type: "PG_PROVIDER";
	/**
	 *
	 */
	channel: SelectedChannel;
	/**
	 *
	 */
	message?: string;
	/**
	 *
	 */
	pgCode: string;
	/**
	 *
	 */
	pgMessage: string;
};

/**
 * 결제수단 정보
 *
 * 결제수단 정보
 */
export type PaymentMethod =
	| PaymentMethodCard
	| PaymentMethodEasyPay
	| PaymentMethodGiftCertificate
	| PaymentMethodMobile
	| PaymentMethodTransfer
	| PaymentMethodVirtualAccount;

/**
 * 결제 금액 세부 정보
 *
 * 결제 금액 세부 정보
 */
export type PaymentAmount = {
	/**
	 * 총 결제금액
	 *
	 */
	total: number;
	/**
	 * 면세액
	 *
	 */
	taxFree: number;
	/**
	 * 부가세액
	 *
	 */
	vat?: number;
	/**
	 * 공급가액
	 *
	 */
	supply?: number;
	/**
	 * 할인금액
	 *
	 * 카드사 프로모션, 포트원 프로모션, 적립형 포인트 결제, 쿠폰 할인 등을 포함합니다.
	 */
	discount: number;
	/**
	 * 실제 결제금액
	 *
	 */
	paid: number;
	/**
	 * 취소금액
	 *
	 */
	cancelled: number;
	/**
	 * 취소금액 중 면세액
	 *
	 */
	cancelledTaxFree: number;
};

/**
 * 에스크로 정보
 *
 * 에스크로 정보
 *
 * V1 결제 건의 경우 타입이 REGISTERED 로 고정됩니다.
 */
export type PaymentEscrow =
	| BeforeRegisteredPaymentEscrow
	| CancelledPaymentEscrow
	| ConfirmedPaymentEscrow
	| DeliveredPaymentEscrow
	| RegisteredPaymentEscrow
	| RejectedPaymentEscrow
	| RejectConfirmedPaymentEscrow;

/**
 * 결제 건 내 현금영수증 정보
 *
 * 결제 건 내 현금영수증 정보
 */
export type PaymentCashReceipt =
	| CancelledPaymentCashReceipt
	| IssuedPaymentCashReceipt;

/**
 * 조회 시점 기준
 *
 * 조회 시점 기준
 *
 * 어떤 시점을 기준으로 조회를 할 것인지 선택합니다. CREATED\_AT: 결제 건 생성 시점을 기준으로 조회합니다. STATUS\_CHANGED\_AT: 상태 승인 시점을 기준으로 조회합니다. 결제 건의 최종 상태에 따라 검색 기준이 다르게 적용됩니다. ready -> 결제 요청 시점 기준 paid -> 결제 완료 시점 기준 cancelled -> 결제 취소 시점 기준 failed -> 결제 실패 시점 기준 값을 입력하지 않으면 STATUS\_CHANGED\_AT 으로 자동 적용됩니다.
 */
export type PaymentTimestampType = "CREATED_AT" | "STATUS_CHANGED_AT";

/**
 * 결제 건 상태
 *
 * 결제 건 상태
 */
export type PaymentStatus =
	| "READY"
	| "PENDING"
	| "VIRTUAL_ACCOUNT_ISSUED"
	| "PAID"
	| "FAILED"
	| "PARTIAL_CANCELLED"
	| "CANCELLED";

/**
 * 결제 건 정렬 기준
 *
 * 결제 건 정렬 기준
 */
export type PaymentSortBy = "REQUESTED_AT" | "STATUS_CHANGED_AT";

/**
 * 웹훅 전송 상태
 *
 * 웹훅 전송 상태
 */
export type PaymentWebhookStatus =
	| "SUCCEEDED"
	| "FAILED_NOT_OK_RESPONSE"
	| "FAILED_UNEXPECTED_ERROR";

/**
 * 에스크로 상태
 *
 * 에스크로 상태
 */
export type PaymentFilterInputEscrowStatus =
	| "REGISTERED"
	| "DELIVERED"
	| "CONFIRMED"
	| "REJECTED"
	| "CANCELLED"
	| "REJECT_CONFIRMED";

/**
 * 카드 브랜드
 *
 * 카드 브랜드
 */
export type CardBrand =
	| "LOCAL"
	| "MASTER"
	| "UNIONPAY"
	| "VISA"
	| "JCB"
	| "AMEX"
	| "DINERS";

/**
 * 카드 유형
 *
 * 카드 유형
 */
export type CardType = "CREDIT" | "DEBIT" | "GIFT";

/**
 * 카드 소유주 유형
 *
 * 카드 소유주 유형
 */
export type CardOwnerType = "PERSONAL" | "CORPORATE";

/**
 * 상품권 종류
 *
 * 상품권 종류
 */
export type PaymentMethodGiftCertificateType =
	| "BOOKNLIFE"
	| "SMART_MUNSANG"
	| "CULTURELAND"
	| "HAPPYMONEY"
	| "CULTUREGIFT";

/**
 * 입력 시 발급 유형
 *
 * 입력 시 발급 유형
 */
export type CashReceiptInputType = "PERSONAL" | "CORPORATE" | "NO_RECEIPT";

/**
 * 결제건 내 현금영수증 상태
 *
 * 결제건 내 현금영수증 상태
 */
export type PaymentCashReceiptStatus = "ISSUED" | "CANCELLED";

/**
 * 시간 범위
 *
 * 시간 범위
 */
export type DateTimeRange = {
	/**
	 *
	 */
	from: string;
	/**
	 *
	 */
	until: string;
};

/**
 * 통합검색 입력 정보
 *
 * 통합검색 입력 정보
 */
export type PaymentTextSearch = {
	/**
	 *
	 */
	field: PaymentTextSearchField;
	/**
	 *
	 */
	value: string;
};

/**
 * 결제 예약 건 정렬 기준
 *
 * 결제 예약 건 정렬 기준
 */
export type PaymentScheduleSortBy =
	| "CREATED_AT"
	| "TIME_TO_PAY"
	| "COMPLETED_AT";

/**
 * 결제 예약 건 상태
 *
 * 결제 예약 건 상태
 */
export type PaymentScheduleStatus =
	| "SCHEDULED"
	| "STARTED"
	| "SUCCEEDED"
	| "FAILED"
	| "REVOKED"
	| "PENDING";

/**
 * 취소 실패 상태
 *
 * 취소 실패 상태
 */
export type FailedPaymentCancellation = {
	/**
	 *
	 */
	status: "FAILED";
	/**
	 * 취소 내역 아이디
	 *
	 */
	id: string;
	/**
	 * PG사 결제 취소 내역 아이디
	 *
	 */
	pgCancellationId?: string;
	/**
	 * 취소 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 취소 금액 중 면세 금액
	 *
	 */
	taxFreeAmount: number;
	/**
	 * 취소 금액 중 부가세액
	 *
	 */
	vatAmount: number;
	/**
	 * 적립형 포인트의 환불 금액
	 *
	 */
	easyPayDiscountAmount?: number;
	/**
	 * 취소 사유
	 *
	 */
	reason: string;
	/**
	 * 취소 시점
	 *
	 */
	cancelledAt?: string;
	/**
	 * 취소 요청 시점
	 *
	 */
	requestedAt: string;
};

/**
 * 취소 요청 상태
 *
 * 취소 요청 상태
 */
export type RequestedPaymentCancellation = {
	/**
	 *
	 */
	status: "REQUESTED";
	/**
	 * 취소 내역 아이디
	 *
	 */
	id: string;
	/**
	 * PG사 결제 취소 내역 아이디
	 *
	 */
	pgCancellationId?: string;
	/**
	 * 취소 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 취소 금액 중 면세 금액
	 *
	 */
	taxFreeAmount: number;
	/**
	 * 취소 금액 중 부가세액
	 *
	 */
	vatAmount: number;
	/**
	 * 적립형 포인트의 환불 금액
	 *
	 */
	easyPayDiscountAmount?: number;
	/**
	 * 취소 사유
	 *
	 */
	reason: string;
	/**
	 * 취소 시점
	 *
	 */
	cancelledAt?: string;
	/**
	 * 취소 요청 시점
	 *
	 */
	requestedAt: string;
};

/**
 * 취소 완료 상태
 *
 * 취소 완료 상태
 */
export type SucceededPaymentCancellation = {
	/**
	 *
	 */
	status: "SUCCEEDED";
	/**
	 * 취소 내역 아이디
	 *
	 */
	id: string;
	/**
	 * PG사 결제 취소 내역 아이디
	 *
	 */
	pgCancellationId?: string;
	/**
	 * 취소 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 취소 금액 중 면세 금액
	 *
	 */
	taxFreeAmount: number;
	/**
	 * 취소 금액 중 부가세액
	 *
	 */
	vatAmount: number;
	/**
	 * 적립형 포인트의 환불 금액
	 *
	 */
	easyPayDiscountAmount?: number;
	/**
	 * 취소 사유
	 *
	 */
	reason: string;
	/**
	 * 취소 시점
	 *
	 */
	cancelledAt?: string;
	/**
	 * 취소 요청 시점
	 *
	 */
	requestedAt: string;
	/**
	 * 취소 영수증 URL
	 *
	 */
	receiptUrl?: string;
};

/**
 * 카드 수단 정보 입력 정보
 *
 * 카드 수단 정보 입력 정보
 */
export type InstantPaymentMethodInputCard = {
	/**
	 * 카드 인증 관련 정보
	 *
	 */
	credential: CardCredential;
	/**
	 * 카드 할부 개월 수
	 *
	 */
	installmentMonth?: number;
	/**
	 * 무이자 할부 적용 여부
	 *
	 */
	useFreeInstallmentPlan?: boolean;
	/**
	 * 무이자 할부 이자를 고객사가 부담할지 여부
	 *
	 */
	useFreeInterestFromMerchant?: boolean;
	/**
	 * 카드 포인트 사용 여부
	 *
	 */
	useCardPoint?: boolean;
};

/**
 * 가상계좌 수단 정보 입력 정보
 *
 * 가상계좌 수단 정보 입력 정보
 */
export type InstantPaymentMethodInputVirtualAccount = {
	/**
	 * 은행
	 *
	 */
	bank: Bank;
	/**
	 * 입금 만료 기한
	 *
	 */
	expiry: InstantPaymentMethodInputVirtualAccountExpiry;
	/**
	 * 가상계좌 유형
	 *
	 */
	option: InstantPaymentMethodInputVirtualAccountOption;
	/**
	 * 현금영수증 정보
	 *
	 */
	cashReceipt: InstantPaymentMethodInputVirtualAccountCashReceiptInfo;
	/**
	 * 예금주명
	 *
	 */
	remitteeName?: string;
};

/**
 * 물류 회사
 *
 * 물류 회사
 */
export type PaymentLogisticsCompany =
	| "LOTTE"
	| "LOGEN"
	| "DONGWON"
	| "POST"
	| "CJ"
	| "HANJIN"
	| "DAESIN"
	| "ILYANG"
	| "KYUNGDONG"
	| "CHUNIL"
	| "POST_REGISTERED"
	| "GS"
	| "WOORI"
	| "HAPDONG"
	| "FEDEX"
	| "UPS"
	| "GSM_NTON"
	| "SUNGWON"
	| "LX_PANTOS"
	| "ACI"
	| "CJ_INTL"
	| "USPS"
	| "EMS"
	| "DHL"
	| "KGL"
	| "GOODSTOLUCK"
	| "KUNYOUNG"
	| "SLX"
	| "SF"
	| "ETC";

/**
 * 웹훅 발송 시 결제 건 상태
 *
 * 웹훅 발송 시 결제 건 상태
 */
export type PaymentWebhookPaymentStatus =
	| "READY"
	| "VIRTUAL_ACCOUNT_ISSUED"
	| "PAID"
	| "FAILED"
	| "PARTIAL_CANCELLED"
	| "CANCELLED"
	| "PAY_PENDING";

/**
 * 웹훅 실행 트리거
 *
 * 웹훅 실행 트리거
 *
 * 수동 웹훅 재발송, 가상계좌 입금, 비동기 취소 승인 시 발생한 웹훅일 때 필드의 값이 존재합니다.
 */
export type PaymentWebhookTrigger =
	| "MANUAL"
	| "VIRTUAL_ACCOUNT_DEPOSIT"
	| "ASYNC_CANCEL_APPROVED"
	| "ASYNC_CANCEL_FAILED"
	| "ASYNC_PAY_APPROVED"
	| "ASYNC_PAY_FAILED";

/**
 * 웹훅 요청 정보
 *
 * 웹훅 요청 정보
 */
export type PaymentWebhookRequest = {
	/**
	 * 요청 헤더
	 *
	 */
	header?: string;
	/**
	 * 요청 본문
	 *
	 */
	body: string;
	/**
	 * 요청 시점
	 *
	 */
	requestedAt?: string;
};

/**
 * 웹훅 응답 정보
 *
 * 웹훅 응답 정보
 */
export type PaymentWebhookResponse = {
	/**
	 * 응답 HTTP 코드
	 *
	 */
	code: string;
	/**
	 * 응답 헤더
	 *
	 */
	header: string;
	/**
	 * 응답 본문
	 *
	 */
	body: string;
	/**
	 * 응답 시점
	 *
	 */
	respondedAt: string;
};

/**
 * 분
 *
 * 분
 */
export type AnalyticsTimeGranularityMinute = {};

/**
 * 시간
 *
 * 시간
 */
export type AnalyticsTimeGranularityHour = {};

/**
 * 일
 *
 * 일
 */
export type AnalyticsTimeGranularityDay = {
	/**
	 *
	 */
	timezoneHourOffset: number;
};

/**
 * 주
 *
 * 주
 */
export type AnalyticsTimeGranularityWeek = {
	/**
	 *
	 */
	timezoneHourOffset: number;
};

/**
 * 월
 *
 * 월
 */
export type AnalyticsTimeGranularityMonth = {
	/**
	 *
	 */
	timezoneHourOffset: number;
};

/**
 * 과세 유형
 *
 * 과세 유형
 */
export type B2bTaxType = "TAXABLE" | "ZERO_RATED" | "FREE";

/**
 * 영수/청구
 *
 * 영수/청구
 */
export type B2bTaxInvoicePurposeType = "RECEIPT" | "INVOICE" | "NONE";

/**
 * B2bTaxInvoiceCompany
 *
 */
export type B2bTaxInvoiceCompany = {
	/**
	 * 사업자등록번호
	 *
	 * *   를 제외한 10자리
	 */
	brn: string;
	/**
	 * 종사업자 식별 번호
	 *
	 * 4자리 고정
	 */
	taxRegistrationId?: string;
	/**
	 * 상호명
	 *
	 * 최대 200자
	 */
	name?: string;
	/**
	 * 대표자 성명
	 *
	 * 최대 100자
	 */
	ceoName?: string;
	/**
	 * 주소
	 *
	 * 최대 300자
	 */
	address?: string;
	/**
	 * 업태
	 *
	 * 최대 100자
	 */
	businessType?: string;
	/**
	 * 종목
	 *
	 * 최대 100자
	 */
	businessClass?: string;
	/**
	 * 담당자
	 *
	 */
	contact?: B2bTaxInvoiceContact;
};

/**
 * 세금 계산서 수정
 *
 * 세금 계산서 수정
 */
export type B2bModification = {
	/**
	 * 수정 사유
	 *
	 */
	type: B2bTaxInvoiceModificationType;
	/**
	 * 수정 대상 원본 세금계산서 국세청 승인 번호
	 *
	 */
	originalNtsApproveNumber: string;
};

/**
 * 품목
 *
 * 품목
 */
export type B2bTaxInvoiceItem = {
	/**
	 * 결제일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	purchaseDate?: string;
	/**
	 * 품명
	 *
	 * 최대 100자
	 */
	name?: string;
	/**
	 * 규격
	 *
	 * 최대 100자
	 */
	spec?: string;
	/**
	 * 수량
	 *
	 * 입력 범위 : -99999999.99 ~ 999999999.99, 10^-quantityScale 단위로 치환됨
	 */
	quantity?: number;
	/**
	 * 수량 단위
	 *
	 * 입력 범위 : 0 ~ 2, 기본값: 0
	 */
	quantityScale?: number;
	/**
	 * 단가
	 *
	 * 입력 범위 : -99999999999999.99 ~ 999999999999999.99
	 */
	unitCostAmount?: number;
	/**
	 * 단가 단위
	 *
	 * 입력 범위 : 0 ~ 2, 기본값: 0
	 */
	unitCostAmountScale?: number;
	/**
	 * 공급가액
	 *
	 */
	supplyCostAmount?: number;
	/**
	 * 세액
	 *
	 */
	taxAmount?: number;
	/**
	 * 비고
	 *
	 */
	remark?: string;
};

/**
 * 추가 담당자
 *
 * 추가 담당자
 */
export type B2bTaxInvoiceAdditionalContact = {
	/**
	 * 성명
	 *
	 * 최대 100자
	 */
	name?: string;
	/**
	 * 이메일
	 *
	 */
	email: string;
};

/**
 * B2bTaxInvoiceStatus
 *
 */
export type B2bTaxInvoiceStatus =
	| "REGISTERED"
	| "REQUESTED"
	| "REQUEST_CANCELLED_BY_RECIPIENT"
	| "ISSUED"
	| "BEFORE_SENDING"
	| "WAITING_SENDING"
	| "SENDING"
	| "SENDING_COMPLETED"
	| "SENDING_FAILED"
	| "REQUEST_REFUSED"
	| "ISSUANCE_CANCELLED_BY_SUPPLIER";

/**
 * PromotionDiscount
 *
 */
export type PromotionDiscount =
	| PromotionAmountDiscount
	| PromotionPercentDiscount;

/**
 * 프로모션 적용 가능한 카드사
 *
 * 프로모션 적용 가능한 카드사
 */
export type PromotionCardCompany =
	| "WOORI_CARD"
	| "BC_CARD"
	| "SAMSUNG_CARD"
	| "SHINHAN_CARD"
	| "HYUNDAI_CARD"
	| "LOTTE_CARD"
	| "NH_CARD"
	| "HANA_CARD"
	| "KOOKMIN_CARD";

/**
 * PromotionStatus
 *
 */
export type PromotionStatus =
	| "SCHEDULED"
	| "IN_PROGRESS"
	| "PAUSED"
	| "BUDGET_EXHAUSTED"
	| "TERMINATED"
	| "COMPLETED";

/**
 * PlatformSettlementFormulaInvalidFunction
 *
 */
export type PlatformSettlementFormulaInvalidFunction = {
	/**
	 *
	 */
	type: "INVALID_FUNCTION";
	/**
	 *
	 */
	name: string;
	/**
	 *
	 */
	position: PlatformSettlementFormulaPosition;
};

/**
 * PlatformSettlementFormulaInvalidOperator
 *
 */
export type PlatformSettlementFormulaInvalidOperator = {
	/**
	 *
	 */
	type: "INVALID_OPERATOR";
	/**
	 *
	 */
	operator: string;
	/**
	 *
	 */
	position: PlatformSettlementFormulaPosition;
};

/**
 * PlatformSettlementFormulaInvalidSyntax
 *
 */
export type PlatformSettlementFormulaInvalidSyntax = {
	/**
	 *
	 */
	type: "INVALID_SYNTAX";
	/**
	 *
	 */
	syntax: string;
	/**
	 *
	 */
	position: PlatformSettlementFormulaPosition;
};

/**
 * PlatformSettlementFormulaInvalidVariable
 *
 */
export type PlatformSettlementFormulaInvalidVariable = {
	/**
	 *
	 */
	type: "INVALID_VARIABLE";
	/**
	 *
	 */
	name: string;
	/**
	 *
	 */
	position: PlatformSettlementFormulaPosition;
};

/**
 * PlatformSettlementFormulaUnexpectedFunctionArguments
 *
 */
export type PlatformSettlementFormulaUnexpectedFunctionArguments = {
	/**
	 *
	 */
	type: "UNEXPECTED_FUNCTION_ARGUMENTS";
	/**
	 *
	 */
	functionName: string;
	/**
	 *
	 */
	expectedCount: number;
	/**
	 *
	 */
	currentCount: number;
	/**
	 *
	 */
	position: PlatformSettlementFormulaPosition;
};

/**
 * PlatformSettlementFormulaUnknownError
 *
 */
export type PlatformSettlementFormulaUnknownError = {
	/**
	 *
	 */
	type: "UNKNOWN_ERROR";
};

/**
 * PlatformSettlementFormulaUnsupportedVariable
 *
 */
export type PlatformSettlementFormulaUnsupportedVariable = {
	/**
	 *
	 */
	type: "UNSUPPORTED_VARIABLE";
	/**
	 *
	 */
	name: string;
	/**
	 *
	 */
	position: PlatformSettlementFormulaPosition;
};

/**
 * 플랫폼 파트너 과세 유형
 *
 * 플랫폼 파트너 과세 유형
 */
export type PlatformPartnerTaxationType =
	| "NORMAL"
	| "SIMPLE_TAX_INVOICE_ISSUER"
	| "SIMPLE"
	| "TAX_FREE";

/**
 * 플랫폼 파트너 사업자 상태
 *
 * 플랫폼 파트너 사업자 상태
 */
export type PlatformPartnerBusinessStatus =
	| "NOT_VERIFIED"
	| "VERIFY_FAILED"
	| "NOT_FOUND"
	| "VERIFYING"
	| "IN_BUSINESS"
	| "CLOSED"
	| "SUSPENDED";

/**
 * SchedulePlatformPartnersBodyUpdateTypeBusiness
 *
 */
export type SchedulePlatformPartnersBodyUpdateTypeBusiness = {
	/**
	 * 상호명
	 *
	 */
	companyName?: string;
	/**
	 * 사업자 유형
	 *
	 */
	taxationType?: PlatformPartnerTaxationType;
	/**
	 * 사업자등록번호
	 *
	 */
	businessRegistrationNumber?: string;
	/**
	 * 대표자 이름
	 *
	 */
	representativeName?: string;
	/**
	 * 사업장 주소
	 *
	 */
	companyAddress?: string;
	/**
	 * 업태
	 *
	 */
	businessType?: string;
	/**
	 * 업종
	 *
	 */
	businessClass?: string;
};

/**
 * SchedulePlatformPartnersBodyUpdateTypeWhtPayer
 *
 */
export type SchedulePlatformPartnersBodyUpdateTypeWhtPayer = {
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * SchedulePlatformPartnersBodyUpdateTypeNonWhtPayer
 *
 */
export type SchedulePlatformPartnersBodyUpdateTypeNonWhtPayer = {
	/**
	 * 생년월일
	 *
	 * 날짜를 나타내는 문자열로, `yyyy-MM-dd` 형식을 따릅니다.
	 */
	birthdate?: string;
};

/**
 * PlatformSettlementCycleMethodDailyInput
 *
 */
export type PlatformSettlementCycleMethodDailyInput = {};

/**
 * PlatformSettlementCycleMethodWeeklyInput
 *
 */
export type PlatformSettlementCycleMethodWeeklyInput = {
	/**
	 * 요일
	 *
	 */
	daysOfWeek: DayOfWeek[];
};

/**
 * PlatformSettlementCycleMethodMonthlyInput
 *
 */
export type PlatformSettlementCycleMethodMonthlyInput = {
	/**
	 *
	 */
	daysOfMonth: number[];
};

/**
 * PlatformSettlementCycleMethodManualDatesInput
 *
 */
export type PlatformSettlementCycleMethodManualDatesInput = {
	/**
	 * 월 및 일자 정보
	 *
	 */
	dates: MonthDay[];
};

/**
 * 매일 정산
 *
 * 매일 정산
 */
export type PlatformSettlementCycleMethodDaily = {
	/**
	 *
	 */
	type: "DAILY";
};

/**
 * 정해진 날짜(월, 일)에 정산
 *
 * 정해진 날짜(월, 일)에 정산
 */
export type PlatformSettlementCycleMethodManualDates = {
	/**
	 *
	 */
	type: "MANUAL_DATES";
	/**
	 * 월 및 일자 정보
	 *
	 */
	dates: MonthDay[];
};

/**
 * 매월 정해진 날(일)에 정산
 *
 * 매월 정해진 날(일)에 정산
 */
export type PlatformSettlementCycleMethodMonthly = {
	/**
	 *
	 */
	type: "MONTHLY";
	/**
	 *
	 */
	daysOfMonth: number[];
};

/**
 * 매주 정해진 요일에 정산
 *
 * 매주 정해진 요일에 정산
 */
export type PlatformSettlementCycleMethodWeekly = {
	/**
	 *
	 */
	type: "WEEKLY";
	/**
	 * 요일
	 *
	 */
	daysOfWeek: DayOfWeek[];
};

/**
 * 외부 결제 정보
 *
 * 외부 결제 정보
 */
export type PlatformExternalPayment = {
	/**
	 *
	 */
	type: "EXTERNAL";
	/**
	 * 결제 아이디
	 *
	 */
	id: string;
	/**
	 * 주문 명
	 *
	 */
	orderName?: string;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 결제 수단
	 *
	 */
	method?: PlatformPaymentMethod;
	/**
	 * 결제 일시
	 *
	 */
	paidAt?: string;
};

/**
 * 포트원 결제 정보
 *
 * 포트원 결제 정보
 */
export type PlatformPortOnePayment = {
	/**
	 *
	 */
	type: "PORT_ONE";
	/**
	 * 결제 아이디
	 *
	 */
	id: string;
	/**
	 * 상점 아이디
	 *
	 */
	storeId: string;
	/**
	 * 채널 키
	 *
	 */
	channelKey: string;
	/**
	 * 주문 명
	 *
	 */
	orderName: string;
	/**
	 * 결제 수단
	 *
	 */
	method?: PlatformPaymentMethod;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 결제 일시
	 *
	 */
	paidAt: string;
};

/**
 * 상품
 *
 * 상품
 */
export type PlatformOrderTransferProduct = {
	/**
	 * 상품 아이디
	 *
	 */
	id: string;
	/**
	 * 상품 이름
	 *
	 */
	name: string;
	/**
	 * 상품 금액
	 *
	 */
	amount: number;
	/**
	 * 상품 면세 금액
	 *
	 */
	taxFreeAmount: number;
	/**
	 * 태그
	 *
	 */
	tag?: string;
};

/**
 * PlatformTransferSummaryPartner
 *
 */
export type PlatformTransferSummaryPartner = {
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	graphqlId: string;
	/**
	 *
	 */
	name: string;
	/**
	 *
	 */
	type: PlatformTransferSummaryPartnerType;
	/**
	 *
	 */
	taxationType?: PlatformPartnerTaxationType;
};

/**
 * PlatformTransferSummaryPayment
 *
 */
export type PlatformTransferSummaryPayment =
	| PlatformTransferSummaryExternalPayment
	| PlatformTransferSummaryPortOnePayment;

/**
 * 상품
 *
 * 상품
 */
export type CreatePlatformOrderTransferBodyProduct = {
	/**
	 * 상품 아이디
	 *
	 */
	id: string;
	/**
	 * 상품 이름
	 *
	 */
	name: string;
	/**
	 * 상품 금액
	 *
	 */
	amount: number;
	/**
	 * 상품 면세 금액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 태그
	 *
	 */
	tag?: string;
};

/**
 * PlatformPaymentMethodCardInput
 *
 */
export type PlatformPaymentMethodCardInput = {};

/**
 * PlatformPaymentMethodTransferInput
 *
 */
export type PlatformPaymentMethodTransferInput = {};

/**
 * PlatformPaymentMethodVirtualAccountInput
 *
 */
export type PlatformPaymentMethodVirtualAccountInput = {};

/**
 * PlatformPaymentMethodGiftCertificateInput
 *
 */
export type PlatformPaymentMethodGiftCertificateInput = {};

/**
 * PlatformPaymentMethodMobileInput
 *
 */
export type PlatformPaymentMethodMobileInput = {};

/**
 * 간편 결제 입력 정보
 *
 * 간편 결제 입력 정보
 */
export type PlatformPaymentMethodEasyPayInput = {
	/**
	 * 간편 결제사
	 *
	 */
	provider?: EasyPayProvider;
	/**
	 * 간편 결제 수단
	 *
	 */
	methodType?: EasyPayMethodType;
};

/**
 * 채널 타입
 *
 * 채널 타입
 */
export type SelectedChannelType = "LIVE" | "TEST";

/**
 * 카드 정보
 *
 * 카드 정보
 */
export type BillingKeyPaymentMethodCard = {
	/**
	 *
	 */
	type: "BillingKeyPaymentMethodCard";
	/**
	 * 카드 상세 정보
	 *
	 */
	card?: Card;
};

/**
 * 간편 결제 정보
 *
 * 간편 결제 정보
 */
export type BillingKeyPaymentMethodEasyPay = {
	/**
	 *
	 */
	type: "BillingKeyPaymentMethodEasyPay";
	/**
	 * 간편 결제 PG사
	 *
	 */
	provider?: EasyPayProvider;
	/**
	 * 간편 결제 수단
	 *
	 */
	method?: BillingKeyPaymentMethodEasyPayMethod;
};

/**
 * 모바일 정보
 *
 * 모바일 정보
 */
export type BillingKeyPaymentMethodMobile = {
	/**
	 *
	 */
	type: "BillingKeyPaymentMethodMobile";
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
};

/**
 * 페이팔 정보
 *
 * 페이팔 정보
 */
export type BillingKeyPaymentMethodPaypal = {
	/**
	 *
	 */
	type: "BillingKeyPaymentMethodPaypal";
};

/**
 * 계좌이체 정보
 *
 * 계좌이체 정보
 */
export type BillingKeyPaymentMethodTransfer = {
	/**
	 *
	 */
	type: "BillingKeyPaymentMethodTransfer";
	/**
	 * 표준 은행 코드
	 *
	 */
	bank?: Bank;
	/**
	 * 계좌번호
	 *
	 */
	accountNumber?: string;
};

/**
 * 분리 형식 주소
 *
 * 분리 형식 주소
 *
 * oneLine(한 줄 형식 주소) 필드는 항상 존재합니다.
 */
export type Address = OneLineAddress | SeparatedAddress;

/**
 * 빌링키 발급 실패 채널 응답
 *
 * 빌링키 발급 실패 채널 응답
 */
export type FailedPgBillingKeyIssueResponse = {
	/**
	 *
	 */
	type: "FAILED";
	/**
	 * 채널
	 *
	 * 빌링키 발급을 시도한 채널입니다.
	 */
	channel: SelectedChannel;
	/**
	 * 발급 실패 상세 정보
	 *
	 */
	failure: BillingKeyFailure;
};

/**
 * 빌링키 발급 성공 채널 응답
 *
 * 빌링키 발급 성공 채널 응답
 */
export type IssuedPgBillingKeyIssueResponse = {
	/**
	 *
	 */
	type: "ISSUED";
	/**
	 * 채널
	 *
	 * 빌링키 발급을 시도한 채널입니다.
	 */
	channel: SelectedChannel;
	/**
	 * PG사 거래 아이디
	 *
	 */
	pgTxId?: string;
	/**
	 * 빌링키 결제수단 상세 정보
	 *
	 * 채널에 대응되는 PG사에서 응답한 빌링키 발급 수단 정보입니다.
	 */
	method?: BillingKeyPaymentMethod;
};

/**
 * 통합검색 항목
 *
 * 통합검색 항목
 */
export type BillingKeyTextSearchField =
	| "CARD_BIN"
	| "CARD_NUMBER"
	| "PG_MERCHANT_ID"
	| "CUSTOMER_NAME"
	| "CUSTOMER_EMAIL"
	| "CUSTOMER_PHONE_NUMBER"
	| "CUSTOMER_ADDRESS"
	| "CUSTOMER_ZIPCODE"
	| "USER_AGENT"
	| "BILLING_KEY"
	| "CHANNEL_GROUP_NAME";

/**
 * 카드 인증 관련 정보
 *
 * 카드 인증 관련 정보
 */
export type CardCredential = {
	/**
	 * 카드 번호 (숫자만)
	 *
	 */
	number: string;
	/**
	 * 유효 기간 만료 연도 (2자리)
	 *
	 */
	expiryYear: string;
	/**
	 * 유효 기간 만료 월 (2자리)
	 *
	 */
	expiryMonth: string;
	/**
	 * 생년월일 (yyMMdd) 또는 사업자 등록 번호 (10자리, 숫자만)
	 *
	 */
	birthOrBusinessRegistrationNumber?: string;
	/**
	 * 비밀번호 앞 2자리
	 *
	 */
	passwordTwoDigits?: string;
};

/**
 * 고객 분리형 이름
 *
 * 고객 분리형 이름
 */
export type CustomerSeparatedName = {
	/**
	 * 이름
	 *
	 */
	first: string;
	/**
	 * 성
	 *
	 */
	last: string;
};

/**
 * 결제수단 카드 정보
 *
 * 결제수단 카드 정보
 */
export type PaymentMethodCard = {
	/**
	 *
	 */
	type: "PaymentMethodCard";
	/**
	 * 카드 상세 정보
	 *
	 */
	card?: Card;
	/**
	 * 승인 번호
	 *
	 */
	approvalNumber?: string;
	/**
	 * 할부 정보
	 *
	 */
	installment?: PaymentInstallment;
	/**
	 * 카드 포인트 사용여부
	 *
	 */
	pointUsed?: boolean;
};

/**
 * 간편 결제 상세 정보
 *
 * 간편 결제 상세 정보
 */
export type PaymentMethodEasyPay = {
	/**
	 *
	 */
	type: "PaymentMethodEasyPay";
	/**
	 * 간편 결제 PG사
	 *
	 */
	provider?: EasyPayProvider;
	/**
	 * 간편 결제 수단
	 *
	 */
	easyPayMethod?: PaymentMethodEasyPayMethod;
};

/**
 * 상품권 상세 정보
 *
 * 상품권 상세 정보
 */
export type PaymentMethodGiftCertificate = {
	/**
	 *
	 */
	type: "PaymentMethodGiftCertificate";
	/**
	 * 상품권 종류
	 *
	 */
	giftCertificateType?: PaymentMethodGiftCertificateType;
	/**
	 * 상품권 승인 번호
	 *
	 */
	approvalNumber: string;
};

/**
 * 모바일 상세 정보
 *
 * 모바일 상세 정보
 */
export type PaymentMethodMobile = {
	/**
	 *
	 */
	type: "PaymentMethodMobile";
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
};

/**
 * 계좌 이체 상세 정보
 *
 * 계좌 이체 상세 정보
 */
export type PaymentMethodTransfer = {
	/**
	 *
	 */
	type: "PaymentMethodTransfer";
	/**
	 * 표준 은행 코드
	 *
	 */
	bank?: Bank;
};

/**
 * 가상계좌 상세 정보
 *
 * 가상계좌 상세 정보
 */
export type PaymentMethodVirtualAccount = {
	/**
	 *
	 */
	type: "PaymentMethodVirtualAccount";
	/**
	 * 표준 은행 코드
	 *
	 */
	bank?: Bank;
	/**
	 * 계좌번호
	 *
	 */
	accountNumber: string;
	/**
	 * 계좌 유형
	 *
	 */
	accountType?: PaymentMethodVirtualAccountType;
	/**
	 * 계좌주
	 *
	 */
	remitteeName?: string;
	/**
	 * 송금인(입금자)
	 *
	 */
	remitterName?: string;
	/**
	 * 입금만료시점
	 *
	 */
	expiredAt?: string;
	/**
	 * 계좌발급시점
	 *
	 */
	issuedAt?: string;
	/**
	 * 가상계좌 결제가 환불 단계일 때의 환불 상태
	 *
	 */
	refundStatus?: PaymentMethodVirtualAccountRefundStatus;
};

/**
 * 배송 정보 등록 전
 *
 * 배송 정보 등록 전
 */
export type BeforeRegisteredPaymentEscrow = {
	/**
	 *
	 */
	status: "BEFORE_REGISTERED";
};

/**
 * 거래 취소
 *
 * 거래 취소
 */
export type CancelledPaymentEscrow = {
	/**
	 *
	 */
	status: "CANCELLED";
	/**
	 * 택배사
	 *
	 */
	company: string;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 *
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 *
	 */
	appliedAt?: string;
};

/**
 * 구매 확정
 *
 * 구매 확정
 */
export type ConfirmedPaymentEscrow = {
	/**
	 *
	 */
	status: "CONFIRMED";
	/**
	 * 택배사
	 *
	 */
	company: string;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 *
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 *
	 */
	appliedAt?: string;
	/**
	 * 자동 구매 확정 처리 여부
	 *
	 */
	isAutomaticallyConfirmed: boolean;
};

/**
 * 배송 완료
 *
 * 배송 완료
 */
export type DeliveredPaymentEscrow = {
	/**
	 *
	 */
	status: "DELIVERED";
	/**
	 * 택배사
	 *
	 */
	company: string;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 *
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 *
	 */
	appliedAt?: string;
};

/**
 * 배송 정보 등록 완료
 *
 * 배송 정보 등록 완료
 */
export type RegisteredPaymentEscrow = {
	/**
	 *
	 */
	status: "REGISTERED";
	/**
	 * 택배사
	 *
	 */
	company: string;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 *
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 *
	 */
	appliedAt?: string;
};

/**
 * 구매 거절
 *
 * 구매 거절
 */
export type RejectedPaymentEscrow = {
	/**
	 *
	 */
	status: "REJECTED";
	/**
	 * 택배사
	 *
	 */
	company: string;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 *
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 *
	 */
	appliedAt?: string;
};

/**
 * 구매 거절 확정
 *
 * 구매 거절 확정
 */
export type RejectConfirmedPaymentEscrow = {
	/**
	 *
	 */
	status: "REJECT_CONFIRMED";
	/**
	 * 택배사
	 *
	 */
	company: string;
	/**
	 * 송장번호
	 *
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 *
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 *
	 */
	appliedAt?: string;
};

/**
 * 취소된 현금영수증
 *
 * 취소된 현금영수증
 */
export type CancelledPaymentCashReceipt = {
	/**
	 *
	 */
	status: "CANCELLED";
	/**
	 * 현금영수증 유형
	 *
	 */
	type?: CashReceiptType;
	/**
	 * PG사 영수증 발급 아이디
	 *
	 */
	pgReceiptId?: string;
	/**
	 * 승인 번호
	 *
	 */
	issueNumber: string;
	/**
	 * 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 현금영수증 URL
	 *
	 */
	url?: string;
	/**
	 * 발급 시점
	 *
	 */
	issuedAt: string;
	/**
	 * 취소 시점
	 *
	 */
	cancelledAt: string;
};

/**
 * 발급 완료된 현금영수증
 *
 * 발급 완료된 현금영수증
 */
export type IssuedPaymentCashReceipt = {
	/**
	 *
	 */
	status: "ISSUED";
	/**
	 * 현금영수증 유형
	 *
	 */
	type?: CashReceiptType;
	/**
	 * PG사 영수증 발급 아이디
	 *
	 */
	pgReceiptId?: string;
	/**
	 * 승인 번호
	 *
	 */
	issueNumber: string;
	/**
	 * 총 금액
	 *
	 */
	totalAmount: number;
	/**
	 * 면세액
	 *
	 */
	taxFreeAmount?: number;
	/**
	 * 통화
	 *
	 */
	currency: Currency;
	/**
	 * 현금영수증 URL
	 *
	 */
	url?: string;
	/**
	 * 발급 시점
	 *
	 */
	issuedAt: string;
};

/**
 * 통합검색 항목
 *
 * 통합검색 항목
 */
export type PaymentTextSearchField =
	| "ALL"
	| "PAYMENT_ID"
	| "TX_ID"
	| "SCHEDULE_ID"
	| "FAIL_REASON"
	| "CARD_ISSUER"
	| "CARD_ACQUIRER"
	| "CARD_BIN"
	| "CARD_NUMBER"
	| "CARD_APPROVAL_NUMBER"
	| "CARD_RECEIPT_NAME"
	| "CARD_INSTALLMENT"
	| "TRANS_BANK"
	| "VIRTUAL_ACCOUNT_HOLDER_NAME"
	| "VIRTUAL_ACCOUNT_BANK"
	| "VIRTUAL_ACCOUNT_NUMBER"
	| "PG_MERCHANT_ID"
	| "PG_TX_ID"
	| "PG_RECEIPT_ID"
	| "RECEIPT_APPROVAL_NUMBER"
	| "PG_CANCELLATION_ID"
	| "CANCEL_REASON"
	| "ORDER_NAME"
	| "CUSTOMER_NAME"
	| "CUSTOMER_EMAIL"
	| "CUSTOMER_PHONE_NUMBER"
	| "CUSTOMER_ADDRESS"
	| "CUSTOMER_ZIPCODE"
	| "USER_AGENT"
	| "BILLING_KEY"
	| "PROMOTION_ID"
	| "GIFT_CERTIFICATION_APPROVAL_NUMBER";

/**
 * 입금 만료 기한
 *
 * 입금 만료 기한
 *
 * validHours와 dueDate 둘 중 하나의 필드만 입력합니다.
 */
export type InstantPaymentMethodInputVirtualAccountExpiry = {
	/**
	 * 유효 시간
	 *
	 * 시간 단위로 입력합니다.
	 */
	validHours?: number;
	/**
	 * 만료 시점
	 *
	 */
	dueDate?: string;
};

/**
 * 가상계좌 발급 방식
 *
 * 가상계좌 발급 방식
 */
export type InstantPaymentMethodInputVirtualAccountOption = {
	/**
	 * 발급 유형
	 *
	 */
	type: InstantPaymentMethodInputVirtualAccountOptionType;
	/**
	 * 고정식 가상계좌 발급 방식
	 *
	 * 발급 유형을 FIXED 로 선택했을 시에만 입력합니다.
	 */
	fixed?: InstantPaymentMethodInputVirtualAccountOptionFixed;
};

/**
 * 가상계좌 결제 시 현금영수증 정보
 *
 * 가상계좌 결제 시 현금영수증 정보
 */
export type InstantPaymentMethodInputVirtualAccountCashReceiptInfo = {
	/**
	 * 현금영수증 유형
	 *
	 */
	type: CashReceiptInputType;
	/**
	 * 사용자 식별 번호
	 *
	 */
	customerIdentityNumber: string;
};

/**
 * 세금계산서 담당자
 *
 * 세금계산서 담당자
 */
export type B2bTaxInvoiceContact = {
	/**
	 * 성명
	 *
	 */
	name?: string;
	/**
	 * 부서
	 *
	 */
	department?: string;
	/**
	 * 전화번호
	 *
	 */
	phoneNumber?: string;
	/**
	 * 휴대전화번호
	 *
	 */
	mobilePhoneNumber?: string;
	/**
	 * 이메일
	 *
	 */
	email?: string;
};

/**
 * 수정 사유
 *
 * 수정 사유
 */
export type B2bTaxInvoiceModificationType =
	| "CORRECTION_OF_ENTRY_ERRORS"
	| "CHANGE_IN_SUPPLY_COST"
	| "RETURN"
	| "CANCELLATION_OF_CONTRACT"
	| "DUPLICATE_ISSUANCE_DUE_TO_ERROR"
	| "POST_ISSUANCE_LOCAL_LETTER_OF_CREDIT";

/**
 * PromotionAmountDiscount
 *
 */
export type PromotionAmountDiscount = {
	/**
	 *
	 */
	type: "AMOUNT";
	/**
	 *
	 */
	amount: number;
};

/**
 * PromotionPercentDiscount
 *
 */
export type PromotionPercentDiscount = {
	/**
	 *
	 */
	type: "PERCENT";
	/**
	 *
	 */
	percent: number;
};

/**
 * PlatformSettlementFormulaPosition
 *
 */
export type PlatformSettlementFormulaPosition = {
	/**
	 *
	 */
	startLine: number;
	/**
	 *
	 */
	startIndex: number;
	/**
	 *
	 */
	endLine: number;
	/**
	 *
	 */
	endIndex: number;
};

/**
 * 월 및 일자 정보
 *
 * 월 및 일자 정보
 */
export type MonthDay = {
	/**
	 *
	 */
	month: number;
	/**
	 *
	 */
	day: number;
};

/**
 * 결제 수단
 *
 * 결제 수단
 */
export type PlatformPaymentMethod =
	| PlatformPaymentMethodCard
	| PlatformPaymentMethodEasyPay
	| PlatformPaymentMethodGiftCertificate
	| PlatformPaymentMethodMobile
	| PlatformPaymentMethodTransfer
	| PlatformPaymentMethodVirtualAccount;

/**
 * 파트너 유형
 *
 * 파트너 유형
 */
export type PlatformTransferSummaryPartnerType =
	| "BUSINESS"
	| "WHT_PAYER"
	| "NON_WHT_PAYER";

/**
 * PlatformTransferSummaryExternalPayment
 *
 */
export type PlatformTransferSummaryExternalPayment = {
	/**
	 *
	 */
	type: "EXTERNAL";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	orderName?: string;
	/**
	 *
	 */
	currency: Currency;
	/**
	 *
	 */
	methodType?: PaymentMethodType;
};

/**
 * PlatformTransferSummaryPortOnePayment
 *
 */
export type PlatformTransferSummaryPortOnePayment = {
	/**
	 *
	 */
	type: "PORT_ONE";
	/**
	 *
	 */
	id: string;
	/**
	 *
	 */
	orderName: string;
	/**
	 *
	 */
	currency: Currency;
	/**
	 *
	 */
	methodType?: PaymentMethodType;
};

/**
 * 간편 결제 수단
 *
 * 간편 결제 수단
 */
export type EasyPayMethodType = "CARD" | "TRANSFER" | "CHARGE";

/**
 * 카드 상세 정보
 *
 * 카드 상세 정보
 */
export type Card = {
	/**
	 * 발행사 코드
	 *
	 */
	publisher?: string;
	/**
	 * 발급사 코드
	 *
	 */
	issuer?: string;
	/**
	 * 카드 브랜드
	 *
	 */
	brand?: CardBrand;
	/**
	 * 카드 유형
	 *
	 */
	type?: CardType;
	/**
	 * 카드 소유주 유형
	 *
	 */
	ownerType?: CardOwnerType;
	/**
	 * 카드 번호 앞 6자리 또는 8자리의 BIN (Bank Identification Number)
	 *
	 */
	bin?: string;
	/**
	 * 카드 상품명
	 *
	 */
	name?: string;
	/**
	 * 마스킹된 카드 번호
	 *
	 */
	number?: string;
};

/**
 * 간편 결제 수단
 *
 * 간편 결제 수단
 */
export type BillingKeyPaymentMethodEasyPayMethod =
	| BillingKeyPaymentMethodCard
	| BillingKeyPaymentMethodEasyPayCharge
	| BillingKeyPaymentMethodTransfer;

/**
 * 한 줄 형식 주소
 *
 * 한 줄 형식 주소
 *
 * 한 줄 형식 주소만 존재합니다.
 */
export type OneLineAddress = {
	/**
	 *
	 */
	type: "ONE_LINE";
	/**
	 * 주소 (한 줄)
	 *
	 */
	oneLine: string;
};

/**
 * 분리 형식 주소
 *
 * 분리 형식 주소
 *
 * 한 줄 형식 주소와 분리 형식 주소 모두 존재합니다. 한 줄 형식 주소는 분리 형식 주소를 이어 붙인 형태로 생성됩니다.
 */
export type SeparatedAddress = {
	/**
	 *
	 */
	type: "SEPARATED";
	/**
	 * 주소 (한 줄)
	 *
	 */
	oneLine: string;
	/**
	 * 상세 주소 1
	 *
	 */
	addressLine1: string;
	/**
	 * 상세 주소 2
	 *
	 */
	addressLine2: string;
	/**
	 * 시/군/구
	 *
	 */
	city?: string;
	/**
	 * 주/도/시
	 *
	 */
	province?: string;
	/**
	 * 국가
	 *
	 */
	country?: Country;
};

/**
 * 발급 실패 상세 정보
 *
 * 발급 실패 상세 정보
 */
export type BillingKeyFailure = {
	/**
	 * 실패 사유
	 *
	 */
	message?: string;
	/**
	 * PG사 실패 코드
	 *
	 */
	pgCode?: string;
	/**
	 * PG사 실패 사유
	 *
	 */
	pgMessage?: string;
	/**
	 * 실패 시점
	 *
	 */
	failedAt: string;
};

/**
 * 할부 정보
 *
 * 할부 정보
 */
export type PaymentInstallment = {
	/**
	 * 할부 개월 수
	 *
	 */
	month: number;
	/**
	 * 무이자할부 여부
	 *
	 */
	isInterestFree: boolean;
};

/**
 * 간편 결제 수단
 *
 * 간편 결제 수단
 */
export type PaymentMethodEasyPayMethod =
	| PaymentMethodCard
	| PaymentMethodEasyPayMethodCharge
	| PaymentMethodTransfer;

/**
 * 가상계좌 유형
 *
 * 가상계좌 유형
 */
export type PaymentMethodVirtualAccountType = "FIXED" | "NORMAL";

/**
 * 가상계좌 환불 상태
 *
 * 가상계좌 환불 상태
 */
export type PaymentMethodVirtualAccountRefundStatus =
	| "PENDING"
	| "PARTIAL_REFUND_FAILED"
	| "FAILED"
	| "COMPLETED";

/**
 * 가상계좌 발급 유형
 *
 * 가상계좌 발급 유형
 */
export type InstantPaymentMethodInputVirtualAccountOptionType =
	| "NORMAL"
	| "FIXED";

/**
 * 고정식 가상계좌 발급 유형
 *
 * 고정식 가상계좌 발급 유형
 *
 * pgAccountId, accountNumber 유형 중 한 개의 필드만 입력합니다.
 */
export type InstantPaymentMethodInputVirtualAccountOptionFixed = {
	/**
	 * Account ID 고정식 가상계좌
	 *
	 * 고객사가 가상계좌번호를 직접 관리하지 않고 PG사가 pgAccountId에 매핑되는 가상계좌번호를 내려주는 방식입니다. 동일한 pgAccountId로 가상계좌 발급 요청시에는 항상 같은 가상계좌번호가 내려옵니다.
	 */
	pgAccountId?: string;
	/**
	 * Account Number 고정식 가상계좌
	 *
	 * PG사가 일정 개수만큼의 가상계좌번호를 발급하여 고객사에게 미리 전달하고 고객사가 그 중 하나를 선택하여 사용하는 방식입니다.
	 */
	accountNumber?: string;
};

/**
 * 카드
 *
 * 카드
 */
export type PlatformPaymentMethodCard = {
	/**
	 *
	 */
	type: "CARD";
};

/**
 * 간편 결제
 *
 * 간편 결제
 */
export type PlatformPaymentMethodEasyPay = {
	/**
	 *
	 */
	type: "EASY_PAY";
	/**
	 * 간편 결제사
	 *
	 */
	provider?: EasyPayProvider;
	/**
	 * 간편 결제 수단
	 *
	 */
	methodType?: EasyPayMethodType;
};

/**
 * 상품권
 *
 * 상품권
 */
export type PlatformPaymentMethodGiftCertificate = {
	/**
	 *
	 */
	type: "GIFT_CERTIFICATE";
};

/**
 * 모바일
 *
 * 모바일
 */
export type PlatformPaymentMethodMobile = {
	/**
	 *
	 */
	type: "MOBILE";
};

/**
 * 계좌이체
 *
 * 계좌이체
 */
export type PlatformPaymentMethodTransfer = {
	/**
	 *
	 */
	type: "TRANSFER";
};

/**
 * 가상계좌
 *
 * 가상계좌
 */
export type PlatformPaymentMethodVirtualAccount = {
	/**
	 *
	 */
	type: "VIRTUAL_ACCOUNT";
};

/**
 * 충전식 포인트 결제 정보
 *
 * 충전식 포인트 결제 정보
 */
export type BillingKeyPaymentMethodEasyPayCharge = {
	/**
	 *
	 */
	type: "BillingKeyPaymentMethodEasyPayCharge";
};

/**
 * 충전식 포인트 결제 정보
 *
 * 충전식 포인트 결제 정보
 */
export type PaymentMethodEasyPayMethodCharge = {
	/**
	 *
	 */
	type: "PaymentMethodEasyPayMethodCharge";
	/**
	 * 표준 은행 코드
	 *
	 */
	bank?: Bank;
};
