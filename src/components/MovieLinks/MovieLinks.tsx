import React from "react";

export interface IMovieLinks {
  site: string;
  imdb: string;
}

const MovieLinks = ({ site, imdb }: IMovieLinks): JSX.Element => (
  <div className="col-md-12">
    <div className="card mb-3">
      <div className="card-body">
        <h5>Links</h5>
        <ul>
          {site && (
            <li>
              <a href={site} target="_blank" rel="noopener noreferrer">
                официальный сайт
              </a>
            </li>
          )}
          {imdb && (
            <li>
              <a
                href={`https://www.imdb.com/title/${imdb}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                страница на сайте IMDB
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </div>
);

export default MovieLinks;
