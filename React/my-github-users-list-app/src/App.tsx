import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { UserCard } from "./components/UserCard";
import { UserList } from "./components/UsersList";

function App() {
  const userCard = [
    { login: 1, url: "URL", type: "user" },
    { login: 2, url: "URL", type: "user" },
    { login: 3, url: "URL", type: "user" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UserList userCard={userCard} />
    </div>
  );
}

export default App;
