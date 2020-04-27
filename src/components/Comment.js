import React from 'react';

function Comment({ comment }) {
    return (
        <div class="comment">
            <img src={comment.author.avatar} class="profile" />
            <div class="commentContent">
                <div>
                    <span class="commentName">{comment.author.name}</span>
                    {comment.content}
                </div>
            </div>
        </div>
    );
}

export default Comment;