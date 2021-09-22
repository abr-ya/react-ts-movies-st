import axios from "axios";
import { IMovie } from "../interfaces";

export const cancelTokenSource = axios.CancelToken.source();

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = process.env.API_KEY;

// поиск или подборка
const selectFields = (item: any) => ({
  id: item.id,
  name: item.title,
  overview: item.overview,
  popularity: item.popularity,
  poster: item.poster_path,
  release: item.release_date,
  voteAverage: item.vote_average,
  voteCount: item.vote_count,
  site: "",
  imdb: "",
});

export const findMovies = async (query: string, page = 1) => {
  const response = await axios.get(
    `${baseUrl}search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
  );
  const currentPage: IMovie[] = response.data.results.map(selectFields);
  const res = {
    currentPage,
    page: response.data.page,
    totalPages: response.data.total_pages,
  };

  return response.status === 200 ? res : false;
};

export const getDiscover = async (sorting: string, page = 1) => {
  const response = await axios.get(
    `${baseUrl}discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sorting}`,
  );
  const currentPage: IMovie[] = response.data.results.map(selectFields);
  const res = {
    currentPage,
    page: response.data.page,
    totalPages: response.data.total_pages,
  };

  return response.status === 200 ? res : false;
};

// отдельный фильм
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

export const getMovie = async (id: string) => {
  const response = await axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`, {
    cancelToken: cancelTokenSource.token,
  });
  return response.status === 200 ? selectOneMovieFields(response.data) : false;
};
