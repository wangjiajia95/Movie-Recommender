import { React } from 'react';
import axios from 'axios';
import { useState } from 'react';

import "./SearchBar.scss";
import { Link } from 'react-router-dom';
export const SearchBar = () => {

  const [search, setSearch] = useState([]);
  const [record, setRecord] = useState([]);

  var i = 1; // For Serial no increment

  // Search Item 
  const searchRecords = () => {
    axios.get(`http://localhost:8080/movies/${record}`)
      .then(response => {
        setSearch(response.data);
      });
  }


return (
    <div className="SearchBar">
      <input className="content" type="text" id="form1" onChange={(e)=>setRecord(e.target.value)}  placeholder="Find Top Review Movie By Country" />    
      <button className="btn" type="button" onClick={searchRecords} >
          <Link to={`/movies/${record}`} ><h3 className='search-btn'>Search</h3></Link>
      </button>  

      {/* <form action="" onSubmit={searchRecords}>
        <div className="input-field">
          <input className="input" placeholder="Search Country See Upcoming Movies" type="text" onChange={(e)=>setRecord(e.target.value)}/>
          
        </div>
        <Link to={`/movies/${record}`} ></Link>
      </form>   */}
    </div>

)};

