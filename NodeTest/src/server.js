import cors from "cors";
import express from "express";
import postsRouters from "./routes/letterRouters.js";

const server = express();

// middlewares
// server.use(cors())

server.use(cors());

server.use(express.json())

// Routes
server.use(postsRouters);

export default server;