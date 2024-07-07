import createClient from "openapi-fetch";
import type { paths } from "./generated/api.ts";
import { ForbiddenError, type PortOneError } from "./error.js";

const client = createClient<paths>({
    baseUrl: "https://api.portone.io/",
});

export class PortOneClient {
    apiSecret: string;
    environment?: "LIVE" | "TEST";
    storeId?: string;

    client;

    constructor(apiSecret: string, environment?: "LIVE" | "TEST", storeId?: string) {
        this.apiSecret = apiSecret;
        this.environment = environment;
        this.storeId = storeId;

        this.client = createClient<paths>({
            baseUrl: "https://api.portone.io/",
            headers: {
                "Authorization": `PortOne ${apiSecret}`
            }
        })
    }

    async getPayment(
        paymentId: string,
    ): Promise<> {
        const { data, error, response } = await client.GET("/payments/{paymentId}", {
            params: {
                path: {
                    paymentId,
                },
                query: {
                    storeId: this.storeId,
                }
            }
        });

        if (error?.type === "PAYMENT_NOT_FOUND" ||
            this.environment === 'LIVE' && data?.channel?.type === 'TEST' ||
            this.environment === 'TEST' && data?.channel?.type === 'LIVE'
        ) {
            return undefined;
        }

        switch (error?.type) {
            case "UNAUTHORIZED": throw new UnauthorizedError(error.message ?? error.type);
            case "FORBIDDEN": throw new ForbiddenError(error.message ?? error.type);
            case
        }
    }
}
