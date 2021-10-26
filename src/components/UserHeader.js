import "../styles/UserHeader.css";
import { DateTime } from "luxon";

function UserHeader({ name, login, created_at, bio }) {
  return (
    <>
      <div className="name-date">
        <p className="name">{name}</p>
        <p className="date">{`Joined ${DateTime.fromISO(created_at).toFormat(
          "dd LLL yyyy"
        )}`}</p>
      </div>
      <div className="login">
        <a
          className="username"
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noreferrer"
        >
          @{login}
        </a>
      </div>
      <div className="bio">
        <p>{bio ? bio : "This profile has no bio"}</p>
      </div>
    </>
  );
}

export default UserHeader;
