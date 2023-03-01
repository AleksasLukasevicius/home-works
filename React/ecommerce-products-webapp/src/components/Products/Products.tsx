import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { Product } from "./Product";

export const Products = () => {
  const { fetchedProducts, dispatch } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) =>
        dispatch({
          type: "setProducts",
          payload: { fetchedProducts: response.data },
        })
      )
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <main>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <section>
          <h1>Products</h1>
          {fetchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
};
