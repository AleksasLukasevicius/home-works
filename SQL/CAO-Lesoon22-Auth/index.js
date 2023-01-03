require("./config");

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const SERVER_PORT = +process.env.SERVER_PORT || 5_000;
const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
};

app.use(express.json());

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on ${SERVER_PORT}`)
);
