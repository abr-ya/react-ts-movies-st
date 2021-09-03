import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Nav from "./Nav";

test("Компонент содержит ссылку на главную страницу", () => {
  const history = createMemoryHistory();
  const { getByRole } = render(
    <Router history={history}>
      <Nav />
    </Router>,
  );
  const link = getByRole("link", { name: /home$/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});

test("Компонент содержит ссылку на страницу About", () => {
  const history = createMemoryHistory();
  const { getByRole } = render(
    <Router history={history}>
      <Nav />
    </Router>,
  );
  const link = getByRole("link", { name: /about$/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/about");
});
