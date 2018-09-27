import React, { Component } from "react";
import axios from "axios";

class SubmitPost extends Component {
  state = {
    type: "",
    post: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const post = {
      type: this.state.type,
      post: this.state.post
    };
    axios.post("/api/posts/", post).then(data => {
      console.log(data.data);
      window.location.replace("/");
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>New Post:</label><br />
          <input type="text" name="type" onChange={this.handleInput} value={this.state.type} placeholder="type (snippet, status, article)" /><br />
          <input type="text" name="post" onChange={this.handleInput} value={this.state.post} placeholder="post" /><br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };
};

export default SubmitPost;
