import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Product } from "../Product";

describe("Product", () => {
  it("should render Product", () => {
    render(<Product />);
    expect(screen.getByLabelText("product")).toBeVisible();
  });

  it("should show product title", () => {
    render(<Product />);
    expect(screen.getByText("Fjallraven", { exact: false }));
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Product />);

    expect(tree).toMatchSnapshot();
  });
});
