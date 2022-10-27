import React from "react";
import "./style.css";

const Post1 = ({ user, posts }) => {
  const { username, name } = user;
  const { title, body } = posts;
  return user ? (
    <div>
      <div className="post">
        <div className="avatar-box">
          <h3 className="avatar-name">{name.match(/[A-Z]/g).join("")}</h3>
        </div>
        <div className="content">
          <h2 className="title">{title}</h2>

          <p className="text">
            Publicato da:
            <a href="#" className="author-username">
              {username}
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
export default Post1;
