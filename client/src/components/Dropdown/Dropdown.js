import React, { Component } from "react";
import "./Dropdown.css"; 


class Dropdown extends Component {
  state = {
    isOpen: false,
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
        <div className={menuClass} aria-labelledby="dropdownMenuButton" >
          <a className="dropdown-item" type="status" onClick={this.props.handleSelect}>
            {this.props.option1}
          </a>
          <a className="dropdown-item" type="snippet" onClick={this.props.handleSelect}>
            {this.props.option2}
          </a>
          <a className="dropdown-item" type="article" onClick={this.props.handleSelect}>
            {this.props.option3}
          </a>
        </div>
      </div>
    );
  }
}


export default Dropdown;