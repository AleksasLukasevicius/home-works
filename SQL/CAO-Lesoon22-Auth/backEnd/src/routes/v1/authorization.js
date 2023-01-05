import express from "express";
import Joi from "joi";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { MYSQL_CONFIG } from "../../config.js";
import { jwtSecret } from "../../config.js";

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    res.status(400).send({ error: "Incorrect data sent" }).end();
    return console.info(error);
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const connection = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await connection.execute(`
    INSERT INTO users (email, password)
    VALUES (${mysql.escape(userData.email)}, '${hashedPassword}') `);

    await connection.end();

    return res.status(201).send(data).end();
  } catch (error) {
    res.status(500).send({ error: "Please try again" }).end();
    return console.info(error);
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.info(error);
    return res
      .status(400)
      .send({ error: "Incorrect email or passwor sent" })
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await connection.execute(`
    SELECT * FROM users
    WHERE email = ${mysql.escape(userData.email)} `);

    await connection.end();

    if (!data.length) {
      return res
        .status(401)
        .send({ error: `Incorrect email or password` })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );

      return res
        .status(201)
        .send({ message: `Succesufuly logined in`, token })
        .end();
    }

    return res.status(401).send({ error: `Incorrect password` }).end();
  } catch (error) {
    res.status(500).send({ error: "Please try again" }).end();
    return console.info(error);
  }
});

export default router;
