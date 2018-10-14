import React from "react";
import "./PostHeader.css";
import PostAPI from "../../../utils/postAPI";
import SavedAPI from "../../../utils/savedAPI";
import moment from "moment";


class PostHeader extends React.Component {
  renderType = () => {
    if (window.location.href.includes('profile') || window.location.href.includes('snippet')) {
      return (
        <div className="postheader only-delete">
          {this.renderDeleteBtn()}
        </div>
      )
    } else {
      return (
        <div className="postheader">
          <div className="thumbnail-div">
            <img className="thumbnail" src={this.props.pic} alt="Profile pic" />
          </div>
          <div>
            <a href={"/profile/" + this.props.authorId}>
              <h5 className="author">{this.props.author}</h5>
            </a>
            <p className="timestamp">
              {moment(this.props.time).format("dddd, MMM Do YYYY, h:mm a")}
            </p>
          </div>
          <div className="newsfeed-delete">{this.renderDeleteBtn()}</div>
        </div>
      );
    }
  };

  handleDelete = id => {
    if (window.location.href.includes('snippets')) {
      SavedAPI.unSaveSnippet(id).then(data => {
        if (data.data.success) {
          window.location.reload();
        } else {
          console.log(data.data);
        }
      });
    } else {
      PostAPI.deletePost(id).then(data => {
        if (data.data.success) {
          window.location.reload();
        } else {
          console.log(data.data);
        };
      }).catch(err => {
        console.log(err);
      });
    };
  };

  renderDeleteBtn = () => {
    if (this.props.authorId === this.props.loggedInUser || this.props.onOwnProfile) {
      return (
        <button
          className="float-right delete-btn"
          onClick={() => this.handleDelete(this.props.id)}
        >
          X
        </button>
      );
    }
  };

  render() {
    return this.renderType();
  };
};

export default PostHeader;
