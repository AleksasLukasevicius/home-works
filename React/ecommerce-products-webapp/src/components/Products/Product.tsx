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
    <Card sx={{ maxWidth: 255 }}>
      <CardMedia
        component="img"
        alt={`${product.title}`}
        // height="150"
        // width="75"
        src={`${product.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
      <CardActions>
        <ProductActionButon
          title="+"
          type="addProduct"
          productId={product.id}
        />
        {isProductInCart ? (
          <ProductActionButon
            title="-"
            type="deleteProduct"
            productId={product.id}
          />
        ) : null}

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
