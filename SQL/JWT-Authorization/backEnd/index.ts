import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getHome } from "./src/modules/getHome";
import { signIn } from "./src/modules/signIn";
import { isLoggedIn } from "./src/utils/isLoggedIn";

const app = express();
const PORT = process.env.SERVER_PORT || 5_001;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/user-settings", isLoggedIn, getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
