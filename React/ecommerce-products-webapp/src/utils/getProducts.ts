import axios from "axios";

export const getProducts = async () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((error) => console.error(error));
};
