import React from "react";
import "./PostFooter.css";
import PostAPI from "../../../utils/postAPI";

class PostFooter extends React.Component {
  state = {
    numLikes: this.props.numLikes,
    comments: this.props.comments || []
  };

  handleLike = id => {
    PostAPI.likePost(id)
      .then(data => {
        console.log(data);
        this.setState({ numLikes: this.state.numLikes + 1 });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleComment = id => {
    const comment = prompt("Add a comment:");
    PostAPI.commentPost({
      post_id: id,
      comment: comment
    })
      .then(data => {
        console.log(data.data.comments);
        this.setState({
          comments: data.data.comments || []
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayComments = () => {
    return this.state.comments.map(comment => {
      return (
        <li key={comment._id}>
          <a href={"/profile/" + comment.author._id}>
            {comment.author.firstName || comment.firstName}
          </a>
          : {comment.text}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="Cardfooter">
        <div>
          <button
            onClick={() => this.handleComment(this.props.id)}
            type="button"
            className="post-btn comment-btn btn btn-secondary btn-sm"
          >
            Comment
          </button>
          <button
            onClick={() => this.handleLike(this.props.id)}
            type="button"
            className="post-btn like-btn btn btn-secondary btn-sm"
          >
            <span className="far fa-thumbs-up" /> Like ({this.state.numLikes})
          </button>
          {/* <button>Save</button> */}
        </div>

        <div className="comments">{this.displayComments()}</div>
      </div>
    );
  }
}

export default PostFooter;
