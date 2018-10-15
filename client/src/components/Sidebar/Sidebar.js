import React from "react";
import "./Sidebar.css";
import "../../mobile.css";

const Sidebar = props => {
  return (
    <div className="news-article">
      <a className="article-title" href={props.url} target="_blank">
        {props.title}
      </a>
      {/* <div className="author">By: {props.author}</div> */}
      <p className="source">{props.source}</p>
      <p className="summary">{props.description}</p>
      {/* <hr /> */}
    </div>
  );
};

export default Sidebar;
