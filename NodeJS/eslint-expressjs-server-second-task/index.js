const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5_000;
const users = [{ name: "Jonas" }, { name: "Tomas" }, { name: "Alex" }];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
	res.send("Sveiki!");
});

app.get("/date", (req, res) => {
	const { locale } = req.query || "en-US";
	// const locale = req.query.locale || "en-US";

	const formatedDate = new Date().toLocaleString("locale");

	res.send(formatedDate);
});

app.post("/", (req, res) => {
	console.info({ requestBody: req.body });

	const age = req.body?.age || 100;

	const provideAge = age ? age : 0;

	console.info({ age, provideAge });

	res.send({ ageTimesTwo: provideAge * 2 });
});

// app.get("/:userId", (req, res) => {
//     console.info(req.params);
//     const userId = +req.params?.userId;
//     console.info(users[userId]);

//     if (userId <= users.length - 1 && userId >= 0) {
//         res.send(users[userId])
//     } else {
//         res.send({ info: "User not found" });
//     }

// });

app.get("/:userName", (req, res) => {
	console.info(req.params);
	const { userName } = req.params;
	// const userName = req.params.userName;
	const user = users.find(
		(curentUser) =>
			curentUser.name.toLocaleLowerCase() ===
			userName.toLocaleLowerCase().trim()
	);

	res.send(user ?? { info: "User not found" });
});

app.listen(PORT, () => console.info(`Server is on ${PORT} port`));
