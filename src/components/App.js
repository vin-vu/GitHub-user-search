import "./App.css";
import "./Header.js";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Header from "./Header";
import SearchBar from "./SearchBar";

function App() {
  // const [search, setSearch] = useState("vin-vu");
  // const [user, setUser] = useState("");

  const [search, setSearch] = useState("");
  const [user, setUser] = useState("vin-vu");
  const [profile, setProfile] = useState(user)

  console.log('search', search);
  console.log('user', user)

  // async function fetchUser() {
  //   try {
  //     // const res = await fetch(`https://api.github.com/users/${search}`);
  //     // const data = await res.json();
  //     const data1 = {name: `${search}`}
  //     setUser(data1);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  //https://dmitripavlutin.com/controlled-inputs-using-react-hooks/
  // debouncing, delay search time

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', search)
    setUser(search);
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        // const res = await fetch(`https://api.github.com/users/${user}`);
        // const data = await res.json();
        // setUser(data);

        // const data = {name: `${user}`}

        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  },[user]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        // search={setUser}
        value={search}
        // type="text"
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmit}
      />
      {/* <Profile
        name={user.name}
        login={user.login}
        avatar={user.avatar_url}
        created_at={user.created_at}
        bio={user.bio}
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
        location={user.location}
        twitter={user.twitter_username}
        blog={user.blog}
        company={user.company}
      /> */}
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
