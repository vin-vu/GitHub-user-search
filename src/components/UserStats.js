import "../styles/UserStats.css";

function UserStats({ repos, followers, following }) {
  return (
    <div className="user-stats">
      <div className="repo">
        <p className="repo-header">Repos</p>
        <p className="repo-data">{repos}</p>
      </div>
      <div className="followers">
        <p className="followers-header">Followers</p>
        <p className="followers-data">{followers}</p>
      </div>
      <div className="following">
        <p className="following-header">Following</p>
        <p className="following-data">{following}</p>
      </div>
    </div>
  );
}

export default UserStats;
