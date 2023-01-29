import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RandomNumberGenerator } from "./components/RandomNumberGenerator/RandomNumberGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>

      <section>
        <RandomNumberGenerator />
      </section>
    </div>
  );
}

export default App;
