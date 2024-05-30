const express = require("express");
const PortOne = require("@portone/server-sdk");

const app = express();

const webhookSecret = "pzQGE83cSIRKM4/WH5QY+g==";

app.get("/", (_, res) => {
	if (PortOne) res.end("PortOne Server SDK is available");
	else res.end("PortOne Server SDK is not available");
});

app.get("/webhook", express.text(), (req, res) => {
	PortOne.Webhook.verify(webhookSecret, req.body, req.headers).then(
		(payload) => {
			console.log("Valid webhook payload received:", payload);
			res.status(200).end();
		},
		(error) => {
			if (error instanceof PortOne.Webhook.WebhookVerificationError) {
				console.log("Invalid webhook payload received:", error.message);
				res.status(400).end();
			} else {
				console.error(error);
				res.status(500).end();
			}
		},
	);
});

app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
