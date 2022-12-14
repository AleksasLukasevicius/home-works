const express = require("express");
const mysql = require("mysql2/promise");

require("dotenv").config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 5_000;
const MYSQL_CONFIG =
  "mysql://doadmin:AVNS_dRiXCcaOAGjr077Zhzs@db-mysql-fra1-82114-do-user-13084810-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED";

// {
//   user: process.env.user,
//   password: process.env.password,
//   host: process.env.host,
//   port: process.env.port,
//   database: process.env.database,
//   sslmode: process.env.sslmode,
// };

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
  const tableName = req.body?.tableName.trim();
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
      `INSERT INTO ${tableName} (firstName) VALUES ('${firstName}') `
    );

    res.status(201).send("User successfully created").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.get("/users", async (req, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    // const result = (await connection.execute(`SELECT * FROM users`))[0];
    const result = await connection.execute(`SELECT * FROM users`);

    await connection.end();

    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.get("/user/:id", async (req, res) => {
  // const { id } = +req.params;
  const id = +req.params.id.trim();

  console.log({ id });

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = await connection.execute(
      `SELECT * FROM users WHERE id=${id}`
    );

    await connection.end();

    console.log(result);

    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.post("/users", async (req, res) => {
  const { firstName } = req.body;

  if (typeof firstName !== "string" || !firstName) {
    return res
      .status(400)
      .send(`Incoreect first name provided: ${firstName}.`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = await connection.execute(
      `SELECT * FROM users WHERE firstName='${firstName}'`
      // `SELECT * FROM users WHERE firstName='${mysql.escape(firstName)}'`
    );

    await connection.end();

    res.send(result[0]).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is runnig on ${SERVER_PORT} port`)
);
