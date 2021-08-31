import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

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

test("Displays correct count of scoop option from server", async () => {
  // асинхронно, чтобы обработать запрос MSW
  render(<App />);

  const scoopCountText = await screen.findByText("We have data about 2 scoops");
  expect(scoopCountText).toBeInTheDocument();
});
