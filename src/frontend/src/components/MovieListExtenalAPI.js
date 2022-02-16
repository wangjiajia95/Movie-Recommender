import React from "react";
import MovieExtenalAPI from "./MovieExtenalAPI";
import './MovieListExtenalAPI.scss';

const MovieListExtenalAPI = (props) => {
  return (
    <div className="MovieListExtenalAPI">   
          {props.movies.map((movie, i) => {
            return (
              <MovieExtenalAPI
                key={i}
                image={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
              />
            );
          })}     
    </div>
  );
};

export default MovieListExtenalAPI;
