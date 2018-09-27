import React from "react";

//layout of snippet
const styles = {
    card: {
        margin:30
    },
    snippet:{
        marginTop:10,
        height:300,
        backgroundColor:"rgba(245, 245, 245, 0.82)",
        border:"1px solid rgba(0,0,0,.125)"
    },
    thumbnail: {
        borderRadius:"50%",
        float:"left",
        marginRight:10
    },
    userName: {
        margin:0,
        verticalAlign:"center",
        height:"100%"
    }
}

const Snippet = () => (

<div className="card" style={styles.card}>
    <div className="card-header">
        <img className="thumbnail" src="http://placehold.it/40x40" style={styles.thumbnail} />
        <a href="#"><h5 className="card-title" style={styles.userName}>Eddy</h5></a>
    </div>
    <div className="card-body">
        <p>snippet desrcription  #react #js #bootstrap</p>
        <div className="snippet" style={styles.snippet}>

        </div>
    </div>
</div>

)
  

export default Snippet;