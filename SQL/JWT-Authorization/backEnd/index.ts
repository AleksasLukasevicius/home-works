// import { config } from "dotenv";
// config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getHome } from "./src/modules/getHome";
import { signIn } from "./src/modules/signIn";
import { isLoggedIn } from "./src/modules/utils/isLoggedIn";

const app = express();
const PORT = 5_001;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use(isLoggedIn);

// app.get("/welcome", (_, res) => {
//   res.send({ message: "Welcome!" });
// });

app.get("/user-settings", isLoggedIn, getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
