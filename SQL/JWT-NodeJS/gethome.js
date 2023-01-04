import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.jwtSecret;

export const getHome = (req, res) => {
  const token = req.cookie.token;

  let payload = null;

  if (!token) {
    return res.status(401).sent({ error: `User unauthorised` }).end();
  }

  try {
    payload = jwt.verify(token, jwtSecret);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).sent({ error: `User not authorized` }).end();
    }
    return res.status(400).end();
  }
  res.send({ message: `Welcome ${payload.userName}` }).end();
};
