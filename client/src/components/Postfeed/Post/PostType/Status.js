import React from "react";
import "./PostType.css";
// import PostHeader from "../../PostHeader/PostHeader";

//layout of status post

class Status extends React.Component {

  render() {
    return (
      <div className="row">
      <div className="status-content">
        <h3 className="status-update">
          {this.props.post}
        </h3>
      </div>
      </div>
    );
  }
}

export default Status;
