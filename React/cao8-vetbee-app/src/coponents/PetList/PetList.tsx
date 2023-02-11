import { useEffect, useState } from "react";
import axios from "axios";
import { PetCard } from "./PetCard";

export const PetList = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPetsData = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/pets/")
      .then((response) => setPets(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      });
  };

  useEffect(() => {
    getPetsData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <section>
          <h1>Pet List</h1>
          <div>
            <PetCard pets={pets} getPetsData={getPetsData} />
          </div>
        </section>
      )}
    </>
  );
};
