import { useState } from "react";
import axios from "axios";
import { Button } from "./Button";

export const Add = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);

  const resetForm = () => {
    setPrice(null);
    setPeople(null);
  };

  const addRow = () => {
    axios
      .post("https://believed-shore-vanadium.glitch.me/", { price, people })
      .then(() => resetForm())
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          addRow();
        }}
      >
        <input
          name="input-price"
          type="number"
          placeholder="price"
          value={price ?? ""}
          //   value={`${price}`}
          onChange={(event) => {
            let newPrice: string | null | number = event.target.value;

            if (newPrice === "") {
              newPrice = null;
            } else {
              newPrice = +newPrice;
            }
            setPrice(newPrice);
          }}
        />

        <input
          name="input-people"
          type="number"
          placeholder="people"
          //   value={people || ""}
          value={people ?? ""}
          onChange={(event) => setPeople(+event.target.value)}
        />

        <Button />
      </form>
    </div>
  );
};
