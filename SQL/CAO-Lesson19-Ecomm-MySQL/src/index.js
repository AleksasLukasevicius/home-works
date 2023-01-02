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
};

app.use(express.json());

app.get("/products", async (req, res) => {
  const limit = +mysql.escape(req.query.limit).replaceAll("'", "");

  if (typeof limit !== "number" || limit <= 0 || Number.isNaN(limit)) {
    return res
      .status(400)
      .send({
        error: `Please provide a proper LIMIT in the URL query: current LIMIT ${limit} is incorrect.`,
      })
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (
      await connection.execute(`SELECT * FROM products LIMIT ${limit}`)
    )[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.post("/products", async (req, res) => {
  const title = mysql.escape(req.body.title?.trim().replaceAll("'", ""));
  const image = mysql.escape(req.body.image?.trim().replaceAll("'", ""));
  const price = +mysql.escape(req.body.price).trim().replaceAll("'", "");

  if (!title || !image || !price) {
    return res.status(400).send(`Not product provided`).end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO products (title, image, price) VALUES (${title}, ${image}, ${price})`
    );

    await connection.end();

    res
      .status(201)
      .send({
        message: `Product: ${title} successfully created`,
      })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/products/:id", async (req, res) => {
  // const { id } = +req.params;
  const id = +mysql.escape(req.params?.id).trim().replaceAll("'", "");

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
      await connection.execute(`SELECT * FROM products WHERE id=${id}`)
    )[0];

    if (!result.length) {
      return res.status(404).send(`Product with Id: ${id} not found`).end();
    }

    await connection.end();

    res.status(200).send(result).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.delete("/products/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const cleanProductId = +id.replaceAll("'", "");
  const { password } = req.body;
  const psw = 123;

  if (
    cleanProductId <= 0 ||
    Number.isNaN(cleanProductId) ||
    typeof cleanProductId !== "number"
  ) {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${cleanProductId} incorrect.`,
      })
      .end();
  }

  if (!password) {
    return res
      .status(400)
      .send({
        error: `Please provide a proper passowrd.`,
      })
      .end();
  }

  if (password !== psw) {
    return res
      .status(400)
      .send({
        error: `Password is incorrect.`,
      })
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (
      await connection.execute(
        `DELETE FROM products WHERE id = ${cleanProductId}`
      )
    )[0];

    await connection.end();

    if (!result.affectedRows) {
      return res
        .status(404)
        .send({
          message: `Product with id:${cleanProductId} is not exist and not deleted`,
        })
        .end();
    }

    res
      .status(202)
      .send({ message: `Product with id:${cleanProductId} was deleted` })
      .end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error({ error });
  }
});

app.get("/orders/:id", async (req, res) => {
  const id = +mysql.escape(req.params?.id).trim().replaceAll("'", "");

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
      await connection.execute(
        `SELECT orders.id, orders.customer_name, orders.customer_email, products.title, products.image, products.price FROM orders INNER JOIN products ON products.id = orders.product_id WHERE orders.id = ${id}`
      )
    )[0];

    if (!result.length) {
      return res.status(404).send(`Order with Id: ${id} not found`).end();
    }

    await connection.end();

    res.status(200).send(result).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error;
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on ${SERVER_PORT}`)
);
