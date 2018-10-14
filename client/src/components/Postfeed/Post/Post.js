import React, { Component } from "react";
import Card from "../../Card/Card";
import Article from "./PostType/Article";
import Snippet from "./PostType/Snippet";
import Status from "./PostType/Status";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";
import savedAPI from "../../../utils/savedAPI";

import "./Post.css";

class Post extends Component {
  state = {
    post: this.props.post,
    type: this.props.type,
    ogAuthor: this.props.authorId,
    description: this.props.description,
    isSaved: this.props.isSaved || false,
    numLikes: this.props.numLikes,
    comments: this.props.comments || [],
    saves: this.props.saves,
    isLiked: this.props.isLiked || false,
    isDisabled: false
  };

  saveSnippet = postData => {
    // alert("Snippet Saved!")
    savedAPI.saveSnippet(postData).then(data => {
      console.log("save snippet running");
      this.setState({
        isSaved: true,
        isDisabled: true
      });
      // console.log("saved?", this.state.isSaved)
    });
  };

  unSaveSnippet = postData => {
    // alert("snippet unsaved");
    savedAPI.unSaveSnippet(postData).then(data => {
      this.setState({
        isSaved: false
      });
      // console.log("saved?", this.state.isSaved)
    });
  };

  handleClick = () => {
    if (!this.state.isSaved) {
      const postData = {
        post: this.props.post,
        type: this.props.type,
        ogAuthor: this.state.ogAuthor,
        description: this.props.description,
        numLikes: this.props.numLikes,
        comments: this.props.comments || [],
        saves: this.props.saves
      };
      console.log(postData);

      this.saveSnippet(postData);
      // document.querySelectorAll(".snippet-btn").addClass("disabled");
    }
    // else if (this.state.isSaved) {
    //   // const postData = {
    //   //   post: this.props.post,
    //   //   type: this.props.type,
    //   //   description: this.props.description,
    //   //   numLikes: this.props.numLikes,
    //   //   comments: this.props.comments || [],
    //   //   saves: this.props.saves,
    //   // }
    //   // this.unSaveSnippet(postData);

    //   alert("You've already saved this one!")
    // }
  };

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
            onClick={this.handleClick}
            isSaved={this.state.isSaved}
            isDisabled={this.state.isDisabled}
          />
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
          ogAuthor={this.props.authorId}
          pic={this.props.pic}
          authorId={this.props.authorId}
          id={this.props.id}
          loggedInUser={this.props.loggedInUser}
          time={this.props.time}
          onOwnProfile={this.props.onOwnProfile}
        />

        {this.returnType(this.props.type)}
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
