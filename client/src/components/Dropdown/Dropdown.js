import React, { Component } from "react";


class Dropdown extends Component {
    state = {
        show:false
    } 

    showMenu = event => {
        event.preventDefault();
    
        this.setState({ show: true }, () => {
          document.addEventListener("click", this.closeMenu);
        });
      }
    
      closeMenu = event => {
        if (!this.dropdownMenu.contains(event.target)) {
          this.setState({ show: false }, () => {
            document.removeEventListener("click", this.closeMenu);
          });
        }
      }

    render() {
        return(
  <div className={`dropdown ${this.state.show ? 'show' : ''}`} ref={(dropdown) => this.dropdown = dropdown}>
        <button 
          className="btn btn-secondary dropdown-toggle" 
          type="button" 
          id="dropdownMenuButton" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
        //   aria-expanded={this.state.show}
          onClick={this.showMenu}>
          Select Type
        </button>
        {this.state.show ? (
            <div 
              className="dropdown-menu" 
              aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#nogo">Status</a>
                <a className="dropdown-item" href="#nogo">Snippet</a>
                <a className="dropdown-item" href="#nogo">Article</a>
            </div>
        ): null}
       
  </div>
        )
    }
}

export default Dropdown;