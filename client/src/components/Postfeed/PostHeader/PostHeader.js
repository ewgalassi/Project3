import React from "react";
// import PicIcon from "../../NewPost/PicIcon/PicIcon";
import "./PostHeader.css";
import PostAPI from "../../../utils/postAPI";

const styles = {
  head: {
    fontFamily: "Helvetica",
    fontSize: 18,
    color: "red"
  }
}

class PostHeader extends React.Component {

  handleDelete = (id) => {
    console.log(id);
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

  render() {
    return (
      <div className="postheader">
        {/* <PicIcon pic={this.props.pic} /> */}
        <img className="thumbnail" src={this.props.pic} alt="Profile pic"/>
        <a href={"/profile/" + this.props.authorId}>
          <h5 className="author">{this.props.author}</h5>
        </a>
        <button 
        className="btn btn-sm btn-light float-right"
        onClick={() => this.handleDelete(this.props.id)}
        style={styles.head}
        >X</button>
      </div>
    )
  };
};

export default PostHeader;
