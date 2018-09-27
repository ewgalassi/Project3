import React from "react";
import UserAPI from "../../utils/userAPI";

class Logout extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    UserAPI.logoutUser()
    .then(data => {
      console.log("LOGGED OUT");
      window.location.replace("/login");
    })
};

  render() {
    return <div>
      <button onClick={this.handleSubmit}> Logout </button>
    </div>
  }
}

export default Logout;