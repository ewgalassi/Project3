import React from "react";


const CommentBox = (props) => {
   
        return (
            <div className="row">
                <div>
                    <input 
                        placeholder="Add a comment"
                        onChange={props.onChange}
                        value={props.comment}
                    />
                </div>
            </div>
        )
    
}

export default CommentBox;