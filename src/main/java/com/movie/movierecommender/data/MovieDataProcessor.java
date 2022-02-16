package com.movie.movierecommender.data;

import java.util.Arrays;


import com.movie.movierecommender.model.Movie;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

public class MovieDataProcessor implements ItemProcessor<MovieInput, Movie> {

    private static final Logger log = LoggerFactory.getLogger(MovieDataProcessor.class);

    @Override
    public Movie process(final MovieInput movieInput) throws Exception {

        Movie movie = new Movie();
        movie.setMovieId(Long.parseLong(movieInput.getMovie_id()));
        movie.setTitle(movieInput.getTitle());
        movie.setYear(Long.parseLong(movieInput.getYear()));
        movie.setCountry(movieInput.getCountry());       
        movie.setGenre(Arrays.asList(movieInput.getGenre().split(",")).get(0));
        movie.setDirector(movieInput.getDirector());
        movie.setMinutes(Long.parseLong(movieInput.getMinutes()));
        movie.setPoster(movieInput.getPoster());
        movie.setRating(Long.parseLong(movieInput.getRating()));
        return movie;

    }

}
