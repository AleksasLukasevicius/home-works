const express = require("express");
const mysql = require("mysql2/promise");

require("dotenv").config;

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 5_000;
const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
  sslmode: process.env.sslmode,
};

console.info(MYSQL_CONFIG);

app.use(express.json());

app.post("/table", async (req, res) => {
  const tableName = req.body?.tableName.trim();

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `CREATE table ${tableName}(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), brand TEXT, model TEXT, size TEXT, price DECIMAL (10,2))`
    );
    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is runnig on ${SERVER_PORT} port`)
);
