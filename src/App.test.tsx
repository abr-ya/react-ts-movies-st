import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component ...", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders Title App and it has correct class", () => {
    const Header = screen.getByText("React Movies App");
    expect(Header).toBeEnabled();
    expect(Header).toHaveClass("navbar-brand");
  });
});

// test("Displays correct count of scoop option from server", async () => {
//   // асинхронно, чтобы обработать запрос MSW
//   render(<App />);

//   const scoopCountText = await screen.findByText("We have data about 2 scoops");
//   expect(scoopCountText).toBeInTheDocument();
// });
