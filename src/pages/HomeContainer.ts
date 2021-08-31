import { connect } from "react-redux";
import Home from "./Home";
import {
  setLoading,
  getDiscoverSaga,
  findMoviesSaga,
} from "../redux/actions/movieActions";
import { RootStateType } from "../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  totalPages: state.movies.totalPages,
});

const mapDispatchToProps = {
  setLoading,
  getDiscoverSaga,
  findMoviesSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
