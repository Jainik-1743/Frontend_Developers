import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the text "Peru"', () => {
    expect(screen.getByText("Peru")).toBeInTheDocument();
  });

  test('renders the text "Peru"', () => {
    expect(screen.getByText("Peru")).toBeInTheDocument();
  });
});
