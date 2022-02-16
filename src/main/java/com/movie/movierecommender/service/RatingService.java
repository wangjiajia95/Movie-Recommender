package com.movie.movierecommender.service;

import java.util.ArrayList;
import java.util.List;

import com.movie.movierecommender.model.Rating;
import com.movie.movierecommender.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


// get rating NOT connect to genre
// create instance and register
@Service
public class RatingService {

    // inject instance by autowired
    @Autowired RatingRepository ratingRepository;


    // get route
    // get from db
    public List<Rating> getAllRatings(){
        // return ratings;
        // connect to db, do the query, get all instance by repository.findAll, jpa syntax;
        List<Rating> ratings = new ArrayList<>();
        ratingRepository.findAll()
        .forEach(ratings::add);
        return ratings; 
    }


    // get route
    public Rating getRating(String movieId){
        // return ratings.stream().filter(t->t.getMovieId().equals(id)).findFirst().get();
        return ratingRepository.findById(movieId).get();
    }


    // add obj
    // POST add to db
    // PUT save syntax
    public void addRating(Rating rating){
        ratingRepository.save(rating);
    }


}
