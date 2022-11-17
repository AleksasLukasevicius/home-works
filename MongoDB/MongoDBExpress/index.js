const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;

app.use(express.json());
app.use(cors());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(dbCollection)
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).send("Nepateikti firstName ir lastName").end();
    return;
  }

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res.status(400).send(`${firstName} and ${lastName} are not a string`).end();
    return;
  }

  try {
    const connection = await client.connect();
    const dbRes = await connection.db(DB).collection(dbCollection).insertOne({
      firstName,
      lastName,
      isStudent: false,
      age: 35,
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
