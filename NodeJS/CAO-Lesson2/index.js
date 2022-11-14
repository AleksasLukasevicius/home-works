const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5_000;

const cars = ["BMW", "VW", "Porsche"];

app.use(cors());

app.get("/", (req, res) => {
    res.send(cars)
});

app.listen(PORT, () => console.info(`Server is on ${PORT} port`)) ;