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
    <>
      <p>{name}</p>
    </>
  );
}

export default Profile;
