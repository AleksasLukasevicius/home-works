import { useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumner, setRandomNumber] = useState(0);

  return (
    <>
      <p>{randomNumner}</p>

      <button
        onClick={() => {
          const magicNumber = Math.random() * 100;
          setRandomNumber(magicNumber);
        }}
      >
        Gnerate number
      </button>
    </>
  );
};
