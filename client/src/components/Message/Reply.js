import React from "react";
import { Link } from "react-router-dom";
import "./Reply.css";

class Reply extends React.Component {
  render() {
    return (
      <div className="messageContent">
        <Link id="profileLink" to={"/profile/" + this.props.fromId}>
          {this.props.from}
        </Link>
        : {this.props.message}
      </div>
    );
  }
}

export default Reply;
