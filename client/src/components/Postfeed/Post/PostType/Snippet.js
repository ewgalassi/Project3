import React from "react";
import "./PostType.css";
import CopytoClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierSeasideLight } from "react-syntax-highlighter/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Snippet extends React.Component {
  state = {
    copied: false,
    isDisabled: this.props.isDisabled
  };

  notify = () => toast("Copied");

  renderButton = () => {
    console.log(this.state.isDisabled);
    if (this.state.isDisabled) {
      console.log("disabled true");
      return (
        <button
          // onClick={this.props.onClick}
          type="button"
          className="snippet-btn btn btn-link fa fa-save"
          disabled
        >
          {/* <span className="tooltiptext"></span> */}
        </button>
      );
    } else {
      console.log("disabled false");
      return (
        <button
          onClick={this.props.onClick}
          type="button"
          className="snippet-btn btn btn-link fa fa-save"
        >
          <span className="tooltiptext">Save</span>
        </button>
      );
    }
  };

  render() {
    return (
      <div className="content">
        <h5 className="description">{this.props.description}</h5>
        <div className="snippet">
          <SyntaxHighlighter language="javascript" style={atelierSeasideLight}>
            {this.props.post}
          </SyntaxHighlighter>

          <div className="icons">
            <CopytoClipboard
              text={this.props.post}
              // onCopy={() => alert("copied to clipboard")}
            >
              <div>
                <button id="copySnipBtn" onClick={this.notify}>
                  <button className="copy-btn btn btn-link fa fa-copy">
                    {/* <span className="tooltiptext">Copy</span> */}
                  </button>
                </button>
                <ToastContainer />
              </div>
            </CopytoClipboard>
            {this.renderButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default Snippet;
