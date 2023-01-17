import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import Joi from "joi";
import { MYSQL_CONFIG } from "../../config.js";
import { jwtSecret } from "../../config.js";
import jwt from "jsonwebtoken";

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

export const registerUser = async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: error.message }).end();
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const connection = await mysql.createConnection(MYSQL_CONFIG);
    await connection.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );

    await connection.end();

    return res.status(201).send("User registered successfully").end(); // res.send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ error: "Incorrect email or password" }).end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await connection.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );

    await connection.end();

    if (!data.length) {
      return res
        .status(400)
        .send({ error: "Incorrect email or password" })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );

      return res.send({ message: "Succesfully logged in", token }).end();
    }

    return res.status(400).send({ error: "Incorrect email or password" }).end();
  } catch (error) {
    return res.status(500).send({ error: "Unexpected error" });
  }
};
