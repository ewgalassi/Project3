import React from "react";
import "./Grid.css";

export const Col = ({ size, children }) => (
  <div
    className={size
      .split(" ")
      .map(size => "col-" + size)
      .join(" ")}
  >
    {children}
  </div>
);
