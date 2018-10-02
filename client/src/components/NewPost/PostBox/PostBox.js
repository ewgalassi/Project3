import React, { Component } from "react";
import "./PostBox.css";


class PostBox extends Component {

  renderType = (type) => {
    switch (type) {
      case "status":
        return (
          <input
            onChange={this.props.onChange}
            type={this.props.type}
            name="post"
            value={this.props.post}
            className="form-control"
            placeholder="Post a status update"
            id="userPost"
          />
        );
      case "snippet":
        return (
          <div>
            <input
              className="snippet-desc form-control"
              onChange={this.props.onChange}
              type={this.props.type}
              name="description"
              value={this.props.description}
              placeholder="Add a description for your snippet"
            />
            <textarea
              className="snippet-text"
              onChange={this.props.onChange}
              type={this.props.type}
              name="post"
              value={this.props.post}
              id="userPost"
            />
          </div>
        );
      case "article":
        return (
          <input
            onChange={this.props.onChange}
            type={this.props.type}
            name="post"
            value={this.props.post}
            className="form-control"
            placeholder="Add an article url"
            id="userPost"
          />
        );
      default:
        return (
          <input
            onChange={this.props.onChange}
            type={this.props.type}
            name="post"
            value={this.props.post}
            className="form-control"
            placeholder="Post a status update"
            id="userPost"
          />
        );
    }
  }

  render() {


    return (
      <form className="post">
        <div className="userInput">
          <h5>What would you like to share? (select a type!)</h5>
          {this.renderType(this.props.type)}
        </div>
      </form>
    )
  }

};

export default PostBox;
