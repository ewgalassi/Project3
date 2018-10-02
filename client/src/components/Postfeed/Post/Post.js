import React, { Component } from "react";
import Card from "../../Card/Card";
import Article from "./PostType/Article";
import Snippet from "./PostType/Snippet";
import Status from "./PostType/Status";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";

import "./Post.css";

class Post extends Component {

  returnType = (type) => {
    switch (type) {
      case "status":
        return (
          <Status
            post={this.props.post}
          />
        );
      case "article":
        return (
          <Article
            post={this.props.post}
            articleMetadata={this.props.articleMetadata}
          />
        );
      case "snippet":
        return (
          <Snippet
            post={this.props.post}
            description={this.props.description}
            >
            {/* {this.props.post} */}
          </Snippet>
        )
      default:
        return (
          <Snippet
            post={this.props.post}
            description={this.props.description}
          />
        )
    }
    
  }

  render() {
    return (
      <Card style={{ marginTop: 30, padding: 20 }}>
        <PostHeader
          author={this.props.author}
          pic={this.props.pic}
          authorId={this.props.authorId}
          id={this.props.id}
          loggedInUser={this.props.loggedInUser}
        />
        <hr/>

        {this.returnType(this.props.type)}

        <hr />
        <PostFooter
          numLikes={this.props.numLikes}
          comments={this.props.comments}
          authorId={this.props.authorId}
          id={this.props.id}
        />
      </Card>
    )

  }
}

export default Post;
