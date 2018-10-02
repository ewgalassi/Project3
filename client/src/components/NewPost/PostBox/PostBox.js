import React, {Component} from "react";
import "./PostBox.css";

//create PostBOx class component
//switch statement to render diff postbox options based on props.type
const styles = {
  color: "rgb(75, 75, 75)"
}

class PostBox extends Component {

  renderType = (type) => {
    switch(type) {
      case "status":
        return (
          <input
          onChange={this.props.onChange}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          className="form-control"
          placeholder="Post a status update"
          id="userPost"
          />
        );
      case "snippet":
        return (
          <div>
            <input
            className="snippet-desc"
            onChange={this.props.onChange}
            // description={this.props.description}
            type={this.props.type}
            name="description"
            // value={this.props.value}
            className="form-control"
            placeholder="Add a description for your snippet"
            // id="userPost"
            />
          <textarea
            className="snippet-text"
            onChange={this.props.onChange}
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            id="userPost"
            />
        </div>
        );
      case "article":
        return (
          <input
          onChange={this.props.onChange}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          className="form-control"
          placeholder="Add an article url"
          id="userPost"
          />
        );

    }
  }

  render(){

  
    return(
      <form className="post">
      <div className="userInput">
      <h5 style={styles}>What would you like to share? (select a type!)</h5>
        {this.renderType(this.props.type)}
      </div>
    </form>
    )
  }
  
};

export default PostBox;
