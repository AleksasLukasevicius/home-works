import { Router } from "express";
import { isLoggedIn } from "../../middleware.js";

const router = Router();

router.get("/", isLoggedIn, (_, res) => {
  // console.info(req.user);
  res.status(200).send({ message: "…provided" });
});

export default router;
