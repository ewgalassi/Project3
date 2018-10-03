import React from "react";
import Card from "../Card/Card";

import "./UserPic.css";

const UserPic = props => (
  <Card className="profile-card">
    <img className="userImage img-responsive" src={props.pic} alt="Profile" />
    <h2 className="profile-name">{props.fullName}</h2>
  </Card>
);

export default UserPic;
