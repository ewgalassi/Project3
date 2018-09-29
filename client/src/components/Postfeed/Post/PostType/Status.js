import React from "react";
import "./PostType.css";
// import PostHeader from "../../PostHeader/PostHeader";

//layout of status post

class Status extends React.Component {

  render() {
    return (
      <div className="row">
      <div className="statusContent">
        <p>
          {this.props.post}
        </p>
      </div>
      </div>
    );
  }
}

export default Status;
