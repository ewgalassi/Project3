import React, { Component } from "react";
import "./Dropdown.css"; 


class Dropdown extends Component {
  state = {
    isOpen: false,
    selection:""
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleSelect = (event) => {
    console.log(event.target)
    
  }

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
          {this.props.name}
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton" >
          <a className="dropdown-item" href="#nogo" value={this.props.option1.toLowerCase()} onClick={this.handleSelect}>
            {this.props.option1}
          </a>
          <a className="dropdown-item" href="#nogo" value={this.props.option2.toLowerCase()} onClick={this.handleSelect} >
            {this.props.option2}
          </a>
          <a className="dropdown-item" href="#nogo" value={this.props.option3.toLowerCase()} onClick={this.handleSelect}>
            {this.props.option3}
          </a>
        </div>
      </div>
    );
  }
}


export default Dropdown;