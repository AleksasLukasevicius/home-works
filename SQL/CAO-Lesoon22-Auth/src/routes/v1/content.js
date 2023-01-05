import { Router } from "express";

const router = Router();

import { isLoggedIn } from "../../middleware.js";

router.get("/", isLoggedIn, (req, res) => {
  // console.info(req.user);
  res.status(200).send("Route");
});

export default router;
