import { React, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import "./StarRating.scss";

export const StarRating = ({ movieId, title, poster, genre }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const url = `http://localhost:8080/ratings`
  function submit(e) {
    e.preventDefault();
    axios.post(
      url,
      {
        title: title,
        genre: genre,
        movieId: movieId,
        poster: poster,
        rating: parseInt(rating)
      },
    )
      .then(res => { console.log(res) })
  }

  return (
    <div className='StarRating' >
      <form onSubmit={(e) => submit(e)}>
        {[...Array(10)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={(e) => setRating(ratingValue)}
              />
              <FaStar className={ratingValue <= rating ? 'star rate-before' : 'star rate-after'}
                size={17}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <h3>{rating}</h3>
        <button className='btn'> Submit </button>
      </form>
    </div>
  );
};