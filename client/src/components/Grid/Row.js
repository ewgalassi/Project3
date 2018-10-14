import React from "react";
import "./Grid.css";
import "../../mobile.css";

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
);
