import { getHeaders } from './utils';
import React from 'react';

class BookmarkButton extends React.Component {

    constructor(props) {
        super(props);

        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.like = this.setBookmark.bind(this);
        this.unlike = this.unsetBookmark.bind(this);
    }

    toggleBookmark(e) {
        if (this.props.bookmarkId) {
            this.unsetBookmark();
        } else {
            this.setBookmark();
        }
    }

    setBookmark() {
        fetch(`/api/bookmarks`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                "post_id": this.props.postId
            })
        })
            .then(response => response.json())
            .then(data => {
                this.props.requeryPost();
            })
    }

    unsetBookmark() {
        fetch(`/api/bookmarks/${this.props.bookmarkId}`, {
            method: "DELETE",
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.props.requeryPost();
            })
    }

    render() {
        let bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch" onClick={ this.toggleBookmark } aria-checked={ bookmarkId ? true : false}>
                <i className={ bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark' }></i>
            </button>
        )
    }
}

export default BookmarkButton;