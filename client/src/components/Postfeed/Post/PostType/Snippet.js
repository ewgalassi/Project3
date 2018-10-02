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
          <CopytoClipboard text={this.props.post}
          onCopy={() => alert("copied to clipboard")}
          >
          <button>Copy Snippet</button>
          
          </CopytoClipboard>
        </div>
      </div>
    );
  }
}

export default Snippet;
