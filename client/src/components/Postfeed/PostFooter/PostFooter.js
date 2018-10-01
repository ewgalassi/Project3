import React from "react";
import "./PostFooter.css";
import PostAPI from "../../../utils/postAPI";

class PostFooter extends React.Component {

  state = {
    numLikes: this.props.numLikes,
    comments: this.props.comments || [],
    saves: this.props.saves
  };

  handleLike = id => {
    PostAPI.likePost(id).then(data => {
      console.log(data);
      this.setState({ numLikes: this.state.numLikes + 1 });
    }).catch(err => {
      console.log(err);
    })
  };

  handleComment = id => {
    const comment = prompt("Add a comment:");
    PostAPI.commentPost({
      post_id: id,
      comment: comment
    }).then(data => {
      console.log(data.data.comments);
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
          {comment.author.firstName || comment.firstName}
          </a>: {comment.text}
          
        </li>
      );
    });
  };

  saveSnippet = id => {
    PostAPI.saveSnippet(id).then(data =>{
      console.log(data);
      this.setState({ saves: this.state.saves})
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="footer">
        <div>
          <button onClick={() => this.handleComment(this.props.id)} type="button" className="post-btn comment-btn btn btn-secondary btn-sm"><span className="fa fa-thumbs-o-up"></span> Comment</button>
          <button onClick={() => this.handleLike(this.props.id)} type="button" className="post-btn like-btn btn btn-secondary btn-sm"><span className="fa fa-thumbs-o-up"></span> Like ({this.state.numLikes})</button>
          <button onClick={() => this.saveSnippet(this.props.id)}  type="button" className="post-btn snippet-btn btn btn-secondary btn-sm"><span></span> Save Snippet</button>
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