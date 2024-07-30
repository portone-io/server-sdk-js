import type { paths } from "./schema";

export type ApiRequest<
	Path extends keyof paths,
	Method extends keyof paths[Path],
	RequestBody,
> = {
	path: string;
	method: Method;
	query?: paths[Path]['parameters']['query'];
	body?: (paths[Path] extends { parameters: { body?: object } }
		? paths[Path]["parameters"]["body"]
		: undefined) &
		RequestBody;
	transform?: (json: unknown) => paths[Path][Method] extends {
		responses: { 200: { content: { "application/json": object } } };
	}
		? paths[Path][Method]["responses"][200]["content"]["application/json"]
		: never;
};

export type GeneratedApiRequest<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = ApiRequest<
	SuccessJson<Path, Method>,
	Query<Path, Method>,
	BodyJson<Path, Method>
> & { method: Method };

export type PrefixedGeneratedApiRequest<
	Prefix extends string,
	Path extends string,
	Method extends string,
> = `${Prefix}${Path}` extends keyof paths
	? Method extends keyof paths[`${Prefix}${Path}`]
		? GeneratedApiRequest<`${Prefix}${Path}`, Method>
		: never
	: never;

type Values<T> = T[keyof T];

export type ApiRequestMethod = Values<{
	[Path in keyof paths]: keyof {
		[Method in keyof Omit<
			paths[Path],
			"parameters"
		> as paths[Path][Method] extends object
			? Method
			: never]: paths[Path][Method];
	};
}>;

export type ApiErrorResponse = Values<
	Omit<
		NonNullable<
			Values<{
				[Path in keyof paths as keyof Omit<
					paths[Path],
					"parameters"
				> extends never
					? never
					: Path]: paths[Path][keyof Omit<paths[Path], "parameters">];
			}>
		>["responses"],
		200
	>
>["content"]["application/json"];

export type SuccessJson<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = paths[Path][Method] extends {
	responses: {
		"200": {
			content: {
				"application/json": unknown;
			};
		};
	};
}
	? paths[Path][Method]["responses"]["200"]["content"]["application/json"]
	: never;

export type Query<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = paths[Path][Method] extends {
	parameters: { query?: unknown };
}
	? Omit<paths[Path][Method]["parameters"]["query"], "requestBody">
	: never;

export type BodyJson<
	Path extends keyof paths,
	Method extends keyof paths[Path],
> = paths[Path][Method] extends {
	requestBody: { content: { "application/json": unknown } };
}
	? paths[Path][Method]["requestBody"]["content"]["application/json"]
	: paths[Path][Method] extends {
				parameters: {
					query?: {
						requestBody?: string;
					};
				};
			}
		? Record<string, unknown>
		: never;
