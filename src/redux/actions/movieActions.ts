import { createCustomAction } from "typesafe-actions"; // createAction - без payload
import {
  SET_LOADING,
  GET_MOVIE_SAGA,
  SET_MOVIE,
  SET_PAGE,
  GET_DISCOVER_SAGA,
  FIND_MOVIES_SAGA,
} from "./movieTypes";

export const setMovie = createCustomAction(SET_MOVIE, (data: any) => ({
  payload: data,
}));

export const setCurrentPage = createCustomAction(SET_PAGE, (data: any) => ({
  payload: data,
}));

export const getMovieSaga = (id: string) => ({
  type: GET_MOVIE_SAGA,
  payload: id,
});

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));

export const findMoviesSaga = (query: string, page: number) => ({
  type: FIND_MOVIES_SAGA,
  payload: { query, page },
});

export const getDiscoverSaga = (sorting: string, page: number) => ({
  type: GET_DISCOVER_SAGA,
  payload: { sorting, page },
});
