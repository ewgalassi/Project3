import React, { Component } from "react";
import PostBox from "./PostBox/PostBox";
import PostBtn from "./PostBtn/PostBtn";
import PostAPI from "../../utils/postAPI";
import Dropdown from "../Dropdown/Dropdown";
import Card from "../Card/Card";
import "./NewPost.css";
// import savedAPI from "../../utils/savedAPI";
import "../../mobile.css";

class NewPost extends Component {
  state = {
    posts: [],
    post: "",
    type: "" || "status",
    description: ""
    // ogAuthor: this.loggedInUser
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    this.setState(
      {
        type: event.target.type
      },
      () => console.log(this.state.type)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const post = {
      type: this.state.type,
      post: this.state.post,
      description: this.state.description,
      ogAuthor: this.props.authorId
    };
    if (post.type === "snippet") {
      console.log(this.state.ogAuthor);
      PostAPI.savePost(post)
        .then(data => {
          console.log(data);
          if (window.location.href === "http://localhost:3000/profile") {
            window.location.replace("/profile");
          } else {
            window.location.replace("/");
          }
        })
        .catch(err => {
          console.log(err);
        });
      // savedAPI.saveSnippet(post).then(data => {
      //   console.log(data);
      // });
    } else {
      PostAPI.savePost(post)
        .then(data => {
          // console.log(data);
          if (window.location.href === "http://localhost:3000/profile") {
            window.location.replace("/profile");
          } else {
            window.location.replace("/");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Card id="newPostCard">
        <PostBox
          onChange={this.handleInput}
          post={this.state.post}
          type={this.state.type}
          description={this.state.description}
        />
        <hr id="newPostBoxHR" />
        <div className="postbox-footer">
          <PostBtn onClick={this.handleSubmit} />
          <Dropdown
            name="Select Type"
            option1="Status Update"
            option2="Code Snippet"
            option3="Article Link"
            handleSelect={this.handleSelect}
            type={this.state.type}
          />
        </div>
      </Card>
    );
  }
}
export default NewPost;
