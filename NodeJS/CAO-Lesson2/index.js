const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;

const cars = ["BMW", "VW", "Porsche", "Honda"];

app.use(cors());

app.get("/", (_, res) => {
  res.send(cars);
});

app.listen(PORT, () => console.info(`Server is on ${PORT} port`));
