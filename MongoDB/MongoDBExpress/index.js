const { MongoClient } = require("mongodb");
const express = require("express");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db("node-mongo-first-project")
      .collection("users")
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/", async (_, res) => {
  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db("node-mongo-first-project")
      .collection("users")
      .insertOne({ firstName: "Lukas", lastName: "Lukaševičius", age: 26 });
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
