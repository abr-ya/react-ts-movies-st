import React from "react";
import { screen, fireEvent, act } from "@testing-library/react";
import { renderWithRedux } from "../tests/testing-library-utils";
import App from "./App";

describe("App Component ...", () => {
  beforeEach(() => {
    renderWithRedux(<App />, {});
  });

  test("renders Title App and it has correct class", () => {
    const Header = screen.getByText("React Movies App");
    expect(Header).toBeEnabled();
    expect(Header).toHaveClass("navbar-brand");
  });
});

test("Хоббиты упоминаются в ответе 6 раз...", async () => {
  // асинхронно, чтобы обработать запрос MSW
  renderWithRedux(<App />, {});

  const Hobbits = await screen.findAllByText(/hobbit/i);
  //console.log(Hobbits);
  //screen.debug();
  expect(Hobbits).toHaveLength(6);
});

test("Поиск фильма...", async () => {
  // асинхронно, чтобы обработать запрос MSW
  const { findByLabelText, findByTestId } = renderWithRedux(<App />, {});

  const input = await findByLabelText("Search");
  const form = await findByTestId("form");

  act(() => {
    fireEvent.change(input, { target: { value: "Hobbit" } });
    fireEvent.submit(form);
  });

  // и что тут проверить ?
});
