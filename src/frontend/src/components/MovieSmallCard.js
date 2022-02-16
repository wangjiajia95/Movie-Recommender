import { React } from 'react';
import "./MovieSmallCard.scss";

export const MovieSmallCard = ({movie}) => {

  return (
      <div className="MovieSmallCard">
        <h3 className='movie-title'>{movie.title}</h3>
        <h4 className='movie-year'>Year: {movie.year}</h4>
        <h4 className='movie-country'>Country: {movie.country}</h4>
        <h4 className='movie-genre'>Genre: {movie.genre}</h4>
        <h4 className='movie-minutes'>Minutes: {movie.minutes}</h4>
        <h4 className='movie-rating'>Rating: {movie.rating}</h4>
      </div>

  );
}