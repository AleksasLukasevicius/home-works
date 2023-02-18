import { createContext } from "react";
import { TProduct } from "../Types/TProduct";

export const ProductsContext = createContext<TProduct[]>([]);
