import { ProductContainer } from "../../styles/ProductContainer";
import { TransparentButton } from "../../styles/TransparentButton";
import type { TProduct } from "../../types";
import type { handleBuyClick } from "../../ProductsContext/types";

export const Product = ({
  product,
  isProductInCart,
  handleBuyClick,
}: {
  product: TProduct;
  isProductInCart: boolean;
  handleBuyClick: handleBuyClick;
}) => {
  return (
    <ProductContainer>
      <img src={product.image} alt={`Product ${product.title}`} />
      <p>{product.title}</p>
      <p>{product.price}</p>

      <TransparentButton onClick={() => handleBuyClick(product.id)}>
        {isProductInCart ? "+" : "Buy"}
      </TransparentButton>

      {isProductInCart ? (
        <TransparentButton onClick={() => handleBuyClick(product.id)}>
          -
        </TransparentButton>
      ) : null}
    </ProductContainer>
  );
};
