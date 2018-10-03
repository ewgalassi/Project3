import React, { Component } from "react";
import UserAPI from "../../utils/userAPI";
import "./LoginInputs.css";

class LoginInputs extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
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
      password: this.state.password
    };
    UserAPI.loginUser(user).then(data => {
      console.log(data);
      this.setState({ loggedIn: true });
      window.location.replace("/profile");
    });
  };

  render() {
    return (
      <div className="wrapper">
        <form className="login-form">
          <div className="box">
            <label className="boxTitle">Username</label>
            <br />
            <input
              className="loginInput"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </div>

          <div className="box">
            <label className="boxTitle">Password</label>
            <br />
            <input
              className="loginInput"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              type="password"
            />
          </div>

          <button
            className="loginBtn"
            type="submit"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default LoginInputs;
