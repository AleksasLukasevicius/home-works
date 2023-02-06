import axios from "axios";
import { useEffect, useState } from "react";

export const Products = ({
  products,
  fetchProducts,
  isLoading,
  setProducts,
}: any) => {
  const [searchTitle, setSearchTitle] = useState("");

  const removeProduct = (id: number) => {
    axios
      .delete(`https://golden-whispering-show.glitch.me/${id}`)
      .then(() => fetchProducts())
      .catch((error) => console.error(error));
  };

  // const filteredProducts = products.filter((product: any) =>
  //   product.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())
  // );

  useEffect(() => {
    if (searchTitle) {
      setProducts((prevProducts: typeof products) =>
        prevProducts.filter((prevProducts: any) =>
          prevProducts.title
            .toLocaleLowerCase()
            .includes(searchTitle.toLocaleLowerCase())
        )
      );
    }
  }, [searchTitle, setProducts]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          {products &&
            products.map((product: any, i: number) => (
              <div key={`${product.id} ${i}`} className="product-container">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p className="price">{product.price}</p>
                <button
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
      <label htmlFor="search-title">Search product:</label>
      <input
        onChange={(event) => setSearchTitle(event.target.value)}
        value={searchTitle}
        name="search-title"
      />
    </>
  );
};
