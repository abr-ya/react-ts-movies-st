import React, { useState, useEffect } from "react";
import RequestSetup from "../components/RequestSetup/RequestSetup";
import MoviesList from "../components/MoviesList/MoviesListContainer";

export interface IMoviePage {
  setLoading: (id: boolean) => void;
  findMoviesSaga: (query: string, page: number) => void;
  getDiscoverSaga: (sorting: string, page: number) => void;
  totalPages: number;
}

const Home = ({
  setLoading,
  getDiscoverSaga,
  findMoviesSaga,
  totalPages,
}: IMoviePage): JSX.Element => {
  const [sorting, setSorting] = useState("popularity.desc");
  const [query, setQueryState] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(query, page, sorting);
    setLoading(true); // лоадинг здесь для эмуляции "долгой" загрузки
    if (query) {
      // в управляющих компонентах мы чистим query, когда discover
      setTimeout(() => {
        findMoviesSaga(query, page);
      }, 500);
    } else {
      getDiscoverSaga(sorting, page);
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
        pages={totalPages || 10}
        setPage={setPage}
        setSorting={setSorting}
        setQuery={setQuery}
      />
      <MoviesList />
    </div>
  );
};

export default Home;
