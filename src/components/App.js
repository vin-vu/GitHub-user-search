import "./App.css";
import "./Header.js";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Header from "./Header";
import SearchBar from "./SearchBar";

function App() {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("vin-vu");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', search)
    setUser(search);
  };  

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${search}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [search]);

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
      <Profile
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
      />
    </div>
  );
}

export default App;
