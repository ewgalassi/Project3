import React, { Component } from "react";
import Card from "../../Card/Card";
import Article from "./PostType/Article";
import Snippet from "./PostType/Snippet";
import Status from "./PostType/Status";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";

import "./Post.css";

//determines which post type is rendered based on data

//FOR NOW: wrapping everything in temp div container and displaying several posts for visual purposes
//THIS SHOULD EVENTUALLY ONLY DISPLAY ONE POSTTYPE WITH POSTHEADER

class Post extends Component {

  returnType = (type) => {
    switch(type) {
      case "status":
        return (
          <Status 
          post={this.props.post}
          />
        );
        break;
      case "article":
       return (
          <Article
          post={this.props.post} 
          />
       );
       break;
      case "snippet":
       return (
         <Snippet 
         post={this.props.post}
         />
       )
    }
  }

  render() {
    return (
        <Card>
          <PostHeader 
          author={this.props.author}
          pic={this.props.pic}
          />

          {this.returnType(this.props.type)}

          <PostFooter 
          numLikes={this.props.numLikes}
          comments={this.props.comments}
          />
        </Card>
    )
  
  }
}

export default Post;
