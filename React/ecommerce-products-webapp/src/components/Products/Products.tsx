import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { TProduct } from "../ProductsContext/types";
import { Product } from "./Product";

export const Products = () => {
  const { fetchedProducts, dispatch } = useContext(ProductsContext);
  const [shouldShowCheapProducts, setShouldShowCheapProducts] = useState(false);
  const [inexpensiveProducts, setInexpensiveProducts] = useState<TProduct[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  const productsToRender = shouldShowCheapProducts
    ? inexpensiveProducts
    : fetchedProducts;

  const handleCheckboxChange = () => {
    // setShouldShowCheapProducts(!shouldShowCheapProducts)
    setShouldShowCheapProducts(
      (prevShouldShowCheapProducts) => !prevShouldShowCheapProducts
    );

    if (inexpensiveProducts && !inexpensiveProducts) {
      setInexpensiveProducts(
        fetchedProducts.filter(
          (fetchedProduct) => (fetchedProduct.price || 0) < 50
        )
      );
    }
  };

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
      <FormControlLabel
        control={
          <Checkbox
            checked={shouldShowCheapProducts}
            onChange={() => handleCheckboxChange}
            name="inexpensive products"
          />
        }
        label="Inexpensive Products"
      />

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <section>
          <div className="title-wrapper">
            <h1>Products</h1>
          </div>

          <div className="products-container">
            {fetchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
