export type ExtractValues<T> = T[keyof T];
export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};
