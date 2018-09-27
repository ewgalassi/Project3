import React from "react";
import PicIcon from "../../PicIcon/PicIcon";
import "./PostHeader.css";

const PostHeader = () => (
  <div className="row">
    <PicIcon />
    <a href="#">
      <h5 className="userName">Brittani</h5>
    </a>
  </div>
);

export default PostHeader;
