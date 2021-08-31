import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { IMovie } from "../interfaces";
// import MovieCard from "../components/MovieCard/MovieCard";
// import MovieLinks from "../components/MovieLinks/MovieLinks";
// import Loader from "../components/Loader/Loader";

// export interface IMoviePage {
//   movie: { [key: string]: IMovie };
//   getMovieSaga: (id: string) => void;
// }

// { movie, getMovieSaga }: IMoviePage
const MoviePage = (): JSX.Element => {
  const { id }: { id: string } = useParams();
  // https://eslint.org/docs/rules/no-prototype-builtins
  // const hasMovieInRedux = Object.prototype.hasOwnProperty.call(movie, id);
  useEffect(() => {
    // if (!hasMovieInRedux) {
    //   setTimeout(() => {
    //     getMovieSaga(id);
    //   }, 500); // демо-задержка
    // }
  }, []);

  return (
    <div className="container">
      <h1>MoviePage</h1>
      <p>{`Это страница фильма: ${id}`}</p>
      <p>
        Пока что заглушка для проверки роутера. Может сделать тут запрос пока?
      </p>
      <p>
        ToDo: Сейчас если фильма ещё нет в Ридакс, используется искусственная
        задержка 0,5 сек.
      </p>
      {/* {movie && hasMovieInRedux ? (
        <>
          <MovieCard data={movie[id]} />
          <MovieLinks site={movie[id].site} imdb={movie[id].imdb} />
        </>
      ) : (
        <Loader />
      )} */}
    </div>
  );
};

export default MoviePage;
