import React from "react";
import "../../mobile.css";

export const ListItem = props => (
  <li className="list-group-item">{props.children}</li>
);
