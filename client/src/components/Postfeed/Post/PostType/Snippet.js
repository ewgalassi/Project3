import React from "react";
import "./PostType.css";
import CopytoClipboard from "react-copy-to-clipboard";


class Snippet extends React.Component {


  state = {
    copied: false
  }

  render() {

    return (


      <div className="content">

        <p>{this.props.description}</p>
        <div className="snippet">
          <pre>
            <code>
              {this.props.post}
            </code>
          </pre>
          <div className="icons">
            <CopytoClipboard text={this.props.post}
              onCopy={() => alert("copied to clipboard")}
            >
              <button className="copy-btn btn btn-link btn-sm fa fa-copy">
                <span class="tooltiptext">Copy</span>
              </button>
            </CopytoClipboard>
            <button
              // onClick={() => this.saveSnippet(postData)}
              onClick= {this.props.onClick}
              type="button"
              className="snippet-btn btn btn-link btn-sm fa fa-save"
            >
            <span class="tooltiptext">{this.props.isSaved ? "Unsave" : "Save"}</span>
            </button>
          </div>
        
         
        </div>
      </div>
    );
  }
}

export default Snippet;
