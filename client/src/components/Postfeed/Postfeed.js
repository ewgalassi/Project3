import React, { Component } from "react";
import Post from "./Post/Post";
import PostAPI from "../../utils/postAPI";
import Status from "./Post/PostType/Status";


class Postfeed extends Component {

    state = {
        posts: [],
    };

    componentDidMount() {
        PostAPI.getPosts().then(data => {
            this.setState({
                posts: data.data
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