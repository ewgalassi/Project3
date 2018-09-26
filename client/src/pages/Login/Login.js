import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: ""
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
    axios.post("/user/login", user).then(data => {
      console.log(data.data);
      window.location.replace("/");
    }).catch(err => {
      console.log(err);
      this.setState({
        message: "Invalid username or password"
      })
    })
  };

  render() {
    return (
      <div>
        <form>

          <label>Username</label>
          <input name="username" value={this.state.username} onChange={this.handleInput} />

          <br />

          <label>Password</label>
          <input name="password" value={this.state.password} onChange={this.handleInput} type="password" />

          <br />

          <button type="submit" onClick={this.handleSubmit}>Login</button>
        </form>

        <p>{this.state.message}</p>
      </div>
    )
  }
};

export default Login;
