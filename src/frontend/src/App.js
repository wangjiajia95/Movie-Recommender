import './App.scss';

import { GenrePage } from './pages/GenrePage';
import { MoviePage } from './pages/MoviePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { MyRatedMoviePage } from './pages/MyRatedMoviePage';


function App() {
  return (
    <div className="App">  
    
      <Router>         
        <Switch>
          <Route exact path="/ratings">
              <MyRatedMoviePage />
          </Route>

          <Route exact path="/movies/:record">
              <SearchPage />
          </Route>

          <Route exact path="/genres/:genreName/movies/:year">
              <MoviePage />
          </Route>

          <Route exact path="/genres/:genreName">
              <GenrePage />
          </Route> 

          <Route exact path="/genres/Action">
              <GenrePage />
          </Route> 

          <Route exact path="/">            
              <HomePage />             
          </Route> 

        </Switch>
      </Router>
    </div>
  );
}

export default App;
