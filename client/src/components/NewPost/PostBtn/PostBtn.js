import React from "react";
import "./PostBtn.css";
import "../../../mobile.css";

const PostBtn = props => (
  <button
    type="submit"
    className="share-btn btn btn-info btn-sm"
    onClick={props.onClick}
  >
    Share
  </button>
);

export default PostBtn;
