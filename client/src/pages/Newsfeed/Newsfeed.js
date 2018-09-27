import React, { Component } from "react";
<<<<<<< HEAD
import PostAPI from "../../utils/postAPI";
=======
import { Col, Row, Container } from "../../components/Grid";
import PicIcon from "../../components/PicIcon";
import PostBox from "../../components/PostBox";
import TypeMenu from "../../components/TypeMenu";
import PostBtn from "../../components/PostBtn";
import "./Newsfeed.css";
>>>>>>> master

//components needed:

//add new post
//post feed
// card
//  post type: snippet, status, article

class Newsfeed extends Component {
<<<<<<< HEAD
    
    render() {
        return(
            <h3>Newsfeed page</h3>      
        )
        
    }


    componentDidMount() {
        this.loadPosts();
      };

    handlePostSubmit = event =>{
        event.preventDefault();
        if (this.state.author && this.state.text){
            PostAPI.commentPost({
                
            })
            
        }
    };

    handleLikeClick();

    handleComment();

    handlePostDelete();

    loadPosts = () => {
        PostAPI.getPosts()
        .then(res => this.setState({}))
    }
}



export default Newsfeed;
=======
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <PicIcon />
            <PostBox />
            <hr />
            <PostBtn />
            <TypeMenu />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Newsfeed;
>>>>>>> master
