package com.movie.movierecommender.controller;


import java.util.List;
import com.movie.movierecommender.model.Genre;
import com.movie.movierecommender.model.Movie;
import com.movie.movierecommender.repository.GenreRepository;
import com.movie.movierecommender.repository.MovieRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GenreController {

    private GenreRepository genreRepository;
    private MovieRepository movieRepository;

    public GenreController(GenreRepository genreRepository, MovieRepository movieRepository) {
        this.genreRepository = genreRepository;
        this.movieRepository = movieRepository;

    }

    @GetMapping("/genre/{genreName}")
    public Genre getGenre(@PathVariable String genreName) {
        Genre genre = this.genreRepository.findByGenreName(genreName);

        genre.setMovies(movieRepository.findLatestMoviesbyGenre(genreName, 4));

        return genre;
    }

    @GetMapping("/genre")
    public List<Genre> getAllGenre() {
        return this.genreRepository.findAllByOrderByGenreNameAsc();

    }

    @GetMapping("/genre/{genreName}/movies")
    public List<Movie> getMoviesForGenreForYear(@PathVariable String genreName, @RequestParam long year) {

        return this.movieRepository.getMoviesByGenreByYearDesc(
                genreName, year, 10);
    }

    @GetMapping("/movies")
    public Iterable<Movie> getAllMoives() {
        return this.movieRepository.findAll();

    }

    @GetMapping("/movies/{country}")
    public List<Movie> getMovieByCountryInSearch(@PathVariable String country) {
        return this.movieRepository.findTopReviewMoviesbyCountry(country, 5);
    }

}
