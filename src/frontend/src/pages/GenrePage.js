import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieDetailCard } from "../components/MovieDetailCard";
import { MovieSmallCard } from "../components/MovieSmallCard";
import { GenreTile } from "../components/GenreTile";
import { SearchBar } from "../components/SearchBar";
import "./GenrePage.scss";

export const GenrePage = () => {
  // group by genre
  const [genre, setGenre] = useState({ movies: [] });
  const { genreName } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://localhost:8080/genre/${genreName}`);
      const data = await response.json();
      setGenre(data);
    };
    fetchMovies();
  }, [genreName]);
  // console.log(genre);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchAllGenres = async () => {
      const response = await fetch(`http://localhost:8080/genre`);
      const data = await response.json();
      setGenres(data);
    };
    fetchAllGenres();
  }, []);
  // console.log(genres);

  if (!genre || !genre.genreName) {
    return <h1>404 Movie not found</h1>;
  }

  return (
    <div className="GenrePage">
      <div className="title-and-search">
        <div className="search-bar">
          <SearchBar />
        </div>


        <div className="genreName-name-section">
          <h1>{genre.genreName} RECOMMEND FOR YOU</h1>
        </div>
      </div>

      <div className="genre-card-section">
        <div className="genre-name">
          {/* genre */}
          {genres.map((genre) => (
            <GenreTile  key={genre.id} genreName={genre.genreName} />
          ))}
        </div>

        <div className="card-section">
          <div className="movie-detail-section">
            <MovieDetailCard  movie={genre.movies[0]} />
          </div>
          {/* genre */}
          <div className="smallcard-section">
            {genre.movies.slice(1).map((movie) => (
              <MovieSmallCard key={movie.movieId} movie={movie} />
            ))}

            <div className="more-link">
              <Link
                to={`/genres/${genreName}/movies/${process.env.REACT_APP_DATA_END_YEAR}`}
              >
                More >>>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
