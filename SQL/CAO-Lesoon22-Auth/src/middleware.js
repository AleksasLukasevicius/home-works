const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config");

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      const user = jwt.verify(token, jwtSecret);

      console.info(user);

      next();
    } catch (error) {
      console.info(error);

      res.status(401).send({ error: `Invalid token` });
    }
  },
};
