import { connect } from "react-redux";
import MoviesList from "./MoviesList";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  data: state.movies.currentPage,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, null)(MoviesList);
