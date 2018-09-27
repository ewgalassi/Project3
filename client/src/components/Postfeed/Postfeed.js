import React, { Component } from "react";
import Post from "./Post/Post";

//need to map and render all posts here

class Postfeed extends Component {
    render(){
        return(
            <div className="container" style={{width:"800px"}}>
                
                <Post />
            
            </div>
            
            
        )
     
    }

}

export default Postfeed;