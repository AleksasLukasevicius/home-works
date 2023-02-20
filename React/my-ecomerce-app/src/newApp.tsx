import { useEffect, useState } from "react";
export const App = () => {
  // UZDAVINYS: sutvarkyti any pagal musu pavyzdzius, code refactoring
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const handleClick = (i: number) => {
    const product = products[i];
    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    );
    if (isProductInCart) {
      return setCartProducts((prevCartProducts) => {
        const newCartProducts = prevCartProducts.map((cartProduct) => ({
          ...cartProduct,
          amount: cartProduct.id === product.id ? cartProduct.amount + 1 : 1,
        }));
        return newCartProducts;
      });
    }
    setCartProducts([...cartProducts, { ...product, amount: 1 }]);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(async (res) => {
      const products = await res.json();
      setProducts(products);
      setIsLoading(false);
      // TODO: catchus, if del status code
    });
  }, []);
  console.info({ products, cartProducts });
  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main>
          {products.map((product: { title: string; id: number }, i) => (
            <div
              style={{ backgroundColor: "orange", marginBottom: "2rem" }}
              key={product.id}
            >
              <p>{product.title}</p>
              <button onClick={() => handleClick(i)}>Add To Cart</button>
            </div>
          ))}
        </main>
      )}
    </div>
  );
};
