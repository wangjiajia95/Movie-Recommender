import { React } from 'react';
import { StarRating } from '../components/StarRating';
import "./MovieDetailCard.scss";

export const MovieDetailCard = ({movie}) => {

  if (!movie) return null;
  return (
      <div className="MovieDetailCard">

        <div className='movie-detail'>
          <h2 className='movie-title'>{movie.title}</h2>
          <h3 className='movie-year'>Year: {movie.year}</h3>
          <h3 className='movie-country'>Country: {movie.country}</h3>
          <h3 className='movie-genre'>Genre: {movie.genre}</h3>
          <h3 className='movie-director'>Director: {movie.director}</h3>
          <h3 className='movie-minutes'>Minutes: {movie.minutes}</h3>
          <h3 className='movie-rating'>Rating: {movie.rating}</h3>
        </div>


        <div className='movie-photo'>
          <img className='img' src={movie.poster} alt="movie img"/>
          <div className='rating'>
            <StarRating key={movie.movieId} movieId={movie.movieId} title={movie.title} poster={movie.poster} genre={movie.genre}/>
          </div>
        </div>

      </div>

  );
}