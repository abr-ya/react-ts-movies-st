import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/movieActions";
import { IMovie } from "../../interfaces";

type moviesStateType = Readonly<{
  currentPage: IMovie[];
  page: number;
  totalPages: number;
  movie: { [key: string]: IMovie };
  loading: boolean;
}>;

const movies: moviesStateType = {
  currentPage: [],
  page: 0,
  totalPages: 0,
  movie: {},
  loading: true,
};

export type movieActions = ActionType<typeof actions>;

const moviesReducer = (
  state = movies,
  action: movieActions,
): moviesStateType => {
  switch (action.type) {
    case getType(actions.setLoading):
      return { ...state, loading: action.payload as boolean };
    case getType(actions.setCurrentPage):
      return { ...state, ...action.payload, loading: false };
    case getType(actions.setMovie):
      return {
        ...state,
        movie: {
          ...state.movie,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default moviesReducer;
