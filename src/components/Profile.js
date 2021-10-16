import "./Profile.css";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";
import UserLinks from "./UserLinks";

function Profile({
  name,
  login,
  avatar,
  created_at,
  bio,
  repos,
  followers,
  following,
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
        <UserHeader 
          name={name}
          login={login}
          created_at={created_at}
          bio={bio}
        />
        <UserStats
          repos={repos}
          followers={followers}
          following={following}        
        />
      <UserLinks 
        location={location}
        twitter={twitter}
        blog={blog}
        company={company}
      />
      </div>
    </div>
  );
}

export default Profile;
