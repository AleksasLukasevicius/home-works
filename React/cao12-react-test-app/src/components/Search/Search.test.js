import { render, fireEvent } from "@testing-library/react";
import { Search } from "./Search";

it("searchRenderCheck", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("dummySearch");

  expect(input).toBeTruthy();
});

describe("changeInput", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle("dummySearch");

    fireEvent.change(input, { target: { value: "testVAlue" } });
    expect(input.value).toBe("testVAlue");
  });
});
