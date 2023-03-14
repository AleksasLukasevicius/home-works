import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";
import renderer from "react-test-renderer";
import { ProductsContext } from "../../ProductsContext";

describe("Cart", () => {
  it("should display cart information", () => {
    render(
      <ProductsContext.Provider
        value={{ cartProducts: [], fetchedProducts: [], dispatch: () => {} }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    expect(screen.getByLabelText("cart")).toBeVisible();
    // expect(screen.getByText("Total: 0 €")).toBeVisible();
    // expect(screen.getByText("Checkout")).toBeVisible();
  });

  it.only("matches cart snapshot", () => {
    const tree = renderer.create(<Cart />);

    expect(tree).toMatchSnapshot();
  });
});
