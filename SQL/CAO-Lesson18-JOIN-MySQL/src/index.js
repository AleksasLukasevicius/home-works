require("./config");

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const SERVER_PORT = +process.env.SERVER_PORT || 5_000;
const MYSQL_CONFIG = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
};

app.use(express.json());

app.post("/authors-table", async (req, res) => {
  const tableName = req.body?.tableName.trim();
  if (!tableName) {
    return res
      .status(400)
      .send(`Incorrext table name ${tableName} prvoded!`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `CREATE table ${tableName}(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), first_name TEXT, last_name TEXT)`
    );

    await connection.end();

    res
      .status(201)
      .send({ message: `Table ${tableName} was created` })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.post("/books-table", async (req, res) => {
  const tableName = req.body?.tableName.trim();

  if (!tableName) {
    return res
      .status(400)
      .send(`Incorrext table name ${tableName} prvoded!`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `CREATE table ${tableName}(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), author_id DECIMAL(10,0), title TEXT, year YEAR)`
    );

    await connection.end();

    res
      .status(201)
      .send({ message: `Table ${tableName} was created` })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.post("/author", async (req, res) => {
  const firstName = mysql.escape(
    req.body?.firstName.trim().replaceAll("'", "")
  );
  const lastName = mysql.escape(req.body?.lastName.trim().replaceAll("'", ""));

  if (!firstName && !lastName) {
    return res
      .status(400)
      .send(`Not author provided, please input Name and Lastname`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO authors (first_name, last_name) VALUES (${firstName}, ${lastName})`
    );

    await connection.end();

    res
      .status(201)
      .send({ message: `Author ${firstName} ${lastName} was created` })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.post("/book", async (req, res) => {
  const authorId = +mysql.escape(req.body?.authorId).trim().replaceAll("'", "");
  const title = mysql.escape(req.body?.title.trim().replaceAll("'", ""));
  const year = +mysql.escape(req.body?.year).trim().replaceAll("'", "");

  if (!authorId && !title && year) {
    return res
      .status(400)
      .send(`Not book provided, please input book Id, Title and Year`)
      .end();
  }

  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    await connection.execute(
      `INSERT INTO books (author_id, title, year) VALUES (${authorId}, ${title}, ${year})`
    );

    await connection.end();

    res
      .status(201)
      .send({
        message: `Author's Id ${authorId} book: Title ${title}, ${year} year was inserted`,
      })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/books", async (req, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (
      await connection.execute(
        "SELECT books.id, authors.first_name, authors.last_name, books.title, books.year FROM books LEFT JOIN authors ON authors.id = books.author_id"
      )
    )[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.get("/books-count", async (req, res) => {
  try {
    const connection = await mysql.createConnection(MYSQL_CONFIG);

    const result = (
      await connection.execute(
        "SELECT COUNT (booksauthorsdb.books.id) AS bookCount, authors.first_name , authors.last_name, authors.id FROM books INNER JOIN authors ON authors.id = books.author_id GROUP BY author_id"
      )
    )[0];

    await connection.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    return console.error({ error });
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on ${SERVER_PORT}`)
);
