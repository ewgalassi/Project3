import React, { Component } from "react";
import Post from "./Post/Post";
import UserAPI from "../../utils/userAPI";
import PostAPI from "../../utils/postAPI";
import SavedAPI from "../../utils/savedAPI";
// import Status from "./Post/PostType/Status";


class Postfeed extends Component {

    state = {
        user: {},
        posts: [],
        userId: this.props.userId
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
            SavedAPI.getSavedSnippets().then(data => {
                // console.log();
                // console.log(data);
                this.setState({
                    posts: data.data
                });
            });
        } else if (window.location.href.includes("profile")) {
            UserAPI.getUser().then(data => {
                PostAPI.getPostId(data.data._id)
                    .then(data => {
                        this.setState({
                            posts: data.data || []
                        });
                    });
            });
        } else {
            PostAPI.getPosts().then(data => {
                this.setState({
                    posts: data.data || []
                });
            });
        }
    };

    render() {
        return (
            <div>

                {this.state.posts.map(post => {
                    // Check if post is liked
                    let isLiked = false;
                    for (let i = 0; i < post.likes.length; i++) {
                        if (this.props.loggedInUser === post.likes[i].author) {
                            isLiked = true;
                        };
                    };
                    return (
                        <Post 
                        key={post._id}
                        id={post._id}
                        isLiked={isLiked}
                        authorId={post.ogAuthor ? post.ogAuthor._id : post.author._id}
                        loggedInUser={this.props.loggedInUser}
                        author={post.ogAuthor ? post.ogAuthor.fullName : post.author.fullName || "By You"} 
                        post={post.post}
                        type={post.type}
                        articleMetadata={post.articleMetadata || "not an article"}
                        numLikes={post.numLikes}
                        comments={post.comments}
                        description={post.description}
                        
                        pic={window.location.href.includes("profile") ? "" :(post.ogAuthor ? post.ogAuthor.profile.pic : "") || ""}
                        time={post.createdAt}
                        />
                    )
                })}

                <br></br>
            </div>


        )

    }

}

export default Postfeed;
