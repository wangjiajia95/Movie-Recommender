import React from "react";
import './MovieExtenalAPI.scss';


const MovieExtenalAPI = (props) => {
  return (
    <div className="MovieExtenalAPI">     
        <div className="card">
          {props.image == null ? (
            <img className="img"
              src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="pic"
              style={{ width: "100%", height: 360 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="pic"
              style={{ width: "100%", height: 360 }}
            />
          )}
        </div>

        <div className="card-content">
          <h2 className="title">{props.title}</h2>
          <h3 className="date">Release Date: {props.release_date}</h3>
          <p className="overview">{props.overview}</p>
        </div>      
    </div>
  );
};

export default MovieExtenalAPI;
