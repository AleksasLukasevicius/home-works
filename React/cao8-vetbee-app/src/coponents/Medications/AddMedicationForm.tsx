import { useState } from "react";
import axios from "axios";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";

export const AddMedicationForm = () => {
  const [newMedication, setNewMedication] = useState({
    name: null,
    description: null,
  });

  const resetForm = () => {
    setNewMedication({ name: null, description: null });
  };

  const handleMedicationSumbit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/meds", {
        name: newMedication.name,
        description: newMedication.description,
      })
      .then(() => {
        alert(`Medication ${newMedication.name} was added`);
        resetForm();
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewMedication({ ...newMedication, [prop]: event.target.value });
  };

  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <form method="post" onSubmit={handleMedicationSumbit}>
      <fieldset>
        <legend>
          <h1>Add Medication</h1>
        </legend>
        <label htmlFor="medication-name">Medication name</label>
        <input
          name="medication-name"
          value={newMedication.name ?? ""}
          onChange={(event) => handleInputChange(event, "name")}
          placeholder="Enter Medication name"
        />

        <label htmlFor="medication-description">Medication description</label>
        <input
          name="medication-description"
          value={newMedication.description ?? ""}
          onChange={(event) => handleInputChange(event, "description")}
          placeholder="Enter Medication description"
        />

        <div className="button-wrapper">
          <OrangeButton>Add medication</OrangeButton>
          <WhiteButton onClick={handleClick}>Cancel</WhiteButton>
        </div>
      </fieldset>
    </form>
  );
};
