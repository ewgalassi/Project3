import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    likeButton: (<button onClick={() => this.handleLike(this.props.id)}>Like</button>),
    comment: ""
  };

  handleLike = id => {
    axios.put("/api/posts", { post_id: id }).then(data => {
      this.setState({
        likeButton: (<button>Unlike</button>)
      })
    });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = {
      post_id: event.target.value,
      comment: this.state.comment
    };
    axios.post("/api/posts/comment", comment).then(data => {
      console.log(data);
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  };

  render() {
    return (
      <div>
        <p>
          Post: {this.props.post}
        </p>
        <p>
          Type: {this.props.type}
        </p>
        <p>
          By: {this.props.author}
        </p>
        <p>
          Likes: {this.props.likes} {this.state.likeButton}
        </p>
        Comments:
          {this.props.comments.map(comment => {
          return (
            <div key={comment._id}>
              {comment.author.username}: {comment.text}
            </div>
          )
        })}
        <form>
          <input name="comment" value={this.state.comment} onChange={this.handleInput} />
          <button value={this.props.id} onClick={this.handleSubmit}>Submit</button>
        </form>
        <hr />
      </div>
    )
  }
};

export default Post;
