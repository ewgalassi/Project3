import React from "react";
import PostAPI from "../../../utils/postAPI";
import CommentBox from "../../CommentBox/CommentBox";
import "./PostFooter.css";
import "../../../mobile.css";

class PostFooter extends React.Component {
  state = {
    numLikes: this.props.numLikes,
    comment: "",
    comments: this.props.comments || [],
    saves: this.props.saves,
    isLiked: this.props.isLiked || false,
    isHidden: true
  };

  handleLike = id => {
    PostAPI.likePost(id).then(data => {
      this.setState({
        numLikes: this.state.numLikes + 1,
        isLiked: true
      });
    });
  };

  handleUnlike = id => {
    PostAPI.unlikePost(id).then(data => {
      this.setState({
        numLikes: this.state.numLikes - 1,
        isLiked: false
      });
    });
  };

  toggleComment = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  handleInput = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    PostAPI.commentPost(this.props.id, this.state.comment)
      .then(data => {
        this.setState({
          comments: data.data.comments || [],
          comment: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = id => {
    console.log("delete " + id);
    PostAPI.deleteComment(id)
      .then(data => {
        console.log(data);
        if (data.data.success) {
          window.location.reload();
        } else {
          console.log(data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayComments = () => {
    return this.state.comments.map(comment => {
      // Determine if delete button should render
      const deleteBtn = () => {
        if (comment.author._id === this.props.loggedInUser) {
          return (
            <button
              className="comment-x btn btn-sm btn-light mr-2 align-middle"
              onClick={() => this.handleDelete(comment._id)}
            >
              X
            </button>
          );
        }
      };

      return (
        <li key={comment._id}>
          {deleteBtn()}
          <a href={"/profile/" + comment.author._id}>
            {comment.author.firstName || comment.firstName}
          </a>
          : {comment.text}
        </li>
      );
    });
  };

  // saveSnippet = postData => {
  //   savedAPI.saveSnippet(postData).then(data => {
  //     console.log(data);
  //   });
  // };

  // renderSaveSnippet = () =>{
  //   if (this.props.type === "snippet" && (!window.location.href.includes('snippet'))){
  //     return(
  //       <button
  //           onClick={() => this.saveSnippet(this.props.id)}
  //           type="button"
  //           className="post-btn snippet-btn btn btn-secondary btn-sm"
  //         >
  //           <span /> Save Snippet
  //         </button>
  //     )
  //   }
  // }

  renderLikeButton = () => {
    if (this.state.isLiked) {
      return (
        <button
          onClick={() => this.handleUnlike(this.props.id)}
          type="button"
          className="post-btn like-btn btn btn-secondary btn-sm"
        >
          <span id="likeColor" className="fas fa-thumbs-up" /> Like (
          {this.state.numLikes})
        </button>
      );
    } else {
      return (
        <button
          onClick={() => this.handleLike(this.props.id)}
          type="button"
          className="post-btn like-btn btn btn-secondary btn-sm"
        >
          <span className="far fa-thumbs-up" /> Like ({this.state.numLikes})
        </button>
      );
    }
  };

  render() {
    return (
      <div className="cardfooter">
        <div>
          <button
            onClick={this.toggleComment}
            type="button"
            className="post-btn comment-btn btn btn-secondary btn-sm"
          >
            Comment
          </button>

          {this.renderLikeButton()}
          {/* <button
            onClick={() => this.saveSnippet(this.props.id)}
            type="button"
            className="post-btn snippet-btn btn btn-secondary btn-sm"
          >
            <span /> Save Snippet
          </button> */}

          {!this.state.isHidden && (
            <div>
              <CommentBox
                displayComments={this.displayComments}
                onChange={this.handleInput}
                comment={this.state.comment}
                onSubmit={this.handleSubmit}
              />
              <div
                id="commentRow"
                className="row comment-row"
                style={{ margin: 10 }}
              >
                <div className="comments">{this.displayComments()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PostFooter;
