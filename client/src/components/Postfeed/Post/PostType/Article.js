import React, { Component } from "react";
import "./PostType.css";
// import Row from "../../Grid/Row";
import "../../../../mobile.css";

class Article extends Component {
  render() {
    return (
      <div className="articleCard">
        <div>
          <a className="article-title" target="_blank" href={this.props.post}>
            <h4>{this.props.articleMetadata.title}</h4>
          </a>
          <div>
            <img
              src={this.props.articleMetadata.image}
              className="img-fluid"
              alt={this.props.post}
            />
          </div>
          <p id="articleParagraph">{this.props.articleMetadata.description}</p>
        </div>
      </div>
    );
  }
}

export default Article;
