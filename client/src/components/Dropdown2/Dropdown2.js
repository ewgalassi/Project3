import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./Dropdown2.css";

class Dropdown2 extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle btn-sm"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          {this.props.name}
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a
            className="dropdown-item"
            type="editProfile"
            // onClick={this.props.handleSelect}
          >
            <Link
              to="/editProfile"
              className={
                window.location.pathname === "/editProfile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Edit
            </Link>
          </a>
          <a
            className="dropdown-item"
            type="logout"
            onClick={this.props.handleSelect}
          >
            <Logout />
          </a>
        </div>
      </div>
    );
  }
}

export default Dropdown2;
