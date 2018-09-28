import React, { Component } from "react";
import Post from "./Post/Post";
import UserAPI from "../../utils/userAPI";
import PostAPI from "../../utils/postAPI";
import Status from "./Post/PostType/Status";


class Postfeed extends Component {

    state = {
        user: {},
        posts: [],
    };

    componentDidMount() {
        if (window.location.href == "http://localhost:3000/profile"){
            // console.log("WORKING")
            UserAPI.getUser().then(data =>{
                PostAPI.getPostId(data.data._id)
                .then(data => {
                this.setState({
                    posts: data.data || []
                });
            })
            })
        }
        
        PostAPI.getPosts().then(data => {
            this.setState({
                posts: data.data || []
            });
        }); 
    };


    render(){
        return(
            <div>
                
                {this.state.posts.map(post => {
                    return (
                        <Post 
                        key={post._id}
                        author={post.author.fullName} 
                        post={post.post}
                        type={post.type}
                        numLikes={post.numLikes}
                        comments={post.comments}
                        // pic={post.profile.pic}
                        />
                    )
                })}
                
            
            </div>
            
            
        )
     
    }

}

export default Postfeed;