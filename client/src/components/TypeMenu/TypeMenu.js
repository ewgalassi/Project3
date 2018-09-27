import React, { Component } from "react";
import "./TypeMenu.css";

class TypeMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button className="typeBtn btn btn-light" onClick={this.showMenu}>
          Select Type
        </button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button className="dropBtn btn btn-light"> Code Snipet </button>
            <button className="dropBtn btn btn-light"> Status Update </button>
            <button className="dropBtn btn btn-light"> Article </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TypeMenu;
