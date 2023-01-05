const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      req.user = jwt.verify(token, jwtSecret);
      next();
    } catch (error) {
      console.info(error);
      return res.status(401).send({ error: `Invalid token` }).end();
    }
  },
};
