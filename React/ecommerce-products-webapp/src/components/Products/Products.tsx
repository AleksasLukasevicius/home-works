import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { TProduct } from "../ProductsContext/types";
import { Product } from "./Product";

export const Products = () => {
  const { fetchedProducts, dispatch } = useContext(ProductsContext);
  const [shouldShowCheapProducts, setShouldShowCheapProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inexpensiveProducts, setInexpensiveProducts] = useState<TProduct[]>(
    []
  );
  const productsToRender = shouldShowCheapProducts
    ? inexpensiveProducts
    : fetchedProducts;

  const handleCheckboxChange = () => {
    // setShouldShowCheapProducts(!shouldShowCheapProducts)
    setShouldShowCheapProducts(
      (prevShouldShowCheapProducts) => !prevShouldShowCheapProducts
    );

    if (inexpensiveProducts && !inexpensiveProducts.length) {
      setInexpensiveProducts(
        fetchedProducts.filter(
          (fetchedProduct) => (fetchedProduct.price || 0) < 50
        )
      );
      console.info("ok");
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
    <Box component="main" role="products-container">
      {isLoading ? (
        <Typography role="loading-message" variant="h1" component="h1">
          Loading...
        </Typography>
      ) : (
        <Grid component="section">
          <Typography variant="h1" component="h1">
            Products
          </Typography>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={shouldShowCheapProducts}
                  onChange={handleCheckboxChange}
                  name="inexpensive products checkbox"
                />
              }
              label="Inexpensive Products"
            />
          </Box>

          <Grid
            aria-label="products list"
            container
            display="grid"
            gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={2}
            mx="auto"
          >
            {productsToRender.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
