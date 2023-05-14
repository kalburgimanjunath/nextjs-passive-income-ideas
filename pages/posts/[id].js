import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Footerbutton } from '../../components/';
import { getAllPosts, getPostById } from '../api/services/posts.services';
// import Speech from 'react-speech';
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
      {/* Post:{id} */}

      <>
        <div>
          {posts && posts.length > 0 ? (
            <div>
              {posts.map((item) => {
                return (
                  <>
                    <div>
                      <Image
                        loader={() => item.url}
                        src={item.url}
                        width="200"
                        height="200"
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                    <h4>{item.title}</h4>
                    <Footerbutton />
                    <div>
                      <h6>Published at {item.created_at}</h6>
                    </div>
                    <div>{item.description}</div>

                    <Footerbutton />
                  </>
                );
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
