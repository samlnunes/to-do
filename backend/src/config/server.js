const port = 3003;

require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const allowCors = require("./cors");
const conneectToDatabase = require("./database");

conneectToDatabase();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function () {
  console.log(`BACKEND ins running on port ${port}.`);
});

module.exports = server;
