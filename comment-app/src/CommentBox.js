import React, { Component } from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.messageInputRef = React.createRef();
    }

    addComment = () => {
        this.props.addComment(this.messageInputRef.current.value);
        this.messageInputRef.current.value = '';
    }


    render() {
        return (
            <div className="commentbox">
                <input ref={this.messageInputRef} className="input" />
                <button className="button" onClick={this.addComment}>
                    Post
                </button>
            </div>
        );
    }
}
export default CommentBox