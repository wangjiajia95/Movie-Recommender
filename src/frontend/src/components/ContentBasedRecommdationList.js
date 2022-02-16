import { React, useEffect, useState } from "react";
import { MovieDetailCard } from "../components/MovieDetailCard";
import './ContentBasedRecommdationList.scss';

export const ContentBasedRecommdationList = ({ movie }) => {
  const [genre, setGenre] = useState({ movies: [] });

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://localhost:8080/genre/${movie.genre}`);
      const data = await response.json();
      setGenre(data);
    };
    fetchMovies();
  }, [movie]);

  console.log(genre);

  return (
    <div className="ContentBasedRecommdationList">
      {genre.movies.map((movie) => (
        <MovieDetailCard key={movie.movieId} movie={movie} />
      ))}
    </div>
  );
};

