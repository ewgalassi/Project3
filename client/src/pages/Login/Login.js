import React, { Component } from "react";
import UserAPI from "../../utils/userAPI";

//components needed:
//navbar
//user info

class Login extends Component {
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
            password: this.state.password
        };
        UserAPI.loginUser(user).then(data => {
            console.log(data);
            window.location.replace("/");
        });
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
}

export default Login;