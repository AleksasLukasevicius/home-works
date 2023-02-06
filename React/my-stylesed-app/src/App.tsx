import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BorderContainer } from "./components/BorderContainers/BorderContainer";
import { AccountInfo } from "./components/AccountInfo/AccountInfo";
import { AccountInfoContainer } from "./components/AccountInfo/AccountInfo.styled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BorderContainer>
        <p>Edit src/App.tsx and save to reload.</p>
      </BorderContainer>

      <AccountInfoContainer>
        <AccountInfo account={{ name: "Alex", birthdate: new Date() }} />
      </AccountInfoContainer>
    </div>
  );
}

export default App;
