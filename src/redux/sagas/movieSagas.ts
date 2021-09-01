import { takeLatest, put, call } from "redux-saga/effects"; // takeEvery, select
import * as api from "../../api/movie-service";
import * as movieActions from "../actions/movieActions";
import * as movieTypes from "../actions/movieTypes";

interface IResponse {
  data?: any;
}

function* getMovieSaga(action: ReturnType<typeof movieActions.getMovieSaga>) {
  try {
    yield put(movieActions.setLoading(true));
    const response: IResponse = yield call(api.getMovie, action.payload); // когда сервер работает
    yield put(movieActions.setMovie(response)); // response.data, если не обработали в апи!
    yield put(movieActions.setLoading(false));
  } catch (error) {
    console.error(error);
  }
}

function* getDiscoverSaga(
  action: ReturnType<typeof movieActions.getDiscoverSaga>,
) {
  try {
    yield put(movieActions.setLoading(true));
    const { sorting, page } = action.payload;
    const response: IResponse = yield call(api.getDiscover, sorting, page);
    yield put(movieActions.setCurrentPage(response)); // response.data, если не обработали в апи!
    yield put(movieActions.setLoading(false));
  } catch (error) {
    console.error(error);
  }
}

function* findMoviesSaga(
  action: ReturnType<typeof movieActions.findMoviesSaga>,
) {
  try {
    yield put(movieActions.setLoading(true));
    const { query, page } = action.payload;
    const response: IResponse = yield call(api.findMovies, query, page);
    console.log(response);
    yield put(movieActions.setCurrentPage(response));
    yield put(movieActions.setLoading(false));
  } catch (error) {
    console.error(error);
  }
}

export default function* watchEntities() {
  yield takeLatest(movieTypes.GET_MOVIE_SAGA, getMovieSaga);
  yield takeLatest(movieTypes.GET_DISCOVER_SAGA, getDiscoverSaga);
  yield takeLatest(movieTypes.FIND_MOVIES_SAGA, findMoviesSaga);
}
