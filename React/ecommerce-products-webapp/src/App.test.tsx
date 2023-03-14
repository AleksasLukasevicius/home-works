import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { App } from "./App";

describe("App", () => {
  it("should add and remove products", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("cart-count")).toHaveTextContent("0");

      const addButton = screen.getAllByLabelText("add-button")[0];
      fireEvent.click(addButton);
    });

    expect(screen.getByText("cart-count")).toHaveTextContent("1");

    const addButton = screen.getAllByLabelText("add-button")[0];
    fireEvent.click(addButton);

    expect(screen.getByText("cart-count")).toHaveTextContent("1");

    const cartLink = screen.getByLabelText("cart-link");
    fireEvent.click(cartLink);

    expect(screen.getAllByLabelText("cart-product").length).toBe(1);

    const removeButton = screen.getByLabelText("remove-button");
    fireEvent.click(removeButton);

    expect(screen.getByText("cart-count")).toHaveTextContent("0");
  });

  it("matches loading snapshot", () => {
    const tree = renderer.create(<App />);

    expect(tree).toMatchSnapshot();
  });
});
