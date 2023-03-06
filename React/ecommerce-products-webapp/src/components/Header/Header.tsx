import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import type { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <Box component="header">
      <Link to="/">
        <Logo />
      </Link>
      <Typography variant="h2">Ecommerce</Typography>
      <Box component="nav">
        <Grid container>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </Grid>
      </Box>
    </Box>
  );
};
