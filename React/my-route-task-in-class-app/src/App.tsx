import "./App.css";
import { MainRouter } from "./components/MainRouter";

function App() {
  return (
    <div className="App">
      <MainRouter>
        <p>Alex WEB</p>
        <button type="submit">Submit</button>
      </MainRouter>
    </div>
  );
}

export default App;
