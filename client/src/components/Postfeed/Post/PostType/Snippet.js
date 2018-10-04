import React from "react";
import "./PostType.css";
import CopytoClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/styles/hljs';

class Snippet extends React.Component {


  state = {
    copied: false
  };


  render() {

    return (


      <div className="content">

        <h5 className="description">{this.props.description}</h5>
        <div className="snippet">

          <SyntaxHighlighter language="javascript" style={dracula}>
            {this.props.post}
          </SyntaxHighlighter>

          <div className="icons">
            <CopytoClipboard text={this.props.post}
              onCopy={() => alert("copied to clipboard")}
            >
              <button className="copy-btn btn btn-link fa fa-copy">
                <span className="tooltiptext">Copy</span>
              </button>
            </CopytoClipboard>
            <button
              // onClick={() => this.saveSnippet(postData)}
              onClick={this.props.onClick}
              type="button"
              className="snippet-btn btn btn-link fa fa-save"
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
