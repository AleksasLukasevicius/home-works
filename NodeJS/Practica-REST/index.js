const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const userNames = ["Alex", "Sofija", "Julija", "Murka :)"];

app.use(express.json());
app.use(cors());

app.get("/users", (_, res) => {
  res.send(userNames).end();
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  const isDublicateName = userNames.find((curName) => curName === name);

  if (!name || typeof name !== "string") {
    return res.status(400).end("this is not a name");
  }

  if (isDublicateName) {
    return res.status(400).end("this name is already exists");
  }
  userNames.push(name);

  res.send(userNames).end();
});

app.delete("/users", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(PORT, () => console.info(`Port is runnig on ${PORT}`));
