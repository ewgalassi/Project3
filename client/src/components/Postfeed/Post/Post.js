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
  render() {
    return (
      <div className="tempcontainer">
        <Card>
          <PostHeader />
          <Article />
          <PostFooter />
        </Card>
        <Card>
          <PostHeader />
          <Snippet />
        </Card>
        <Card>
          <PostHeader />
          <Status />
        </Card>

      </div>
    );
  }
}

export default Post;
