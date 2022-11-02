import React from 'react';
import './style.css';

const Post = ({ post }) => {
  const { title, body } = post;
  return post ? (
    <div className="test">
      <div className="post">
        <div className="avatar-box">
          <h3 className="avatar-name"></h3>
        </div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="text">{body}</p>
        </div>
      </div>
    </div>
  ) : null;
};
export default Post;
