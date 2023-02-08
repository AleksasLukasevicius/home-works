import logo from "./logo.svg";
import "./App.css";
import { BorderContainer } from "./components/BorderContainers/BorderContainer";
import { AccountInfo } from "./components/AccountInfo/AccountInfo";
import { Button } from "./components/Button/Button";
import { BlueButton } from "./components/Button/BlueButton";
import { ButtonGreen } from "./components/Button/ButtonGreen";
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

      <Button />

      <BlueButton />
      <ButtonGreen />
    </div>
  );
}

export default App;
