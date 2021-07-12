import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

test("renders input element", () => {
  const { queryByTestId } = render(<Search />);
  const element = queryByTestId("input");
  expect(element).toBeInTheDocument();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByTestId } = render(<Search />);
    const searchInput = queryByTestId("input");
    userEvent.type(searchInput, "Walmart");
    expect(searchInput.value).toBe("Walmart");
  });
});
