const express = require("express");

const usersRouter = require("./users-router");
const authRouter = require("./auth-router");
const authenticator = require("./authenticator");

const server = express();

server.use(express.json());

server.use("/api/users", authenticator, usersRouter);
server.use("/api/auth", authRouter);

module.exports = server;