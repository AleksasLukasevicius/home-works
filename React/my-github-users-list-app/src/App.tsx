import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Git users list</h2>
      </header>

      <UsersList users={users} />
    </div>
  );
}

export default App;
