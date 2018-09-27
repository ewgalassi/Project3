import React, { Component } from "react";
import "./PostType.css";

// import Row from "../../Grid/Row";

//layout of article post
// const styles = {
//   card: {
//     margin: 30,
//     marginTop: 55,
//     textAlign: "left"
//   },
//   p: {
//     marginTop: 10
//   }
// };
class Article extends Component {
  render() {
    return (
      <div className="articleCard">
        <div>
          <h4>Article title</h4>
          <a href="#">
            <div>
              <img
                src="http://placehold.it/650x300"
                className="
                            img-fluid"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
