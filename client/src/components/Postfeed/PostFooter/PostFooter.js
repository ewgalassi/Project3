import React from "react";
import "./PostFooter.css";
import PostAPI from "../../../utils/postAPI";

class PostFooter extends React.Component {

  state = {
    numLikes: this.props.numLikes,
    comments: []
  };

  handleLike = id => {
    console.log(id);
    PostAPI.likePost(id).then(data => {
      this.setState({ numLikes: this.state.numLikes + 1 });
    });
  };

  handleComment = id => {
    console.log(id);
    const comment = prompt("Add a comment:");
    PostAPI.commentPost({
      post_id: id,
      comment: comment
    }).then(data => {
      console.log(data.data);
      console.log(this.props.comments);
    });
  };

  render() {
    return (
      <div className="row">
        {/* Like button */}
        <button
          onClick={() => this.handleLike(this.props.id)}
          type="button"
          className="post-btn btn btn-secondary">
          <span className="fa fa-thumbs-o-up"></span> Like ({this.state.numLikes})
        </button>

        {/* Comment button */}
        <button type="button"
          className="post-btn btn btn-secondary"
          onClick={() => this.handleComment(this.props.id)}>
          <span className="fa fa-thumbs-o-up"></span> Comment
        </button>

        {/* <button>Save</button> */}
      </div>
    );
  }
}

export default PostFooter;