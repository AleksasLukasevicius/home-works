const express = require("express");
const cors = require("cors");
const { request } = require("express");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const userNames = ["Alex", "Nadia", "Sofija", "Julija", "Murka :)"];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(userNames).end();
});

app.post("/", (req, res) => {
  const { name } = req.body;
  const isDublicateName = userNames.find((curName) => curName === name);

  if (!name || typeof name !== "string") {
    return res.status(400).end("incorrect name provided");
  }

  if (isDublicateName) {
    return res.status(400).end("this name is already exists");
  }

  userNames.push(name);

  res.send(userNames).end();
});

app.listen(PORT, () => console.info(`Port is runnig on ${PORT}`));
