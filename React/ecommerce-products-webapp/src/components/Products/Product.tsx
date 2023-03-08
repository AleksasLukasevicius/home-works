import { ProductsContext } from "..";
import { type FC, useContext, useState } from "react";
import type { TProductProps } from "./types";
import { ProductActionButon } from "./ProductActionButton";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Collapse,
  IconButton,
  IconButtonProps,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductsContext);

  const isProductInCart = cartProducts.some(
    //to do naudti objekta
    (cartProduct) => cartProduct.id === product.id
  );
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      aria-label={`product ${product.id}`}
      sx={{ maxWidth: 250, margin: "0 auto", padding: "0.1em" }}
    >
      <CardMedia
        component="img"
        src={product.image}
        alt={product.title ?? "Sorry no image title"}
        height="100"
        sx={{ objectFit: "contain" }}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Collapse>

        <Typography variant="body2" color="text.secondary">
          Price: {product.price} €
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <ProductActionButon
          color="primary"
          title="+"
          type="addProduct"
          productId={product.id}
        />
        {isProductInCart ? (
          <ProductActionButon
            color="secondary"
            title="-"
            type="deleteProduct"
            productId={product.id}
          />
        ) : null}

        {/* <Box
          display="flex"
          // justify-content="center"
          // text-align="center"
          border="1px solid black"
          borderRadius="5px"
          sx={{
            width: "45px",
            padding: "5px",
            marginLeft: "5px",
            // textAlign: "center",
            justifyContent: "center",
          }}
        >
          test
        </Box> */}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};
