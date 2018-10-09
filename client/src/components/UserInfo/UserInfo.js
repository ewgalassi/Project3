import React, { Component } from "react";
import Card from "../Card/Card";
import "./UserInfo.css";

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
          <div id="langAndTech" className="content row">
            <div className="col-xs-6">
              <ul className="languages">
                <div className="languageInfo row">
                  <div className="languageLeftDiv">Language(s):</div>{" "}
                  <div className="languageList">
                    {this.generateLanguages()}
                  </div>
                </div>

                {/* <span className="test">{this.generateLanguages()}</span> */}
                {/* <li>JavaScript</li>
                            <li>Python</li>
                            <li>PHP</li> */}
              </ul>
            </div>

            <div className="col-xs-6">
              <ul className="technologies">
                <div className="techInfo row">
                  <div className="techLeftDiv col-sx-6">Technologies:</div>{" "}
                  <div className="techList col-xs-6">
                    {this.generateTechnologies()}
                  </div>
                </div>

                {/* <li>HTML/CSS</li>
                            <li>React</li>
                            <li>MongoDB</li> */}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
