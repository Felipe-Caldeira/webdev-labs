import { getHeaders } from './utils';
import React from 'react';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);

        this.toggleLike = this.toggleLike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    toggleLike(e) {
        if (this.props.likeId) {
            this.unlike();
        } else {
            this.like();
        }
    }

    like() {
        fetch(`/api/posts/${this.props.postId}/likes`, {
            method: "POST",
            body: JSON.stringify({}),
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.props.requeryPost();
            })
    }

    unlike() {
        fetch(`/api/posts/${this.props.postId}/likes/${this.props.likeId}`, {
            method: "DELETE",
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.props.requeryPost();
            })
    }

    render() {
        let likeId = this.props.likeId;
        return (
            <button role="switch" onClick={ this.toggleLike } aria-checked={ likeId ? true : false}>
                <i className={ likeId ? 'fas fa-heart' : 'far fa-heart' }></i>
            </button>
        )
    }
}

export default LikeButton;