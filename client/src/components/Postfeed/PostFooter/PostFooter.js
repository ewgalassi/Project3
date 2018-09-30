import React from "react";
import "./PostFooter.css";
import PostAPI from "../../../utils/postAPI";

class PostFooter extends React.Component {

  state = {
    numLikes: this.props.numLikes,
    comments: this.props.comments || []
  };

  handleLike = id => {
    // console.log(id);
    PostAPI.likePost(id).then(data => {
      this.setState({ numLikes: this.state.numLikes + 1 });
    });
  };

  handleComment = id => {
    // console.log(id);
    const comment = prompt("Add a comment:");
    PostAPI.commentPost({
      post_id: id,
      comment: comment
    }).then(data => {
      this.setState({
        comments: data.data.comments || []
      });
    }).catch(err => {
      console.log(err);
    });
  };

  displayComments = () => {
    return this.state.comments.map(comment => {
      return (
        <li key={comment._id}>
          <a href={"/profile/" + comment.author._id}>
          {comment.author.firstName}
          </a>: {comment.text}
          
        </li>
      );
    });
  };

  render() {
    return (
      <div className="footer">
        <div>
          <button onClick={() => this.handleComment(this.props.id)} type="button" className="post-btn comment-btn btn btn-secondary btn-sm"><span className="fa fa-thumbs-o-up"></span> Comment</button>
          <button onClick={() => this.handleLike(this.props.id)} type="button" className="post-btn like-btn btn btn-secondary btn-sm"><span className="fa fa-thumbs-o-up"></span> Like ({this.state.numLikes})</button>
          {/* <button>Save</button> */}
        </div>

      <div>
        {this.displayComments()}
      </div>

      </div>
    );
  }
}

export default PostFooter;