import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {
    componentDidMount() {
        this.removeCommentBox = commentBox('5726753473429504-proj');
    }
    componentWillUnmount() {
        this.removeCommentBox();
    }
    render() {
        return (
            <div class="commentbox" />
        );
    }
}
