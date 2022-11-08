import React, { useEffect, useState } from 'react';
import './style.css';
import JsonPlaceholder from './Api/JsonPlaceholder';
import Card from './Card';
import Post1 from './Post1';
import Post2 from './Post2';
import PostDetails from './PostDetails';

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

  useEffect(() => {
    const response = async () => {
      const { data } = await JsonPlaceholder({
        url: `/posts`,
      });

      setPosts(data);
    };
    response();
  }, []);

  return users ? (
    <div className="container">
      <div className="post2">
        <Card>
          {users.slice(0, 4).map((user, index) => (
            <Post2 key={index} user={user} posts={posts} userId={user.id} />
          ))}
        </Card>
      </div>
    </div>
  ) : null;
};

export default App;
