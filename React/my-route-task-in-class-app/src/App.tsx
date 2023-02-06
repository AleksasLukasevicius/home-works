import "./App.css";
import { MainRouter } from "./components/MainRouter";

function App() {
  return (
    <div className="App">
      <MainRouter>
        <p>Alex WEB</p>
      </MainRouter>
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;
