import axios from "axios";
import { useContext, useState } from "react";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../ProductsContext/ProductsContext";

export const AddPetForm = () => {
  const products = useContext(ProductsContext);
  console.info({ products });

  const [newPet, setNewPet] = useState({
    name: null,
    dob: null,
    client_email: null,
  });

  const resetForm = () => {
    setNewPet({ name: null, dob: null, client_email: null });
  };

  const handlePetSumbit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", {
        name: newPet.name,
        dob: newPet.dob,
        client_email: newPet.client_email,
      })
      .then(() => {
        alert(`Pet ${name} was added`);
        resetForm();
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPet({ ...newPet, [prop]: event.target.value });
  };

  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <form method="post" onSubmit={handlePetSumbit}>
      <fieldset>
        <legend>
          <h1>Add Pet</h1>
        </legend>
        <label htmlFor="pet-name">Pet name</label>
        <input
          name="pet-name"
          value={newPet.name ?? ""}
          onChange={(event) => handleInputChange(event, "name")}
          placeholder="Enter your pet name"
        />

        <label htmlFor="pet-date-of-birthday">Pet birthday</label>
        <input
          name="pet-date-of-birthday"
          type="date"
          value={newPet.dob ?? ""}
          onChange={(event) => handleInputChange(event, "dob")}
          placeholder="Enter your pet birthday date"
        />

        <label htmlFor="client-email">Client email</label>
        <input
          name="client-email"
          type="email"
          value={newPet.client_email ?? ""}
          onChange={(event) => handleInputChange(event, "client_email")}
          placeholder="Enter your E-mail"
        />
        <div className="button-wrapper">
          <OrangeButton>Add pet</OrangeButton>
          <WhiteButton onClick={handleClick}>Cancel</WhiteButton>
        </div>
      </fieldset>
    </form>
  );
};
