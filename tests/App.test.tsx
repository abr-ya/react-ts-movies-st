import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/components/App";

describe("App Component ...", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders Header and it has correct class", () => {
    const Header = screen.getByText("Hello React!");
    expect(Header).toBeEnabled();
    expect(Header).toHaveClass("title");
  });

  test("renders Add counter button", () => {
    const addButton = screen.getByRole("button", { name: "Add 1 to counter" });
    expect(addButton).toBeInTheDocument();
  });
});
