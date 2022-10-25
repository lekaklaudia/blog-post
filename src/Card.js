import React from "react";
import "./style.css";

const Card = ({ children }) => {
  return (
    <div className="comments card">
      <h1 className="header">Recent Posts</h1>
      <div className="cards">{children}</div>
    </div>
  );
};

export default Card;
