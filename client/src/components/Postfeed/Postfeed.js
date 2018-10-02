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
        if (this.props.userId) {

            PostAPI.getPostId(this.props.userId).then(data => {
                this.setState({
                    posts: data.data || []
                })
            }).catch(err => {
                console.log(err);
            });
        } else if (window.location.href.includes("snippets")) {
            PostAPI.getSnippets().then(data =>{
                this.setState({
                    posts: data.data || []
                })
            })
        } else if (window.location.href.includes("profile")) {
            UserAPI.getUser().then(data =>{
                PostAPI.getPostId(data.data._id)
                .then(data => {
                this.setState({
                    posts: data.data || []
                });
            })
            })
        

    } else {
        PostAPI.getPosts().then(data => {
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
                    return (
                        <Post 
                        key={post._id}
                        id={post._id}
                        authorId={post.author._id}
                        loggedInUser={this.props.loggedInUser}
                        author={post.author.fullName} 
                        post={post.post}
                        type={post.type}
                        articleMetadata={post.articleMetadata || "not an article"}
                        numLikes={post.numLikes}
                        comments={post.comments}
                        description={post.description}
                        pic={post.author.profile ? post.author.profile.pic : "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"}
                        />
                    )
                })}
                
                <br></br>
            </div>
            
            
        )
     
    }

}

export default Postfeed;