import { React, useState, useEffect } from 'react';
import { MovieDetailCard } from '../components/MovieDetailCard';
import { Link, useParams} from 'react-router-dom';
import './SearchPage.scss';

export const SearchPage = () => {
  const [search, setSearch] = useState([]);
  const { record } = useParams();

  useEffect(
    () => {  
      const  searchRecords = async() => {
          const response = await fetch(`http://localhost:8080/movies/${record}`);
          const data = await response.json();
          setSearch(data);
      };
      searchRecords();
      
    }, [record]
  );


return (
    <div className='SearchPage'>
      <div className='search-page-heading'>
        <h1 className='heading'>TOP RATING MOVIES FROM {record}</h1>
      </div>
      <div className='movie-detail-card'>
        {search.map(movie => <MovieDetailCard key={movie.movieId} movie={movie}/>)}
      </div>
      <div className='bottom'>       
        <Link
              to={`/genres/Action`}>
          <h3 className='bottom-click'> GO BACK TO PREVIOUS PAGE </h3>
        </Link>
      </div>
    </div>
)}
