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

app.post("/collecctions", async (req, res) => {
  const { collectionName } = req.body;

  if (!collectionName) {
    return res.send({ message: "No collection name provided" }).end();
  }

  try {
    const connection = await client.connect();
    const dataBase = connection.db(DB);

    // await dataBase.createCollection(collectionName); //sukuria
    await dataBase.dropCollection(collectionName); //istrina

    await connection.close();
  } catch (error) {
    res.send({ message: error }).end();
  }
  res.status(201).send(`deleted ${collectionName} collection`).end();
});

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/filtered-users", async (req, res) => {
  const { firstName, lastName } = req.query;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ firstName, lastName })
      .toArray();

    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .findOne({ _id: ObjectId(id) });
    // .toArray();
    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName, isStudent, age } = req.body || {};

  if (!firstName || !lastName) {
    return res.status(400).send("First name and last name not provided").end();
  }

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return res
      .status(400)
      .send(`${firstName} and ${lastName} are not a string`)
      .end();
  }

  try {
    const connection = await client.connect();
    const dbRes = await connection.db(DB).collection(DBCOLLECTION).insertOne({
      firstName,
      lastName,
      isStudent,
      age,
    });

    await connection.close();

    return res.send(dbRes);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/", (_, res) => {
  res.send({ message: "Welcome to Alex project" });
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));
