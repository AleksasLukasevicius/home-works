const express = require("express");

const router = express.Router();

const { isLoggedIn } = require("../../middleware");

router.get("/", isLoggedIn, (req, res) => {
  console.info(req.headers);
  res.status(200).send("Route");
});

module.exports = router;
