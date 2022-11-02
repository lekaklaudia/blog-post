import React, { useEffect, useState } from 'react';
import './style.css';
import JsonPlaceholder from './Api/JsonPlaceholder';
import Card from './Card';
import Post1 from './Post1';
import Post2 from './Post2';

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await JsonPlaceholder({
        url: '/users/',
      });

      setUsers(data);
    };
    response();
  }, []);
  console.log(users);

  useEffect(() => {
    const response = async () => {
      const { data } = await JsonPlaceholder({
        url: `/posts`,
      });

      setPosts(data);
    };
    response();
  }, []);
  console.log(posts);

  return users ? (
    <div className="container">
      <div className="post-1">
        <Card>
          {posts.slice(0, 4).map((post, index) => (
            <Post1 key={index} post={post} />
          ))}
        </Card>
      </div>
      <dic className="post2">
        <Card>
          {users.slice(0, 4).map((user, index) => (
            <Post2 key={index} user={user} posts={posts} />
          ))}
        </Card>
      </dic>
    </div>
  ) : null;
};

export default App;
