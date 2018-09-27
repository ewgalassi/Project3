import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import PicIcon from "../../components/PicIcon";
import PostBox from "../../components/PostBox";
import TypeMenu from "../../components/TypeMenu";
import PostBtn from "../../components/PostBtn";
import "./Newsfeed.css";

//components needed:

//add new post
//post feed
// card
//  post type: snippet, status, article

class Newsfeed extends Component {
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
      </Container>
    );
  }
}

export default Newsfeed;
