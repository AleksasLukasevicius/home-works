import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export type TUserPayload = { userName: string; issuedAt: number };

export const getHome = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ error: `User unauthorised` }).end();
  }

  try {
    const payload: TUserPayload = jwt.verify(token, jwtSecret);
    res.send({ message: `Welcome ${payload.userName}` }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: `User not authorized` }).end();
    }
    return res.status(400).end();
  }
};
