import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../tests/testing-library-utils";
import App from "./App";

test("Открывается главная, по клику переходим на About", async () => {
  const history = createMemoryHistory();

  // асинхронно, чтобы обработать запрос MSW
  renderWithRedux(
    <Router history={history}>
      <App />
    </Router>,
    {},
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();

  // переход
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about/i), leftClick);

  // проверка перехода
  expect(screen.getByText(/about page/i)).toBeInTheDocument();
});

// что-то пока не ломается!..
// test("Переход по неверной ссылке", async () => {
//   const history = createMemoryHistory();
//   history.push("/broken");
//   render(
//     <Router history={history}>
//       <App />
//     </Router>,
//     {},
//   );

//   // screen.debug();
//   expect(screen.getByText(/error 404/i)).toBeInTheDocument();
// });
