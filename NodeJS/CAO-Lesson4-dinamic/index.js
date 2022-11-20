const express = require("express");
const app = express();
const PORT = +process.env.PORT || 5000;

require("dotenv").config();
app.use(express.json());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

// app.get("/", (_, res) => {
//   console.info(cars);
//   res.send(cars).end();
// });

app.get("/cars/:brand", (req, res) => {
  const { brand } = req.params;

  const models = cars[brand];

  res.send(models).end();
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
