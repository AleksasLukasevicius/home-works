import express from "express";
import { renderHome } from "./modules/renderHome.js";

const app = express();

const PORT = 5_000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", renderHome);

app.listen(PORT, () => console.info(`Server is running on ${PORT}`));
