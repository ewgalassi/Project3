import React, { Component } from "react";
import Postfeed from "../../components/Postfeed/Postfeed";

//components needed:
//navbar
//add new post
//post feed 
// card
//  post type: snippet, status, article

class Newsfeed extends Component {
    
    render() {
        return(
            <div>
                <h3>Newsfeed page</h3>  
                <Postfeed />
            </div>
                
        )
        
    }

}

export default Newsfeed;