import jwt from "jsonwebtoken";
import { TUserPayload } from "./getHome";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export const signIn = (req, res) => {
  const { userName, password } = req.body;

  const expiresIn = 60;
  const issuedAt = new Date().getTime();

  const userPayload: TUserPayload = { userName, issuedAt };

  const users = {
    Jonas: "kaledos",
    Alex: "velykos",
  };

  if (typeof userName !== "string" || typeof password !== "string") {
    return res.status(400).send({ error: "Data is incorrect" });
  }

  if (!userName || !password) {
    return res
      .status(400)
      .send({ error: "Please provide userName and password" });
  }

  if (password !== users[userName]) {
    return res.status(400).send({ error: "Incorrect login data" });
  }

  const token = jwt.sign(userPayload, jwtSecret, {
    algorithm: "HS256",
    expiresIn,
  }); // kartais vadinama access token. ExpiresIn turetu buti .env faile

  // res.cookie("token", token, { maxAge: expiresIn * 1_000 });

  res.send({ accessToken: token, issuedAt: issuedAt }).end();
};
