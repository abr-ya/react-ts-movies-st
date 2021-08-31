import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { IMovie } from "../interfaces";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieLinks from "../components/MovieLinks/MovieLinks";
import Loader from "../components/Loader/Loader";
import { getMovie } from "../api/movie-service";

// export interface IMoviePage {
//   movie: { [key: string]: IMovie };
//   getMovieSaga: (id: string) => void;
// }

// { movie, getMovieSaga }: IMoviePage
const MoviePage = (): JSX.Element => {
  const { id }: { id: string } = useParams();
  const [data, setData] = useState(null);
  // https://eslint.org/docs/rules/no-prototype-builtins
  // const hasMovieInRedux = Object.prototype.hasOwnProperty.call(movie, id);
  useEffect(() => {
    getMovie("238")
      .then(setData)
      .catch((e) => console.log(e));
    // if (!hasMovieInRedux) {
    //   setTimeout(() => {
    //     getMovieSaga(id);
    //   }, 500); // демо-задержка
    // }
  }, []);

  return (
    <div className="container">
      <h1>MoviePage</h1>
      <p>{`Это страница фильма: ${id} (временно захардкожен 238!)`}</p>
      <p>
        Пока что заглушка для проверки роутера. Может сделать тут запрос пока?
      </p>
      <p>
        ToDo: Сейчас если фильма ещё нет в Ридакс, используется искусственная
        задержка 0,5 сек.
      </p>
      {data ? ( // movie && hasMovieInRedux --- movie[id]
        <>
          <MovieCard data={data} />
          <MovieLinks site={data.site} imdb={data.imdb} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MoviePage;
