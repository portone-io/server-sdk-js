const express = require("express");
const PortOne = require("@portone/server-sdk");

const app = express();

app.get("/", (_, res) => {
	if (PortOne) res.end("PortOne Server SDK is available");
	else res.end("PortOne Server SDK is not available");
});

app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
