import type { paths } from "./schema";
import type { ExtractValues } from "./utils/types";

export type SdkPaths = Pick<
	paths,
	keyof paths &
		`${
			| "/payments"
			| "/payment-schedules"
			| "/identity-verifications"
			| "/billing-keys"
			| "/kakaopay"}${string}`
>;

// biome-ignore lint/suspicious/noExplicitAny: keyof any
type TryPick<T, K extends keyof any> = K extends keyof T ? T[K] : never;

export type ParamSchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<SdkPaths[Path][Method]>["parameters"]["path"];

export type QuerySchema<
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

export type BodySchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<
	NonNullable<SdkPaths[Path][Method]>["requestBody"]
>["content"]["application/json"];

export type ResponseSchema<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = TryPick<
	TryPick<
		ExtractValues<NonNullable<SdkPaths[Path][Method]>["responses"]>,
		"content"
	>,
	"application/json"
>;

export type PrefixedPath<Prefix extends string, Path extends string> = Extract<
	keyof SdkPaths,
	`${Prefix}${Path}`
>;

export type ApiRequestMethod = ExtractValues<{
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

export type SpecificApiErrorResponse<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<
	TryPick<
		TryPick<
			ExtractValues<
				Omit<NonNullable<SdkPaths[Path][Method]>["responses"], 200>
			>,
			"content"
		>,
		"application/json"
	>
>;

export type SuccessJson<
	Path extends keyof SdkPaths,
	Method extends ApiRequestMethod,
> = NonNullable<
	paths[Path][Method]
>["responses"][200]["content"]["application/json"];
