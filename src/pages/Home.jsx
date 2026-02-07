import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import "./Home.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const posts = [
    {
      id: 1,
      user: "Alex",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      text: "Private post example",
      visibility: "Inner Circle",
    },
    {
      id: 2,
      user: "Sophia",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      text: "Another hidden post",
      visibility: "Followers",
    },
    {
      id: 3,
      user: "Daniel",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      text: "Only for me",
      visibility: "Private",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || post.visibility === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container home">
      <CreatePost />

      <div className="feed-controls">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Private</option>
          <option>Followers</option>
          <option>Inner Circle</option>
        </select>
      </div>

      {filteredPosts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}

      {filteredPosts.length === 0 && (
        <p className="empty">No posts found 🔍</p>
      )}
    </div>
  );
}
