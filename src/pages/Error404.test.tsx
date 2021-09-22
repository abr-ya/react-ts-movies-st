import React from "react";
import { screen, render } from "@testing-library/react";
import Error404 from "./Error404";

test("Страница содержит заголовок", () => {
  render(<Error404 />);
  const Header = screen.getByText("Error 404");
  expect(Header).toBeEnabled();
});

test("Страница содержит текст", () => {
  render(<Error404 />);
  const Text = screen.getByText(/страница не найдена/i);
  expect(Text).toBeEnabled();
});
