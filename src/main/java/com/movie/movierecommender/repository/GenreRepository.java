package com.movie.movierecommender.repository;

import java.util.List;
import com.movie.movierecommender.model.Genre;
import org.springframework.data.repository.CrudRepository;


public interface GenreRepository extends CrudRepository<Genre, Long> {
    // query
    Genre findByGenreName(String genreName);

    public List<Genre> findAllByOrderByGenreNameAsc();

}