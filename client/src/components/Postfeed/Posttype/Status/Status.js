import React from "react";

//layout of article
const styles = {
    card: {
        margin:30
    },
    p:{
        marginTop:10
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

const Status = () => (

<div className="card" style={styles.card}>
    <div className="card-header">
        <img className="thumbnail" src="http://placehold.it/40x40" style={styles.thumbnail} />
        <a href="#"><h5 className="card-title" style={styles.userName}>Tommie</h5></a>
    </div>
    <div className="card-body">
        <p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
    </div>
</div>

)
  

export default Status;