import React from "react";
// import PostHeader from "../../PostHeader/PostHeader";


//layout of snippet post
const styles = {
    content: {
        margin:30,
        marginTop:55,
        textAlign:"left"
    },
    snippet:{
        marginTop:10,
        height:300,
        backgroundColor:"rgba(245, 245, 245, 0.82)",
        border:"1px solid rgba(0,0,0,.125)"
    }
}

const Snippet = () => (
    
    <div className="content" style={styles.content}>
        <p>(snippet description) Lorem ipsum dolor sit amet</p>
        <p>#hashtags #react #js #bootstrap</p>
        <div className="snippet" style={styles.snippet}>
            code goes here
        </div>
    </div>


)
  

export default Snippet;