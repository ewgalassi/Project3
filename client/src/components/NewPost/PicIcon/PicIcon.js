import React from "react";
import "./PicIcon.css";

const PicIcon = (props) => (
  <img
    className="PicIcon"
    src={props.pic}
    alt="Profile pic"
  />
);

export default PicIcon;
