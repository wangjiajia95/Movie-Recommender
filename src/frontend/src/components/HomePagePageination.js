import React from "react";
import "./HomePagePageination.scss";

const HomePagePageination = (props) => {
  const pageLinks = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";
    pageLinks.push(
      <li key={i} onClick={() => props.nextPage(i)}>
        <a className="page-num" href="#">{i}</a>
      </li>
    );
  }

  return (
    <div className="HomePagePageination">
      <ul className="horizontal-list">
        {props.currentPage > 1 ? (
          <li
            className="page"
            onClick={() => props.nextPage(props.currentPage - 1)}
          >
            <a className="pre" href="#">Prev</a>
          </li>
        ) : (
          ""
        )}
        {pageLinks}
        {props.currentPage < props.pages + 1 ? (
          <li className="page" onClick={() => props.nextPage(props.currentPage + 1)}>
            <a className="next" href="#">Next</a>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default HomePagePageination;
