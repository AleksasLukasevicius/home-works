import express from "express";
import { createConnection } from "mysql2/promise";
import cors from "cors";
import authorization from "./routes/v1/authorization.js";
import content from "./routes/v1/content.js";

import { SERVER_PORT } from "./config.js";
import { MYSQL_CONFIG } from "./config.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/v1/authorization/", authorization);
app.use("/v1/content", content);

app.get("/users", async (_, res) => {
  try {
    const connection = await createConnection(MYSQL_CONFIG);

    const result = (await connection.execute(`SELECT * FROM users `))[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/", (_, res) => {
  res.status(200).send({ message: "Server is running" });
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on ${SERVER_PORT}`)
);
