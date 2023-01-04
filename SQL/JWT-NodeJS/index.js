import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome.js";
import { signIn } from "./signin.js";

const PORT = 5_000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/home", getHome);
app.post("/signin", signIn);

app.listen(PORT, () => console.info(`Server is running on: ${PORT}`));
