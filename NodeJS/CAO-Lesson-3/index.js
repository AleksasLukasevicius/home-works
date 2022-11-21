const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const users = [
  { name: "Alex", lastName: "Lukaševičius" },
  { name: "Nadia", lastName: "Lukaševičienė" },
  { name: "Sofija", lastName: "Lukaševičiūtė" },
  { name: "Julija", lastName: "Lukaševičiūtė" },
  { name: "Murka", lastName: ":)" },
];

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send(users).end();
});

app.post("/", (req, res) => {
  const { name, lastName } = req.body;
  const isDublicateName = users.find((user) => user.name === name);
  const isDublicateLastName = users.find((user) => user.lastName === lastName);

  if (!name || typeof name !== "string") {
    return res.status(400).end("Incorrect name provided");
  }

  if (isDublicateName && isDublicateLastName) {
    return res.status(400).end("This name or last name is already exists");
  }

  users.push({ name, lastName });

  res.send(users).end();
});

app.listen(PORT, () => console.info(`Port is runnig on ${PORT}`));
