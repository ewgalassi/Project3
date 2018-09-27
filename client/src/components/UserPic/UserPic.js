import React from "react";
import "./UserPic.css";

const UserPic = props => (
  <div className="userImage-div">
    <img className="userImage"
    src={props.pic} 
    alt="Profile" 
    />
  </div>
);

export default UserPic;