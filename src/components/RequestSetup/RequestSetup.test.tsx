import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import RequestSetup from "./RequestSetup";
import { execPath } from "process";

describe("Компонент настройки запроса ...", () => {
  let getByRole;
  const handlerPage = jest.fn();
  const handlerSorting = jest.fn();
  const handlerQuery = jest.fn();
  beforeEach(() => {
    const props = {
      query: "",
      page: 1,
      pages: 10,
      setPage: handlerPage,
      setSorting: handlerSorting,
      setQuery: handlerQuery,
    };
    const renderResult = render(<RequestSetup {...props} />);
    getByRole = renderResult.getByRole;
  });

  test("Компонент рендерит поисковую строку", () => {
    const Search = getByRole("textbox", { name: "Search" });
    expect(Search).toBeEnabled();
    expect(Search).toHaveAttribute("type", "text");
    expect(Search).toHaveTextContent("");
  });

  test("Компонент обрабатывает ввод поискового запроса", () => {
    const Search = getByRole("textbox", { name: "Search" });
    expect(Search).toBeEnabled();
    fireEvent.change(Search, { target: { value: "Lord" } });
    fireEvent.submit(Search);
    expect(handlerQuery).toHaveBeenCalled();
    expect(handlerQuery).toHaveBeenCalledWith("Lord");
    expect(Search).toHaveValue("");
  });

  test("Компонент рендерит селект подборки", () => {
    const Discover = getByRole("textbox", { name: "discoverSelect" });
    expect(Discover).toBeEnabled();
    expect(Discover).toHaveAttribute("type", "text");
    expect(Discover).toHaveTextContent("");
  });

  // ToDo: разобраться с Select
  // test("Корректно обрабатывает выбор подборки", () => {
  //   const Discover = getByRole("textbox", { name: "discoverSelect" });
  //   expect(Discover).toBeEnabled();
  //   fireEvent.select(Discover, { value: "popularity.desc" });
  //   expect(handlerSorting).toHaveBeenCalled();
  //   expect(handlerPage).toHaveBeenCalled();
  //   expect(handlerPage).toHaveBeenCalledWith(1);
  // });

  test("Компонент корректно вызывает сеттер страниц", () => {
    const Button3 = getByRole("button", { name: "3" });
    expect(Button3).toBeEnabled();
    fireEvent.click(Button3);
    expect(handlerPage).toHaveBeenCalled();
    expect(handlerPage).toHaveBeenCalledWith(3);
  });

  test("Изменение страницы не задевает другие сеттеры", () => {
    const Button3 = getByRole("button", { name: "3" });
    expect(Button3).toBeEnabled();
    fireEvent.click(Button3);
    expect(handlerSorting).not.toHaveBeenCalled();
    expect(handlerQuery).toHaveBeenCalledTimes(1); // в тесте Lord
  });
});
