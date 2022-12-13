const express = require("express");
const mysql = require("mysql2/promise");

require("dotenv").config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 5_000;
const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
  // sslmode: process.env.sslmode,
};

console.info(MYSQL_CONFIG);

app.use(express.json());

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );

    await connection.end();

    res.status(201).send({ message: "Table was created" }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error; //console.error({error})
  }
});

app.delete("/table", async (req, res) => {
  const name = req.body?.name.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(`DROP table ${name}`);

    await connection.end();

    res.status(202).send({ message: "Table was suceessfuly dropped" }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error; //console.error({error})
  }
});

app.post("/user", async (req, res) => {
  const firstName = req.body?.firstName.trim();

  if (!firstName) {
    return res
      .status(400)
      .send(`Incoreect first name provided: ${firstName}.`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO users (firstName) VALUES ('${firstName}') `
    );

    res.status(201).send("User successfully created").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is runnig on ${SERVER_PORT} port`)
);
