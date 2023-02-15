export const ProductCard = (product: any) => {
  return (
    <div className="produt-card">
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};
