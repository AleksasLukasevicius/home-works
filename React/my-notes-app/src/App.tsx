import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form/Form";
import { NoteForm } from "./components/Form/NoteForm";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";

function App() {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  // const appButton = () => <Button />;

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
        <NoteForm>
          <h1>Notes App</h1> <h2>Welcome!</h2>
        </NoteForm>
      </section>

      <section>
        <Hero title="Info Hero" subtitle="Info subtitle" color="blue" />
      </section>

      <section>
        <Button text="Press Me!" />
        {/* <Button><p>Text</p> </Button> */}
      </section>

      <section>
        <Form />
      </section>

      <form>
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
      </form>
    </div>
  );
}

export default App;
