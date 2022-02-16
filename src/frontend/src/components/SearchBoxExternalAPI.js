import React from "react";
import './SearchBoxExternalAPI.scss';
export const SearchBoxExternalAPI = (props) => {
  return (
    <div>
      <div className="SearchBoxExternalAPI">
        <section>         
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input className="input" placeholder="Search Country See Upcoming Movies" type="text" onChange={props.handleChange}/>
            </div>
          </form>
        </section>
      </div>
    </div>  
  )

}

