import React from "react";


const CommentBox = (props) => {
   
        return (
            <div className="row">
                <div>
                    <form onSubmit={props.onSubmit}>
                    <input 
                        placeholder="Add a comment"
                        onChange={props.onChange}
                        value={props.comment}   
                    />
                    </form>
                </div>
            </div>
        )
    
}

export default CommentBox;