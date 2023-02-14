import { useEffect, useState } from "react";
import axios from "axios";
import { PetCard } from "./PetCard";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";

export const PetList = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
        <main>
          <div className="title-wrapper">
            <h1>Pet List</h1>
            <div className="button-wrapper">
              <OrangeButton onClick={() => navigate("/add-pet")}>
                Add pet
              </OrangeButton>
            </div>
          </div>

          <div className="content-container">
            <PetCard pets={pets} getPetsData={getPetsData} />
          </div>
        </main>
      )}
    </>
  );
};
