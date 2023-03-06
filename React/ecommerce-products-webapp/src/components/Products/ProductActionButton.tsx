import { Button } from "@mui/material";
import { ProductsContext } from "../ProductsContext";
import { type FC, useContext } from "react";
import type { TProductActionButtonProps } from "./types";

export const ProductActionButon: FC<TProductActionButtonProps> = ({
  title,
  type,
  productId,
  color,
}) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <Button
      variant="outlined"
      size="small"
      color={color}
      onClick={() => dispatch({ type, payload: { productId } })}
    >
      {title}
    </Button>
  );
};
