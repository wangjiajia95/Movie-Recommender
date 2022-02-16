import { React } from 'react';
import { Link } from 'react-router-dom';
import "./YearSelector.scss";

export const YearSelector = ({genreName}) => {
  let years = [];
  // retrieve data from .env
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  
  for (let i = endYear; i >= startYear; i--) {
    years.push(i);
  }

  return (
    <ol className='YearSelector'>     
      {years.map(year => (
      <div className='Year'>
        <li key={year}>      
          <Link to={`/genres/${genreName}/movies/${year}`} >{year}</Link>
        </li>
      </div>
      ))}
    </ol>
    )
};

