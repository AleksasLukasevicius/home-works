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

app.get("/users-count", async (_, res) => {
  //ToDo if???

  try {
    const connection = await client.connect();
    const usersCount = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .count({ lastName: "Lukaševičius" });

    await connection.close();

    res.send({ usersCount }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/users-uniqnames", async (_, res) => {
  //ToDo if???

  try {
    const connection = await client.connect();
    const usersNames = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .distinct("firstName");

    await connection.close();

    res.send({ usersNames }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/students-avgage", async (_, res) => {
  //ToDo if???

  const pipeline = [
    {
      $match: {
        isStudent: true,
      },
    },
    {
      $group: {
        _id: "$isStudent",
        avgAge: { $avg: "$age" },
      },
    },
    {
      $sort: { avgAge: -1 },
    },
  ];
  try {
    const students = [];
    const connection = await client.connect();
    const aggregationCursor = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .aggregate(pipeline);

    for await (const student of aggregationCursor) {
      students.push(student);
    }

    await connection.close();

    res.send({ students }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on ${PORT} port`));
