const { query } = require("express");
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
  const tableName = req.body?.tableName.trim();

  if (!tableName) {
    return res
      .status(400)
      .send(`Incorrect table name provided: ${tableName}`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `CREATE table ${tableName}(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), brand varchar(35), model varchar(35), size varchar(35), price DECIMAL (10,2))`
    );

    await connection.end();

    res
      .status(201)
      .send({ message: `Table ${tableName} was created` })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error; //console.error({error})
  }
});

app.post("/shirt", async (req, res) => {
  const brand = req.body?.brand.trim();
  const model = req.body?.model.trim();
  const size = req.body?.size.trim();
  const { price } = req.body;

  if (!brand || !model || !size || !price) {
    return res.status(400).send(`not all shirt details are provided`).end();
  }

  switch (size) {
    case "XS":
    case "S":
    case "M":
    case "L":
    case "XL":
      res
        .status(201)
        .send({ message: `Add Size ${size} to database` })
        .end();
      // console.info("Add to database");
      break;
    default:
      return res
        .status(400)
        .send("Unrecognized size. Size must be one of sizes: XS, S, M, L, XL.")
        .end();
  }

  // if (
  //   size !== "XS" ||
  //   size !== "S" ||
  //   size !== "M" ||
  //   size !== "L" ||
  //   size !== "XL"
  // ) {
  //   return res
  //     .status(400)
  //     .send("Size must be one of these: XS, S, M, L, XL")
  //     .end();
  // }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}','${model}','${size}','${price}')`
    );

    await connection.end();

    res
      .status(201)
      .send({
        message: `Shirt Brand: ${brand}, Model: ${model}, Size: ${size} successfully created`,
      })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error(); //console.error({error})
  }
});

app.get("/shirts", async (_, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = await connection.execute(
      `SELECT * FROM shirts ORDER BY  price ASC LIMIT 10`
    );

    await connection.end();

    res.status(201).send(result[0]).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error(); //console.error({error})
  }
});
app.get("/shirts-by-size", async (req, res) => {
  const size = req.query.size.toLocaleUpperCase();
  const limit = req.query.limit;

  if (!size || !limit) {
    return res
      .status(400)
      .send(`not Size or Limit shirt details are provided`)
      .end();
  }

  const query =
    size && limit
      ? `SELECT * FROM shirts WHERE size='${size}' ORDER BY price ASC LIMIT ${limit}`
      : `SELECT * FROM shirts ORDER BY price ASC LIMIT 10`;

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = await connection.execute(query);

    await connection.end();

    res.status(201).send(result[0]).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error(); //console.error({error})
  }
});

app.get("/", async (_, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.end();

    res.status(201).send({ message: `Server is running` }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error(); //console.error({error})
  }
});

app.get("*", async (_, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.end();

    res.status(404).send({ message: `Page not found` }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error(); //console.error({error})
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is runnig on ${SERVER_PORT} port`)
);
