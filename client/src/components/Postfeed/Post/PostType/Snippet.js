import React from "react";
import "./PostType.css";
import CopytoClipboard from "react-copy-to-clipboard";


class Snippet extends React.Component {

  copyCode = () => {
    console.log(this.props.post)
    var copyText = this.props.post;
    
    copyText.execCommand("copy");
    alert("Copied the text: " + copyText.value);
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
          <CopytoClipboard text={this.props.post}>
          <button>Copy Snippet</button>
          </CopytoClipboard>
        </div>
      </div>
    );
  }
}

export default Snippet;
