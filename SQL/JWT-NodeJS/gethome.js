import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export const getHome = (req, res) => {
  const token = req.cookies.token;

  console.info(token);

  let payload = null;

  if (!token) {
    return res.status(401).send({ error: `User unauthorised` }).end();
  }

  try {
    payload = jwt.verify(token, jwtSecret);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: `User not authorized` }).end();
    }
    return res.status(400).end();
  }
  res.send({ message: `Welcome ${payload.userName}` }).end();
};
