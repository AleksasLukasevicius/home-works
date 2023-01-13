import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// ne visus routes tikrinam pagal auth, del to .use taikykit pagal poreiki
export const isLoggedIn = (req, res, next) => {
  const accessToken = req.headers.authorization;

  let payload = null;

  const isAuthorized = accessToken;

  if (!isAuthorized) {
    return res.status(401).send({ error: "User unauthorized" }).end();
    // return next("Unauthorized"); // pateikus argumenta iseina is expresso Router (beveik tas pats kaip app)
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;

    payload = jwt.verify(isAuthorized.replace("Bearer ", ""), jwtSecret);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }

  res.send(`Welcome ${payload.userName}`);

  return next();
};
