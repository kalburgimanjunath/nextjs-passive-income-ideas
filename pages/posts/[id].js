import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts, getPostById } from '../api/services/posts.services';
export default function index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const fetchPosts = async () => {
    const results = await fetch('/api/posts')
      .then((res) => res.json())
      .then((result) => result.posts);

    return setPosts(
      results &&
        results.filter((item) => {
          return item.id == id;
        })
    );
  };
  useEffect(() => {
    fetchPosts();
  });
  return (
    <div>
      Post:{id}
      <>
        <div>
          {posts && posts.length > 0 ? (
            <div>
              {posts.map((item) => {
                return <div>{item.title}</div>;
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </>
    </div>
  );
}
