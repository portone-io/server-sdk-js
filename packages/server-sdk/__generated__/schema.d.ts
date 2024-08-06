export type Paths = {
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 상점 아이디
					 * 
					 * 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.
					 */
					storeId?: string;
				};
				path: {
					/**
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
					 * 카카오페이 주문 번호 (tid)
					 */
					pgTxId: string;
					/**
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
}

/**
 * 본인인증 내역
 */
export type IdentityVerification = FailedIdentityVerification | ReadyIdentityVerification | VerifiedIdentityVerification;

/**
 * GetIdentityVerificationError
 */
export type GetIdentityVerificationError = ForbiddenError | IdentityVerificationNotFoundError | InvalidRequestError | UnauthorizedError;

/**
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
	 */
	channelKey: string;
	/**
	 * 고객 정보
	 */
	customer: SendIdentityVerificationBodyCustomer;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * PG사별 추가 파라미터 ("PG사별 연동 가이드" 참고)
	 */
	bypass?: {
	};
	/**
	 * 통신사
	 */
	operator: IdentityVerificationOperator;
	/**
	 * 본인인증 방식
	 */
	method: IdentityVerificationMethod;
};

/**
 * 본인인증 요청 전송 성공 응답
 */
export type SendIdentityVerificationResponse = {
};

/**
 * SendIdentityVerificationError
 */
export type SendIdentityVerificationError = ChannelNotFoundError | ForbiddenError | IdentityVerificationAlreadySentError | IdentityVerificationAlreadyVerifiedError | IdentityVerificationNotFoundError | InvalidRequestError | PgProviderError | UnauthorizedError;

/**
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
 */
export type ConfirmIdentityVerificationResponse = {
	/**
	 * 완료된 본인인증 내역
	 */
	identityVerification: VerifiedIdentityVerification;
};

/**
 * ConfirmIdentityVerificationError
 */
export type ConfirmIdentityVerificationError = ForbiddenError | IdentityVerificationAlreadyVerifiedError | IdentityVerificationNotFoundError | IdentityVerificationNotSentError | InvalidRequestError | PgProviderError | UnauthorizedError;

/**
 * 본인인증 요청 재전송 성공 응답
 */
export type ResendIdentityVerificationResponse = {
};

/**
 * ResendIdentityVerificationError
 */
export type ResendIdentityVerificationError = ForbiddenError | IdentityVerificationAlreadyVerifiedError | IdentityVerificationNotFoundError | IdentityVerificationNotSentError | InvalidRequestError | PgProviderError | UnauthorizedError;

/**
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
	 */
	totalAmount?: number;
	/**
	 * 결제 면세 금액
	 */
	taxFreeAmount?: number;
	/**
	 * 통화 단위
	 */
	currency?: Currency;
};

/**
 * 결제 사전 등록 성공 응답
 */
export type PreRegisterPaymentResponse = {
};

/**
 * PreRegisterPaymentError
 */
export type PreRegisterPaymentError = AlreadyPaidError | ForbiddenError | InvalidRequestError | UnauthorizedError;

/**
 * 빌링키 정보
 */
export type BillingKeyInfo = DeletedBillingKeyInfo | IssuedBillingKeyInfo;

/**
 * GetBillingKeyInfoError
 */
export type GetBillingKeyInfoError = BillingKeyNotFoundError | ForbiddenError | InvalidRequestError | UnauthorizedError;

/**
 * 빌링키 삭제 성공 응답
 */
export type DeleteBillingKeyResponse = {
	/**
	 * 빌링키 삭제 완료 시점
	 */
	deletedAt: string;
};

/**
 * DeleteBillingKeyError
 */
export type DeleteBillingKeyError = BillingKeyAlreadyDeletedError | BillingKeyNotFoundError | BillingKeyNotIssuedError | ChannelSpecificError | ForbiddenError | InvalidRequestError | PaymentScheduleAlreadyExistsError | PgProviderError | UnauthorizedError;

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
 */
export type GetBillingKeyInfosResponse = {
	/**
	 * 조회된 빌링키 리스트
	 */
	items: BillingKeyInfo[];
	/**
	 * 조회된 페이지 정보
	 */
	page: PageInfo;
};

/**
 * GetBillingKeyInfosError
 */
export type GetBillingKeyInfosError = ForbiddenError | InvalidRequestError | UnauthorizedError;

/**
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
	 */
	customer?: CustomerInput;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * PG사별 추가 파라미터 ("PG사별 연동 가이드" 참고)
	 */
	bypass?: {
	};
	/**
	 * 웹훅 주소
	 *
	 * 빌링키 발급 시 요청을 받을 웹훅 주소입니다. 상점에 설정되어 있는 값보다 우선적으로 적용됩니다. 입력된 값이 없을 경우에는 빈 배열로 해석됩니다.
	 */
	noticeUrls?: string[];
};

/**
 * 빌링키 발급 성공 응답
 */
export type IssueBillingKeyResponse = {
	/**
	 * 빌링키 정보
	 */
	billingKeyInfo: BillingKeyInfoSummary;
	/**
	 * 발급에 실패한 채널이 있을시 실패 정보
	 */
	channelSpecificFailures?: ChannelSpecificFailure[];
};

/**
 * IssueBillingKeyError
 */
export type IssueBillingKeyError = ChannelNotFoundError | ChannelSpecificError | ForbiddenError | InvalidRequestError | PgProviderError | UnauthorizedError;

/**
 * 현금영수증 내역
 */
export type CashReceipt = CancelledCashReceipt | IssuedCashReceipt | IssueFailedCashReceipt;

/**
 * GetCashReceiptError
 */
export type GetCashReceiptError = CashReceiptNotFoundError | ForbiddenError | InvalidRequestError | UnauthorizedError;

/**
 * 결제 건
 */
export type Payment = CancelledPayment | FailedPayment | PaidPayment | PartialCancelledPayment | PayPendingPayment | ReadyPayment | VirtualAccountIssuedPayment;

/**
 * GetPaymentError
 */
export type GetPaymentError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | UnauthorizedError;

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
 */
export type GetPaymentsResponse = {
	/**
	 * 조회된 결제 건 리스트
	 */
	items: Payment[];
	/**
	 * 조회된 페이지 정보
	 */
	page: PageInfo;
};

/**
 * GetPaymentsError
 */
export type GetPaymentsError = ForbiddenError | InvalidRequestError | UnauthorizedError;

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
 */
export type GetAllPaymentsByCursorResponse = {
	/**
	 * 조회된 결제 건 및 커서 정보 리스트
	 */
	items: PaymentWithCursor[];
};

/**
 * GetAllPaymentsError
 */
export type GetAllPaymentsError = ForbiddenError | InvalidRequestError | UnauthorizedError;

/**
 * 결제 예약 건
 */
export type PaymentSchedule = FailedPaymentSchedule | PendingPaymentSchedule | RevokedPaymentSchedule | ScheduledPaymentSchedule | StartedPaymentSchedule | SucceededPaymentSchedule;

/**
 * GetPaymentScheduleError
 */
export type GetPaymentScheduleError = ForbiddenError | InvalidRequestError | PaymentScheduleNotFoundError | UnauthorizedError;

/**
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
	 */
	filter?: PaymentScheduleFilterInput;
};

/**
 * 결제 예약 다건 조회 성공 응답 정보
 */
export type GetPaymentSchedulesResponse = {
	/**
	 * 조회된 결제 예약 건 리스트
	 */
	items: PaymentSchedule[];
	/**
	 * 조회된 페이지 정보
	 */
	page: PageInfo;
};

/**
 * GetPaymentSchedulesError
 */
export type GetPaymentSchedulesError = ForbiddenError | InvalidRequestError | UnauthorizedError;

/**
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
	 */
	billingKey?: string;
	/**
	 * 결제 예약 건 아이디 목록
	 */
	scheduleIds?: string[];
};

/**
 * 결제 예약 건 취소 성공 응답
 */
export type RevokePaymentSchedulesResponse = {
	/**
	 * 취소 완료된 결제 예약 건 아이디 목록
	 */
	revokedScheduleIds: string[];
	/**
	 * 결제 예약 건 취소 완료 시점
	 */
	revokedAt?: string;
};

/**
 * RevokePaymentSchedulesError
 */
export type RevokePaymentSchedulesError = BillingKeyAlreadyDeletedError | BillingKeyNotFoundError | ForbiddenError | InvalidRequestError | PaymentScheduleAlreadyProcessedError | PaymentScheduleAlreadyRevokedError | PaymentScheduleNotFoundError | UnauthorizedError;

/**
 * 결제 예약 요청 입력 정보
 */
export type CreatePaymentScheduleBody = {
	/**
	 * 빌링키 결제 입력 정보
	 */
	payment: BillingKeyPaymentInput;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
};

/**
 * 결제 예약 성공 응답
 */
export type CreatePaymentScheduleResponse = {
	/**
	 * 결제 예약 건
	 */
	schedule: PaymentScheduleSummary;
};

/**
 * CreatePaymentScheduleError
 */
export type CreatePaymentScheduleError = AlreadyPaidOrWaitingError | BillingKeyAlreadyDeletedError | BillingKeyNotFoundError | ForbiddenError | InvalidRequestError | PaymentScheduleAlreadyExistsError | SumOfPartsExceedsTotalAmountError | UnauthorizedError;

/**
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
 */
export type CancelPaymentResponse = {
	/**
	 * 결체 취소 내역
	 */
	cancellation: PaymentCancellation;
};

/**
 * CancelPaymentError
 */
export type CancelPaymentError = CancellableAmountConsistencyBrokenError | CancelAmountExceedsCancellableAmountError | CancelTaxAmountExceedsCancellableTaxAmountError | CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError | ForbiddenError | InvalidRequestError | PaymentAlreadyCancelledError | PaymentNotFoundError | PaymentNotPaidError | PgProviderError | RemainedAmountLessThanPromotionMinPaymentAmountError | SumOfPartsExceedsCancelAmountError | UnauthorizedError;

