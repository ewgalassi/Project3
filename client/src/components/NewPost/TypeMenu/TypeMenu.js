import React, { Component } from "react";
import "./TypeMenu.css";

// import TypeBtn from "./TypeBtn";

class TypeMenu extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Select Type
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" >
            Status
          </a>
          <a className="dropdown-item" >
            Snippet
          </a>
          <a className="dropdown-item" >
            Article
          </a>
        </div>
      </div>
    );
  }
}

export default TypeMenu;
