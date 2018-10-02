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
        languages: data.data.profile.languages.join(","),
        technologies: data.data.profile.technologies.join(","),
        jobTitle: data.data.profile.jobInfo ? data.data.profile.jobInfo.title : "",
        jobCompany: data.data.profile.jobInfo ? data.data.profile.jobInfo.company : ""
      });
    });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    UserAPI.editUser({
      "profile.pic": this.state.pic,
      "profile.github": this.state.github,
      "profile.linkedin": this.state.linkedin,
      "profile.portfolio": this.state.portfolio,
      "profile.languages": this.state.languages.split(","),
      "profile.technologies": this.state.technologies.split(","),

    }).then(data => {
      if (data.data.success) {
        window.location.replace("/profile");
      } else {
        console.log(data.data);
      }
    }).catch(err => {
      console.log(err);
    });
  };


  render() {
    return (
      <div>
        <form>

          <label>Profile Pic:</label>
          <input name="pic" value={this.state.pic} onChange={this.handleInput} type="text" />
          <br />

          <label>Github:</label>
          <input name="github" value={this.state.github} onChange={this.handleInput} type="text" />
          <br />

          <label>LinkedIn:</label>
          <input name="linkedin" value={this.state.linkedin} onChange={this.handleInput} type="text" />
          <br />

          <label>Portfolio:</label>
          <input name="portfolio" value={this.state.portfolio} onChange={this.handleInput} type="text" />
          <br />

          <label>Job Title:</label>
          <input name="jobTitle" value={this.state.jobTitle} onChange={this.handleInput} type="text" />
          <br />

          <label>Company:</label>
          <input name="jobCompany" value={this.state.jobCompany} onChange={this.handleInput} type="text" />
          <br />

          <label>Languages (separate with comma):</label>
          <input name="languages" value={this.state.languages} onChange={this.handleInput} type="text" />
          <br />

          <label>Technologies (separate with comma):</label>
          <input name="technologies" value={this.state.technologies} onChange={this.handleInput} type="text" />
          <br />

          <button onClick={this.handleSubmit}>Submit</button>

        </form>
      </div>
    );
  };
};

export default EditProfile;
