import axios from "axios";
import { useState } from "react";
import { TableContainer } from "./MedicationsTable.styled";
import { OrangeButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";
import { TMedication } from "../Types/TMedication";

export const MedicationsTable = () => {
  const [medications, setMedications] = useState<TMedication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return isLoading ? (
    <p>Loading…</p>
  ) : !medications.length ? (
    <h1>No Medications</h1>
  ) : (
    <section>
      <div className="title-wrapper">
        <h1>Medications List</h1>
        <div className="button-wrapper">
          <OrangeButton onClick={() => navigate("/add-meds")}>
            Add Medications
          </OrangeButton>
        </div>
      </div>
      <TableContainer>
        <thead>
          <tr>
            <th>Meds Id</th>
            <th>Name of Meds</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {medications.map((med) => (
            <tr key={med.id}>
              <td>{med.id}</td>
              <td>{med.name}</td>
              <td>{med.description}</td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </section>
  );
};
