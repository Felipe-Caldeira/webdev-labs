import { getHeaders } from './utils';
import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: this.props.model
        }

        this.requeryPost = this.requeryPost.bind(this);
    }

    requeryPost() {
        fetch(`/api/posts/${this.state.model.id}`, {
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    model: data
                })
            })
    }

    render() {
        let post = this.state.model
        return <section className="card">
                    <div className="header">
                        <h3>{post.user.username}</h3>
                        <i className="fa fa-dots"></i>
                    </div>

                    <img
                        src={post.image_url}
                        alt={'Image posted by ' + post.user.username}
                        width="300"
                        height="300" />

                    <div className="info">
                        <div>
                            <LikeButton likeId={post.current_user_like_id} 
                                        postId={post.id}
                                        requeryPost={this.requeryPost}/>
                            <BookmarkButton bookmarkId={post.current_user_bookmark_id}
                                postId={post.id}
                                requeryPost={this.requeryPost} />
                        </div>
                        <p>{post.caption}</p>
                    </div>
                </section> 
    }
}

export default Post;



// <div className="postCard">
//     <div className="cardHeader">
//         <h3 tabIndex="0">{post.user.username}</h3>
//         <i tabIndex="0" className="icon fa fa-ellipsis-h"></i>
//     </div >

//     <img tabIndex="0" src={post.image_url} alt="{{post.title}}" />
//     <div className="cardDetails">
//         <div className="cardButtons">
//             <div>
//                 <i tabIndex="0" className="icon far fa-heart"></i>
//                 <i tabIndex="0" className="icon far fa-comment"></i>
//                 <i tabIndex="0" className="icon far fa-paper-plane"></i>
//             </div>
//             <i tabIndex="0" className="icon far fa-bookmark" ></i >
//         </div >

//         <div className="cardLikes">{post.likes} likes</div>

//         <div className="cardCaption">
//             <div className="cardTextBox">
//                 <div className="cardText"><span className="cardTextUser">{post.user.username}</span>{post.title}..<a href="#" onClick={fls} className="moreButton">mo​re</a></div>
//             </div>
//         </div>

//         {/* <div className="cardComments">
//                             {% if post.comments|length == 0 %}
//                             <div className="cardTextBox">
//                                 <div className="cardText">No comments yet.</div>
//                             </div>
//                             {% elif post.comments|length == 1 %}
//                             <div className="cardTextBox">
//                                 <div className="cardText"><span className="cardTextUser">{{ post.comments[0].user.username }}</span>{{ post.comments[0].text }}</div>
//                             </div>
//                             {% else %}
//                             <a href="#" onClick={fls} className="cardViewAllCommentsLink">View all {{ post.comments | length }} comments</a>
//                             <div className="cardTextBox">
//                                 <div className="cardText"><span className="cardTextUser">{{ post.comments[0].user.username }}</span>{{ post.comments[0].text }}</div>
//                             </div>
//                             {% endif %}


//                         </div> */}

//         <div className="cardDate">{post.display_time}</div>
//     </div >

//     <hr />

//     <div className="cardNewComment">
//         <div className="cardAddComment">
//             <i className="icon far fa-smile"></i>
//             <label>
//                 <input placeholder="Add a comment..." />
//             </label>
//         </div>
//         <a href="#" onClick={fls} className="cardPostComment">Post</a>
//     </div>
// </div>