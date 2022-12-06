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

app.get("/pets", async (req, res) => {
  const order = req.query.order?.toLocaleLowerCase();
  const { types } = req.query;

  try {
    const connection = await client.connect();
    const pets = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ type: { $in: types?.split(",") } })
      .sort({ age: order === "dsc" ? -1 : 1 })
      .toArray();

    await connection.close();

    res.send(pets).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.post("/pet", async (req, res) => {
  const { name, age } = req.body || {};
  const type = req.body.type.trim().toLocaleLowerCase();

  if (!name || !type || !age) {
    return res.status(400).send("Pet name or type or age not provided").end();
  }

  if (typeof name !== "string") {
    return res.status(400).send(`${name} is not a string`).end();
  }

  try {
    const connection = await client.connect();
    const pet = await connection.db(DB).collection(DBCOLLECTION).insertOne({
      name,
      type,
      age,
    });

    await connection.close();

    return res.send(pet).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// app.get("/pets/:type", async (req, res) => {
//   const { type } = req.params;

//   try {
//     const connection = await client.connect();
//     const pets = await connection
//       .db(DB)
//       .collection(DBCOLLECTION)
//       .find({ type })
//       .toArray();

//     await connection.close();

//     res.send(pets).end();
//   } catch (error) {
//     res.status(500).send({ error }).end();
//     throw Error(error);
//   }
// });

// app.get("/pets-age-by-oldest", async (_, res) => {
//   try {
//     const connection = await client.connect();
//     const pets = await connection
//       .db(DB)
//       .collection(DBCOLLECTION)
//       .find()
//       .sort({ age: -1 })
//       .toArray();

//     await connection.close();

//     res.send(pets).end();
//   } catch (error) {
//     res.status(500).send({ error }).end();
//     throw Error(error);
//   }
// });

app.listen(PORT, () => console.info(`Server is running on ${PORT} port`));
