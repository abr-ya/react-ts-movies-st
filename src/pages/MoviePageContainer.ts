import { connect } from "react-redux";
import MoviePage from "./MoviePage";
import { getMovieSaga } from "../redux/actions/movieActions";
import { RootStateType } from "../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  movie: state.movies.movie,
});

const mapDispatchToProps = {
  getMovieSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
