import React from "react";
import { Link } from "react-router-dom";

class Reply extends React.Component {

  render() {
    return (
      <div>
        <Link to={"/profile/" + this.props.fromId}>
          {this.props.from}
        </Link>: {this.props.message}
      </div>
    );
  };
};

export default Reply;
