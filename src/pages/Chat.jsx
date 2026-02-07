import { useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "user", text: "Hello 👋" },
    { from: "me", text: "Hi!" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { from: "me", text: message }]);
    setMessage("");
  };

  return (
    <div className="container chat-container">
      <h2>Secure Chat (UI Demo)</h2>

      <div className="chatbox">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.from === "me" ? "me" : "user"}`}
          >
            {msg.text}
            <span className="time">now</span>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a secure message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} disabled={!message.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}
