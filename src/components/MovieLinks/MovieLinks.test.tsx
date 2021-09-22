import React from "react";
import { render } from "@testing-library/react";
import MovieLinks from "./MovieLinks";

test("Компонент содержит ссылку на сайт (новая вкладка)", () => {
  const { getByText } = render(<MovieLinks site="ya.ru" imdb="tt6334354" />);
  const link = getByText("официальный сайт");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "ya.ru");
  expect(link).toHaveAttribute("target", "_blank");
});

test("Компонент содержит ссылку на сайт IMDb (новая вкладка)", () => {
  const { getByText } = render(<MovieLinks site="ya.ru" imdb="tt6334354" />);
  const link2 = getByText(/страница на сайте imdb/i);
  expect(link2).toBeInTheDocument();
  expect(link2).toHaveAttribute("href", "https://www.imdb.com/title/tt6334354");
  expect(link2).toHaveAttribute("target", "_blank");
});