/**
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
	 */
	orderName: string;
	/**
	 * 고객 정보
	 */
	customer?: CustomerInput;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 결제 금액 세부 입력 정보
	 */
	amount: PaymentAmountInput;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 무이자 할부 이자를 고객사가 부담할지 여부
	 */
	useFreeInterestFromMerchant?: boolean;
	/**
	 * 카드 포인트 사용 여부
	 */
	useCardPoint?: boolean;
	/**
	 * 현금영수증 정보
	 */
	cashReceipt?: CashReceiptInput;
	/**
	 * 결제 국가
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
	 */
	productCount?: number;
	/**
	 * 상품 유형
	 */
	productType?: PaymentProductType;
	/**
	 * 배송지 주소
	 */
	shippingAddress?: SeparatedAddressInput;
	/**
	 * 해당 결제에 적용할 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * PG사별 추가 파라미터 ("PG사별 연동 가이드" 참고)
	 */
	bypass?: {
	};
};

/**
 * 빌링키 결제 성공 응답
 */
export type PayWithBillingKeyResponse = {
	/**
	 * 결제 건 요약 정보
	 */
	payment: BillingKeyPaymentSummary;
};

/**
 * PayWithBillingKeyError
 */
export type PayWithBillingKeyError = AlreadyPaidError | BillingKeyAlreadyDeletedError | BillingKeyNotFoundError | ChannelNotFoundError | DiscountAmountExceedsTotalAmountError | ForbiddenError | InvalidRequestError | PgProviderError | PromotionPayMethodDoesNotMatchError | SumOfPartsExceedsTotalAmountError | UnauthorizedError;

/**
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
	 */
	method: InstantPaymentMethodInput;
	/**
	 * 주문명
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
	 */
	customer?: CustomerInput;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 결제 금액 세부 입력 정보
	 */
	amount: PaymentAmountInput;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 결제 국가
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
	 */
	productCount?: number;
	/**
	 * 상품 유형
	 */
	productType?: PaymentProductType;
	/**
	 * 배송지 주소
	 */
	shippingAddress?: SeparatedAddressInput;
	/**
	 * 해당 결제에 적용할 프로모션 아이디
	 */
	promotionId?: string;
};

/**
 * 수기 결제 성공 응답
 */
export type PayInstantlyResponse = {
	/**
	 * 결제 건 요약 정보
	 */
	payment: InstantPaymentSummary;
};

/**
 * PayInstantlyError
 */
export type PayInstantlyError = AlreadyPaidError | ChannelNotFoundError | DiscountAmountExceedsTotalAmountError | ForbiddenError | InvalidRequestError | PgProviderError | PromotionPayMethodDoesNotMatchError | SumOfPartsExceedsTotalAmountError | UnauthorizedError;

/**
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
	 */
	channelKey: string;
	/**
	 * 현금 영수증 유형
	 */
	type: CashReceiptType;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 화폐
	 */
	currency: Currency;
	/**
	 * 금액 세부 입력 정보
	 */
	amount: PaymentAmountInput;
	/**
	 * 상품 유형
	 */
	productType?: PaymentProductType;
	/**
	 * 고객 정보
	 */
	customer: IssueCashReceiptCustomerInput;
	/**
	 * 결제 일자
	 */
	paidAt?: string;
};

/**
 * 현금 영수증 발급 성공 응답
 */
export type IssueCashReceiptResponse = {
	cashReceipt: CashReceiptSummary;
};

/**
 * IssueCashReceiptError
 */
export type IssueCashReceiptError = CashReceiptAlreadyIssuedError | ChannelNotFoundError | ForbiddenError | InvalidRequestError | PgProviderError | UnauthorizedError;

/**
 * 현금 영수증 취소 성공 응답
 */
export type CancelCashReceiptResponse = {
	/**
	 * 취소 금액
	 */
	cancelledAmount: number;
	/**
	 * 현금 영수증 취소 완료 시점
	 */
	cancelledAt: string;
};

/**
 * CancelCashReceiptError
 */
export type CancelCashReceiptError = CashReceiptNotFoundError | CashReceiptNotIssuedError | ForbiddenError | InvalidRequestError | PgProviderError | UnauthorizedError;

/**
 * 가상계좌 말소 성공 응답
 */
export type CloseVirtualAccountResponse = {
	/**
	 * 가상계좌 말소 시점
	 */
	closedAt: string;
};

/**
 * CloseVirtualAccountError
 */
export type CloseVirtualAccountError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | PaymentNotWaitingForDepositError | PgProviderError | UnauthorizedError;

/**
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
	 */
	sender?: PaymentEscrowSenderInput;
	/**
	 * 에스크로 수취인 정보
	 */
	receiver?: PaymentEscrowReceiverInput;
	/**
	 * 에스크로 물류 정보
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
	 */
	products?: PaymentProduct[];
};

/**
 * 에스크로 배송 정보 등록 성공 응답
 */
export type ApplyEscrowLogisticsResponse = {
	/**
	 * 송장 번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 시점
	 */
	sentAt: string;
	/**
	 * 에스크로 정보 등록 시점
	 */
	appliedAt: string;
};

/**
 * ApplyEscrowLogisticsError
 */
export type ApplyEscrowLogisticsError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | PaymentNotPaidError | PgProviderError | UnauthorizedError;

/**
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
	 */
	sender?: PaymentEscrowSenderInput;
	/**
	 * 에스크로 수취인 정보
	 */
	receiver?: PaymentEscrowReceiverInput;
	/**
	 * 에스크로 물류 정보
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
	 */
	products?: PaymentProduct[];
};

/**
 * 에스크로 배송 정보 수정 성공 응답
 */
export type ModifyEscrowLogisticsResponse = {
	/**
	 * 송장 번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 시점
	 */
	sentAt: string;
	/**
	 * 에스크로 정보 수정 시점
	 */
	modifiedAt: string;
};

/**
 * ModifyEscrowLogisticsError
 */
export type ModifyEscrowLogisticsError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | PaymentNotPaidError | PgProviderError | UnauthorizedError;

/**
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
 */
export type ConfirmEscrowResponse = {
	/**
	 * 에스크로 구매 확정 시점
	 */
	completedAt: string;
};

/**
 * ConfirmEscrowError
 */
export type ConfirmEscrowError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | PaymentNotPaidError | PgProviderError | UnauthorizedError;

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
 */
export type ResendWebhookResponse = {
	/**
	 * 재발송 웹훅 정보
	 */
	webhook: PaymentWebhook;
};

/**
 * ResendWebhookError
 */
export type ResendWebhookError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | UnauthorizedError | WebhookNotFoundError;

/**
 * 카카오페이 주문 조회 응답
 */
export type GetKakaopayPaymentOrderResponse = {
	/**
	 * HTTP 상태 코드
	 */
	statusCode: number;
	/**
	 * HTTP 응답 본문 (JSON)
	 */
	body: string;
};

/**
 * GetKakaopayPaymentOrderError
 */
export type GetKakaopayPaymentOrderError = InvalidRequestError | UnauthorizedError;

/**
 * 영수증 내 하위 상점 거래 등록 정보
 */
export type RegisterStoreReceiptBody = {
	/**
	 * 하위 상점 거래 목록
	 */
	items: RegisterStoreReceiptBodyItem[];
	/**
	 * 상점 아이디
	 */
	storeId?: string;
};

/**
 * 영수증 내 하위 상점 거래 등록 응답
 */
export type RegisterStoreReceiptResponse = {
	/**
	 * 결제 영수증 URL
	 */
	receiptUrl?: string;
};

/**
 * RegisterStoreReceiptError
 */
export type RegisterStoreReceiptError = ForbiddenError | InvalidRequestError | PaymentNotFoundError | PaymentNotPaidError | PgProviderError | UnauthorizedError;

/**
 * 실패한 본인인증 내역
 */
export type FailedIdentityVerification = {
	status: "FAILED";
	/**
	 * 본인인증 내역 아이디
	 */
	id: string;
	/**
	 * 사용된 본인인증 채널
	 */
	channel?: SelectedChannel;
	/**
	 * 요청 시 고객 정보
	 */
	requestedCustomer: IdentityVerificationRequestedCustomer;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 본인인증 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
};

/**
 * 준비 상태의 본인인증 내역
 */
export type ReadyIdentityVerification = {
	status: "READY";
	/**
	 * 본인인증 내역 아이디
	 */
	id: string;
	/**
	 * 사용된 본인인증 채널
	 */
	channel?: SelectedChannel;
	/**
	 * 요청 시 고객 정보
	 */
	requestedCustomer: IdentityVerificationRequestedCustomer;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 본인인증 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
};

/**
 * 완료된 본인인증 내역
 */
export type VerifiedIdentityVerification = {
	status: "VERIFIED";
	/**
	 * 본인인증 내역 아이디
	 */
	id: string;
	/**
	 * 사용된 본인인증 채널
	 */
	channel?: SelectedChannel;
	/**
	 * 인증된 고객 정보
	 */
	verifiedCustomer: IdentityVerificationVerifiedCustomer;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 본인인증 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 본인인증 완료 시점
	 */
	verifiedAt: string;
	/**
	 * 본인인증 내역 PG사 아이디
	 */
	pgTxId: string;
	/**
	 * PG사 응답 데이터
	 */
	pgRawResponse: string;
};

/**
 * 요청이 거절된 경우
 */
export type ForbiddenError = {
	type: "FORBIDDEN";
	message?: string;
};

/**
 * 요청된 본인인증 건이 존재하지 않는 경우
 */
export type IdentityVerificationNotFoundError = {
	type: "IDENTITY_VERIFICATION_NOT_FOUND";
	message?: string;
};

/**
 * 요청된 입력 정보가 유효하지 않은 경우
 *
 * 허가되지 않은 값, 올바르지 않은 형식의 요청 등이 모두 해당됩니다.
 */
export type InvalidRequestError = {
	type: "INVALID_REQUEST";
	message?: string;
};

/**
 * 인증 정보가 올바르지 않은 경우
 */
export type UnauthorizedError = {
	type: "UNAUTHORIZED";
	message?: string;
};

/**
 * 본인인증 요청을 위한 고객 정보
 */
