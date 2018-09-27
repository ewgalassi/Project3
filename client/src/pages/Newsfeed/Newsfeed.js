import React, { Component } from "react";
import Postfeed from "../../components/Postfeed/Postfeed";
import { Col, Row, Container } from "../../components/Grid";

import NewPost from "../../components/NewPost/NewPost";

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
            <Row>
             <NewPost/>
            </Row>
            <Row>
              <Postfeed />
            </Row>
          </Col>
        </Row>

      

        {/* <Row>
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
        </Row> */}
      </Container>
    );
  }
}

export default Newsfeed;
