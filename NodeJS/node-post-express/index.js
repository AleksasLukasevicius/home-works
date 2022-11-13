const express = require("express");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/", (_, res) => {
	res.send({ message: "Welcome to Alex project" });
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));