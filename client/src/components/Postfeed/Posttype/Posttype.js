import React, { Component } from "react";
// import Card from "../Card/Card";
import Article from "./Article/Article";
import Snippet from "./Snippet/Snippet";
import Status from "./Status/Status";


//determines which post type is rendered based on data
//use Card component and pass props in to determine post type


class Posttype extends Component {
    state = {

    }
    render(){
        return(
            
        // <div className="card">
        //     <div className="card-header">post heading</div>
        //     <div className="card-body">post body</div>

        // </div>
        <div>
        <Article />
        <Snippet />
        <Status />
        </div>
            
        )
     
    }

}

export default Posttype;