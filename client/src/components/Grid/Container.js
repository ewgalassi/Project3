import React from "react";
import "./Grid.css";
import "../../mobile.css";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
);
