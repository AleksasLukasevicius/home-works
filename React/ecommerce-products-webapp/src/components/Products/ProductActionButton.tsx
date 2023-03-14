import { Button } from "@mui/material";
import { ProductsContext } from "../ProductsContext";
import { type FC, useContext } from "react";
import type { TProductActionButtonProps } from "./types";

export const ProductActionButon: FC<TProductActionButtonProps> = ({
  label,
  title,
  type,
  productId,
  color,
}) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <Button
      aria-label={label}
      variant="outlined"
      size="small"
      color={color}
      onClick={() => dispatch({ type, payload: { productId } })}
    >
      {title}
    </Button>
  );
};
