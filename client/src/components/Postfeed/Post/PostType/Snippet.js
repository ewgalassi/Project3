import React from "react";
import "./PostType.css";
// import PostHeader from "../../PostHeader/PostHeader";

//layout of snippet post

const Snippet = (props) => (
  <div className="content">
  
    <h5>{props.children}</h5>
    {/* <p>#hashtags #react #js #bootstrap</p> */}
    <div className="snippet">
      <pre>
        <code>
          {props.children}
        </code>
      </pre>
      
    </div>
  </div>
);

export default Snippet;
