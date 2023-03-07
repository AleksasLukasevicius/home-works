import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import type { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <Grid
      component="header"
      container
      spacing={1}
      mt={1}
      mb={1}
      alignItems="center"
    >
      <Grid item xs={12} sm={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography variant="h3">Ecommerce</Typography>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Grid
          container
          component="nav"
          justifyContent="space-evenly"
          sx={{
            "& a": {
              // color: "purple",
              // ":hover": { color: "lightgreen" },
              textDecoration: "none",
            },
          }}
        >
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
          <Link to="/products">
            <Typography>Products</Typography>
          </Link>
          <Link to="/cart">
            <Typography>Cart</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
