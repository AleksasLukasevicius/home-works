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
app.get("/user/:id", (req, res) => {
  const userId = +req.params.id;

  const userById = data.find((curentUser) => curentUser.id === userId);

  if (!userById) {
    return res.status(400).send("User by Id does not exist").end();
  }

  res.send(userById ?? { info: "User not found" });
});

//filter users by emails
app.get("/users/email", (_, res) => {
  const usersEmails = data.map((user) => user.email);

  res.send(usersEmails).end();
});

//filter users by gender
app.get("/gender/:gender", (req, res) => {
  const { gender } = req.params;

  const usersByGender = data.filter(
    (user) => user.gender.toLowerCase() === gender.toLowerCase()
  );

  const filterGenderNameLastName = usersByGender.map(
    (user) => `${user.first_name} ${user.last_name}`
  );

  res.send(filterGenderNameLastName).end();
});

app.listen(PORT, () => console.info(`Server is running no port ${PORT}`));
