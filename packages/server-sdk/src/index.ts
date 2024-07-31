import { PortOnePaymentApi } from "./payments";

export type * from "./error";
export { InvalidInputError } from "./error";

export * as Webhook from "./webhook";

export class PortOneApi extends PortOnePaymentApi {}
