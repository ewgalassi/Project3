import React from "react";
import PicIcon from "../../PicIcon/PicIcon";
import Row from "../../Grid/Row";


const styles = {
    userName: {
        fontSize:20,
        textAlign:"left",
        marginLeft:100,
        position:"absolute",
        top:"6%"
    }
}
const PostHeader = () => (

    
    <div className="row">
        <PicIcon />
        <a href="#"><h5 className="userName" style={styles.userName}>Brittani</h5></a>
    </div>
        
   
    
)
      
    
export default PostHeader;