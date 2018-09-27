import React from "react";
import "./PostBox.css";

const PostBox = props => (
  <form className="post">
    <div className="userInput">
      <input
        onChange={props.onChange}
        type={props.type}
        name={props.name}
        value={props.value}
        className="form-control"
        placeholder="What would you like to share?"
        id="userPost"
      />
    </div>
  </form>

  
);

export default PostBox;
