import React, { Component } from "react";
import Card from "../Card/Card";
import { Col, Row } from "../../components/Grid";
import "./UserInfo.css";
import "../../mobile.css";

//function to iterate through languages array and create li
//function to iterate through technologies and create li

class UserInfo extends Component {
  generateLanguages = () => {
    const arr = this.props.languages.map(language => {
      return <li key={this.props.id + language}>{language}</li>;
    });
    return arr;
  };

  generateTechnologies = () => {
    const arr = this.props.technologies.map(tech => {
      return <li key={this.props.id + tech}>{tech}</li>;
    });
    return arr;
  };

  render() {
    return (
      <div className="info-content">
        <Card className="info-card">
          <div className="userCardInfo">
            <span id="avatarIcon" className="fas fa-user" />
            About
          </div>
          <p className="userinfoP">{this.props.title}</p>
          <p className="userinfoP">{this.props.company}</p>
          <div className="profile-links">
            <a href={this.props.github} target="_blank">
              GitHub
            </a>{" "}
            <span>|</span>
            <a href={this.props.portfolio} target="_blank">
              {" "}
              Portfolio
            </a>{" "}
            |
            <a href={this.props.linkedin} target="_blank">
              {" "}
              LinkedIn
            </a>
          </div>
          {/* <div className="profile-projects">
                        <h6>Projects</h6>
                    </div> */}
        </Card>
        <Card className="skills-card">
          <Row>
            <Col size="md-4">
              <div className="languageLeftDiv">Language(s):</div>{" "}
            </Col>
            <Col size="md-8">
              <div className="languageList">{this.generateLanguages()}</div>
            </Col>
          </Row>

          <Row>
            <Col size="md-4">
              <div className="techLeftDiv">Technologies:</div>{" "}
            </Col>
            <Col size="md-8">
              <div className="techList col-xs-6">
                {this.generateTechnologies()}
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
