const http = require("http");

const { mongoConnect } = require("booking-it");

const app = require("./app");

const server = http.createServer(app);

async function startServer() {
  await mongoConnect("");
  server.listen(3000, () => console.log("Server runnning on port 3000"));
}

startServer();
