import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";
import UserPic from "../../components/UserPic/UserPic";
import UserInfo from "../../components/UserInfo/UserInfo";
import NewPost from "../../components/NewPost/NewPost";
import Navbar from "../../components/Navbar/Navbar";
import UserAPI from "../../utils/userAPI";
import StackResults from "../../components/StackResults/stackResults";
import axios from "axios";
// import "./Profile.css";

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
    following: [],
    searchInput: "",
    searchResults: [],
    numFollowers: 0
  };

  handleInput = event => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state.searchInput)
  };

  searchStack(search) {
    const stackExURL =
      "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=" +
      search +
      "&site=stackoverflow";
    axios.get(stackExURL).then(response => {
      this.setState({
        searchResults: response.data.items
      });
      console.log(this.state.searchResults);
    });
  }

  componentDidMount = () => {
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
        }
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
          following: data.data.following || [],
          numFollowers: data.data.numFollowers
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getUserDataById = id => {
    UserAPI.getUser().then(data => {
      this.setState({
        loggedInUser: data.data._id,
        following: data.data.following || [],
        numFollowers: data.data.numFollowers
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
          numFollowers: data.data.numFollowers,
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
                numFollowers={this.state.numFollowers}
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
              <div className="stack-search">
                <div className="search-wrapper">
                  <div className="search-bar sticky-top">
                    <h5>Search StackOverflow</h5>
                    <form className="search-form">
                      <input
                        type="text"
                        name="searchInput"
                        placeholder="Search"
                        value={this.state.searchInput}
                        onChange={this.handleInput}></input>
                      <button className="btn btn-sm" onClick={
                        event => {
                          event.preventDefault()
                          this.searchStack(this.state.searchInput)
                        }
                        }><span className="fas fa-search"></span></button>
                    </form>
                  </div>
                </div>
                <div className="search-results">
                  <br></br>
                  {this.state.searchResults.map(searchResult => {
                    return (
                      <StackResults
                        url={searchResult.link}
                        title={searchResult.title}
                      />
                    );
                  })}
                </div>
              </div>
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
