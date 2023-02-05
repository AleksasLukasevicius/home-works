import axios from "axios";
import { useState } from "react";

export const PostProduct = ({ fetchProducts }: any) => {
  const [newProduct, setNewProduct] = useState({
    image: null,
    title: null,
    price: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewProduct({ ...newProduct, [prop]: event.target.value });
  };

  const handleProductSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    axios
      .post("https://golden-whispering-show.glitch.me", {
        title: newProduct.title,
        image: newProduct.image,
        price: newProduct.price,
      })
      .then(() => fetchProducts())
      .catch((error) => console.error(error));
  };

  return (
    <form className="add-product-form" onSubmit={handleProductSubmit}>
      <div className="product-card">
        <input
          value={newProduct.title ?? ""}
          onChange={(event) => handleInputChange(event, "title")}
          placeholder="title"
        />

        <input
          value={newProduct.image ?? ""}
          onChange={(event) => handleInputChange(event, "image")}
          placeholder="image"
        />

        <input
          value={newProduct.price ?? ""}
          onChange={(event) => handleInputChange(event, "price")}
          placeholder="price"
        />

        <button type="submit">Add product</button>
      </div>
    </form>
  );
};
