import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ setPage }) {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // account created or logged in

  const handleNav = (page) => {
    setActive(page);
    setPage(page);
  };

  /* ---------------- AUTH NAVBAR ---------------- */
  if (!isAuth) {
    return (
      <div className={`nav ${dark ? "dark" : ""}`}>
        <h2>Secure-social-Media</h2>

        <div className="nav-actions">
          <button onClick={() => alert("Signup UI demo")}>
            Create Account
          </button>

          <button onClick={() => alert("Login UI demo")}>
            Login
          </button>

          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>

          {/* TEMP DEMO BUTTON */}
          <button
            className="active"
            onClick={() => setIsAuth(true)}
          >
            Enter App
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- MAIN NAVBAR ---------------- */
  return (
    <div className={`nav ${dark ? "dark" : ""}`}>
      <h2>PrivateLayer</h2>

      <div className="nav-actions">
        <button
          className={active === "home" ? "active" : ""}
          onClick={() => handleNav("home")}
        >
          Home
        </button>

        <button
          className={active === "profile" ? "active" : ""}
          onClick={() => handleNav("profile")}
        >
          Profile
        </button>

        <button
          className={active === "chat" ? "active" : ""}
          onClick={() => handleNav("chat")}
        >
          Chat <span className="badge">2</span>
        </button>

        <button onClick={() => setIsAuth(false)}>
          Logout
        </button>

        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}
