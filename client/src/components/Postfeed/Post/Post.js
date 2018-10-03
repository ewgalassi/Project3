import React, { Component } from "react";
import Card from "../../Card/Card";
import Article from "./PostType/Article";
import Snippet from "./PostType/Snippet";
import Status from "./PostType/Status";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";
import savedAPI from "../../../utils/savedAPI"

import "./Post.css";

class Post extends Component {

  state = {
    isSaved: this.props.isSaved || false
  }
  // renderSave = (type) =>{
  //   switch (type) {
  //     case "snippet":
  //       return (

  //       );
  //   }
  // }
  saveSnippet = id => {
    alert("Snippet Saved!")
    console.log(this.state.isSaved);
    savedAPI.saveSnippet(id).then(data => {
      this.setState({
        isSaved: true,
        
      })
      
    });
  };

  unSaveSnippet = id => {
    alert("snippet unsaved")
    savedAPI.unSaveSnippet(id).then(data => {
      console.log(data);
      // this.setState({
      //   isSaved:false
      // })
    })
  }

  saveOrUnsave = () => {
    if (this.state.isSaved) {
      console.log(this.state.isSaved);
      return (
        <button
        onClick={() => this.unSaveSnippet(this.props.id)}
        type="button"
        className="post-btn snippet-btn btn btn-secondary btn-sm"
      >
        <span /> Unsave Snippet
      </button>
      )
    } else if (!this.state.isSaved){
      console.log(this.state.isSaved);
      return (
        <button
        onClick={() => this.saveSnippet(this.props.id)}
        type="button"
        className="post-btn snippet-btn btn btn-secondary btn-sm"
      >
        <span /> Save Snippet
      </button>
      )
    }
  }

returnSaveSnip = type => {
  switch (type) {
    
    case "snippet":
    // console.log("working")
      return (
        <div>
          {this.saveOrUnsave()}
        </div>
        
      )
    }
  }


  returnType = type => {
    switch (type) {
      case "status":
        return <Status post={this.props.post} />;
      case "article":
        return (
          <Article
            post={this.props.post}
            articleMetadata={this.props.articleMetadata}
          />
        );
      case "snippet":
        return (
          <Snippet
            id="snippet"
            post={this.props.post}
            description={this.props.description}
          >
            {/* {this.props.post} */}
           
          </Snippet>
          
        );
      default:
        return (
          <Snippet
            post={this.props.post}
            description={this.props.description}
          />
        );
    }
  };

  render() {
    return (
      <Card style={{ marginTop: 30, padding: 20 }}>
        <PostHeader
          author={this.props.author}
          pic={this.props.pic}
          authorId={this.props.authorId}
          id={this.props.id}
          loggedInUser={this.props.loggedInUser}
        />
        <hr />

        {this.returnType(this.props.type)}
        {this.returnSaveSnip(this.props.type)}
        <hr />
        
        <PostFooter
          numLikes={this.props.numLikes}
          comments={this.props.comments}
          authorId={this.props.authorId}
          id={this.props.id}
          isLiked={this.props.isLiked}
          loggedInUser={this.props.loggedInUser}
        />
        
      </Card>
    );
  }
}

export default Post;
