require("./config");

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const SERVER_PORT = +process.env.SERVER_PORT || 5_000;
const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
  // sslmode: process.env.sslmode,
};

app.use(express.json());

app.post("/table", async (req, res) => {
  const tableName = mysql.escape(req.body?.tableName.trim());
  const cleanTableName = tableName.replaceAll("'", "");

  if (!cleanTableName) {
    return res
      .status(400)
      .send(`Incorrect table name provided: ${cleanTableName}`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `CREATE table ${cleanTableName}(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), title TEXT)`
    );

    await connection.end();

    res
      .status(201)
      .send({ message: `Table ${cleanTableName} was created` })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.post("/item", async (req, res) => {
  const title = mysql.escape(req.body?.title.trim());
  const cleanTitle = title.replaceAll("'", "");

  if (!cleanTitle) {
    return res.status(400).send(`Not title provided`).end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO items (title) VALUES ('${cleanTitle}')`
    );

    await connection.end();

    res
      .status(201)
      .send({
        message: `Item: ${cleanTitle} successfully created`,
      })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/items", async (req, res) => {
  const limit = mysql.escape(req.query.limit);
  const cleanLimit = +limit.replaceAll("'", "");

  if (
    typeof cleanLimit !== "number" ||
    cleanLimit <= 0 ||
    Number.isNaN(cleanLimit)
  ) {
    return res
      .status(400)
      .send({
        error: `Please provide a proper LIMIT in the URL query: current LIMIT ${cleanLimit} is incorrect.`,
      })
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (
      await connection.execute(`SELECT * FROM items LIMIT ${cleanLimit}`)
    )[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.delete("/item/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const cleanItemId = +id.replaceAll("'", "");

  if (!cleanItemId) {
    return res.status(404).send(`not id provided`).end();
  }

  if (
    cleanItemId <= 0 ||
    Number.isNaN(cleanItemId) ||
    typeof cleanItemId !== "number"
  ) {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${cleanItemId} incorrect.`,
      })
      .end();
  }
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(`DELETE FROM items WHERE id = ${cleanItemId}`);

    await connection.end();

    res
      .status(202)
      .send({ message: `Item with id:${cleanItemId} was deleted` })
      .end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error({ error });
  }
});

app.get("/", async (_, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.end();

    res.status(200).send({ message: `Server is running and connected` }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is runnig on ${SERVER_PORT} port`)
);
