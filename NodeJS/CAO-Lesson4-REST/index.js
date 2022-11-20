const express = require("express");
const app = express();
const PORT = +process.env.PORT || 5000;
const data = require("./data");

require("dotenv").config();
app.use(express.json());

//all data
app.get("/", (_, res) => {
  res.send(data).end();
});

//filter by car brand
app.get("/:car", (req, res) => {
  const { car } = req.params;
  const userByCar = data.filter(
    (curentCar) => curentCar.car.toLowerCase() === car.toLowerCase()
  );

  res.send(userByCar).end();
});

//filter by id
app.get("/id/:id", (req, res) => {
  const id = +req.params.id;
  const userByID = data.filter((curentUser) => curentUser.id === id);

  res.send({ userByID }).end();
});

//filter users by emails
app.get("/user/email", (_, res) => {
  const usersEmails = data.map((user) => user.email);

  res.send(usersEmails).end();
});

//filter users by gender
app.get("/gender/:gender", (req, res) => {
  const { gender } = req.params;
  const usersByGender = data.filter(
    (user) => user.gender.toLowerCase() === gender.toLowerCase()
  );

  const filtereUserNameLastName = usersByGender.map(
    (user) => `${user.first_name} ${user.last_name}`
  );

  res.send(filtereUserNameLastName).end();
});

app.listen(PORT, () => console.info(`Server is running no port ${PORT}`));
