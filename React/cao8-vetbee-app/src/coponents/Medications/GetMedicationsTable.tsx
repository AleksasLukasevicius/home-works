import axios from "axios";
import { useEffect, useState } from "react";
import { TableContainer } from "./MedicationsTable.styled";
import { OrangeButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";

export type TMeds = {
  id: number;
  name: string | null;
  description: string | null;
}[];

export const Medications = () => {
  const [medications, setMedications] = useState<TMeds>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getMedicationsData = () => {
    axios
      .get<TMeds>("https://glittery-dull-snickerdoodle.glitch.me/v1/meds/")
      .then((response) => setMedications(response.data))
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

  if (!medications) {
    return <h2>No meds</h2>;
  }

  return (
    <>
      {isLoading ? (
        <p>Loading…</p>
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
              {medications.map((meds) => (
                <tr key={meds.id}>
                  <td>{meds.id}</td>
                  <td>{meds.name}</td>
                  <td>{meds.description}</td>
                </tr>
              ))}
            </tbody>
          </TableContainer>
        </section>
      )}
    </>
  );
};
