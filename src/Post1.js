import React from "react";
import "./style.css";

const Post1 = ({ post }) => {
  const { title, body } = post;
  return post ? (
    <div>
      <div className="post">
        <div className="avatar-box">
          <h3 className="avatar-name">KL</h3>
        </div>
        <div className="content">
          <h2 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            tempore!
          </h2>

          <p className="text">
            Publicato da:
            <a href="#" className="author-username">
              USER.USERNAME
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Post1;
