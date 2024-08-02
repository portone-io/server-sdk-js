import type { Paths } from "../__generated__/schema";

export type SdkPaths = Pick<
	Paths,
	keyof Paths &
		`${
			| "/payments"
			| "/payment-schedules"
			| "/identity-verifications"
			| "/billing-keys"
			| "/cash-receipts"
			| "/kakaopay"}${string}`
>;

export type MethodType = {
	[Path in keyof SdkPaths]: SdkPaths[Path][keyof SdkPaths[Path]];
}[keyof SdkPaths];
