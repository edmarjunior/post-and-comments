import React from 'react';
import Comment from '../Comment/Comment';
import { DivPost, DivPostProfile, DivPostProfileName, DivPostDate, DivPostContent } from './styles';

function Post({ post }) {
    return (
        <DivPost>
            <DivPostProfile>
                <img src={post.author.avatar}/>
                <div>
                    <DivPostProfileName>{post.author.name}</DivPostProfileName>
                    <DivPostDate>{post.date}</DivPostDate>
                </div>
            </DivPostProfile>
            <DivPostContent>{post.content}</DivPostContent>
            <hr />
            {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </DivPost>
    )
};

export default Post;