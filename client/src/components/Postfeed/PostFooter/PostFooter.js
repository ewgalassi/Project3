import React from "react";
import "./PostFooter.css";

const PostFooter = (props) => (
  <div className="row">
    Likes: {props.numLikes}
    <button>Like</button>
    <button>Comment</button>
    <button>Save</button>
  </div>
);

export default PostFooter;