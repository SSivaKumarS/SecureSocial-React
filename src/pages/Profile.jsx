import "./Profile.css";

export default function Profile() {
  return (
    <div className="container profile">
      <div className="profile-card">
        <img
          className="avatar"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
          alt="Profile"
        />

        <h2>@privatelayer_user</h2>
        <p className="bio">
          Sharing thoughts with my trusted circle only 🔐
        </p>

        <div className="stats">
          <div>
            <h4>Followers</h4>
            <span>Hidden</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>Hidden</span>
          </div>
          <div>
            <h4>Posts</h4>
            <span>Private</span>
          </div>
        </div>

        <div className="privacy-info">
          <p>🔒 Profile visibility: Private</p>
          <p>👁️ Posts visible to: Trusted Circle</p>
        </div>

        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}
