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
      .collection(SERVICESDBCOLLECTION)
      .find()
      .sort()
      .toArray();

    await connection.close();

    res.send(memberships).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
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
    const membership = await connection
      .db(DB)
      .collection(SERVICESDBCOLLECTION)
      .insertOne({
        name,
        price,
        description,
      });

    await connection.close();

    res.send(membership).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.delete("/memberships/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "No id provided" }).end();
  }

  try {
    const connection = await client.connect();
    const data = connection.db(DB);

    const membership = await data
      .collection(SERVICESDBCOLLECTION)
      .deleteOne({ _id: ObjectId(id) });

    await connection.close();

    if (membership.deletedCount) {
      return res.status(200).send(membership).end();
    }
    res
      .status(404)
      .send({ message: "An order with the provided id does not exists." })
      .end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.get("/users/:order", async (req, res) => {
  try {
    const connection = await client.connect();
    const users = await connection
      .db(DB)
      .collection(USERSDBCOLLECTION)
      .find()
      .sort()
      .toArray();

    await connection.close();

    res.send(users).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.post("/users", async (req, res) => {
  const { name, surname, email, service_id } = req.body || {};

  if (!name || !surname || !email || service_id) {
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
    const membership = await connection
      .db(DB)
      .collection(USERSDBCOLLECTION)
      .insertOne({
        name,
        surname,
        email,
        service_id,
      });

    await connection.close();

    res.send(membership).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/", (_, res) => {
  res.send({ message: "Welcome to Alex project" }).end();
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));
