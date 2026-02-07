import { useState } from "react";
import "./CreatePost.css";

export default function CreatePost() {
  const [text, setText] = useState("");
  const [privacy, setPrivacy] = useState("Private");

  const handlePost = () => {
    if (!text.trim()) return;

    // UI demo only
    setText("");
    setPrivacy("Private");
    alert("Post created (demo)");
  };

  return (
    <div className="post-create">
      <textarea
        value={text}
        maxLength={200}
        placeholder="Share something privately..."
        onChange={(e) => setText(e.target.value)}
      />

      <div className="post-controls">
        <span className="counter">{text.length}/200</span>

        <select
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
        >
          <option>Private</option>
          <option>Followers</option>
          <option>Inner Circle</option>
        </select>

        <button onClick={handlePost} disabled={!text.trim()}>
          Post
        </button>
      </div>
    </div>
  );
}
