// import React from "react";
import "./TypeMenu.css";

// const TypeMenu = () => (
//   <div className="dropdown">
//     <button
//       className="btn btn-secondary dropdown-toggle"
//       type="button"
//       id="dropdownMenuButton"
//       data-toggle="dropdown"
//       aria-haspopup="true"
//       aria-expanded="false"
//     >
//       Dropdown button
//     </button>
//     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//       <a className="dropdown-item" href="#">
//         Action
//       </a>
//       <a className="dropdown-item" href="#">
//         Another action
//       </a>
//       <a className="dropdown-item" href="#">
//         Something else here
//       </a>
//     </div>
//   </div>
// );

// $(".dropdown-toggle").dropdown();
import React, { Component } from "react";

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
        <button onClick={this.showMenu}>Show menu</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TypeMenu;
