import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";
import UserPic from "../../components/UserPic/UserPic";
import UserInfo from "../../components/UserInfo/UserInfo";
import NewPost from "../../components/NewPost/NewPost";
import Navbar from "../../components/Navbar/Navbar";
import UserAPI from "../../utils/userAPI";
import "./Profile.css";

class Profile extends Component {
  state = {
    user: {},
    loggedInUser: "",
    id: "",
    pic: "",
    linkedin: "",
    portfolio: "",
    languages: [],
    technologies: [],
    jobTitle: "",
    jobCompany: "",
    following: []
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.id) {
      this.getUserDataById(params.id);
    } else {
      this.getUserData();
    }
  }

  getUserData = () => {
    UserAPI.getUser()
      .then(data => {
        if (data.data.success === false) {
          window.location.replace("/login");
        };
        this.setState({
          user: data.data,
          loggedInUser: data.data._id,
          id: data.data._id,
          pic: data.data.profile.pic,
          github: data.data.profile.github,
          linkedin: data.data.profile.linkedin,
          portfolio: data.data.profile.portfolio,
          languages: data.data.profile.languages,
          technologies: data.data.profile.technologies,
          jobTitle: data.data.profile.jobInfo
            ? data.data.profile.jobInfo.title
            : "Job Title",
          jobCompany: data.data.profile.jobInfo
            ? data.data.profile.jobInfo.company
            : "Job Company",
          following: data.data.following || []
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getUserDataById = id => {
    UserAPI.getUser().then(data => {
      console.log("LOGGED IN: " + data.data._id);
      this.setState({
        loggedInUser: data.data._id,
        following: data.data.following || []
      });
    });
    UserAPI.getUserById(id)
      .then(data => {
        this.setState({
          user: data.data,
          id: data.data._id,
          pic: data.data.profile.pic,
          github: data.data.profile.github,
          linkedin: data.data.profile.linkedin,
          portfolio: data.data.profile.portfolio,
          languages: data.data.profile.languages,
          technologies: data.data.profile.technologies,
          jobTitle: data.data.profile.jobInfo
            ? data.data.profile.jobInfo.title
            : "Job Title",
          jobCompany: data.data.profile.jobInfo
            ? data.data.profile.jobInfo.company
            : "Job Company"
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col size="md-4">
              <UserPic
                pic={this.state.pic}
                fullName={this.state.user.fullName}
                userId={this.state.id}
                loggedInUser={this.state.loggedInUser}
                following={this.state.following}
              />
              <UserInfo
                id={this.state.id}
                languages={this.state.languages}
                github={this.state.github}
                linkedin={this.state.linkedin}
                portfolio={this.state.portfolio}
                technologies={this.state.technologies}
                title={this.state.jobTitle}
                company={this.state.jobCompany}
              />
            </Col>
            <Col size="md-8">
              <NewPost />
              <Postfeed />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
