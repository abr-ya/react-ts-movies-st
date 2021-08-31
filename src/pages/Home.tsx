import React, { useState, useEffect } from "react";
import RequestSetup from "../components/RequestSetup/RequestSetup";
import MoviesList from "../components/MoviesList/MoviesList";

export interface IMoviePage {
  setLoading: (id: boolean) => void;
  findMoviesSaga: (query: string, page: number) => void;
  getDiscoverSaga: (sorting: string, page: number) => void;
  totalPages: number;
}

// { setLoading, getDiscoverSaga, findMoviesSaga, totalPages }: IMoviePage
const Home = (): JSX.Element => {
  const [sorting, setSorting] = useState("popularity.desc");
  const [query, setQueryState] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(process.env.API_KEY);
    console.log(query, page, sorting);
    if (query) {
      // в управляющих компонентах мы чистим query, когда discover
      // запрос на поиск
    } else {
      // запрос на обзор
    }
  }, [query, page, sorting]);

  const setQuery = (text: string) => {
    setPage(1);
    setQueryState(text);
  };

  return (
    <div className="container">
      <h1 className="title">React API - TMDB</h1>
      <p>
        К сожалению, и API TMDB оказался не идеален для нашей задачи. При поиске
        по базе нельзя использовать сортировку. Сортировка работает в подборках,
        но они без поисковой фразы. Поэтому левая и правая часть работают каждая
        сама по себе...
      </p>
      <RequestSetup
        query={query}
        page={page}
        pages={10}
        setPage={setPage}
        setSorting={setSorting}
        setQuery={setQuery}
      />
      <MoviesList />
    </div>
  );
};

export default Home;
