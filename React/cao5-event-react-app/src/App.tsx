import React from "react";
import "./App.css";
import { ToDo } from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
        <h2>pratimas su event'ais ir hooks'ais</h2>
      </header>
      <ToDo />
    </div>
  );
}

export default App;
