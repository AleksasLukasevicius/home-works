import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { Box, Grid, Typography } from "@mui/material";
import { ProductActionButon } from "../Products/ProductActionButton";

export const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);
  const CURRENCY = "€";
  // const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  //   style: "currency",
  //   currency: CURRENCY,
  // });

  const initialValue = 0;
  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      (curPrice + (cartProduct.price || 0)) * cartProduct.amount,
    initialValue
  );

  // todo DataGrid

  return (
    <main>
      <div className="title-wrapper">
        <h1>Cart products</h1>
      </div>
      <Box>
        <ul>
          {cartProducts.map((product) => {
            return (
              <Grid component="li">
                <Grid item xs={6}>
                  <Typography>{product.title}</Typography>
                </Grid>

                <Grid item xs={3}>
                  <ProductActionButon
                    color="primary"
                    title="+"
                    type="addProduct"
                    productId={product.id}
                  />

                  <Typography textAlign="center">{product.amount}</Typography>
                  <ProductActionButon
                    color="secondary"
                    title="-"
                    type="deleteProduct"
                    productId={product.id}
                  />
                </Grid>

                <Grid item xs={3}>
                  {product.price ? (
                    <Typography textAlign="right">
                      {product.price} {CURRENCY}
                      {/* {currencyFormatter.format(product.price)} */}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            );
          })}
        </ul>
        {/* <Box display="flex" justifyContent="center" mt="20px">
          <Typography>Total Price:&nbsp;</Typography>
          <Typography textAlign="right">
            {currencyFormatter.format(totalPrice)}
          </Typography>
        </Box> */}
      </Box>
    </main>
  );
};
