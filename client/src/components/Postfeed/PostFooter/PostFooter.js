import React from "react";
import "./PostFooter.css";
import PostAPI from "../../../utils/postAPI";

class PostFooter extends React.Component {

  state = {
    numLikes: this.props.numLikes
  };

  handleLike = id => {
    console.log(id);
    PostAPI.likePost(id).then(data => {
      this.setState({numLikes: this.state.numLikes + 1});
    });
  };

  render() {
    return (
      <div className="row">
        <button onClick={() => this.handleLike(this.props.id)} type="button" className="post-btn btn btn-secondary"><span className="fa fa-thumbs-o-up"></span> Like ({this.state.numLikes})</button>
        <button type="button" className="post-btn btn btn-secondary"><span className="fa fa-thumbs-o-up"></span> Comment</button>
        {/* <button>Save</button> */}
      </div>
    );
  }
}

export default PostFooter;