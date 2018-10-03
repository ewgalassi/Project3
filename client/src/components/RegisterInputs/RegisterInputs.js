import React, { Component } from "react";
import UserAPI from "../../utils/userAPI";
import "./RegisterInputs.css";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    UserAPI.createUser(user)
      .then(data => {
        console.log(data);
        window.location.replace("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <form className="registerForm">
          <h3 className="regTitle">Create a new account</h3>

          <input
            className="regInput"
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleInput}
          />

          <br />

          <input
            className="regInput"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleInput}
          />

          <br />

          <input
            className="regInput"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInput}
          />

          <br />

          <input
            className="regInput"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput}
            type="password"
          />

          <br />

          <button
            className="regSubmit"
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Register;
