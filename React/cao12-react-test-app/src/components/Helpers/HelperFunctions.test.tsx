import { multiply, makeLowerCase } from "./HelpersFuction";

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
});

describe("makeLowerCase", () => {
  test("makeLowerCase", () => {
    expect(makeLowerCase("HELLO")).toBe("hello");
  });
});
