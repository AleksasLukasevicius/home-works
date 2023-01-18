import express from "express";
import cors from "cors";
import { SERVER_PORT } from "./config.js";
import {
  getUserCount,
  loginUser,
  registerUser,
} from "./routes/v1/authorization.js";
import {
  getTutorials,
  getUserTutorials,
  postTutorial,
} from "./routes/v1/tutorials.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/v1/authorization/register", registerUser);
app.post("/v1/authorization/login", loginUser);
app.post("/v1/tutorials", postTutorial);

app.get("/v1/authorization/users", getUserCount);
app.get("/v1/tutorials", getTutorials);
app.get("/v1/user-tutorials/:id", getUserTutorials);

app.get("/", (_, res) => {
  res.send({ message: "Server is running" });
});

app.all("*", (_, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));
