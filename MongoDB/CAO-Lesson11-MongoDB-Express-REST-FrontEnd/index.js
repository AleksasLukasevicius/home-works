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

app.get("/memberships", async (_, res) => {
  try {
    const connection = await client.connect();
    const memberships = await connection
      .db(DB)
      .collection(SERVICESDBCOLLECTION)
      .find()
      .sort({ price: -1 })
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

  if (!name || !price || !description) {
    return res
      .status(400)
      .send("Membership name or price or description not provided")
      .end();
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
  const shouldOrderAscendingly = req.params.order?.toLowerCase() === "asc";

  const usersWithMembershipName = [];
  try {
    const connection = await client.connect();
    const users = await connection
      .db(DB)
      .collection(USERSDBCOLLECTION)
      .find()
      .sort({
        lastName: shouldOrderAscendingly ? 1 : -1,
        firstName: shouldOrderAscendingly ? 1 : -1,
      })
      .toArray();

    for (const user of users) {
      const service = await connection
        .db(DB)
        .collection(SERVICESDBCOLLECTION)
        .findOne({ _id: ObjectId(user.service_id) });

      usersWithMembershipName.push({ ...user, membership_name: service.name });
    }

    await connection.close();

    res.send(usersWithMembershipName).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.post("/users", async (req, res) => {
  const { firstName, lastName, email, service_id } = req.body || {};

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!firstName || !lastName || !email) {
    return res
      .status(400)
      .send("Membership name or price or description not provided")
      .end();
  }

  if (typeof firstName !== "string") {
    return res.status(400).send(`${firstName} is not a string`).end();
  }

  try {
    const connection = await client.connect();
    const user = await connection
      .db(DB)
      .collection(USERSDBCOLLECTION)
      .insertOne({
        firstName,
        lastName,
        email,
        service_id,
        userIp,
      });

    await connection.close();

    res.send(user).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));
