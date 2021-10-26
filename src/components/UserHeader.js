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
        <p>@{login}</p>
      </div>
      <div className="bio">
        <p>{bio ? bio : "This profile has no bio"}</p>
      </div>
    </>
  );
}

export default UserHeader;
