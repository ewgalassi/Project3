import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";
import UserPic from "../../components/UserPic/UserPic";
import UserInfo from "../../components/UserInfo/UserInfo";
import NewPost from "../../components/NewPost/NewPost";
import UserAPI from "../../utils/userAPI";


//components needed:

//profile pic
//user info
//add new post

class Profile extends Component {
  state = {
    user: {},
    pic: ""
  };

  componentDidMount() {
    this.getUserData();
  };

  getUserData = () => {
    UserAPI.getUser().then(data => {
      console.log(data.data);
      this.setState({
        user: data.data,
        pic: data.data.profile.pic
        });
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    
    return (
    <Container>
        <Row>
          <Col size="md-4">
            <UserPic pic={this.state.pic} />
            <UserInfo fullName={this.state.user.fullName} />
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
