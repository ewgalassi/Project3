import React, { Component } from "react";
import Post from "./Post/Post";
import UserAPI from "../../utils/userAPI";
import PostAPI from "../../utils/postAPI";
// import Status from "./Post/PostType/Status";


class Postfeed extends Component {

    state = {
        user: {},
        posts: [],
    };

    componentDidMount() {
        if (window.location.href === "http://localhost:3000/profile"){
            UserAPI.getUser().then(data =>{
                PostAPI.getPostId(data.data._id)
                .then(data => {
                this.setState({
                    posts: data.data || []
                });
            })
            })
        } else if (window.location.href === "http://localhost:3000/snippets"){
            PostAPI.getSnippets().then(data =>{
                this.setState({
                    posts: data.data || []
                })
            })
        } else {
        
        PostAPI.getPosts().then(data => {
            // console.log(data.data)
            this.setState({
                posts: data.data || []
            });
        }); 
    }
    };


    render(){
        return(
            <div>
                
                {this.state.posts.map(post => {
                    // console.log(post)
                    return (
                        <Post 
                        key={post._id}
                        id={post._id}
                        authorId={post.author._id}
                        author={post.author.fullName} 
                        post={post.post}
                        type={post.type}
                        numLikes={post.numLikes}
                        comments={post.comments}
                        pic={post.author.profile ? post.author.profile.pic : "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"}
                        />
                    )
                })}
                
            
            </div>
            
            
        )
     
    }

}

export default Postfeed;