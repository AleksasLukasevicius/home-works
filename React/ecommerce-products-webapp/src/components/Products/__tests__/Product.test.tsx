import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Product } from "../Product";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "category",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe("Product", () => {
  it("should render Product", () => {
    render(<Product product={product} />);

    expect(screen.getByLabelText("product")).toBeVisible();
  });

  it("should display product information", () => {
    render(<Product product={product} />);

    expect(screen.getByText(product.title)).toBeVisible();
    expect(screen.getByText(`Price: ${product.price} €`)).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute("src", product.image);
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByLabelText("show more")).toBeVisible();
  });

  it("matches product snapshot", () => {
    const tree = renderer.create(<Product product={product} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
