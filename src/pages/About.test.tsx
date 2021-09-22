import React from "react";
import { screen, render } from "@testing-library/react";
import About from "./About";

test("Страница содержит заголовок", () => {
  render(<About />);
  const Header = screen.getByText("About page");
  expect(Header).toBeEnabled();
});

test("Страница содержит текст", () => {
  render(<About />);
  const Text = screen.getByText(/первый абзац/i);
  expect(Text).toBeEnabled();
});
