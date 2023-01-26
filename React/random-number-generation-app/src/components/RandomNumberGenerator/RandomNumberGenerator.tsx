import { useEffect, useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isImportantValue = randomNumber > 50;

  useEffect(() => {
    // alert("Welcome");
    setIsLoading(true);

    const products = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (result) => result
    ).then;

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); // kai masyve keiciasi reiksmes - vykdyk koda funkcijoje

  useEffect(() => {
    // alert(randomNumber);
  }, [randomNumber, description]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <p className={isImportantValue ? "importantValue" : "boldValue"}>
            {randomNumber.toFixed()}
          </p>

          {isImportantValue && <p>Important client</p>}

          <button
            onClick={() => {
              const magicNumber = Math.random() * 100;
              setRandomNumber(magicNumber);
            }}
          >
            Gnerate number
          </button>

          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </>
      )}
    </>
  );
};
