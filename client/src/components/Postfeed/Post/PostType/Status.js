import React from "react";
import "./PostType.css";
// import PostHeader from "../../PostHeader/PostHeader";

//layout of status post

class Status extends React.Component {

  render() {
    return (
      <div className="statusContent">
        <p className>
          {this.props.post}
        </p>
      </div>
    );
  }
}

export default Status;
