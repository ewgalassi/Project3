import React from "react";


const StackResults = props => {
  return (
    <div className="">
      <a href={props.url} target="_blank">
        {props.title}
      </a>
      {/* <div className="author">By: {props.author}</div> */}
      {/* <p className="source">{props.source}</p>
      <p className="summary">{props.description}</p> */}
      <hr />
    </div>
  );
};

export default StackResults;