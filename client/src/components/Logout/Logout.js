import React from "react";
import UserAPI from "../../utils/userAPI";
import "./Logout.css";

class Logout extends React.Component {
  state = {
    loggedIn: true,
    message: "Login"
  };
  clickLogout = () => {
    // event.preventDefault();
    if (this.state.loggedIn === false) {
      window.location.replace("/login");
    } else {
      UserAPI.logoutUser()
        .then(data => {
          console.log("LOGGED OUT");
          window.location.replace("/login");
        })
        .then(this.setState({ loggedIn: false }));
    }
  };

  render() {
    return (
      <div>
        <button className="logout-btn btn" onClick={() => this.clickLogout()}>
          {" "}
          {this.state.loggedIn ? "Logout" : "Login"}{" "}
        </button>
      </div>
    );
  }
}

export default Logout;
