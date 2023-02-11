import { useNavigate } from "react-router-dom";

export const PetCard = ({ pets }: any) => {
  const viewPetLogs = useNavigate();

  const handleViewLog = (id: number) => {
    viewPetLogs(`/logs/${id}`);
  };
  return (
    <>
      {pets.map((pet: any, i: number) => (
        <div key={`{pet.id} ${i}`}>
          <h2>{pet.name}</h2>
          <p>{new Date(pet.dob).toISOString().split("T")[0]}</p>
          <p>{pet.client_email}</p>
          <button onClick={() => handleViewLog(pet.id)}>View logs</button>
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};
