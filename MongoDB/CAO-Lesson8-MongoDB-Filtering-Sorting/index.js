const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/pets", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.post("/pet", async (req, res) => {
  const { name, type, age } = req.body || {};

  if (!name) {
    return res.status(400).send("Product name not provided").end();
  }

  if (typeof name !== "string") {
    return res.status(400).send(`${name} is not a string`).end();
  }

  try {
    const connection = await client.connect();
    const data = await connection.db(DB).collection(DBCOLLECTION).insertOne({
      name,
      type,
      age,
    });

    await connection.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.get("/pets/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ type })
      .toArray();

    await connection.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.get("/pets/age/byoldest", async (req, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .sort({ age: -1 })
      .toArray();

    await connection.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.listen(PORT, () => console.info(`Server is running on ${PORT} port`));