export type SendIdentityVerificationBodyCustomer = {
	/**
	 * 식별 아이디
	 */
	id?: string;
	/**
	 * 이름
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
 */
export type IdentityVerificationOperator = "SKT" | "KT" | "LGU" | "SKT_MVNO" | "KT_MVNO" | "LGU_MVNO";

/**
 * 본인인증 방식
 */
export type IdentityVerificationMethod = "SMS" | "APP";

/**
 * 요청된 채널이 존재하지 않는 경우
 */
export type ChannelNotFoundError = {
	type: "CHANNEL_NOT_FOUND";
	message?: string;
};

/**
 * 본인인증 건이 이미 API로 요청된 상태인 경우
 */
export type IdentityVerificationAlreadySentError = {
	type: "IDENTITY_VERIFICATION_ALREADY_SENT";
	message?: string;
};

/**
 * 본인인증 건이 이미 인증 완료된 상태인 경우
 */
export type IdentityVerificationAlreadyVerifiedError = {
	type: "IDENTITY_VERIFICATION_ALREADY_VERIFIED";
	message?: string;
};

/**
 * PG사에서 오류를 전달한 경우
 */
export type PgProviderError = {
	type: "PG_PROVIDER";
	message?: string;
	pgCode: string;
	pgMessage: string;
};

/**
 * 본인인증 건이 API로 요청된 상태가 아닌 경우
 */
export type IdentityVerificationNotSentError = {
	type: "IDENTITY_VERIFICATION_NOT_SENT";
	message?: string;
};

/**
 * 통화 단위
 */
export type Currency = "KRW" | "USD" | "JPY" | "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLE" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USN" | "UYI" | "UYU" | "UYW" | "UZS" | "VED" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL";

/**
 * 결제가 이미 완료된 경우
 */
export type AlreadyPaidError = {
	type: "ALREADY_PAID";
	message?: string;
};

/**
 * 빌링키 삭제 완료 상태 건
 */
export type DeletedBillingKeyInfo = {
	status: "DELETED";
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
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
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 고객사가 채번하는 빌링키 발급 건 고유 아이디
	 */
	issueId?: string;
	/**
	 * 빌링키 발급 건 이름
	 */
	issueName?: string;
	/**
	 * 발급 요청 시점
	 */
	requestedAt?: string;
	/**
	 * 발급 시점
	 */
	issuedAt: string;
	/**
	 * 채널 그룹
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
	 */
	deletedAt: string;
};

/**
 * 빌링키 발급 완료 상태 건
 */
export type IssuedBillingKeyInfo = {
	status: "ISSUED";
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
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
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 고객사가 채번하는 빌링키 발급 건 고유 아이디
	 */
	issueId?: string;
	/**
	 * 빌링키 발급 건 이름
	 */
	issueName?: string;
	/**
	 * 발급 요청 시점
	 */
	requestedAt?: string;
	/**
	 * 발급 시점
	 */
	issuedAt: string;
	/**
	 * 채널 그룹
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
 */
export type BillingKeyNotFoundError = {
	type: "BILLING_KEY_NOT_FOUND";
	message?: string;
};

/**
 * 빌링키가 이미 삭제된 경우
 */
export type BillingKeyAlreadyDeletedError = {
	type: "BILLING_KEY_ALREADY_DELETED";
	message?: string;
};

/**
 * BillingKeyNotIssuedError
 */
export type BillingKeyNotIssuedError = {
	type: "BILLING_KEY_NOT_ISSUED";
	message?: string;
};

/**
 * 여러 채널을 지정한 요청에서, 채널 각각에서 오류가 발생한 경우
 */
export type ChannelSpecificError = {
	type: "CHANNEL_SPECIFIC";
	message?: string;
	failures: ChannelSpecificFailure[];
	/**
	 * (결제, 본인인증 등에) 선택된 채널 정보
	 */
	succeededChannels: SelectedChannel[];
};

/**
 * 결제 예약건이 이미 존재하는 경우
 */
export type PaymentScheduleAlreadyExistsError = {
	type: "PAYMENT_SCHEDULE_ALREADY_EXISTS";
	message?: string;
};

/**
 * 다건 조회 API 에 사용되는 페이지 입력 정보
 */
export type PageInput = {
	/**
	 * 0부터 시작하는 페이지 번호
	 */
	number?: number;
	/**
	 * 각 페이지 당 포함할 객체 수
	 */
	size?: number;
};

/**
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
	 */
	customerId?: string;
	/**
	 * 플랫폼 유형
	 */
	platformType?: PaymentClientType;
	/**
	 * 통합 검색 필터
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
	 */
	version?: PortOneVersion;
};

/**
 * 반환된 페이지 결과 정보
 */
export type PageInfo = {
	/**
	 * 요청된 페이지 번호
	 */
	number: number;
	/**
	 * 요청된 페이지 당 객체 수
	 */
	size: number;
	/**
	 * 실제 반환된 객체 수
	 */
	totalCount: number;
};

/**
 * 빌링키 발급 시 결제 수단 입력 양식
 */
export type InstantBillingKeyPaymentMethodInput = {
	card?: InstantBillingKeyPaymentMethodInputCard;
};

/**
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
	 */
	name?: CustomerNameInput;
	/**
	 * 출생 연도
	 */
	birthYear?: string;
	/**
	 * 출생월
	 */
	birthMonth?: string;
	/**
	 * 출생일
	 */
	birthDay?: string;
	/**
	 * 국가
	 */
	country?: Country;
	/**
	 * 성별
	 */
	gender?: Gender;
	/**
	 * 이메일
	 */
	email?: string;
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
	/**
	 * 주소
	 */
	address?: SeparatedAddressInput;
	/**
	 * 우편번호
	 */
	zipcode?: string;
	/**
	 * 사업자 등록 번호
	 */
	businessRegistrationNumber?: string;
};

/**
 * BillingKeyInfoSummary
 */
export type BillingKeyInfoSummary = {
	/**
	 * 발급된 빌링키
	 */
	billingKey: string;
	/**
	 * 발급된 채널
	 */
	channels?: SelectedChannel[];
	/**
	 * 빌링크 발급 완료 시점
	 */
	issuedAt: string;
};

/**
 * ChannelSpecificFailure
 */
export type ChannelSpecificFailure = ChannelSpecificFailureInvalidRequest | ChannelSpecificFailurePgProvider;

/**
 * 발급 취소
 */
export type CancelledCashReceipt = {
	status: "CANCELLED";
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 현금영수증 발급에 사용된 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 금액
	 */
	amount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세액
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 수동 발급 여부
	 */
	isManual: boolean;
	/**
	 * 현금영수증 유형
	 */
	type?: CashReceiptType;
	/**
	 * PG사 현금영수증 아이디
	 */
	pgReceiptId?: string;
	/**
	 * 승인번호
	 */
	issueNumber: string;
	/**
	 * 현금영수증 URL
	 */
	url?: string;
	/**
	 * 발급 시점
	 */
	issuedAt: string;
	/**
	 * 취소 시점
	 */
	cancelledAt: string;
};

/**
 * 발급 완료
 */
export type IssuedCashReceipt = {
	status: "ISSUED";
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 현금영수증 발급에 사용된 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 금액
	 */
	amount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세액
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 수동 발급 여부
	 */
	isManual: boolean;
	/**
	 * 현금영수증 유형
	 */
	type?: CashReceiptType;
	/**
	 * PG사 현금영수증 아이디
	 */
	pgReceiptId?: string;
	/**
	 * 승인 번호
	 */
	issueNumber: string;
	/**
	 * 현금영수증 URL
	 */
	url?: string;
	/**
	 * 발급 시점
	 */
	issuedAt: string;
};

/**
 * 발급 실패
 */
export type IssueFailedCashReceipt = {
	status: "ISSUE_FAILED";
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 현금영수증 발급에 사용된 채널
	 */
	channel?: SelectedChannel;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 수동 발급 여부
	 */
	isManual: boolean;
};

/**
 * 현금영수증이 존재하지 않는 경우
 */
export type CashReceiptNotFoundError = {
	type: "CASH_RECEIPT_NOT_FOUND";
	message?: string;
};

/**
 * 결제 취소 상태 건
 */
export type CancelledPayment = {
	status: "CANCELLED";
	/**
	 * 결제 건 아이디
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
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
	/**
	 * 결제 완료 시점
	 */
	paidAt?: string;
	/**
	 * PG사 거래 아이디
	 */
	pgTxId?: string;
	/**
	 * 현금영수증
	 */
	cashReceipt?: PaymentCashReceipt;
	/**
	 * 거래 영수증 URL
	 */
	receiptUrl?: string;
	/**
	 * 결제 취소 내역
	 */
	cancellations: PaymentCancellation[];
	/**
	 * 결제 취소 시점
	 */
	cancelledAt: string;
};

/**
 * 결제 실패 상태 건
 */
export type FailedPayment = {
	status: "FAILED";
	/**
	 * 결제 건 아이디
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
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel?: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
	/**
	 * 결제 실패 시점
	 */
	failedAt: string;
};

/**
 * 결제 완료 상태 건
 */
export type PaidPayment = {
	status: "PAID";
	/**
	 * 결제 건 아이디
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
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
	/**
	 * 결제 완료 시점
	 */
	paidAt: string;
	/**
	 * PG사 거래 아이디
	 */
	pgTxId?: string;
	/**
	 * PG사 거래 응답 본문
	 */
	pgResponse?: string;
	/**
	 * 현금영수증
	 */
	cashReceipt?: PaymentCashReceipt;
	/**
	 * 거래 영수증 URL
	 */
	receiptUrl?: string;
};

/**
 * 결제 부분 취소 상태 건
 */
export type PartialCancelledPayment = {
	status: "PARTIAL_CANCELLED";
	/**
	 * 결제 건 아이디
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
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
	/**
	 * 결제 완료 시점
	 */
	paidAt?: string;
	/**
	 * PG사 거래 아이디
	 */
	pgTxId?: string;
	/**
	 * 현금영수증
	 */
	cashReceipt?: PaymentCashReceipt;
	/**
	 * 거래 영수증 URL
	 */
	receiptUrl?: string;
	/**
	 * 결제 취소 내역
	 */
	cancellations: PaymentCancellation[];
	/**
	 * 결제 취소 시점
	 */
	cancelledAt: string;
};

/**
 * 결제 완료 대기 상태 건
 */
export type PayPendingPayment = {
	status: "PAY_PENDING";
	/**
	 * 결제 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
	/**
	 * PG사 거래 아이디
	 */
	pgTxId?: string;
};

