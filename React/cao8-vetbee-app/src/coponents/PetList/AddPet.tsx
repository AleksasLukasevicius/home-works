import axios from "axios";
import { useState } from "react";

export const AddPet = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setName("");
    setDate("");
    setEmail("");
  };

  const addCard = () => {
    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", {
        name,
        date,
        email,
      })
      .then(() => resetForm())
      .catch((error) => console.error(error));
  };
  return (
    <form method="post">
      <fieldset>
        <legend>
          <h1>Add Pet</h1>
        </legend>
        <label htmlFor="pet-name">Pet name</label>
        <input name="pet-name" />
        <label htmlFor="pet-dob">Pet birthday</label>
        <input name="pet-dob" type="date" />
        <label htmlFor="pet-dob">Pet birthday</label>
        <input name="pet-dob" type="email" />
      </fieldset>
    </form>
  );
};
