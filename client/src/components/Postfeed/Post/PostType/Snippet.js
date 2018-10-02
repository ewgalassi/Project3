import React from "react";
import "./PostType.css";


const Snippet = (props) => (
  <div className="content">
  
    <p>{props.description}</p>
    <div className="snippet">
      <pre>
        <code>
          {props.post}
        </code>
      </pre>
      
    </div>
  </div>
);

export default Snippet;
