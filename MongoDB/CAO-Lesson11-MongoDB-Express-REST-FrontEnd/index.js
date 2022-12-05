const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const SERVICESDBCOLLECTION = process.env.SERVICESDBCOLLECTION;
const USERSDBCOLLECTION = process.env.USERSDBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/memberships", async (req, res) => {
  try {
    const connection = await client.connect();
    const memberships = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .sort()
      .toArray();

    await connection.close();

    res.send(memberships).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.post("/memberships", async (req, res) => {
  const { name, price, description } = req.body || {};
  const type = req.body.type.trim().toLocaleLowerCase();

  if (!name || !price || !description) {
    return res
      .status(400)
      .send("Membership name or price or description not provided")
      .end();
  }

  if (typeof name !== "string") {
    return res.status(400).send(`${name} is not a string`).end();
  }

  try {
    const connection = await client.connect();
    const description = await connection
      .db(DB)
      .collection(SERVICESDBCOLLECTION)
      .insertOne({
        name,
        price,
        description,
      });

    await connection.close();

    return res.send(description).end();
  } catch (error) {
    return res.status(500).send({ error }).end();
  }
});

app.get("/", (_, res) => {
  res.send({ message: "Welcome to Alex project" }).end();
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));
