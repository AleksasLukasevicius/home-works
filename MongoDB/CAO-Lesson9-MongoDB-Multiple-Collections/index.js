const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const CATEGORIESDBCOLLECTION = process.env.CATEGORIESDBCOLLECTION;
const PRODUCTSDBCOLLECTION = process.env.PRODUCTSDBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/categories", async (_, res) => {
  try {
    const connection = await client.connect();
    const categories = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();

    res.send(categories).end();
  } catch (error) {
    res.status(500).send({ error }).end;
    throw Error(error);
  }
});

app.get("/products-with-category", async (req, res) => {
  try {
    const getProductsWithCategoryTitle = async () => {
      const productsWithCategory = [];

      const connection = await client.connect();
      const products = await connection
        .db(DB)
        .collection(PRODUCTSDBCOLLECTION)
        .find()
        .toArray();

      for (const product of products) {
        const categoryConnection = await client.connect();
        const category = await categoryConnection
          .db(DB)
          .collection(CATEGORIESDBCOLLECTION)
          .findOne({ _id: ObjectId(product.category) });

        productsWithCategory.push({
          ...product,
          category: {
            title: category.title,
            categoryId: product.category,
          },
        });
      }

      await connection.close();

      return productsWithCategory;
    };

    const products = await getProductsWithCategoryTitle();

    res.send({ products }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// app.get("/products", async (_, res) => {
//   try {
//     const connection = await client.connect();
//     const categories = await connection
//       .db(DB)
//       .collection(CATEGORIESDBCOLLECTION)
//       .find()
//       .toArray();
//     console.info(categories);

//     const products = await connection
//       .db(DB)
//       .collection(PRODUCTSDBCOLLECTION)
//       .find()
//       .toArray();
//     console.info(products);

//     const productsWithCategory = products.map((product) => {
//       const { title } = categories.find(
//         (category) => category._id.toString() === product.category
//       );
//       console.info(products);

//       return { ...product, category: title };
//     });

//     await connection.close();

//     return res.send(productsWithCategory);
//   } catch (error) {
//     res.status(500).send({ error }).end();
//     throw Error(error);
//   }
// });

// app.get("/products-with-category-title", async (_, res) => {
//   const pipeline = [
//     {
//       $lookup: {
//         from: CATEGORIESDBCOLLECTION,
//         let: { searchId: { $toObjectId: "$category" } },

//         pipeline: [
//           {
//             $match: {
//               $expr: {
//                 $eq: ["$_id", "$$searchId"],
//               },
//             },
//           },
//           { $project: { _id: 0, title: 1 } },
//         ],

//         as: "category",
//       },
//     },
//   ];

//   const productsWithCategoryTitle = [];

//   try {
//     const connection = await client.connect();
//     const products = await connection.db(DB).collection(PRODUCTSDBCOLLECTION);

//     const productsWithCategoriesCursor = products.aggregate(pipeline);

//     for await (const product of productsWithCategoriesCursor) {
//       productsWithCategoryTitle.push(product);
//     }

//     await connection.close();

//     return res.send(productsWithCategoryTitle);
//   } catch (error) {
//     res.status(500).send({ error }).end();
//     throw Error(error);
//   }
// });

app.get("/categoryvalue/", async (_, res) => {
  const pipeline = [
    {
      $match: {},
    },
    {
      $group: {
        _id: "$category",
        totalPrice: { $sum: "$price" },
      },
    },
    { $sort: { totalPrice: -1 } },
  ];

  try {
    const products = [];
    const connection = await client.connect();
    const aggregationCursor = await connection
      .db(DB)
      .collection(PRODUCTSDBCOLLECTION)
      .aggregate(pipeline);

    for await (const product of aggregationCursor) {
      products.push(product);
    }

    await connection.close();

    res.send(products).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is runnig on ${PORT} port`));
