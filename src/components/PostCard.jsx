import { useState } from "react";
import "./PostCard.css";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <div className="post-header">
        <span className={`visibility ${post.visibility.replace(" ", "").toLowerCase()}`}>
          {post.visibility}
        </span>

        <small className="time">just now</small>
      </div>

      <p className="post-text">{post.text}</p>

      <div className="post-actions">
        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
}
