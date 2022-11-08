import React from 'react';
import './style.css';

const PostDetails = ({ selectedPost, isSelected, setIsSelected, user }) => {
  const { title, body } = selectedPost;
  const { name, username } = user;

  return isSelected ? (
    <div>
      <div className="post-details">
        <div className="author">
          <p>
            Post Publicato: {name} alias{' '}
            <a href="#" className="author-username">
              {username}
            </a>
          </p>
        </div>
        <div className="content">
          <h2 className="title"> {title}</h2>
          <p className="body">{body}</p>
        </div>
        <div className="button">
          <button className="button-btn" onClick={() => setIsSelected(false)}>
            Chiudi
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default PostDetails;
