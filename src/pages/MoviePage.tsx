import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { IMovie } from "../interfaces";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieLinks from "../components/MovieLinks/MovieLinks";
import Loader from "../components/Loader/Loader";

// temp
import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = process.env.API_KEY;

const selectOneMovieFields = (item: any) => ({
  id: item.id,
  name: item.title,
  overview: item.overview,
  popularity: item.popularity,
  poster: item.poster_path,
  release: item.release_date,
  voteAverage: item.vote_average,
  voteCount: item.vote_count,
  site: item.homepage,
  imdb: item.imdb_id,
});

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
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`${baseUrl}movie/${id || 238}?api_key=${apiKey}`, {
        cancelToken: cancelTokenSource.token,
      })
      .then((res) => setData(selectOneMovieFields(res.data)))
      .catch((e) => {
        if (axios.isCancel(e)) {
          console.log("Request canceled, error message: ", e.message);
        } else {
          console.log("Error: ", e.message);
        }
      });

    return () => {
      cancelTokenSource.cancel("Cancel in useEffect Cleaner.");
    };
  }, []);

  return (
    <div className="container">
      <h1>MoviePage</h1>
      <p>{`Это страница фильма: ${id} (для тестов захардкожен 238)`}</p>
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
