import axios from "axios";
import express, { json } from "express";

const app = express();
const PORT = 5_000;

app.use(express.json());

// app.get("/users", (_, res) => {
//   axios
//     .get("https://api.github.com/users")
//     .then((usersResponse) => {
//       res.send(usersResponse.data).end();
//     })
//     .catch((error) => {
//       console.error(error);
//       return res.status(error.status).send(error).end();
//     });
// });

// app.get("/users/:id", (req, res) => {
//   const id = +req.params.id;
//   axios
//     .get("https://api.github.com/users")
//     .then((usersResponse) => {
//       const userById = usersResponse.data.find((user) => user.id === id);

//       if (!userById) {
//         return res.status(400).send({ message: "User doesnt exist" }).end();
//       }

//       res.send(userById).end();
//     })
//     .catch((error) => {
//       console.error(error);
//       return res.status(error.status).send(error).end();
//     });
// });

//FETCH
app.get("/users/:id", (req, res) => {
  const id = +req.params.id;

  fetch("https://api.github.com/users")
    .then(async (response) => {
      const usersResponse = await response.json();
      const userById = usersResponse.find(
        (user: { id: number }) => user.id === id
      );

      if (!userById) {
        return res.status(400).send({ message: "User doesnt exist" }).end();
      }

      res.send(userById).end();
    })
    .catch((error) => {
      console.error(error);
      return res.status(error.status).send(error).end();
    });
});

app.listen(PORT, () => console.info(`Server is running on: ${PORT}`));
