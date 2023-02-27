import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

it("checkButtonRender", () => {
  const { queryByTitle } = render(<Button />);
  const button = queryByTitle("dummyButton");

  expect(button).toBeTruthy();
});

describe("clickkButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    const button = queryByTitle("dummyButton");

    expect(button.innerHTML).toBe("Press here");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("You pressed me");
  });
});
