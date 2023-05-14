import { useState, useEffect } from 'react';
export default function Footerbutton() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);
  return (
    <div className="footerbutton">
      <div className="left">
        <span onClick={() => setLikes(likes + 1)}>Like/Clap {likes}</span>
        <span onClick={() => setComments(comments + 1)}>
          Comment {comments}
        </span>
      </div>
      <div className="right">
        <span onClick={() => setBookmarks(bookmarks + 1)}>
          Bookmark {bookmarks}
        </span>
        <span>Play</span>
        <span>Share</span>
        <span>more</span>
      </div>
    </div>
  );
}
