import React from "react";
import PicIcon from "../../NewPost/PicIcon/PicIcon";
import "./PostHeader.css";

class PostHeader extends React.Component {

  render() {
    return (
      <div className="postheader">
        <PicIcon pic={this.props.pic} />
        <a href={"/profile/" + this.props.authorId}>
          <h5 className="author">{this.props.author}</h5>
        </a>
      </div>
    )
  };
};

export default PostHeader;
