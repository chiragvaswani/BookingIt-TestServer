const http = require("http");

const { mongoConnect } = require("booking-it");

const app = require("./app");

const server = http.createServer(app);

async function startServer() {
  // Please pass the URL to the MongoDB database to the function given below before running the application
  await mongoConnect("");
  server.listen(3000, () => console.log("Server runnning on port 3000"));
}

startServer();
