import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome.js";
import { signIn } from "./signIn.js";

const PORT = 5_000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.info(`Server is running on: ${PORT}`));
