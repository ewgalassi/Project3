import React, { Component } from "react";
import "./Login.css";
import { Container } from "../../components/Grid";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  // handleInput = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const user = {
  //     username: this.state.username,
  //     password: this.state.password
  //   };
  //   UserAPI.loginUser(user).then(data => {
  //     console.log(data);
  //     this.setState({ loggedIn: true });
  //     window.location.replace("/profile");
  //   });
  // };

  render() {
    return (
      <Container>
        <div>test</div>
      </Container>
    );
  }
}

export default Login;
