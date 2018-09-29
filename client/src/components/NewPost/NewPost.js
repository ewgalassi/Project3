import React, {Component} from "react";
import PostBox from "./PostBox/PostBox";
import PostBtn from "./PostBtn/PostBtn";
import PicIcon from "./PicIcon/PicIcon";
import PostAPI from "../../utils/postAPI";
import Dropdown from "../Dropdown/Dropdown";
import Card from "../Card/Card";
import "./NewPost.css";


class NewPost extends Component {
    state = {
        posts:[],
        post: ""
      };

    //   loadPosts = () => {
    //       PostAPI.getPosts().then(data => {
    //       console.log("LOAD POSTS IS WORKING")
    //       consol
    //     this.setState({
    //         posts: data.data
    //     });
    // })}
     
      handleInput = event => {
          console.log("handling input!")
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
     
      handleSubmit = event => {
          
        event.preventDefault();
        const post = {
          type: "status",
          post: this.state.post
        };
        PostAPI.savePost(post).then(data => {
          console.log(data);
          if (window.location.href === "http://localhost:3000/profile"){
            console.log("WORKING")
          window.location.replace("/profile");
          } 
          console.log("NOT WORKING")
          // window.location.replace("/");
        }).catch(err => {
          console.log(err);
        });
      };

render(){
    return(
        <Card style={{padding:20}}>
          <PicIcon/>
          <PostBox onChange={this.handleInput} value={this.state.post} name="post"/>
          <hr/>
          <div className="postbox-footer">
            <PostBtn onClick={this.handleSubmit}/>
            <Dropdown 
              name="Select Type"
              option1="Status"
              option2="Snippet"
              option3="Article"
            />
            
          </div>
        </Card>
        
    )
}
}
export default NewPost;