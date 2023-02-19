import axios from "axios";
import { useState } from "react";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { useNavigate, useParams } from "react-router-dom";

export const AddLogForm = () => {
  const [newLog, setNewLog] = useState({
    pet_id: null,
    description: null,
    status: null,
  });

  const navigate = useNavigate();
  const params = useParams();
  function handleClick() {
    navigate(-1);
  }

  console.info({ newLog });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewLog({ ...newLog, [prop]: event.target.value });
  };

  const resetForm = () => {
    setNewLog({ pet_id: null, description: null, status: null });
  };

  const handlePetSumbit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/logs", {
        pet_id: params.id,
        description: newLog.description,
        status: newLog.status,
      })
      .then(() => {
        alert(`Log ${newLog.description} was added`);
        resetForm();
      })
      .catch((error) => console.error(error.response.data.error));
  };

  return (
    <form method="post" onSubmit={handlePetSumbit}>
      <fieldset>
        <legend>
          <h1>Add Log</h1>
        </legend>
        <label htmlFor="log-description">Description</label>
        <input
          name="log-description"
          value={newLog.description ?? ""}
          onChange={(event) => handleInputChange(event, "description")}
          placeholder="Enter your pet description"
        />

        <label htmlFor="log-status">Status</label>
        <input
          name="log-status"
          value={newLog.status ?? ""}
          onChange={(event) => handleInputChange(event, "status")}
          placeholder="Enter your pet status"
        />

        <div className="button-wrapper">
          <OrangeButton type="submit">Add log</OrangeButton>
          <WhiteButton onClick={handleClick}>Cancel</WhiteButton>
        </div>
      </fieldset>
    </form>
  );
};
