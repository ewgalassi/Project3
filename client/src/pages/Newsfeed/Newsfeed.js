import React, { Component } from "react";
import PostAPI from "../../utils/postAPI";

//components needed:
//navbar
//add new post
//post feed 
// card
//  post type: snippet, status, article

class Newsfeed extends Component {
    
    render() {
        return(
            <h3>Newsfeed page</h3>      
        )
        
    }


    componentDidMount() {
        this.loadPosts();
      };

    handlePostSubmit = event =>{
        event.preventDefault();
        if (this.state.author && this.state.text){
            PostAPI.commentPost({
                
            })
            
        }
    };

    handleLikeClick();

    handleComment();

    handlePostDelete();

    loadPosts = () => {
        PostAPI.getPosts()
        .then(res => this.setState({}))
    }
}



export default Newsfeed;