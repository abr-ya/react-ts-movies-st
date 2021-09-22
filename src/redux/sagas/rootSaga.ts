import { all, fork } from "redux-saga/effects";

import movieSagas from "./movieSagas";

export default function* rootSaga() {
  yield all([fork(movieSagas)]);
}
