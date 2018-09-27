import React from "react";

const TypeBtn = props => (
    <button className="dropBtn btn btn-light" value={props} onClick={props} name="type">{props.children}</button>
)

export default TypeBtn

