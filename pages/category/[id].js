import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Posts } from '../../components/';
export default function index() {
  const router = useRouter();
  const { id } = router.query;
  const [banners, setBanners] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    await fetch('/api/posts')
      .then((res) => res.json())
      .then((result) => setPosts(result.posts));
  };

  const fetchBanners = async () => {
    const results = await fetch('/api/banners')
      .then((res) => res.json())
      .then((result) => result.banners);
    return setBanners(results[0]['url']);
  };

  useEffect(() => {
    fetchPosts();
    fetchBanners();
  }, [id]);
  return (
    <div>
      {id}
      <div>
        {banners && (
          <Image
            loader={() => banners}
            src={banners}
            width={500}
            height={300}
            style={{ width: '100%' }}
          />
        )}
        <h6>PUBLICATIONS</h6>
        <Posts posts={posts} />
      </div>
    </div>
  );
}
