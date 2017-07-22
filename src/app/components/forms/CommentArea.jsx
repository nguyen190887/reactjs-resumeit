import React from 'react';

function CommentArea(props) {
    return (
        <label>
            Comment:
            <textarea name={props.name} value={props.value} onChange={props.onChange} />
        </label>
    );
}

export default CommentArea;