import type { TProduct, TProductsAction } from "../ProductsContext/types";

export type TProductProps = {
  product: TProduct;
};

export type TProductActionButtonProps = {
  label?: string;
  title: string;
  type: TProductsAction["type"];
  productId: TProduct["id"];
  color?: "primary" | "secondary" | "error" | "inherit" | "success" | "warning";
};
