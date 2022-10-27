import { getRobots } from "./fetch.js";
import { createTable } from "./createTable.js";
import { createVIPCheckBox } from "./createVIPCheckBox.js";

const robots = await getRobots();

createTable(robots);

createVIPCheckBox(robots);