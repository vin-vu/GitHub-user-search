import "../styles/UserStats.css";

function UserStats({ repos, followers, following }) {
  return (
    <div className="user-stats">
      <div className="repo">
        <p className="repo-header">Repos</p>
        <p className="repo-data">{repos}</p>
      </div>
      <div className="followers">
        <p className="repo-header">Followers</p>
        <p className="repo-data">{followers}</p>
      </div>
      <div className="following">
        <p className="repo-header">Following</p>
        <p className="repo-data">{following}</p>
      </div>
    </div>
  );
}

export default UserStats;
