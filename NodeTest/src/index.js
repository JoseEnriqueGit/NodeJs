// require('./dbConnection')
// const server = require('./server')

import { connectDb } from "./dbConnection.js";
import server from "./server.js";

const PORT = 5000;

async function runServer() {
	await server.listen(PORT);
	console.log(`Running in port ${PORT}`);
}
runServer();
connectDb();