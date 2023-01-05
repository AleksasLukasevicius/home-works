import cookieParser from "cookie-parser";
import express from "express";
import { getHome } from "./getHome";
import { signIn } from "./signIn";

const PORT = 5_000;

const app = express();

app.use(express.json());
app.use(cookieParser() as any);

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.info(`Server is running on: ${PORT}`));
