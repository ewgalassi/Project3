import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";
import UserPic from "../../components/UserPic/UserPic";
import UserInfo from "../../components/UserInfo/UserInfo";
import NewPost from "../../components/NewPost/NewPost";
import UserAPI from "../../utils/userAPI";


class Profile extends Component {
  state = {
    user: {},
    pic: "",
    linkedin:"",
    portfolio:"",
    projects:[],
    languages:[],
    technologies:[],
    jobInfo:{},
  };

  componentDidMount() {
    this.getUserData();
  };

  getUserData = () => {
    UserAPI.getUser().then(data => {
      console.log(data.data);
      this.setState({
        user: data.data,
        pic: data.data.profile.pic,
        github: data.data.profile.github,
        linkedin: data.data.profile.linkedin,
        portfolio: data.data.profile.portfolio,
        projects: data.data.profile.projects,
        languages: data.data.profile.languages,
        technologies: data.data.profile.technologies,
        jobInfo: data.data.profile.jobInfo,
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
            <UserPic 
              pic={this.state.pic} 
              fullName={this.state.user.fullName} />
            <UserInfo 
              title={this.state.jobInfo.title}
              company={this.state.jobInfo.company}
              languages={this.state.languages}
              github={this.state.github}
              linkedin={this.state.linkedin}
              portfolio={this.state.portfolio}
              projects={this.state.projects}
              technologies={this.state.technologies}

               />
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
