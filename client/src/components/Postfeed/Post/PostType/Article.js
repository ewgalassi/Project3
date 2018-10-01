import React, { Component } from "react";
import "./PostType.css";
// import Row from "../../Grid/Row";

class Article extends Component {
  render() {
    return (
      <div className="articleCard">
        <div>
          <h4>Article title</h4>
          <a href="#">
            <div>
              <img
                src="http://placehold.it/650x300"
                className="
                            img-fluid"
              />
            </div>
            <p>
             {this.props.post}
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
