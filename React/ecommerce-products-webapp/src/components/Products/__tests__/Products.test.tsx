import { render, screen, waitFor } from "@testing-library/react";
import { Products } from "../Products";
import renderer from "react-test-renderer";

describe("Products", () => {
  // it || test
  it("should render Products correctly", async () => {
    render(<Products />);

    expect(screen.getByRole("products-container")).toBeVisible(); //jei nepasiekiamas naudoti toBeInTheDocument()
  });

  it("should render Products list correctly", async () => {
    render(<Products />);

    await waitFor(() => {
      expect(screen.getByLabelText("products list")).toBeVisible();
    });
  });

  // it("should shoe filtered Products list", async () => {
  //   render(<Products />);

  //   const checkbox = screen.getByRole("checkbox", {
  //     name: "Inexpensive Products",
  //   });

  //   expect(checkbox).toBeInTheDocument();

  //   await waitFor(() => {
  //     expect(screen.getByLabelText("products list")).toBeVisible();
  //     expect(
  //       screen.getByLabelText("products list")
  //     ).childNodes.length.toBeCreateThan(0);
  //   });

  //   setTimeout(() => {}, 3000);

  //   const fetchedProducts =
  //     screen.getByLabelText("products list").children.length;

  //   console.info(fetchedProducts);
  // });

  // it("should show loading message while fetching", () => {
  //   render(<Products />);

  //   expect(screen.getByRole("loading-message")).toBeVisible();
  //   expect(screen.getByRole("loading-message").textContent).toBe("Loading...");
  // });

  // it.only("matches snapshot", () => {
  //   const tree = renderer.create(<Products />);

  //   expect(tree).toMatchSnapshot();
  // });

  //skip jei norim viena test praleisti
  // it.skip("should render Products list correctly", async () => {
  //   render(<Products />);

  //   await waitFor(() => {
  //     expect(screen.getByLabelText("products list")).toBeVisible();
  //   });
  // });
});
