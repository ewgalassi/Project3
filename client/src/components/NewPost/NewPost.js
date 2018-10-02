import React, { Component } from "react";
import PostBox from "./PostBox/PostBox";
import PostBtn from "./PostBtn/PostBtn";
import PostAPI from "../../utils/postAPI";
import Dropdown from "../Dropdown/Dropdown";
import Card from "../Card/Card";
import "./NewPost.css";


class NewPost extends Component {
  state = {
    posts: [],
    post: "",
    type: "",
    description: ""
  };


  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelect = (event) => {
    this.setState({
      type: event.target.type
    }, () => console.log(this.state.type))

  };

  handleSubmit = event => {

    event.preventDefault();
    const post = {
      type: this.state.type,
      post: this.state.post,
      description: this.state.description
    };
    PostAPI.savePost(post).then(data => {
      console.log(data);
      if (window.location.href === "http://localhost:3000/profile") {

        window.location.replace("/profile");
      } else {

        window.location.replace("/");
      }
    }).catch(err => {
      console.log(err);
    });
  };


  render() {
    return (
      <Card style={{ padding: 20 }}>
        <PostBox
          onChange={this.handleInput}
          post={this.state.post}
          type={this.state.type}
          description={this.state.description} />
        <hr />
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

    )
  }
}
export default NewPost;