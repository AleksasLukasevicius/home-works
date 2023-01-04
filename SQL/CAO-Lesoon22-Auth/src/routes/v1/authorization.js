const express = require("express");
const Joi = require("joi");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");

const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
};

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.info(error);
    res.status(400).send({ error: "Incorrect data sent" }).end();
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const connection = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await connection.execute(`
    INSERT INTO users (email, password)
    VALUES (${mysql.escape(userData.email)}, '${hashedPassword}') `);

    await connection.end();

    return res.status(201).send(data);
  } catch (error) {
    console.info(error);
    res.status(500).send({ error: "Please try again" }).end();
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.info(error);
    res.status(400).send({ error: "Incorrect email or passwor sent" }).end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await connection.execute(`
    SELECT * FROM users
    WHERE email = ${mysql.escape(userData.email)} `);

    await connection.end();

    if (data.length === 0) {
      return res
        .status(400)
        .send({ error: `Incorrect email or password` })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      return res.status(201).send({ message: `User is authorizited` }).end();
    }
    return res.status(400).send({ error: `Incorrect password` }).end();
  } catch (error) {
    console.info(error);
    res.status(500).send({ error: "Please try again" }).end();
  }
});

module.exports = router;
