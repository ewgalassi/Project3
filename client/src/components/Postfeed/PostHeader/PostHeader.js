import React from "react";
import PicIcon from "../../PicIcon/PicIcon";
import "./PostHeader.css";

const PostHeader = (props) => (
  <div className="row">
    <PicIcon />
    <a href="#">
      <h5 className="author">{props.author}</h5>
    </a>
  </div>
);

export default PostHeader;
