const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5_000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Good")
});

app.listen(PORT, () => console.info(`Server is on ${PORT} port`)) 