import { useState } from "react";
import axios from "axios";
import { Form } from "./Form/Form.styled";

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
    <Form
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        addRow();
      }}
    >
      <label htmlFor="input-people">People</label>
      <input
        name="input-people"
        type="number"
        placeholder="Enter people number"
        value={people ?? ""}
        onChange={(event) => {
          let newPeople: string | number | null = event.target.value;

          if (newPeople === "") {
            newPeople = null;
          } else {
            newPeople = +newPeople;
          }
          setPeople(newPeople);
        }}
      />

      <label htmlFor="input-price">Price, €</label>
      <input
        name="input-price"
        type="number"
        placeholder="Enter price"
        value={price ?? ""}
        onChange={(event) => {
          let newPrice: string | number | null = event.target.value;

          if (newPrice === "") {
            newPrice = null;
          } else {
            newPrice = +newPrice;
          }
          setPrice(newPrice);
        }}
      />

      <Button />
    </Form>
  );
};
