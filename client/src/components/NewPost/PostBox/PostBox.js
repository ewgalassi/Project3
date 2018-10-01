import React, {Component} from "react";
import "./PostBox.css";

//create PostBOx class component
//switch statement to render diff postbox options based on props.type


class PostBox extends Component {
  render(){

  
    return(
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
    )
  }
  
};

export default PostBox;
