import { React } from 'react';
import "./MyRatedMovieCard.scss";

export const MyRatedMovieCard = ({movie}) => {

  if (!movie) return null;
  return (
      <div className="MyRatedMovieCard">
        <div>
          <h1 className='movie-title'>{movie.title}</h1>
          <h1 className='movie-genre'>{movie.genre}</h1>
          <h2 className='movie-rating'>My Rating: {movie.rating}</h2>
        </div>

        <div className='movie-photo'>
          <img className='img' src={movie.poster} alt="movie img"/>
        </div>
      </div>

  );
}