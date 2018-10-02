import React from "react";
import UserAPI from "../../utils/userAPI";

class EditProfile extends React.Component {
  state = {
    id: "",
    pic: "",
    linkedin: "",
    portfolio: "",
    languages: [],
    technologies: [],
    jobTitle: "",
    jobCompany: ""
  };

  componentDidMount() {
    UserAPI.getUser().then(data => {
      this.setState({
        id: data.data._id,
        pic: data.data.profile.pic,
        github: data.data.profile.github,
        linkedin: data.data.profile.linkedin,
        portfolio: data.data.profile.portfolio,
        languages: data.data.profile.languages,
        technologies: data.data.profile.technologies,
        jobTitle: data.data.profile.jobInfo ? data.data.profile.jobInfo.title : "Job Title",
        jobCompany: data.data.profile.jobInfo ? data.data.profile.jobInfo.company : "Job Company"
      });
    });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    return (
      <div>
        <form>

          <label>Profile Pic:</label>
          <input name="pic" value={this.state.pic} onClick={this.handleInput} />

          <label>Github:</label>
          <input name="github" value={this.state.github} onClick={this.handleInput} />

          <label>LinkedIn:</label>
          <input name="linkedin" value={this.state.linkedin} onClick={this.handleInput} />

          <label>Portfolio:</label>
          <input name="portfolio" value={this.state.portfolio} onClick={this.handleInput} />

          <label>Job Title:</label>
          <input name="jobTitle" value={this.state.jobTitle} onClick={this.handleInput} />

          <label>Company:</label>
          <input name="jobCompany" value={this.state.jobCompany} onClick={this.handleInput} />

        </form>
      </div>
    );
  };
};

export default EditProfile;
