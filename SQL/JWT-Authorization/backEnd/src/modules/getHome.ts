import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export type TUserPayload = { userName: string; issuedAt: number };

const jwtSecret = process.env.JWT_SECRET;

export const getHome = (req, res) => {
  try {
    const payload: TUserPayload = jwt.verify(
      req.headers.authorization.replace("Bearer ", ""),
      jwtSecret
    );

    res.send(`Welcome ${payload.userName}`).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }
};
