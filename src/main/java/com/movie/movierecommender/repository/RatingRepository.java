package com.movie.movierecommender.repository;


import com.movie.movierecommender.model.Rating;
import org.springframework.data.repository.CrudRepository;


// get rating NOT connect to genre
// CrudRepository has all common methods, get update delete 
// <Generic  type, primary key type>
public interface RatingRepository extends CrudRepository<Rating, String>{

}

