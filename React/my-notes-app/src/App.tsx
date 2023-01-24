import { useState } from "react";
import "./App.css";
import "./components/Button/Button.css";
import { Form } from "./Form";

function App() {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <section>
        <Form />
      </section>

      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <p></p>
      <button
        className="Button"
        type="button"
        onClick={
          () => setI(i + 1) //naudoti tik pradinems produkatasm
        }
      >
        Submit
      </button>

      <p>{description}</p>

      <div>{i}</div>
      <div>i+1={i}</div>

      <p>i antruoju {i ** 2}</p>
    </div>
  );
}

export default App;
