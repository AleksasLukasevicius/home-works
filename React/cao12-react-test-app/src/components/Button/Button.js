import { useState } from "react";

export const Button = () => {
  const [value, setValue] = useState("Press here");
  const dummyFunctiuon = () => {
    setValue("You pressed me");
  };

  return (
    <button onClick={dummyFunctiuon} title="dummyButton">
      {value}
    </button>
  );
};
