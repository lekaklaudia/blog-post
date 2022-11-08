import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PostDetails from './PostDetails';

const Post2 = ({ user, posts }) => {
  const { username, name } = user;

  const [selectedPost, setSelectedPost] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  return user ? (
    <div>
      <PostDetails
        isSelected={isSelected}
        selectedPost={selectedPost}
        setIsSelected={setIsSelected}
        user={user}
      />
      (
      <div className="post">
        <div className="avatar-box">
          <h3 className="avatar-name">{name.match(/[A-Z]/g).join('')}</h3>
        </div>
        <div className="content">
          {' '}
          {posts
            .filter((post) => post.userId === user.id)
            .slice(0, 1)
            .map((filteredpost) => (
              <h2
                className="title"
                onClick={() => {
                  setIsSelected(!isSelected);
                  setSelectedPost(filteredpost);
                }}
              >
                {filteredpost.title}
              </h2>
            ))}
          <p className="text">
            Publicato da:&nbsp;
            <a href="#" className="author-username">
              {username}
            </a>
          </p>
        </div>
      </div>
      )
    </div>
  ) : null;
};
export default Post2;
