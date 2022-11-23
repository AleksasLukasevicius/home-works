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

//all orders
app.get("/orders", async (_, res) => {
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

// new order;
app.post("/order", async (req, res) => {
  const { productName, quantity, isInStock, createDate } = req.body || {};

  if (!productName) {
    return res.status(400).send("Product name not provided").end();
  }

  if (typeof productName !== "string") {
    return res.status(400).send(`${productName} is not a string`).end();
  }

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({
        productName,
        quantity,
        isInStock,
        createDate: new Date(createDate),
      });

    await connection.close();

    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//update order product name  and  quantity
app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { productName, quantity } = req.body;

  try {
    const connection = await client.connect();
    const data = connection.db(DB);

    const order = await data
      .collection(DBCOLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { productName, quantity } }
      );

    await connection.close();

    res.send(order).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

//delete order by id
app.delete("/order/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await client.connect();
    const data = connection.db(DB);

    const order = await data
      .collection(DBCOLLECTION)
      .deleteOne({ _id: ObjectId(id) });

    await connection.close();

    res.send(order).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

//response test
app.post("/", (_, res) => {
  res.send({ message: "Welcome to Alex project" });
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));
