import { useState } from "react";
import "./App.css";

function App() {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  console.info(i);

  return (
    <div className="App">
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
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

      <h1>i antruoju {i ** 2}</h1>
    </div>
  );
}

export default App;
