import axios from "axios";
import { useState } from "react";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { useNavigate, useParams } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import { TNewPrescription } from "../Types/TNewPrescription";
import { useGetMedicationsData } from "../hooks/useGetMedicationsData";
import { TMedication } from "../Types/TMedication";

export const AddPrescriptionForm = () => {
  const { uniqueMeds } = useGetMedicationsData();

  const [newPrescription, setNewPrescription] = useState<TNewPrescription>({
    medication_id: null,
    pet_id: null,
    comment: null,
  });

  const params = useParams();

  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPrescription({
      ...newPrescription,
      [prop]: event.target.value,
    });
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

  const resetForm = () => {
    setNewPrescription({ medication_id: null, pet_id: null, comment: null });
  };

  const handlePrescriptionSumbit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/prescription", {
        medication_id: newPrescription.medication_id,
        pet_id: params.id,
        comment: newPrescription.comment,
      })
      .then(() => {
        alert(`Prescription  was added`);
        resetForm();
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handlePrescriptionSumbit}>
      <fieldset>
        <legend>
          <h1>Add Prescription</h1>
        </legend>

        <Autocomplete
          onChange={handleSelect}
          options={uniqueMeds}
          getOptionLabel={(option) => option.name ?? ""}
          renderInput={(params) => (
            <TextField {...params} label="Medications" />
          )}
          sx={{
            width: "30rem",
            textAlign: "center",
            "& option": {
              padding: "0.5rem",
            },
          }}
        />

        <label htmlFor="comment">Prescription comment</label>
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
