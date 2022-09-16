const express = require("express");
const app = express();

const http = require("http");

const path = require("path");

app.use(express.static("app"));

const server = http.createServer(app);

app.get("*", (_, res) => {
	res.sendFile(path.join(__dirname, "/app/index.html"));
});

server.listen(3000, () => {
	console.log("Server listening on port 3000");
});
