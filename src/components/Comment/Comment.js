import React from 'react';
import  { DivComment, CommentContent } from './styles';

function Comment({ comment }) {
    return (
        <DivComment>
            <img src={comment.author.avatar} />
            <CommentContent>
                <div>
                    <span>{comment.author.name}</span>
                    {comment.content}
                </div>
            </CommentContent>
        </DivComment>
    );
}

export default Comment;