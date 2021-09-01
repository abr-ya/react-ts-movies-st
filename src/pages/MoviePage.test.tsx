import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MoviePage from "./MoviePage";

// create a customRender that wraps the UI in a memory Router
const customRender = (ui) => {
  return render(ui, { wrapper: MemoryRouter });
};

describe("MoviePage Component ...", () => {
  beforeEach(() => {
    customRender(<MoviePage />);
  });

  test("renders Title", () => {
    const Header = screen.getByText("MoviePage");
    expect(Header).toBeEnabled();
  });
});

// test("Displays correct data from server", async () => {
//   // асинхронно, чтобы обработать запрос MSW
//   customRender(<MoviePage />);

//   const Title = await screen.findByText("The Godfather");
//   expect(Title).toBeInTheDocument();
//   const Popularity = await screen.findByText("popularity: 48.687");
//   expect(Popularity).toBeInTheDocument();
//   const Rating = await screen.findByText("rating: 8.7 (from 14724)");
//   expect(Rating).toBeInTheDocument();
// });
