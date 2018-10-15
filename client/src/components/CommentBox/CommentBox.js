import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./CommentBox.css";
import "../../mobile.css";

const styles = {
  rowStyle: {
    paddingRight: 0,
    paddingLeft: 0
  }
};

const CommentBox = props => {
  return (
    <div id="commentDrop" className="row">
      <Container id="commentContainer">
        <Row>
          <Col style={styles.rowStyle} size="md-12">
            <div>
              <form onSubmit={props.onSubmit}>
                <input
                  id="commentInput"
                  placeholder="Add a comment"
                  onChange={props.onChange}
                  value={props.comment}
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommentBox;
