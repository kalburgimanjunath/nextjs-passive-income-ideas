import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Posts({ posts }) {
  const PostItem = ({ item }) => {
    return (
      <div className="lists-item post">
        <>
          <Link href={`../posts/${item.id}`}>
            {/* <div>{item.author}</div> */}
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
            <div>{item.description}</div>

            <div>
              <h6>Published at {item.created_at}</h6>
            </div>
          </Link>
        </>
      </div>
    );
  };
  return (
    <div className="lists posts">
      {posts &&
        posts.map((item, index) => {
          return <PostItem key={index} item={item} />;
        })}
    </div>
  );
}
