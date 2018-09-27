import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import SubmitPost from "../../components/SubmitPost/SubmitPost";

class Newsfeed extends Component {
    state = {
        user: "",
        posts: []
    };

    componentDidMount() {
        this.getUserInfo();
    };

    getUserInfo = () => {
        axios.get("/user").then(data => {
            if (!data.data._id) {
                return window.location.replace("/login");
            };
            this.setState({ user: data.data })
            this.getPosts();
        }).catch(err => {
            console.log(err);
        });
    };

    getPosts = () => {
        axios.get("/api/posts").then(data => {
            this.setState({ posts: data.data });
            console.log(data.data);
        }).catch(err => {
            console.log(err);
        });
    };

    handleLogout = event => {
        event.preventDefault();
        axios.get("/user/logout").then(data => {
            if (data.data.success) {
                alert("logged out");
                window.location.replace("/login");
            };
            window.location.replace("/login");
        });
    };

    render() {
        return (
            <div>
                <h3>Welcome {this.state.user.fullName}!</h3>
                
                <button onClick={this.handleLogout}>Logout</button>
                <br />

                <SubmitPost />
                <hr />

            {this.state.posts.map(post => {
                return (
                <Post 
                key={post._id}
                id={post._id}
                post={post.post}
                type={post.type}
                author={post.author.fullName}
                likes={post.numLikes}
                comments={post.comments}
                />
                )
            })}

            </div>
        )
    }
}

export default Newsfeed;
