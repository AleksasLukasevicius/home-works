// require("dotenv").config();
// const dotenv = require("dotenv")

import dotenv from "dotenv";
dotenv.config();

export const jwtSecret = process.env.JWT_SECRET;

export const SERVER_PORT = +process.env.SERVER_PORT || 5000;

export const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
};
