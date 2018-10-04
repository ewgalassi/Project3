import React, { Component } from "react";
import UserAPI from "../../utils/userAPI";
import "./Register.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
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
        <form className="register-form">
          <h3>Create a new account!</h3>
          <label>Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />

          <br />

          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
            type="password"
          />

          <br />

          <label>First Name</label>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInput}
          />

          <br />

          <label>Last Name</label>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInput}
          />

          <br />

          <button type="submit" onClick={this.handleSubmit}>
            Register
          </button>
        </form>
        {/* </div> */}
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Register;
