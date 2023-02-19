import axios from "axios";
import { useState } from "react";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";
import { TMedication } from "../Medications/MedicationsTable";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

export const AddPrescriptionForm = () => {
  const [newPrescription, setNewPrescription] = useState({
    medication_id: null,
    pet_id: null,
    comment: null,
  });

  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const resetForm = () => {
    setNewPrescription({ medication_id: null, pet_id: null, comment: null });
  };

  const handlePetSumbit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/prescription", {
        medication_id: newPrescription.medication_id,
        pet_id: newPrescription.pet_id,
        comment: newPrescription.comment,
      })
      .then(() => {
        alert(`Prescription  was added`);
        resetForm();
      })
      .catch((error) => console.error(error));
  };

  const handleSelect = (
    _: React.SyntheticEvent<Element, Event>,
    value: TMedication | null
  ) => {
    if (!value?.id) {
      return;
    }

    setNewPrescription({
      ...newPrescription,
      medication_id: value?.id,
    });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPrescription({
      ...newPrescription,
      [prop]: event.target.value,
    });
  };

  return (
    <form method="post" onSubmit={handlePetSumbit}>
      <fieldset>
        <legend>
          <h1>Add Prescription</h1>
        </legend>

        <Autocomplete
          onChange={handleSelect}
          options={uniqueMeds}
          getOptionLabel={(option) => option.name ?? ""}
          renderInput={(params) => <TextField {...params} label="Medication" />}
          sx={{
            width: "30rem",
            textAlign: "center",
            "& option": {
              padding: "0.5rem",
            },
          }}
        />

        <label htmlFor="comment">Pet birthday</label>
        <input
          name="comment"
          value={newPrescription.comment ?? ""}
          onChange={(event) => handleInputChange(event, "comment")}
          placeholder="Enter comment"
        />

        <div className="button-wrapper">
          <OrangeButton>Add pet</OrangeButton>
          <WhiteButton onClick={handleClick}>Cancel</WhiteButton>
        </div>
      </fieldset>
    </form>
  );
};
