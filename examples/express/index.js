const express = require("express");
const PortOne = require("@portone/server-sdk");

const app = express();

const webhookSecret = "pzQGE83cSIRKM4/WH5QY+g==";

function rawBody(req, res, next) {
	req.setEncoding("utf8");
	req.rawBody = "";
	req.on("data", (chunk) => {
		req.rawBody += chunk;
	});
	req.on("end", () => {
		next();
	});
}

app.get("/", (_, res) => {
	if (PortOne) res.end("PortOne Server SDK is available");
	else res.end("PortOne Server SDK is not available");
});

app.get("/webhook", rawBody, async (req, res, next) => {
	try {
		try {
			await PortOne.Webhook.verify(webhookSecret, req.rawBody, req.headers);
		} catch (err) {
			if (err instanceof PortOne.Errors.WebhookVerificationError) {
				console.log("Invalid webhook payload received:", err.message);
				res.status(400).end();
				return;
			}
			throw e;
		}

		console.log("Valid webhook payload received:", JSON.parse(req.rawBody));
		res.status(200).end();
	} catch (err) {
		next(err);
	}
});

app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
