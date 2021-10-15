import "./UserHeader.css";
import { DateTime } from 'luxon';

function UserHeader({name, login, created_at, bio}) {
  return (
    <>
      <div className="name-date">
        <p>{name}</p>
        <p>{`Joined ${DateTime.fromISO(created_at).toFormat('dd LLL yyyy')}`}</p>
      </div>
    </>
  )
}

export default UserHeader;