/**
 * 준비 상태의 결제 건
 */
export type ReadyPayment = {
	status: "READY";
	/**
	 * 결제 건 아이디
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
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel?: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
};

/**
 * 가상계좌 발급 완료 상태 건
 */
export type VirtualAccountIssuedPayment = {
	status: "VIRTUAL_ACCOUNT_ISSUED";
	/**
	 * 결제 건 아이디
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
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제수단 정보
	 */
	method?: PaymentMethod;
	/**
	 * 결제 채널
	 */
	channel: SelectedChannel;
	/**
	 * 결제 채널 그룹 정보
	 */
	channelGroup?: ChannelGroupSummary;
	/**
	 * 포트원 버전
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
	 */
	webhooks?: PaymentWebhook[];
	/**
	 * 결제 요청 시점
	 */
	requestedAt: string;
	/**
	 * 업데이트 시점
	 */
	updatedAt: string;
	/**
	 * 상태 업데이트 시점
	 */
	statusChangedAt: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 결제 금액 관련 세부 정보
	 */
	amount: PaymentAmount;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 구매자 정보
	 */
	customer: Customer;
	/**
	 * 프로모션 아이디
	 */
	promotionId?: string;
	/**
	 * 문화비 지출 여부
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
	 */
	products?: PaymentProduct[];
	/**
	 * 상품 갯수
	 */
	productCount?: number;
	/**
	 * 사용자 지정 데이터
	 */
	customData?: string;
	/**
	 * 국가 코드
	 */
	country?: Country;
	/**
	 * PG사 거래 아이디
	 */
	pgTxId?: string;
};

/**
 * 결제 건이 존재하지 않는 경우
 */
export type PaymentNotFoundError = {
	type: "PAYMENT_NOT_FOUND";
	message?: string;
};

/**
 * 결제 건 다건 조회를 위한 입력 정보
 */
export type PaymentFilterInput = {
	/**
	 * 고객사 아이디
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
	 */
	isTest?: boolean;
	/**
	 * 결제 예약 건 필터링
	 */
	isScheduled?: boolean;
	/**
	 * 결제 건 정렬 기준
	 */
	sortBy?: PaymentSortBy;
	/**
	 * 결제 건 정렬 방식
	 */
	sortOrder?: SortOrder;
	/**
	 * 포트원 버전
	 */
	version?: PortOneVersion;
	/**
	 * 웹훅 상태
	 */
	webhookStatus?: PaymentWebhookStatus;
	/**
	 * 플랫폼 유형
	 */
	platformType?: PaymentClientType;
	/**
	 * 통화
	 */
	currency?: Currency;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow?: boolean;
	/**
	 * 에스크로 결제의 배송 정보 상태
	 */
	escrowStatus?: PaymentFilterInputEscrowStatus;
	/**
	 * 카드 브랜드
	 */
	cardBrand?: CardBrand;
	/**
	 * 카드 유형
	 */
	cardType?: CardType;
	/**
	 * 카드 소유주 유형
	 */
	cardOwnerType?: CardOwnerType;
	/**
	 * 상품권 종류
	 */
	giftCertificateType?: PaymentMethodGiftCertificateType;
	/**
	 * 현금영수증 유형
	 */
	cashReceiptType?: CashReceiptInputType;
	/**
	 * 현금영수증 상태
	 */
	cashReceiptStatus?: PaymentCashReceiptStatus;
	/**
	 * 현금영수증 발급 시간 범위
	 */
	cashReceiptIssuedAtRange?: DateTimeRange;
	/**
	 * 현금영수증 취소 시간 범위
	 */
	cashReceiptCancelledAtRange?: DateTimeRange;
	/**
	 * 통합 검색 리스트 필터
	 */
	textSearch?: PaymentTextSearch[];
};

/**
 * 결제 건 및 커서 정보
 */
export type PaymentWithCursor = {
	/**
	 * 결제 건 정보
	 */
	payment: Payment;
	/**
	 * 해당 결제 건의 커서 정보
	 */
	cursor: string;
};

/**
 * 결제 실패 상태
 */
export type FailedPaymentSchedule = {
	status: "FAILED";
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 */
	startedAt: string;
	/**
	 * 결제 완료 시점
	 */
	completedAt: string;
};

/**
 * 결제 대기 상태
 */
export type PendingPaymentSchedule = {
	status: "PENDING";
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 */
	startedAt: string;
	/**
	 * 결제 완료 시점
	 */
	completedAt: string;
};

/**
 * 결제 예약 취소 상태
 */
export type RevokedPaymentSchedule = {
	status: "REVOKED";
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
	/**
	 * 결제 취소 시점
	 */
	revokedAt: string;
};

/**
 * 결제 예약 완료 상태
 */
export type ScheduledPaymentSchedule = {
	status: "SCHEDULED";
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
};

/**
 * 결제 시작 상태
 */
export type StartedPaymentSchedule = {
	status: "STARTED";
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 */
	startedAt: string;
};

/**
 * 결제 성공 상태
 */
export type SucceededPaymentSchedule = {
	status: "SUCCEEDED";
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
	/**
	 * 고객사 아이디
	 */
	merchantId: string;
	/**
	 * 상점 아이디
	 */
	storeId: string;
	/**
	 * 결제 건 아이디
	 */
	paymentId: string;
	/**
	 * 빌링키
	 */
	billingKey: string;
	/**
	 * 주문명
	 */
	orderName: string;
	/**
	 * 문화비 지출 여부
	 */
	isCulturalExpense: boolean;
	/**
	 * 에스크로 결제 여부
	 */
	isEscrow: boolean;
	/**
	 * 고객 정보
	 */
	customer: Customer;
	/**
	 * 사용자 지정 데이터
	 */
	customData: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세
	 */
	vatAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 웹훅 주소
	 */
	noticeUrls?: string[];
	/**
	 * 상품 정보
	 */
	products?: PaymentProduct[];
	/**
	 * 결제 예약 등록 시점
	 */
	createdAt: string;
	/**
	 * 결제 예정 시점
	 */
	timeToPay: string;
	/**
	 * 결제 시작 시점
	 */
	startedAt: string;
	/**
	 * 결제 완료 시점
	 */
	completedAt: string;
};

/**
 * 결제 예약건이 존재하지 않는 경우
 */
export type PaymentScheduleNotFoundError = {
	type: "PAYMENT_SCHEDULE_NOT_FOUND";
	message?: string;
};

/**
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
 */
export type PaymentScheduleAlreadyProcessedError = {
	type: "PAYMENT_SCHEDULE_ALREADY_PROCESSED";
	message?: string;
};

/**
 * 결제 예약건이 이미 취소된 경우
 */
export type PaymentScheduleAlreadyRevokedError = {
	type: "PAYMENT_SCHEDULE_ALREADY_REVOKED";
	message?: string;
};

/**
 * 결제 예약 건
 */
export type PaymentScheduleSummary = {
	/**
	 * 결제 예약 건 아이디
	 */
	id: string;
};

/**
 * 결제가 이미 완료되었거나 대기중인 경우
 */
export type AlreadyPaidOrWaitingError = {
	type: "ALREADY_PAID_OR_WAITING";
	message?: string;
};

/**
 * 면세 금액 등 하위 항목들의 합이 전체 결제 금액을 초과한 경우
 */
export type SumOfPartsExceedsTotalAmountError = {
	type: "SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT";
	message?: string;
};

/**
 * CancelRequester
 */
export type CancelRequester = "CUSTOMER" | "ADMIN";

/**
 * 고객 정보 입력 형식
 */
export type CancelPaymentBodyRefundAccount = {
	/**
	 * 은행
	 */
	bank: Bank;
	/**
	 * 계좌번호
	 */
	number: string;
	/**
	 * 예금주
	 */
	holderName: string;
	/**
	 * 예금주 연락처 - 스마트로 가상계좌 결제인 경우에 필요합니다.
	 */
	holderPhoneNumber?: string;
};

/**
 * 결제 취소 내역
 */
export type PaymentCancellation = FailedPaymentCancellation | RequestedPaymentCancellation | SucceededPaymentCancellation;

/**
 * 취소 가능 잔액 검증에 실패한 경우
 */
export type CancellableAmountConsistencyBrokenError = {
	type: "CANCELLABLE_AMOUNT_CONSISTENCY_BROKEN";
	message?: string;
};

/**
 * 결제 취소 금액이 취소 가능 금액을 초과한 경우
 */
export type CancelAmountExceedsCancellableAmountError = {
	type: "CANCEL_AMOUNT_EXCEEDS_CANCELLABLE_AMOUNT";
	message?: string;
};

/**
 * 취소 과세 금액이 취소 가능한 과세 금액을 초과한 경우
 */
export type CancelTaxAmountExceedsCancellableTaxAmountError = {
	type: "CANCEL_TAX_AMOUNT_EXCEEDS_CANCELLABLE_TAX_AMOUNT";
	message?: string;
};

/**
 * 취소 면세 금액이 취소 가능한 면세 금액을 초과한 경우
 */
export type CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError = {
	type: "CANCEL_TAX_FREE_AMOUNT_EXCEEDS_CANCELLABLE_TAX_FREE_AMOUNT";
	message?: string;
};

/**
 * 결제가 이미 취소된 경우
 */
export type PaymentAlreadyCancelledError = {
	type: "PAYMENT_ALREADY_CANCELLED";
	message?: string;
};

/**
 * 결제가 완료되지 않은 경우
 */
export type PaymentNotPaidError = {
	type: "PAYMENT_NOT_PAID";
	message?: string;
};

/**
 * 부분 취소 시, 취소하게 될 경우 남은 금액이 프로모션의 최소 결제 금액보다 작아지는 경우
 */
export type RemainedAmountLessThanPromotionMinPaymentAmountError = {
	type: "REMAINED_AMOUNT_LESS_THAN_PROMOTION_MIN_PAYMENT_AMOUNT";
	message?: string;
};

/**
 * 면세 금액 등 하위 항목들의 합이 전체 취소 금액을 초과한 경우
 */
export type SumOfPartsExceedsCancelAmountError = {
	type: "SUM_OF_PARTS_EXCEEDS_CANCEL_AMOUNT";
	message?: string;
};

/**
 * 금액 세부 입력 정보
 */
export type PaymentAmountInput = {
	/**
	 * 총 금액
	 */
	total: number;
	/**
	 * 면세액
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
 */
export type CashReceiptInput = {
	/**
	 * 현금영수증 유형
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
 */
export type Country = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";

/**
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
	 */
	code?: string;
	/**
	 * 상품 단위가격
	 */
	amount: number;
	/**
	 * 주문 수량
	 */
	quantity: number;
};

/**
 * 상품 유형
 */
export type PaymentProductType = "PHYSICAL" | "DIGITAL";

/**
 * 분리 형식 주소 입력 정보
 */
export type SeparatedAddressInput = {
	/**
	 * 상세 주소 1
	 */
	addressLine1: string;
	/**
	 * 상세 주소 2
	 */
	addressLine2: string;
	/**
	 * 시/군/구
	 */
	city?: string;
	/**
	 * 주/도/시
	 */
	province?: string;
	/**
	 * 국가
	 */
	country?: Country;
};

/**
 * 빌링키 결제 완료된 결제 건 요약 정보
 */
export type BillingKeyPaymentSummary = {
	/**
	 * PG사 결제 아이디
	 */
	pgTxId: string;
	/**
	 * 결제 완료 시점
	 */
	paidAt: string;
};

/**
 * 프로모션 할인 금액이 결제 시도 금액 이상인 경우
 */
export type DiscountAmountExceedsTotalAmountError = {
	type: "DISCOUNT_AMOUNT_EXCEEDS_TOTAL_AMOUNT";
	message?: string;
};

/**
 * 결제수단이 프로모션에 지정된 것과 일치하지 않는 경우
 */
export type PromotionPayMethodDoesNotMatchError = {
	type: "PROMOTION_PAY_METHOD_DOES_NOT_MATCH";
	message?: string;
};

/**
 * 수기 결제 수단 입력 정보
 *
 * 하나의 필드만 입력합니다.
 */
export type InstantPaymentMethodInput = {
	/**
	 * 카드
	 */
	card?: InstantPaymentMethodInputCard;
	/**
	 * 가상계좌
	 */
	virtualAccount?: InstantPaymentMethodInputVirtualAccount;
};

/**
 * 수기 결제가 완료된 결제 건 요약 정보
 */
export type InstantPaymentSummary = {
	/**
	 * PG사 결제 아이디
	 */
	pgTxId: string;
	/**
	 * 결제 완료 시점
	 */
	paidAt: string;
};

/**
 * 발급 유형
 */
export type CashReceiptType = "PERSONAL" | "CORPORATE";

/**
 * 현금영수증 발급 시 고객 관련 입력 정보
 */
export type IssueCashReceiptCustomerInput = {
	/**
	 * 고객 식별값
	 */
	identityNumber: string;
	/**
	 * 이름
	 */
	name?: string;
	/**
	 * 이메일
	 */
	email?: string;
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
};

/**
 * 현금영수증 내역
 */
export type CashReceiptSummary = {
	/**
	 * 발행 번호
	 */
	issueNumber: string;
	/**
	 * 현금 영수증 URL
	 */
	url: string;
	/**
	 * PG사 현금영수증 아이디
	 */
	pgReceiptId: string;
};

/**
 * 현금영수증이 이미 발급된 경우
 */
export type CashReceiptAlreadyIssuedError = {
	type: "CASH_RECEIPT_ALREADY_ISSUED";
	message?: string;
};

/**
 * 현금영수증이 발급되지 않은 경우
 */
export type CashReceiptNotIssuedError = {
	type: "CASH_RECEIPT_NOT_ISSUED";
	message?: string;
};

/**
 * 결제 건이 입금 대기 상태가 아닌 경우
 */
export type PaymentNotWaitingForDepositError = {
	type: "PAYMENT_NOT_WAITING_FOR_DEPOSIT";
	message?: string;
};

/**
 * 에스크로 발송자 정보
 */
export type PaymentEscrowSenderInput = {
	/**
	 * 이름
	 */
	name?: string;
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
	/**
	 * 우편번호
	 */
	zipcode?: string;
	/**
	 * 수취인과의 관계
	 */
	relationship?: string;
	/**
	 * 주소
	 */
	address?: SeparatedAddressInput;
};

/**
 * 에스크로 수취인 정보
 */
export type PaymentEscrowReceiverInput = {
	/**
	 * 이름
	 */
	name?: string;
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
	/**
	 * 우편번호
	 */
	zipcode?: string;
	/**
	 * 주소
	 */
	address?: SeparatedAddressInput;
};

/**
 * 배송정보
 */
export type PaymentLogistics = {
	/**
	 * 물류회사
	 */
	company: PaymentLogisticsCompany;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송시점
	 */
	sentAt: string;
	/**
	 * 수령시점
	 */
	receivedAt?: string;
	/**
	 * 주소
	 */
	address?: SeparatedAddressInput;
};

/**
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
	 */
	id: string;
	/**
	 * 웹훅 상태
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
	 */
	currentExecutionCount?: number;
	/**
	 * 최대 발송 횟수
	 */
	maxExecutionCount?: number;
	/**
	 * 웹훅 실행 맥락
	 */
	trigger?: PaymentWebhookTrigger;
	/**
	 * 웹훅 요청 정보
	 */
	request?: PaymentWebhookRequest;
	/**
	 * 웹훅 응답 정보
	 */
	response?: PaymentWebhookResponse;
	/**
	 * 웹훅 처리 시작 시점
	 */
	triggeredAt?: string;
};

/**
 * 웹훅 내역이 존재하지 않는 경우
 */
export type WebhookNotFoundError = {
	type: "WEBHOOK_NOT_FOUND";
	message?: string;
};

/**
 * 하위 상점 거래 정보
 */
export type RegisterStoreReceiptBodyItem = {
	/**
	 * 하위 상점 사업자등록번호
	 */
	storeBusinessRegistrationNumber: string;
	/**
	 * 하위 상점명
	 */
	storeName: string;
	/**
	 * 결제 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 부가세액
	 */
	vatAmount?: number;
	/**
	 * 공급가액
	 */
	supplyAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
};

/**
 * (결제, 본인인증 등에) 선택된 채널 정보
 */
export type SelectedChannel = {
	/**
	 * 채널 타입
	 */
	type: SelectedChannelType;
	/**
	 * 채널 아이디
	 */
	id?: string;
	/**
	 * 채널 키
	 */
	key?: string;
	/**
	 * 채널 명
	 */
	name?: string;
	/**
	 * PG사
	 */
	pgProvider: PgProvider;
	/**
	 * PG사 고객사 식별 아이디
	 */
	pgMerchantId: string;
};

/**
 * 요청 시 고객 정보
 */
export type IdentityVerificationRequestedCustomer = {
	/**
	 * 식별 아이디
	 */
	id?: string;
	/**
	 * 이름
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
 */
export type IdentityVerificationVerifiedCustomer = {
	/**
	 * 식별 아이디
	 */
	id?: string;
	/**
	 * 이름
	 */
	name: string;
	/**
	 * 통신사
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
	 */
	gender: Gender;
	/**
	 * 외국인 여부
	 */
	isForeigner?: boolean;
	/**
	 * CI (개인 고유 식별키)
	 */
	ci: string;
	/**
	 * DI (사이트별 개인 고유 식별키)
	 */
	di: string;
};

/**
 * 빌링키 발급 수단 정보
 */
export type BillingKeyPaymentMethod = BillingKeyPaymentMethodCard | BillingKeyPaymentMethodEasyPay | BillingKeyPaymentMethodMobile | BillingKeyPaymentMethodPaypal | BillingKeyPaymentMethodTransfer;

/**
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
	 */
	name?: string;
	/**
	 * 출생 연도
	 */
	birthYear?: string;
	/**
	 * 성별
	 */
	gender?: Gender;
	/**
	 * 이메일
	 */
	email?: string;
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
	/**
	 * 주소
	 */
	address?: Address;
	/**
	 * 우편번호
	 */
	zipcode?: string;
};

/**
 * 채널 그룹 정보
 */
export type ChannelGroupSummary = {
	/**
	 * 채널 그룹 아이디
	 */
	id: string;
	/**
	 * 채널 그룹 이름
	 */
	name: string;
	/**
	 * 테스트 채널 그룹 여부
	 */
	isForTest: boolean;
};

/**
 * 채널 별 빌링키 발급 응답
 */
export type PgBillingKeyIssueResponse = FailedPgBillingKeyIssueResponse | IssuedPgBillingKeyIssueResponse;

/**
 * 빌링키 정렬 기준
 */
export type BillingKeySortBy = "REQUESTED_AT" | "ISSUED_AT" | "DELETED_AT" | "STATUS_TIMESTAMP";

/**
 * 정렬 방식
 */
export type SortOrder = "DESC" | "ASC";

/**
 * 빌링키 다건 조회 시, 시각 범위를 적용할 필드
 */
export type BillingKeyTimeRangeField = "REQUESTED_AT" | "ISSUED_AT" | "DELETED_AT" | "STATUS_TIMESTAMP";

/**
 * 빌링키 상태
 */
export type BillingKeyStatus = "ISSUED" | "DELETED";

/**
 * 결제가 발생한 클라이언트 환경
 */
export type PaymentClientType = "SDK_MOBILE" | "SDK_PC" | "API";

/**
 * 통합검색 입력 정보
 */
export type BillingKeyTextSearch = {
	field: BillingKeyTextSearchField;
	value: string;
};

/**
 * PG사 결제 모듈
 */
export type PgProvider = "HTML5_INICIS" | "PAYPAL" | "PAYPAL_V2" | "INICIS" | "DANAL" | "NICE" | "DANAL_TPAY" | "JTNET" | "UPLUS" | "NAVERPAY" | "KAKAO" | "SETTLE" | "KCP" | "MOBILIANS" | "KAKAOPAY" | "NAVERCO" | "SYRUP" | "KICC" | "EXIMBAY" | "SMILEPAY" | "PAYCO" | "KCP_BILLING" | "ALIPAY" | "PAYPLE" | "CHAI" | "BLUEWALNUT" | "SMARTRO" | "SMARTRO_V2" | "PAYMENTWALL" | "TOSSPAYMENTS" | "KCP_QUICK" | "DAOU" | "GALAXIA" | "TOSSPAY" | "KCP_DIRECT" | "SETTLE_ACC" | "SETTLE_FIRM" | "INICIS_UNIFIED" | "KSNET" | "PINPAY" | "NICE_V2" | "TOSS_BRANDPAY" | "WELCOME" | "TOSSPAY_V2" | "INICIS_V2" | "KPN" | "KCP_V2" | "HYPHEN";

/**
 * PG사
 */
export type PgCompany = "INICIS" | "NICE" | "KCP" | "DANAL" | "TOSSPAYMENTS" | "MOBILIANS" | "KICC" | "SMARTRO" | "DAOU" | "BLUEWALNUT" | "PAYPAL" | "ALIPAY" | "EXIMBAY" | "PAYMENTWALL" | "SETTLE" | "GALAXIA" | "NAVERPAY" | "KAKAOPAY" | "SMILEPAY" | "KAKAO" | "TOSSPAY" | "CHAI" | "PAYCO" | "PAYPLE" | "SYRUP" | "KSNET" | "WELCOME" | "JTNET" | "KPN" | "HYPHEN";

/**
 * 빌링키 결제 수단
 */
export type BillingKeyPaymentMethodType = "CARD" | "MOBILE" | "EASY_PAY" | "TRANSFER";

/**
 * 포트원 버전
 */
export type PortOneVersion = "V1" | "V2";

/**
 * 카드 수단 정보 입력 양식
 */
export type InstantBillingKeyPaymentMethodInputCard = {
	credential: CardCredential;
};

/**
 * 고객 이름 입력 정보
 *
 * 두 개의 이름 형식 중 한 가지만 선택하여 입력해주세요.
 */
export type CustomerNameInput = {
	/**
	 * 한 줄 이름 형식
	 */
	full?: string;
	/**
	 * 분리형 이름 형식
	 */
	separated?: CustomerSeparatedName;
};

/**
 * 성별
 */
export type Gender = "MALE" | "FEMALE" | "OTHER";

/**
 * 요청된 입력 정보가 유효하지 않은 경우
 *
 * 허가되지 않은 값, 올바르지 않은 형식의 요청 등이 모두 해당됩니다.
 */
export type ChannelSpecificFailureInvalidRequest = {
	type: "INVALID_REQUEST";
	channel: SelectedChannel;
	message?: string;
};

/**
 * PG사에서 오류를 전달한 경우
 */
export type ChannelSpecificFailurePgProvider = {
	type: "PG_PROVIDER";
	channel: SelectedChannel;
	message?: string;
	pgCode: string;
	pgMessage: string;
};

/**
 * 결제수단 정보
 */
export type PaymentMethod = PaymentMethodCard | PaymentMethodEasyPay | PaymentMethodGiftCertificate | PaymentMethodMobile | PaymentMethodTransfer | PaymentMethodVirtualAccount;

/**
 * 결제 금액 세부 정보
 */
export type PaymentAmount = {
	/**
	 * 총 결제금액
	 */
	total: number;
	/**
	 * 면세액
	 */
	taxFree: number;
	/**
	 * 부가세액
	 */
	vat?: number;
	/**
	 * 공급가액
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
	 */
	paid: number;
	/**
	 * 취소금액
	 */
	cancelled: number;
	/**
	 * 취소금액 중 면세액
	 */
	cancelledTaxFree: number;
};

/**
 * 에스크로 정보
 *
 * V1 결제 건의 경우 타입이 REGISTERED 로 고정됩니다.
 */
export type PaymentEscrow = BeforeRegisteredPaymentEscrow | CancelledPaymentEscrow | ConfirmedPaymentEscrow | DeliveredPaymentEscrow | RegisteredPaymentEscrow | RejectedPaymentEscrow | RejectConfirmedPaymentEscrow;

/**
 * 결제 건 내 현금영수증 정보
 */
export type PaymentCashReceipt = CancelledPaymentCashReceipt | IssuedPaymentCashReceipt;

/**
 * 조회 시점 기준
 *
 * 어떤 시점을 기준으로 조회를 할 것인지 선택합니다. CREATED\_AT: 결제 건 생성 시점을 기준으로 조회합니다. STATUS\_CHANGED\_AT: 상태 승인 시점을 기준으로 조회합니다. 결제 건의 최종 상태에 따라 검색 기준이 다르게 적용됩니다. ready -> 결제 요청 시점 기준 paid -> 결제 완료 시점 기준 cancelled -> 결제 취소 시점 기준 failed -> 결제 실패 시점 기준 값을 입력하지 않으면 STATUS\_CHANGED\_AT 으로 자동 적용됩니다.
 */
export type PaymentTimestampType = "CREATED_AT" | "STATUS_CHANGED_AT";

/**
 * 결제 건 상태
 */
export type PaymentStatus = "READY" | "PENDING" | "VIRTUAL_ACCOUNT_ISSUED" | "PAID" | "FAILED" | "PARTIAL_CANCELLED" | "CANCELLED";

/**
 * PaymentMethodType
 */
export type PaymentMethodType = "CARD" | "TRANSFER" | "VIRTUAL_ACCOUNT" | "GIFT_CERTIFICATE" | "MOBILE" | "EASY_PAY";

/**
 * 결제 건 정렬 기준
 */
export type PaymentSortBy = "REQUESTED_AT" | "STATUS_CHANGED_AT";

/**
 * 웹훅 전송 상태
 */
export type PaymentWebhookStatus = "SUCCEEDED" | "FAILED_NOT_OK_RESPONSE" | "FAILED_UNEXPECTED_ERROR";

/**
 * 에스크로 상태
 */
export type PaymentFilterInputEscrowStatus = "REGISTERED" | "DELIVERED" | "CONFIRMED" | "REJECTED" | "CANCELLED" | "REJECT_CONFIRMED";

/**
 * 카드 브랜드
 */
export type CardBrand = "LOCAL" | "MASTER" | "UNIONPAY" | "VISA" | "JCB" | "AMEX" | "DINERS";

/**
 * 카드 유형
 */
export type CardType = "CREDIT" | "DEBIT" | "GIFT";

/**
 * 카드 소유주 유형
 */
export type CardOwnerType = "PERSONAL" | "CORPORATE";

/**
 * 상품권 종류
 */
export type PaymentMethodGiftCertificateType = "BOOKNLIFE" | "SMART_MUNSANG" | "CULTURELAND" | "HAPPYMONEY" | "CULTUREGIFT";

/**
 * 입력 시 발급 유형
 */
export type CashReceiptInputType = "PERSONAL" | "CORPORATE" | "NO_RECEIPT";

/**
 * 결제건 내 현금영수증 상태
 */
export type PaymentCashReceiptStatus = "ISSUED" | "CANCELLED";

/**
 * 시간 범위
 */
export type DateTimeRange = {
	from: string;
	until: string;
};

/**
 * 통합검색 입력 정보
 */
export type PaymentTextSearch = {
	field: PaymentTextSearchField;
	value: string;
};

/**
 * 결제 예약 건 정렬 기준
 */
export type PaymentScheduleSortBy = "CREATED_AT" | "TIME_TO_PAY" | "COMPLETED_AT";

/**
 * 결제 예약 건 상태
 */
export type PaymentScheduleStatus = "SCHEDULED" | "STARTED" | "SUCCEEDED" | "FAILED" | "REVOKED" | "PENDING";

/**
 * 은행
 */
export type Bank = "BANK_OF_KOREA" | "KDB" | "IBK" | "KOOKMIN" | "SUHYUP" | "KEXIM" | "NONGHYUP" | "LOCAL_NONGHYUP" | "WOORI" | "STANDARD_CHARTERED" | "CITI" | "DAEGU" | "BUSAN" | "KWANGJU" | "JEJU" | "JEONBUK" | "KYONGNAM" | "KFCC" | "SHINHYUP" | "SAVINGS_BANK" | "MORGAN_STANLEY" | "HSBC" | "DEUTSCHE" | "JPMC" | "MIZUHO" | "MUFG" | "BANK_OF_AMERICA" | "BNP_PARIBAS" | "ICBC" | "BANK_OF_CHINA" | "NFCF" | "UOB" | "BOCOM" | "CCB" | "POST" | "KODIT" | "KIBO" | "HANA" | "SHINHAN" | "K_BANK" | "KAKAO" | "TOSS" | "MISC_FOREIGN" | "SGI" | "KCIS" | "YUANTA_SECURITIES" | "KB_SECURITIES" | "SANGSANGIN_SECURITIES" | "HANYANG_SECURITIES" | "LEADING_SECURITIES" | "BNK_SECURITIES" | "IBK_SECURITIES" | "DAOL_SECURITIES" | "MIRAE_ASSET_SECURITIES" | "SAMSUNG_SECURITIES" | "KOREA_SECURITIES" | "NH_SECURITIES" | "KYOBO_SECURITIES" | "HI_SECURITIES" | "HYUNDAI_MOTOR_SECURITIES" | "KIWOOM_SECURITIES" | "EBEST_SECURITIES" | "SK_SECURITIES" | "DAISHIN_SECURITIES" | "HANHWA_SECURITIES" | "HANA_SECURITIES" | "TOSS_SECURITIES" | "SHINHAN_SECURITIES" | "DB_SECURITIES" | "EUGENE_SECURITIES" | "MERITZ_SECURITIES" | "KAKAO_PAY_SECURITIES" | "BOOKOOK_SECURITIES" | "SHINYOUNG_SECURITIES" | "CAPE_SECURITIES" | "KOREA_SECURITIES_FINANCE" | "KOREA_FOSS_SECURITIES" | "WOORI_INVESTMENT_BANK";

/**
 * 취소 실패 상태
 */
export type FailedPaymentCancellation = {
	status: "FAILED";
	/**
	 * 취소 내역 아이디
	 */
	id: string;
	/**
	 * PG사 결제 취소 내역 아이디
	 */
	pgCancellationId?: string;
	/**
	 * 취소 총 금액
	 */
	totalAmount: number;
	/**
	 * 취소 금액 중 면세 금액
	 */
	taxFreeAmount: number;
	/**
	 * 취소 금액 중 부가세액
	 */
	vatAmount: number;
	/**
	 * 적립형 포인트의 환불 금액
	 */
	easyPayDiscountAmount?: number;
	/**
	 * 취소 사유
	 */
	reason: string;
	/**
	 * 취소 시점
	 */
	cancelledAt?: string;
	/**
	 * 취소 요청 시점
	 */
	requestedAt: string;
};

/**
 * 취소 요청 상태
 */
export type RequestedPaymentCancellation = {
	status: "REQUESTED";
	/**
	 * 취소 내역 아이디
	 */
	id: string;
	/**
	 * PG사 결제 취소 내역 아이디
	 */
	pgCancellationId?: string;
	/**
	 * 취소 총 금액
	 */
	totalAmount: number;
	/**
	 * 취소 금액 중 면세 금액
	 */
	taxFreeAmount: number;
	/**
	 * 취소 금액 중 부가세액
	 */
	vatAmount: number;
	/**
	 * 적립형 포인트의 환불 금액
	 */
	easyPayDiscountAmount?: number;
	/**
	 * 취소 사유
	 */
	reason: string;
	/**
	 * 취소 시점
	 */
	cancelledAt?: string;
	/**
	 * 취소 요청 시점
	 */
	requestedAt: string;
};

/**
 * 취소 완료 상태
 */
export type SucceededPaymentCancellation = {
	status: "SUCCEEDED";
	/**
	 * 취소 내역 아이디
	 */
	id: string;
	/**
	 * PG사 결제 취소 내역 아이디
	 */
	pgCancellationId?: string;
	/**
	 * 취소 총 금액
	 */
	totalAmount: number;
	/**
	 * 취소 금액 중 면세 금액
	 */
	taxFreeAmount: number;
	/**
	 * 취소 금액 중 부가세액
	 */
	vatAmount: number;
	/**
	 * 적립형 포인트의 환불 금액
	 */
	easyPayDiscountAmount?: number;
	/**
	 * 취소 사유
	 */
	reason: string;
	/**
	 * 취소 시점
	 */
	cancelledAt?: string;
	/**
	 * 취소 요청 시점
	 */
	requestedAt: string;
	/**
	 * 취소 영수증 URL
	 */
	receiptUrl?: string;
};

/**
 * 카드 수단 정보 입력 정보
 */
export type InstantPaymentMethodInputCard = {
	/**
	 * 카드 인증 관련 정보
	 */
	credential: CardCredential;
	/**
	 * 카드 할부 개월 수
	 */
	installmentMonth?: number;
	/**
	 * 무이자 할부 적용 여부
	 */
	useFreeInstallmentPlan?: boolean;
	/**
	 * 무이자 할부 이자를 고객사가 부담할지 여부
	 */
	useFreeInterestFromMerchant?: boolean;
	/**
	 * 카드 포인트 사용 여부
	 */
	useCardPoint?: boolean;
};

/**
 * 가상계좌 수단 정보 입력 정보
 */
export type InstantPaymentMethodInputVirtualAccount = {
	/**
	 * 은행
	 */
	bank: Bank;
	/**
	 * 입금 만료 기한
	 */
	expiry: InstantPaymentMethodInputVirtualAccountExpiry;
	/**
	 * 가상계좌 유형
	 */
	option: InstantPaymentMethodInputVirtualAccountOption;
	/**
	 * 현금영수증 정보
	 */
	cashReceipt: InstantPaymentMethodInputVirtualAccountCashReceiptInfo;
	/**
	 * 예금주명
	 */
	remitteeName?: string;
};

/**
 * 물류 회사
 */
export type PaymentLogisticsCompany = "LOTTE" | "LOGEN" | "DONGWON" | "POST" | "CJ" | "HANJIN" | "DAESIN" | "ILYANG" | "KYUNGDONG" | "CHUNIL" | "POST_REGISTERED" | "GS" | "WOORI" | "HAPDONG" | "FEDEX" | "UPS" | "GSM_NTON" | "SUNGWON" | "LX_PANTOS" | "ACI" | "CJ_INTL" | "USPS" | "EMS" | "DHL" | "KGL" | "GOODSTOLUCK" | "KUNYOUNG" | "SLX" | "SF" | "ETC";

/**
 * 웹훅 발송 시 결제 건 상태
 */
export type PaymentWebhookPaymentStatus = "READY" | "VIRTUAL_ACCOUNT_ISSUED" | "PAID" | "FAILED" | "PARTIAL_CANCELLED" | "CANCELLED" | "PAY_PENDING";

/**
 * 웹훅 실행 트리거
 *
 * 수동 웹훅 재발송, 가상계좌 입금, 비동기 취소 승인 시 발생한 웹훅일 때 필드의 값이 존재합니다.
 */
export type PaymentWebhookTrigger = "MANUAL" | "VIRTUAL_ACCOUNT_DEPOSIT" | "ASYNC_CANCEL_APPROVED" | "ASYNC_CANCEL_FAILED" | "ASYNC_PAY_APPROVED" | "ASYNC_PAY_FAILED";

/**
 * 웹훅 요청 정보
 */
export type PaymentWebhookRequest = {
	/**
	 * 요청 헤더
	 */
	header?: string;
	/**
	 * 요청 본문
	 */
	body: string;
	/**
	 * 요청 시점
	 */
	requestedAt?: string;
};

/**
 * 웹훅 응답 정보
 */
export type PaymentWebhookResponse = {
	/**
	 * 응답 HTTP 코드
	 */
	code: string;
	/**
	 * 응답 헤더
	 */
	header: string;
	/**
	 * 응답 본문
	 */
	body: string;
	/**
	 * 응답 시점
	 */
	respondedAt: string;
};

/**
 * 채널 타입
 */
export type SelectedChannelType = "LIVE" | "TEST";

/**
 * 카드 정보
 */
export type BillingKeyPaymentMethodCard = {
	type: "BillingKeyPaymentMethodCard";
	/**
	 * 카드 상세 정보
	 */
	card?: Card;
};

/**
 * 간편 결제 정보
 */
export type BillingKeyPaymentMethodEasyPay = {
	type: "BillingKeyPaymentMethodEasyPay";
	/**
	 * 간편 결제 PG사
	 */
	provider?: EasyPayProvider;
	/**
	 * 간편 결제 수단
	 */
	method?: BillingKeyPaymentMethodEasyPayMethod;
};

/**
 * 모바일 정보
 */
export type BillingKeyPaymentMethodMobile = {
	type: "BillingKeyPaymentMethodMobile";
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
};

/**
 * 페이팔 정보
 */
export type BillingKeyPaymentMethodPaypal = {
	type: "BillingKeyPaymentMethodPaypal";
};

/**
 * 계좌이체 정보
 */
export type BillingKeyPaymentMethodTransfer = {
	type: "BillingKeyPaymentMethodTransfer";
	/**
	 * 표준 은행 코드
	 */
	bank?: Bank;
	/**
	 * 계좌번호
	 */
	accountNumber?: string;
};

/**
 * 분리 형식 주소
 *
 * oneLine(한 줄 형식 주소) 필드는 항상 존재합니다.
 */
export type Address = OneLineAddress | SeparatedAddress;

/**
 * 빌링키 발급 실패 채널 응답
 */
export type FailedPgBillingKeyIssueResponse = {
	type: "FAILED";
	/**
	 * 채널
	 *
	 * 빌링키 발급을 시도한 채널입니다.
	 */
	channel: SelectedChannel;
	/**
	 * 발급 실패 상세 정보
	 */
	failure: BillingKeyFailure;
};

/**
 * 빌링키 발급 성공 채널 응답
 */
export type IssuedPgBillingKeyIssueResponse = {
	type: "ISSUED";
	/**
	 * 채널
	 *
	 * 빌링키 발급을 시도한 채널입니다.
	 */
	channel: SelectedChannel;
	/**
	 * PG사 거래 아이디
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
 */
export type BillingKeyTextSearchField = "CARD_BIN" | "CARD_NUMBER" | "PG_MERCHANT_ID" | "CUSTOMER_NAME" | "CUSTOMER_EMAIL" | "CUSTOMER_PHONE_NUMBER" | "CUSTOMER_ADDRESS" | "CUSTOMER_ZIPCODE" | "USER_AGENT" | "BILLING_KEY" | "CHANNEL_GROUP_NAME";

/**
 * 카드 인증 관련 정보
 */
export type CardCredential = {
	/**
	 * 카드 번호 (숫자만)
	 */
	number: string;
	/**
	 * 유효 기간 만료 연도 (2자리)
	 */
	expiryYear: string;
	/**
	 * 유효 기간 만료 월 (2자리)
	 */
	expiryMonth: string;
	/**
	 * 생년월일 (yyMMdd) 또는 사업자 등록 번호 (10자리, 숫자만)
	 */
	birthOrBusinessRegistrationNumber?: string;
	/**
	 * 비밀번호 앞 2자리
	 */
	passwordTwoDigits?: string;
};

/**
 * 고객 분리형 이름
 */
export type CustomerSeparatedName = {
	/**
	 * 이름
	 */
	first: string;
	/**
	 * 성
	 */
	last: string;
};

/**
 * 결제수단 카드 정보
 */
export type PaymentMethodCard = {
	type: "PaymentMethodCard";
	/**
	 * 카드 상세 정보
	 */
	card?: Card;
	/**
	 * 승인 번호
	 */
	approvalNumber?: string;
	/**
	 * 할부 정보
	 */
	installment?: PaymentInstallment;
	/**
	 * 카드 포인트 사용여부
	 */
	pointUsed?: boolean;
};

/**
 * 간편 결제 상세 정보
 */
export type PaymentMethodEasyPay = {
	type: "PaymentMethodEasyPay";
	/**
	 * 간편 결제 PG사
	 */
	provider?: EasyPayProvider;
	/**
	 * 간편 결제 수단
	 */
	easyPayMethod?: PaymentMethodEasyPayMethod;
};

/**
 * 상품권 상세 정보
 */
export type PaymentMethodGiftCertificate = {
	type: "PaymentMethodGiftCertificate";
	/**
	 * 상품권 종류
	 */
	giftCertificateType?: PaymentMethodGiftCertificateType;
	/**
	 * 상품권 승인 번호
	 */
	approvalNumber: string;
};

/**
 * 모바일 상세 정보
 */
export type PaymentMethodMobile = {
	type: "PaymentMethodMobile";
	/**
	 * 전화번호
	 */
	phoneNumber?: string;
};

/**
 * 계좌 이체 상세 정보
 */
export type PaymentMethodTransfer = {
	type: "PaymentMethodTransfer";
	/**
	 * 표준 은행 코드
	 */
	bank?: Bank;
};

/**
 * 가상계좌 상세 정보
 */
export type PaymentMethodVirtualAccount = {
	type: "PaymentMethodVirtualAccount";
	/**
	 * 표준 은행 코드
	 */
	bank?: Bank;
	/**
	 * 계좌번호
	 */
	accountNumber: string;
	/**
	 * 계좌 유형
	 */
	accountType?: PaymentMethodVirtualAccountType;
	/**
	 * 계좌주
	 */
	remitteeName?: string;
	/**
	 * 송금인(입금자)
	 */
	remitterName?: string;
	/**
	 * 입금만료시점
	 */
	expiredAt?: string;
	/**
	 * 계좌발급시점
	 */
	issuedAt?: string;
	/**
	 * 가상계좌 결제가 환불 단계일 때의 환불 상태
	 */
	refundStatus?: PaymentMethodVirtualAccountRefundStatus;
};

/**
 * 배송 정보 등록 전
 */
export type BeforeRegisteredPaymentEscrow = {
	status: "BEFORE_REGISTERED";
};

/**
 * 거래 취소
 */
export type CancelledPaymentEscrow = {
	status: "CANCELLED";
	/**
	 * 택배사
	 */
	company: string;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 */
	appliedAt?: string;
};

/**
 * 구매 확정
 */
export type ConfirmedPaymentEscrow = {
	status: "CONFIRMED";
	/**
	 * 택배사
	 */
	company: string;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 */
	appliedAt?: string;
	/**
	 * 자동 구매 확정 처리 여부
	 */
	isAutomaticallyConfirmed: boolean;
};

/**
 * 배송 완료
 */
export type DeliveredPaymentEscrow = {
	status: "DELIVERED";
	/**
	 * 택배사
	 */
	company: string;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 */
	appliedAt?: string;
};

/**
 * 배송 정보 등록 완료
 */
export type RegisteredPaymentEscrow = {
	status: "REGISTERED";
	/**
	 * 택배사
	 */
	company: string;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 */
	appliedAt?: string;
};

/**
 * 구매 거절
 */
export type RejectedPaymentEscrow = {
	status: "REJECTED";
	/**
	 * 택배사
	 */
	company: string;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 */
	appliedAt?: string;
};

/**
 * 구매 거절 확정
 */
export type RejectConfirmedPaymentEscrow = {
	status: "REJECT_CONFIRMED";
	/**
	 * 택배사
	 */
	company: string;
	/**
	 * 송장번호
	 */
	invoiceNumber: string;
	/**
	 * 발송 일시
	 */
	sentAt?: string;
	/**
	 * 배송등록 처리 일자
	 */
	appliedAt?: string;
};

/**
 * 취소된 현금영수증
 */
export type CancelledPaymentCashReceipt = {
	status: "CANCELLED";
	/**
	 * 현금영수증 유형
	 */
	type?: CashReceiptType;
	/**
	 * PG사 영수증 발급 아이디
	 */
	pgReceiptId?: string;
	/**
	 * 승인 번호
	 */
	issueNumber: string;
	/**
	 * 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 현금영수증 URL
	 */
	url?: string;
	/**
	 * 발급 시점
	 */
	issuedAt: string;
	/**
	 * 취소 시점
	 */
	cancelledAt: string;
};

/**
 * 발급 완료된 현금영수증
 */
export type IssuedPaymentCashReceipt = {
	status: "ISSUED";
	/**
	 * 현금영수증 유형
	 */
	type?: CashReceiptType;
	/**
	 * PG사 영수증 발급 아이디
	 */
	pgReceiptId?: string;
	/**
	 * 승인 번호
	 */
	issueNumber: string;
	/**
	 * 총 금액
	 */
	totalAmount: number;
	/**
	 * 면세액
	 */
	taxFreeAmount?: number;
	/**
	 * 통화
	 */
	currency: Currency;
	/**
	 * 현금영수증 URL
	 */
	url?: string;
	/**
	 * 발급 시점
	 */
	issuedAt: string;
};

/**
 * 통합검색 항목
 */
export type PaymentTextSearchField = "ALL" | "PAYMENT_ID" | "TX_ID" | "SCHEDULE_ID" | "FAIL_REASON" | "CARD_ISSUER" | "CARD_ACQUIRER" | "CARD_BIN" | "CARD_NUMBER" | "CARD_APPROVAL_NUMBER" | "CARD_RECEIPT_NAME" | "CARD_INSTALLMENT" | "TRANS_BANK" | "VIRTUAL_ACCOUNT_HOLDER_NAME" | "VIRTUAL_ACCOUNT_BANK" | "VIRTUAL_ACCOUNT_NUMBER" | "PG_MERCHANT_ID" | "PG_TX_ID" | "PG_RECEIPT_ID" | "RECEIPT_APPROVAL_NUMBER" | "PG_CANCELLATION_ID" | "CANCEL_REASON" | "ORDER_NAME" | "CUSTOMER_NAME" | "CUSTOMER_EMAIL" | "CUSTOMER_PHONE_NUMBER" | "CUSTOMER_ADDRESS" | "CUSTOMER_ZIPCODE" | "USER_AGENT" | "BILLING_KEY" | "PROMOTION_ID" | "GIFT_CERTIFICATION_APPROVAL_NUMBER";

/**
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
	 */
	dueDate?: string;
};

/**
 * 가상계좌 발급 방식
 */
export type InstantPaymentMethodInputVirtualAccountOption = {
	/**
	 * 발급 유형
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
 */
export type InstantPaymentMethodInputVirtualAccountCashReceiptInfo = {
	/**
	 * 현금영수증 유형
	 */
	type: CashReceiptInputType;
	/**
	 * 사용자 식별 번호
	 */
	customerIdentityNumber: string;
};

/**
 * 카드 상세 정보
 */
export type Card = {
	/**
	 * 발행사 코드
	 */
	publisher?: string;
	/**
	 * 발급사 코드
	 */
	issuer?: string;
	/**
	 * 카드 브랜드
	 */
	brand?: CardBrand;
	/**
	 * 카드 유형
	 */
	type?: CardType;
	/**
	 * 카드 소유주 유형
	 */
	ownerType?: CardOwnerType;
	/**
	 * 카드 번호 앞 6자리 또는 8자리의 BIN (Bank Identification Number)
	 */
	bin?: string;
	/**
	 * 카드 상품명
	 */
	name?: string;
	/**
	 * 마스킹된 카드 번호
	 */
	number?: string;
};

/**
 * 간편 결제사
 */
export type EasyPayProvider = "SAMSUNGPAY" | "KAKAOPAY" | "NAVERPAY" | "PAYCO" | "SSGPAY" | "CHAI" | "LPAY" | "KPAY" | "TOSSPAY" | "LGPAY" | "PINPAY" | "APPLEPAY" | "SKPAY" | "TOSS_BRANDPAY" | "KB_APP" | "ALIPAY" | "HYPHEN";

/**
 * 간편 결제 수단
 */
export type BillingKeyPaymentMethodEasyPayMethod = BillingKeyPaymentMethodCard | BillingKeyPaymentMethodEasyPayCharge | BillingKeyPaymentMethodTransfer;

/**
 * 한 줄 형식 주소
 *
 * 한 줄 형식 주소만 존재합니다.
 */
export type OneLineAddress = {
	type: "ONE_LINE";
	/**
	 * 주소 (한 줄)
	 */
	oneLine: string;
};

/**
 * 분리 형식 주소
 *
 * 한 줄 형식 주소와 분리 형식 주소 모두 존재합니다. 한 줄 형식 주소는 분리 형식 주소를 이어 붙인 형태로 생성됩니다.
 */
export type SeparatedAddress = {
	type: "SEPARATED";
	/**
	 * 주소 (한 줄)
	 */
	oneLine: string;
	/**
	 * 상세 주소 1
	 */
	addressLine1: string;
	/**
	 * 상세 주소 2
	 */
	addressLine2: string;
	/**
	 * 시/군/구
	 */
	city?: string;
	/**
	 * 주/도/시
	 */
	province?: string;
	/**
	 * 국가
	 */
	country?: Country;
};

/**
 * 발급 실패 상세 정보
 */
export type BillingKeyFailure = {
	/**
	 * 실패 사유
	 */
	message?: string;
	/**
	 * PG사 실패 코드
	 */
	pgCode?: string;
	/**
	 * PG사 실패 사유
	 */
	pgMessage?: string;
	/**
	 * 실패 시점
	 */
	failedAt: string;
};

/**
 * 할부 정보
 */
export type PaymentInstallment = {
	/**
	 * 할부 개월 수
	 */
	month: number;
	/**
	 * 무이자할부 여부
	 */
	isInterestFree: boolean;
};

/**
 * 간편 결제 수단
 */
export type PaymentMethodEasyPayMethod = PaymentMethodCard | PaymentMethodEasyPayMethodCharge | PaymentMethodTransfer;

/**
 * 가상계좌 유형
 */
export type PaymentMethodVirtualAccountType = "FIXED" | "NORMAL";

/**
 * 가상계좌 환불 상태
 */
export type PaymentMethodVirtualAccountRefundStatus = "PENDING" | "PARTIAL_REFUND_FAILED" | "FAILED" | "COMPLETED";

/**
 * 가상계좌 발급 유형
 */
export type InstantPaymentMethodInputVirtualAccountOptionType = "NORMAL" | "FIXED";

/**
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
 * 충전식 포인트 결제 정보
 */
export type BillingKeyPaymentMethodEasyPayCharge = {
	type: "BillingKeyPaymentMethodEasyPayCharge";
};

/**
 * 충전식 포인트 결제 정보
 */
export type PaymentMethodEasyPayMethodCharge = {
	type: "PaymentMethodEasyPayMethodCharge";
	/**
	 * 표준 은행 코드
	 */
	bank?: Bank;
};
