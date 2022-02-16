import { Component, React } from "react";
import { Link } from "react-router-dom";
import { SearchBoxExternalAPI } from "../components/SearchBoxExternalAPI";
import "./HomePage.scss";
import MovieListExtenalAPI from "../components/MovieListExtenalAPI";
import HomePagePageination from "../components/HomePagePageination";


export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
    };
    this.apiKey = process.env.REACT_APP_API
  }
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(   
      // upcoming movies
      `https://api.themoviedb.org/3/movie/upcoming?api_key=this.apiKey&region=${this.state.searchTerm}`

    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=this.apiKey&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 12);
    return (
      <div className="HomePage">
        <div className="library-link">
          <Link to={`/genres/Action`}>
            <h4 className="library"> Try Recommender Here >>></h4>
          </Link>
        </div>
        <div className="header-section">
          <h1 className="app-name">Love Life, Love Movie</h1>       
          <h1 className="new">SEE WHAT'S NEW!</h1>
          <div className="SearchBox">
            <SearchBoxExternalAPI
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>

          <div>
            {this.state.totalResults > 10 ? (
              <HomePagePageination
                pages={numberPages}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : ("")
            }
        </div>  

          <div className="movie-list">
            <MovieListExtenalAPI movies={this.state.movies} />
          </div>  
        </div>
      </div>
    );
  }
}
