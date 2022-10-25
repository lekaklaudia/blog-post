import React from "react";

const PostDetails = () => {
  return (
    <div>
      <div className="post-details">
        <div className="author">
          <p>
            Post Publicato: USER.NAME alias{" "}
            <a href="#" className="author-username">
              USER.USERNAME
            </a>
          </p>
        </div>
        <div className="content">
          <h2 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            tempore!
          </h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero
            facilis optio ad expedita delectus libero reprehenderit
            exercitationem saepe explicabo!
          </p>
        </div>
        <div className="button">
          <button>Chiudi</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
