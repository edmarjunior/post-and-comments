import React from 'react';
import Comment from './Comment';

function Post({ post }) {
    console.log(post);
    return (
        <div class="post">
            <div class="postProfile">
                <img src={post.author.avatar} class="profile" />
                <div class="ml10">
                    <div class="postProfileName">{post.author.name}</div>
                    <div class="postDate">{post.date}</div>
                </div>
            </div>
            <div class="postContent">{post.content}</div>
            <hr />
            {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
};

export default Post;