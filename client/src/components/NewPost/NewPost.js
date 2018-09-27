import React, {Component} from "react";
import PostBox from "./PostBox/PostBox";
import TypeMenu from "./TypeMenu/TypeMenu";
import PostBtn from "./PostBtn/PostBtn";
import PicIcon from "./PicIcon/PicIcon";
import PostAPI from "../../utils/postAPI";
import TypeBtn from "./TypeMenu/TypeBtn";


class NewPost extends Component {
    state = {
        post: ""
      };
     
      handleInput = event => {
          console.log("handling input!")
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
     
      handleSubmit = event => {
          console.log("WORKING")
        event.preventDefault();
        const post = {
          type: "status",
          post: this.state.post
        };
        PostAPI.savePost(post).then(data => {
          console.log(data);
        //   window.location.replace("/");
        }).catch(err => {
          console.log(err);
        });
      };

render(){
    return(
        <div>
        <PicIcon/>
        <PostBox onChange={this.handleInput} value={this.state.post} name="post"/>
        <hr/>
        <TypeMenu>

            <TypeBtn value="Snippet">Snippet</TypeBtn>
            <TypeBtn value="Article">Article</TypeBtn>
            <TypeBtn value="Status">Status</TypeBtn>
        </TypeMenu>
        <PostBtn onClick={this.handleSubmit}/>
        </div>
        
    )
}
}
export default NewPost;