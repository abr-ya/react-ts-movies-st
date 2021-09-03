import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MoviePage from "./MoviePage";

// create a customRender that wraps the UI in a memory Router
const customRender = (ui) => {
  return render(ui, { wrapper: MemoryRouter });
};

describe("MoviePage Component ...", () => {
  const handler = jest.fn();
  const movieMock = {
    "436969": {
      id: "436969",
      name: "The Suicide Squad",
      overview:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nuttycons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      popularity: 2889.059,
      poster: "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg",
      release: "2021-07-28",
      voteAverage: 8,
      voteCount: 3336,
      site: "https://www.thesuicidesquad.net",
      imdb: "tt6334354",
    },
  };

  beforeEach(() => {
    customRender(<MoviePage movie={movieMock} getMovieSaga={handler} />);
  });

  test("renders Title", () => {
    const Header = screen.getByText("MoviePage");
    expect(Header).toBeEnabled();
  });
});
