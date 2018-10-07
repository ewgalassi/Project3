import React from "react";
// import PicIcon from "../../NewPost/PicIcon/PicIcon";
import "./PostHeader.css";
import PostAPI from "../../../utils/postAPI";
import SavedAPI from "../../../utils/savedAPI";

const moment = require("moment");

class PostHeader extends React.Component {
  renderType = () => {
    if (window.location.href.includes('profile')){
      return(
        <div className=".postheader only-delete">
          {this.renderDeleteBtn()}
        </div>
      )
    } else {
      return (
        <div className="postheader">
          {/* <PicIcon pic={this.props.pic} /> */}
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
<<<<<<< HEAD

          {this.renderDeleteBtn()}
=======
          <div className="newsfeed-delete">
            {this.renderDeleteBtn()}
          </div>
>>>>>>> master
        </div>
      );
    }
  };

  handleDelete = id => {
    // console.log(id);
    if (window.location.href.includes("snippets")) {
      // console.log("working")
      SavedAPI.unSaveSnippet(id).then(data => {
        if (data.data.success) {
          window.location.reload();
        } else {
          console.log(data.data);
        }
      });
    } else {
      PostAPI.deletePost(id)
        .then(data => {
          // console.log("not working")
          if (data.data.success) {
            window.location.reload();
          } else {
            console.log(data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  renderDeleteBtn = () => {
    if (this.props.authorId === this.props.loggedInUser) {
      return (
<<<<<<< HEAD
        <button
          className="btn btn-sm btn-light float-right delete-btn"
          onClick={() => this.handleDelete(this.props.id)}
        >
          X
        </button>
=======
        <button 
        className="float-right delete-btn"
        onClick={() => this.handleDelete(this.props.id)}
        >X</button>
>>>>>>> master
      );
    }
  };

  render() {
    return this.renderType();
  }
}

export default PostHeader;
