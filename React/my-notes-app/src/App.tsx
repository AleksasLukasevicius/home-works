import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Button/Button.css";
import { Form } from "./Form";

function App() {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          my notes app
        </a>
      </header>

      <section>
        <Form />
      </section>

      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <p>{description}</p>

      <p></p>

      <div>
        i={i}, i+1={i + 1}, i antruoju {i ** 2}
      </div>

      <button
        className="Button"
        type="button"
        onClick={
          () => setI(i + 1) //naudoti tik pradinems produkatasm
        }
      >
        Submit i antruoju
      </button>
    </div>
  );
}

export default App;
