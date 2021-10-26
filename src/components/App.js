import "../styles/App.css";
import "./Header.js";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Header from "./Header";
import SearchBar from "./SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("vin-vu");
  const [profile, setProfile] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", search);
    setUser(search);
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [user]);
  console.log(profile)
  return (
    <div className="App">
      <Header />
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Profile
        name={profile.name}
        login={profile.login}
        avatar={profile.avatar_url}
        created_at={profile.created_at}
        bio={profile.bio}
        repos={profile.public_repos}
        followers={profile.followers}
        following={profile.following}
        location={profile.location}
        twitter={profile.twitter_username}
        blog={profile.blog}
        company={profile.company}
      />
    </div>
  );
}

export default App;
