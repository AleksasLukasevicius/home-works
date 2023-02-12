import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PetCard = ({ pets, getPetsData }: any) => {
  const viewPetLogs = useNavigate();

  const handleViewLog = (id: number) => {
    viewPetLogs(`/logs/${id}`);
  };

  const handlePetArchived = (id: number) => {
    if (window.confirm(`Do you really want move Pet to archive?`)) {
      axios
        .delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`)
        .then(() => {
          alert(`Pet was archived.`);
          getPetsData();
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <>
      {pets.map((pet: any, i: number) => (
        <div key={`{pet.id} ${i}`}>
          <h2>{pet.name}</h2>
          <p>{new Date(pet.dob).toISOString().split("T")[0]}</p>
          <p>{pet.client_email}</p>
          <button onClick={() => handleViewLog(pet.id)}>View logs</button>
          <button onClick={() => handlePetArchived(pet.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
