import { React, useState, useEffect } from 'react';
import { MyRatedMovieCard } from '../components/MyRatedMovieCard';
import { Link } from "react-router-dom";
import { ContentBasedRecommdationList } from '../components/ContentBasedRecommdationList';
import './MyRatedMoviePage.scss';

export const MyRatedMoviePage = () => {
  const [myRatedMovies, setMyRatedMovies] = useState([]);
  
  useEffect(
    () => {     
      const  myMovies = async() => {
          const response = await fetch(`http://localhost:8080/ratings`);
          const data = await response.json();
          setMyRatedMovies(data);
      };
      myMovies();
      
    }, []
  );
// weight rating
  let sum = 0;
  for (let i = 0; i < myRatedMovies.length; i++) {
    sum += myRatedMovies[i]["rating"];
  }

  let avg = sum/myRatedMovies.length;
  console.log(myRatedMovies.length);
  console.log(sum);
  console.log(avg);
  if (!myRatedMovies) {
    return <h1>You haven't rate movie yet!</h1>;
  }


return (
    <div className='MyRatedMoviePage'>
      <div className='MyRatedMoviePage-heading'>
        <h1 className="page-name">MY RATINGS</h1>
      </div>
      <div className='rating-grid'>
          {myRatedMovies.map(movie => <MyRatedMovieCard key={movie.id} movie={movie}/>)}
      </div>

      <div className='recommendation'>
        <h1 className='recommendation-header'>RECOMMENDATION</h1>
        {avg > 8 ?  
        (
          <div >
            <h2 className='quote'>You like {myRatedMovies[0].genre} type of movie, we recommend you watch
            </h2>
            <div className='recommendation-card'>
                <ContentBasedRecommdationList movie={myRatedMovies[0]}/>
            </div>
          </div> 
        ) :
        (<h2 className='quote'>Your rating is too low!
          We DON'T HAVE MOVIE RECOMMEND TO YOU! </h2>
        
        )}

      </div>
      <div className='bottom'>
        
        <Link
              to={`/genres/Action/movies/2021`}
            >
              <h1 className='bottom-click'> GO BACK TO PREVIOUS PAGE </h1>
        </Link>
      </div>
    </div>
)}
