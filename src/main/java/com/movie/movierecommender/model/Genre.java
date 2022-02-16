package com.movie.movierecommender.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
// use jpa to create table

@Entity
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String genreName;
    private long totalMovies;
    @Transient
    private List<Movie> movies;

    public long getTotalMovies() {
        return totalMovies;
    }

    public void setTotalMovies(long totalMovies) {
        this.totalMovies = totalMovies;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public Genre() {
    }

    public Genre(String genreName, long totalMovies) {
        this.genreName = genreName;
        this.totalMovies = totalMovies;
    }

    @Override
    public String toString() {
        return "Genre [genreName=" + genreName + ", totalMovies=" + totalMovies + "]";
    }

}
