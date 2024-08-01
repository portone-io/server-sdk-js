import type { components, operations, paths } from "../__generated__/schema";
import type { ExtractValues } from "./utils/types";

export type SdkPaths = Pick<
	paths,
	keyof paths &
		`${
			| "/payments"
			| "/payment-schedules"
			| "/identity-verifications"
			| "/billing-keys"
			| "/cash-receipts"
			| "/kakaopay"}${string}`
>;

type TryPick<T, K> = K extends keyof T ? T[K] : never;

export type PathSchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<SdkPaths[Path][Method]>["parameters"]["path"];

type QuerySchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<NonNullable<SdkPaths[Path][Method]>["parameters"]["query"]>;

export type EffectiveQuerySchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = Extract<
	Omit<QuerySchema<Path, Method>, "requestBody">,
	QuerySchema<Path, Method>
>;

type BodySchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<
	NonNullable<SdkPaths[Path][Method]>["requestBody"]
>["content"]["application/json"];

export type PrefixedPath<Prefix extends string, Path extends string> = Extract<
	keyof SdkPaths,
	`${Prefix}${Path}`
>;

type ApiRequestMethod = ExtractValues<{
	[Path in keyof SdkPaths]: keyof {
		[Method in keyof NonNullable<
			Omit<SdkPaths[Path], "parameters">
		> as keyof SdkPaths[Path][Method] extends never ? never : Method]: unknown;
	};
}>;

export type ApiErrorResponse = NonNullable<
	ExtractValues<
		Omit<
			NonNullable<
				ExtractValues<Omit<SdkPaths[keyof SdkPaths], "parameters">>
			>["responses"],
			200
		>
	>
>["content"]["application/json"];

type Responses<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<paths[Path][Method]>["responses"];

export type SuccessJson<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = Responses<Path, Method>[200]["content"]["application/json"];

export type ErrorJson<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = TryPick<
	TryPick<
		Responses<Path, Method>[Exclude<keyof Responses<Path, Method>, 200>],
		"content"
	>,
	"application/json"
>;

export type AvailableMethods<T> = keyof {
	[K in keyof T as T[K] extends undefined ? never : K]: object;
} &
	ApiRequestMethod;

export type AvailableRequestBody<
	Path extends keyof SdkPaths,
	Method extends AvailableMethods<SdkPaths[Path]>,
> = components["schemas"][keyof {
	[Operation in keyof operations as operations[Operation] extends SdkPaths[Path][Method]
		? `${Capitalize<Operation>}Body` & keyof components["schemas"]
		: never]: never;
}];

export type MergedBody<
	Path extends keyof SdkPaths,
	Method extends AvailableMethods<SdkPaths[Path]>,
> = { requestBody: string } extends QuerySchema<Path, Method>
	? NonNullable<AvailableRequestBody<Path, Method>>
	: BodySchema<Path, Method>;
