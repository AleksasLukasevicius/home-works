import axios from "axios";
import { useEffect, useState } from "react";
import { TableContainer } from "./MedicationsTable.styled";
import { OrangeButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";

export type TMedication = {
  id: number;
  name: string | null;
  description: string | null;
};

export const MedicationsTable = () => {
  const [medications, setMedications] = useState<TMedication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getMedicationsData = () => {
    axios
      .get<TMedication[]>(
        "https://glittery-dull-snickerdoodle.glitch.me/v1/meds?limit=250"
      )
      .then((resulte) => {
        if (Array.isArray(resulte.data)) {
          setMedications(
            resulte.data.filter((med) => med.name && med.description)
          );
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      });
  };

  useEffect(() => {
    getMedicationsData();
  }, []);

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
          {medications.map((med: TMedication) => (
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
