import React from "react";
import "./PostFooter.css";

const PostFooter = (props) => (
  <div className="row">
    <button type="button" className="post-btn btn btn-secondary"><span className="fa fa-thumbs-o-up"></span> Like ({props.numLikes})</button>
    <button type="button" className="post-btn btn btn-secondary"><span className="fa fa-thumbs-o-up"></span> Comment</button>
    {/* <button>Save</button> */}
  </div>
);

export default PostFooter;