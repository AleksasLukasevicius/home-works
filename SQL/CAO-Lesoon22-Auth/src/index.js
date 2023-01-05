require("./config");

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const authorization = require("./routes/v1/authorization");
const content = require("./routes/v1/content");

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
app.use(cors());

app.use("/v1/authorization/", authorization);
app.use("/v1/content", content);

app.get("/users", async (_, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (await connection.execute(`SELECT * FROM users `))[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/", (_, res) => {
  res.status(200).send({ message: "Server is running" });
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on ${SERVER_PORT}`)
);
