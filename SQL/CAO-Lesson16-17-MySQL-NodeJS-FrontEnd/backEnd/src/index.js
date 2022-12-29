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
app.use(cors());

app.get("/cars", async (_, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (await connection.execute(`SELECT * FROM cars`))[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.post("/cars", async (req, res) => {
  const title = mysql.escape(req.body.title?.trim().replaceAll("'", ""));
  const image = mysql.escape(req.body.image?.trim().replaceAll("'", ""));
  const price = +mysql.escape(req.body.price).trim().replaceAll("'", "");
  const numberplates = mysql
    .escape(req.body.numberplates)
    .trim()
    .toLocaleUpperCase();

  const sendBadRequestRsponse = (message) => {
    res.status(400).send({ error: message }).end();
  };

  if (!title || !image || !price || !numberplates) {
    return sendBadRequestRsponse(`Not car data provided`);
  }

  if (numberplates.length !== 8) {
    return sendBadRequestRsponse("Numberplates must be 6 symbols!");
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO cars (title, image, price, numberplates) VALUES (${title}, ${image}, ${price}, ${numberplates})`
    );

    await connection.end();

    res
      .status(201)
      .send({
        message: `Item: ${title} successfully created`,
      })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/cars/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");

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

    const result = (
      await connection.execute(`SELECT * FROM cars WHERE id = ${id}`)
    )[0];

    await connection.end();

    if (!result.length) {
      return res.status(404).send(`Car with Id: ${id} not found`).end();
    }

    res.status(202).send(result).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error({ error });
  }
});

app.delete("/cars/:id", async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");

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

    const result = (
      await connection.execute(`DELETE FROM cars WHERE id = ${id}`)
    )[0];

    await connection.end();

    if (!result.affectedRows) {
      return res
        .status(404)
        .send({
          message: `Car with id:${id} is not exist and not deleted`,
        })
        .end();
    }

    res
      .status(202)
      .send({ message: `Item with id:${id} was deleted` })
      .end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error({ error });
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on ${SERVER_PORT}`)
);
