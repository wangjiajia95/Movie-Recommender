package com.movie.movierecommender.controller;

import java.util.List;
import com.movie.movierecommender.model.Rating;
import com.movie.movierecommender.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
// get rating NOT connect to genre

@RestController
@CrossOrigin
public class RatingController {
    // inject instance
    @Autowired
    private RatingService ratingService;

    // get data from data base from here
    @RequestMapping("/ratings")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @RequestMapping("/ratings/{movieId}")
    public Rating getRating(@PathVariable String movieId) {
        return ratingService.getRating(movieId);
    }

    @RequestMapping(value = "/ratings", method = RequestMethod.POST)
    public void addRating(@RequestBody Rating rating) {
        ratingService.addRating(rating);
    }

}
