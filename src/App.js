import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Card from "./Card";

import Post1 from "./Post1";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(data);
    };
    response();
  }, []);
  console.log(posts);

  return posts ? (
    <div className="container ">
      {posts.map((post, index) => (
        <Card key={index}>
          <Post1 post={post} />
        </Card>
      ))}
    </div>
  ) : null;
};

export default App;
