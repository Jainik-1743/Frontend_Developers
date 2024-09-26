import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("it increments the count when the button is clicked", async () => {
    const button = screen.getByRole("button", { name: /click me/i });

    const countDisplay = screen.getByText(/button clicked: 0 times/i);

    await userEvent.click(button);

    expect(countDisplay).toHaveTextContent("Button clicked: 2 times");
  });

  it('renders the text "Peru"', () => {
    expect(screen.getByText("Peru")).toBeInTheDocument();
  });

  test('renders the text "Peru"', () => {
    expect(screen.getByText("Peru")).toBeInTheDocument();
  });
});
