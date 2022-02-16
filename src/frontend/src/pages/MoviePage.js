import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailCard } from '../components/MovieDetailCard';
import { YearSelector } from '../components/YearSelector';
import { Link } from 'react-router-dom';
import './MoviePage.scss';

export const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const { genreName, year } = useParams();
  
  useEffect(   
    () => {      
      const  fetchMovies = async() => {
          const response = await fetch(`http://localhost:8080/genre/${genreName}/movies?year=${year}`);
          const data = await response.json();
          setMovies(data);
      };
      fetchMovies();     
    }, [genreName, year]
  );



  return (
    <div className="MoviePage">
      <div className='page-heading'>
        <h1 >{genreName} RELEASED IN {year}</h1>
      </div>
      <div>
        <Link to={`/ratings`} >  
          <button className="btn" type="button"  > 
          <h2>My Rated Movies</h2>
          </button>
        </Link>
      </div>
        
      <div className="year-card">
        <div className="year-selector">  
          <h3> Year </h3>
          <YearSelector genreName={genreName}/>
        </div>  
        
        <div className='movie-detail-card-detail'>
          {movies.map(
            movie => <MovieDetailCard key={movie.movieId} genreName={genreName} movie={movie}/>)}     
        </div>
      </div>
    </div>
  );   



}


