import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { Box, Grid, Typography } from "@mui/material";
import { ProductActionButon } from "../Products/ProductActionButton";

export const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);
  const CURRENCY = "EUR";
  const currencyFormatter = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: CURRENCY,
  });

  const initialValue = 0;
  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      curPrice + (cartProduct.price || 0) * cartProduct.amount,
    initialValue
  );

  // todo DataGrid

  return (
    <main>
      <Box borderBottom="2px solid black" mb={2}>
        <Typography variant="h1" component="h1">
          Cart products
        </Typography>
      </Box>

      <Box component="ol">
        {cartProducts.map((product) => {
          return (
            <Grid
              component="li"
              container
              height={50}
              alignItems="center"
              justifyContent="space-between"
              mt={2}
              borderBottom="1px solid black"
            >
              <Grid item xs={7}>
                <Typography variant="body1" pl={1}>
                  {product.title}
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                display="flex"
                gap={2}
                justifyContent="space-around"
              >
                <ProductActionButon
                  color="success"
                  title="+"
                  type="addProduct"
                  productId={product.id}
                />

                <Typography>{product.amount}</Typography>

                <ProductActionButon
                  color="error"
                  title="-"
                  type="deleteProduct"
                  productId={product.id}
                />
              </Grid>

              <Grid item xs={2}>
                {product.price ? (
                  <Typography variant="body1" textAlign="right" pr={1}>
                    {/* {product.price?.toFixed(2)} {CURRENCY} */}
                    {currencyFormatter.format(product.price)}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          );
        })}

        <Box display="flex" justifyContent="space-between" mt="20px">
          <Typography pl={1}>Total Price:&nbsp;</Typography>
          <Typography pr={1}>{currencyFormatter.format(totalPrice)}</Typography>
        </Box>
      </Box>
    </main>
  );
};
