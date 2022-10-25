import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const Post = ({ post }) => {
  const { title, body } = post;
  return post ? (
    <div>
      <div>{title}</div>
      <div>{body}</div>
    </div>
  ) : null;
};

export default Post;
