import "./Profile.css";

function Profile({
  name,
  login,
  avatar,
  join,
  created_at,
  bio,
  repos,
  followers,
  location,
  twitter,
  blog,
  company,
}) {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={avatar} alt="avatar"/>
      </div>
      <div className="profile-info">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Profile;
