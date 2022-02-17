import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BrandMarkupTable from "./BrandMarkupTable";
import { execPath } from "process";

describe("Таблица брендовых наценок ...", () => {
  let getByRole;
  const data = [
    {
      brand_id: "brand01",
      brand_name: "KS-IS",
      min: 3,
      desired: 4,
    },
    {
      brand_id: "brand02",
      brand_name: "Promate",
      min: 1,
      desired: 4,
    },
  ];
  const handlerEdit = jest.fn();
  const handlerDelete = jest.fn();
  beforeEach(() => {
    const props = {
      data,
      editHandler: handlerEdit,
      deleteHandler: handlerDelete,
      markupIsUpdating: false,
    };
    const renderResult = render(<BrandMarkupTable {...props} />);
    getByRole = renderResult.getByRole;
  });

  test("Кнопка удаления первого бренда вызывает обработчик с правильным ID", () => {
    const DelBtn1 = getByRole("button", { name: "delete_brand01" });
    expect(DelBtn1).toBeEnabled();
    fireEvent.click(DelBtn1);
    expect(handlerDelete).toHaveBeenCalled();
    expect(handlerDelete).toHaveBeenCalledWith("brand01");
  });

  test("Кнопка удаления второго бренда вызывает обработчик с правильным ID", () => {
    const DelBtn2 = getByRole("button", { name: "delete_brand02" });
    expect(DelBtn2).toBeEnabled();
    fireEvent.click(DelBtn2);
    expect(handlerDelete).toHaveBeenCalled();
    expect(handlerDelete).toHaveBeenCalledWith("brand02");
  });

  test("Кнопка изменения первого бренда вызывает обработчик с правильным ID", () => {
    const EditBtn1 = getByRole("button", { name: "edit_brand01" });
    expect(EditBtn1).toBeEnabled();
    fireEvent.click(EditBtn1);
    expect(handlerDelete).toHaveBeenCalled();
    expect(handlerDelete).toHaveBeenCalledWith("brand01");
  });

  test("Кнопка изменения второго бренда вызывает обработчик с правильным ID", () => {
    const EditBtn2 = getByRole("button", { name: "edit_brand02" });
    expect(EditBtn2).toBeEnabled();
    fireEvent.click(EditBtn2);
    expect(handlerDelete).toHaveBeenCalled();
    expect(handlerDelete).toHaveBeenCalledWith("brand02");
  });
});
