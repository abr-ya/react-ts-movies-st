import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BsSearch from "./BsSearch";

test("Search Component рендерит инпут", () => {
  render(<BsSearch setter={jest.fn()} value="" />);
  const input = screen.getByRole("textbox");
  expect(input).toBeEnabled();
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveTextContent("");
});

test("Search Component: передает значение в сеттер, очищается при отправке", () => {
  const handler = jest.fn();
  const { getByLabelText, getByTestId } = render(
    <BsSearch setter={handler} value="" />,
  );
  const input = getByLabelText("Search");
  const form = getByTestId("form");
  fireEvent.change(input, { target: { value: "Lion" } });
  expect(input).toHaveValue("Lion");
  fireEvent.submit(form);
  expect(handler).toHaveBeenCalled();
  expect(handler).toHaveBeenCalledWith("Lion");
  expect(input).toHaveValue("");
});
