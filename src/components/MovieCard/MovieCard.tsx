import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces";
import styles from "./movieCard.module.scss";

export interface IMovieCard {
  data: IMovie;
}

const MovieCard = ({ data }: IMovieCard) => (
  <div className="col-md-12">
    <div className={`${styles.card} card mb-3 flex-row`}>
      {data.poster && (
        <div className={styles.imgWrapper}>
          <img src={`https://image.tmdb.org/t/p/w200${data.poster}`} alt="" />
        </div>
      )}
      <div className="card-body">
        <Link to={`/movie/${data.id}`}>
          <h5 className="card-title">{data.name}</h5>
        </Link>
        <p>{data.overview}</p>
        <div className="badge badge-success">
          {`popularity: ${data.popularity}`}
        </div>
        <div className="badge badge-info">
          {`rating: ${data.voteAverage} (from ${data.voteCount})`}
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
