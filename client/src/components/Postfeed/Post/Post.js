import React, { Component } from "react";
import Card from "../../Card/Card";
import Article from "./PostType/Article";
import Snippet from "./PostType/Snippet";
import Status from "./PostType/Status";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";
import savedAPI from "../../../utils/savedAPI"

import "./Post.css";

class Post extends Component {

  state = {
    post: this.props.post,
    type: this.props.type,
    description: this.props.description,
    isSaved: this.props.isSaved || false,
    numLikes: this.props.numLikes,
    comments: this.props.comments || [],
    saves: this.props.saves,
    isLiked: this.props.isLiked || false
  };

  saveSnippet = postData => {
    alert("Snippet Saved!")
    console.log(this.state.isSaved);
    savedAPI.saveSnippet(postData).then(data => {
      this.setState({
        isSaved: true,
      })
    });
  };

  unSaveSnippet = postData => {
    alert("snippet unsaved")
    savedAPI.unSaveSnippet(postData).then(data => {
      this.setState({
        isSaved: false
      })
    })
  }

  saveOrUnsave = () => {
    if (this.state.isSaved) {
      console.log(this.state.isSaved);
      return (
        <button
          onClick={() => this.unSaveSnippet(this.props.id)}
          type="button"
          className="post-btn snippet-btn btn btn-secondary btn-sm"
        >
          <span /> Unsave Snippet
      </button>
      )
    } else if (!this.state.isSaved) {
      const postData = {
        post: this.props.post,
        type: this.props.type,
        description: this.props.description,
        numLikes: this.props.numLikes,
        comments: this.props.comments || [],
        saves: this.props.saves,
      }
      return (
        <button
          onClick={() => this.saveSnippet(postData)}
          type="button"
          className="post-btn snippet-btn btn btn-secondary btn-sm"
        >
          <span /> Save Snippet
      </button>
      )
    }
  }

  returnSaveSnip = type => {

    if (!window.location.href.includes('snippet')) {
      switch (type) {
        case "snippet":
          return (
            <div>
              {this.saveOrUnsave()}
            </div>
          );
        default:
          return (
            <div>
              {this.saveOrUnsave()}
            </div>
          );
      }
    } else {
      console.log("not snippet page");
    }
  }


  returnType = type => {
    switch (type) {
      case "status":
        return <Status post={this.props.post} />;
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
            id="snippet"
            post={this.props.post}
            description={this.props.description}
          >

          </Snippet>

        );
      default:
        return (
          <Snippet
            post={this.props.post}
            description={this.props.description}
          />
        );
    }
  };

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
        <hr />

        {this.returnType(this.props.type)}
        {this.returnSaveSnip(this.props.type)}
        <hr />

        <PostFooter
          numLikes={this.props.numLikes}
          comments={this.props.comments}
          authorId={this.props.authorId}
          id={this.props.id}
          isLiked={this.props.isLiked}
          loggedInUser={this.props.loggedInUser}
        />

      </Card>
    );
  }
}

export default Post;


