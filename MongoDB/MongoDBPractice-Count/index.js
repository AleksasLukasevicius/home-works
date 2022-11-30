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

app.get("/users", async (_, res) => {
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

app.get("/users-count", async (req, res) => {
  const { firstName } = req.body;
  try {
    const elements = [];
    const connection = await client.connect();

    const usersCount = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .count({ firstName });

    const users = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .distinct("firstName");

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const element of aggregationCursor) {
      elements.push(element);
    }

    await connection.close();

    res.send({ elements, usersCount, users }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on ${PORT} port`));
