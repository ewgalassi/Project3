import React from "react";
import { Link } from "react-router-dom";
import LogoutDrop from "../LogoutDrop/LogoutDrop";
import { Container } from "../Grid";
import UserAPI from "../../utils/userAPI";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {
    searchInput: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    event.preventDefault();
    UserAPI.searchUsers(this.state.searchInput)
      .then(data => {
        if (!data.data) {
          return alert("No user found");
        }
        window.location.replace("/profile/" + data.data._id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <nav id="accountNav" className="navbar fixed-top navbar-expand-lg">
        <Container>
          <Link id="accountLogo" className="navbar-brand" to="/">
            Project 3
          </Link>
          <form className="userSearch">
            <input
              className="userSearchInput"
              type="text"
              name="searchInput"
              placeholder="Search"
              value={this.state.searchInput}
              onChange={this.handleInput}
            />
            <button
              className="logout-btn btn"
              id="userSearchBtn"
              onClick={this.handleSearch}
            >
              <span className="fas fa-search" />
            </button>
          </form>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/newsfeed"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Newsfeed
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className={
                    window.location.pathname === "/profile"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/messages"
                  className={
                    window.location.pathname === "/messages"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Messages
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/register"
                  className={
                    window.location.pathname === "/register"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Register
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/snippets"
                  className={
                    window.location.pathname === "/snippets"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Snippets
                </Link>
              </li>
              <li className="nav-item">
                <LogoutDrop />
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
