import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";
import UserPic from "../../components/UserPic/UserPic";
import UserInfo from "../../components/UserInfo/UserInfo";
import NewPost from "../../components/NewPost/NewPost";


//components needed:

//profile pic
//user info
//add new post

class Profile extends Component {
  state = {};
  render() {
    return (
    <Container>
        <Row>
          <Col size="md-4">
            <UserPic />
            <UserInfo />
          </Col>
          <Col size="md-8">
            <Row>
              <NewPost/>
              <Postfeed />
            </Row>
          </Col>
         
        </Row>
    </Container>
    )
  }
}

export default Profile;
