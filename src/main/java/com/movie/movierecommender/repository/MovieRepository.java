package com.movie.movierecommender.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import com.movie.movierecommender.model.Movie;

public interface MovieRepository extends CrudRepository<Movie, Long> {
    // genre page
    List<Movie> getByGenreOrderByYearDesc(String genreName, Pageable pageable);
    default List<Movie> findLatestMoviesbyGenre(String genreName, int count) {
        return getByGenreOrderByYearDesc(genreName, PageRequest.of(0, count));

    }

    List<Movie> findByGenreAndYear(String genreName, long year, Pageable pageable);
    default List<Movie> getMoviesByGenreByYearDesc(String genreName, long year, int count){
        return findByGenreAndYear(genreName, year, PageRequest.of(0, count));
    }


    // @Query("select m from Movie m where (m.genre = :genreName) and (m.year= :year)")
    // List<Movie> getMoviesByGenreByYearDesc(
    //         @Param("genreName") String genreName,
    //         @Param("year") long year

    // );

    List<Movie> getByGenreOrderByRatingDesc(String genreName, Pageable pageable);
    default List<Movie> findTopReviewMoviesbyGenre(String genreName, int count) {
        return getByGenreOrderByRatingDesc(genreName, PageRequest.of(0, count));

    }

    List<Movie> getByCountryOrderByRatingDesc(String country, Pageable pageable);
    default List<Movie> findTopReviewMoviesbyCountry(String country, int count) {
        return getByCountryOrderByRatingDesc(country, PageRequest.of(0, count));

    }

}
