import type { TProduct, TProductsAction } from "../ProductsContext/types";

export type TProductProps = {
  product: TProduct;
};

export type TProductActionButtonProps = {
  title: string;
  type: TProductsAction["type"];
  productId: TProduct["id"];
  color?: "primary" | "secondary";
};
