import "./App.css";
import "./Header.js";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import Header from "./Header";

function App() {
  const [user, setUser] = useState("");

  async function fetchUser() {
    try {
      const res = await fetch("https://api.github.com/users/vin-vu");
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Header />
      <Profile
        name={user.name}
        login={user.login}
        avatar={user.avatar_url}
        created_at={user.created_at}
        bio={user.bio}
        repos={user.public_repos}
        followers={user.followers}
        location={user.location}
        twitter={user.twitter_username}
        blog={user.blog}
        company={user.company}
      />
    </div>
  );
}

export default App;
