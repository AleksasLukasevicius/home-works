import axios from "axios";

export const Products = ({ products, fetchProducts }: any) => {
  const removeProduct = (id: number) => {
    axios
      .delete(`https://golden-whispering-show.glitch.me/${id}`)
      .then(() => fetchProducts())
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container">
        {products &&
          products.map((product: any, i: number) => (
            <div className="product-container">
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
      ;
    </>
  );
};
