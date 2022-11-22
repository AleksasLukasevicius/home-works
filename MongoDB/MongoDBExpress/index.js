const { MongoClient } = require("mongodb");
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
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .findOne({ firstName: "Aleksas" })
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body || {};

  if (!firstName || !lastName) {
    return res.status(400).send("Nepateikti first name ir last name").end();
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
