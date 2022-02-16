import { React } from 'react';
import { Link } from 'react-router-dom';
import "./GenreTile.scss";

export const GenreTile = ({ genreName }) => {
  return (
    <div className='GenreTile'>
      <h1>
        <Link to={`/genres/${genreName}`}>{genreName}
        </Link>
      </h1>
    </div>

  )

}