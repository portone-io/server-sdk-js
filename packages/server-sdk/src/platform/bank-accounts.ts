import { createPlatformRequest } from ".";
import type { ApiRequest, PrefixedGeneratedApiRequest } from "../api";
import type { components } from "../schema";

type BankAccountsRequest<
	Path extends string,
	Method extends string,
> = PrefixedGeneratedApiRequest<"/platform/bank-accounts", Path, Method>;
function createBankAccountsRequest<
	Response,
	Query,
	Body,
	Request extends ApiRequest<Response, Query, Body>,
>(request: Request): Request {
	return createPlatformRequest({
		...request,
		path: `/bank-accounts${request.path}`,
	});
}

export type GetBankAccountHolderRequest = BankAccountsRequest<
	"/{bank}/{accountNumber}/holder",
	"get"
>;
export type Bank = components["schemas"]["Bank"];
export type GetBankAccountHolderOptions =
	| {
			/**
			 * 생년월일
			 */
			birthdate: string;
	  }
	| {
			/**
			 * 사업자등록번호
			 */
			businessRegistrationNumber: string;
	  };
export function createGetBankAccountHolderRequest(
	bank: Bank,
	accountNumber: string,
	options?: GetBankAccountHolderOptions,
): GetBankAccountHolderRequest {
	return createBankAccountsRequest({
		path: `/${bank}/${accountNumber}/holder`,
		method: "get",
		query: options,
	});
}
