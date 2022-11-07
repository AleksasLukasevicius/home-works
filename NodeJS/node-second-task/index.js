const express = require("express");
const cors = require("cors");

const app = express()
const PORT = 5_000;

app.use(express.json());

app.get("/", (_, res) => {
    res.send("Sveiki!");
});

app.post("/", (req, res) => {
    console.info({ requestBody: req.body });

    const age = req.body.age || 5;

    const provideAge = age ? age : 0;

    console.info({ age, provideAge });

    res.send({ ageTimesTwo: age * 2 });
});

const users = [{ name: "Jonas" }, { name: "Tomas" }, { name: "Alex" }];

app.get("/:userId", (req, res) => {

    const userId = +req.params?.userId;

    if (userId <= userId.lenght - 1 && userId >= 0) {
        res.send(users[userId])
    }

    res.send(`Yuor user id is${userId}`);
});

app.listen(PORT, () => console.info(`Server is on ${PORT} port`)) 