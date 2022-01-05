const http = require('http')

const {mongoConnect} = require('booking-it');

const app = require('app')

const server = http.createServer(app);

async function startServer() {
	await mongoConnect("mongodb+srv://root:Gu9LK4MPwc8DkyH@cluster0.zonle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
	server.listen(3000, () => console.log("Server runnning on port 3000"));
}

startServer();
