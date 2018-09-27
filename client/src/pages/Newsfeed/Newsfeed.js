import React, { Component } from "react";
<<<<<<< HEAD
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
=======
import Postfeed from "../../components/Postfeed/Postfeed";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import PicIcon from "../../components/PicIcon";
import PostBox from "../../components/PostBox";
import TypeMenu from "../../components/TypeMenu";
import PostBtn from "../../components/PostBtn";
import PostAPI from "../../utils/postAPI";
import "./Newsfeed.css";

//components needed:

//add new post
//post feed
// card
//  post type: snippet, status, article

class Newsfeed extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    PostAPI.getPosts()

      .then(res =>
        // console.log(res.data)
        this.setState({
          posts: res.data
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <PicIcon />
            <PostBox />
            <hr />
            <PostBtn />
            <TypeMenu />
          </Col>
        </Row>

        <Postfeed />

        <Row>
          <List>
            {this.state.posts.map(post => {
              return (
                <ListItem key={post._id}>
                  <a href={"/posts/" + post._id}>
                    <h5>{post.post}</h5>
                    <hr />
                    <p>by {post.author.username}</p>
                  </a>
                </ListItem>
              );
            })}
          </List>
        </Row>
      </Container>
    );
  }
>>>>>>> bug/bcrypt
}

export default Newsfeed;
