import React, { Component } from "react";
import Posttype from "./Posttype/Posttype";

//need to map out and render all posts here

class Postfeed extends Component {
    state = {

    }
    render(){
        return(
            <div className="container" style={{width:"800px"}}>
            <Posttype />
            <Posttype />
            
            
            </div>
            
            
        )
     
    }

}

export default Postfeed;