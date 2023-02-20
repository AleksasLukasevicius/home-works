import axios from "axios";
import { useEffect, useState } from "react";
import { TMedication } from "../Types/TMedication";

export const useGetMedicationsData = () => {
  const [medications, setMedications] = useState<TMedication[]>([]);
  const [uniqueMeds, setUniqueMeds] = useState<TMedication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMedicationsData = () => {
    axios
      .get<TMedication[]>(
        "https://glittery-dull-snickerdoodle.glitch.me/v1/meds?limit=250"
      )
      .then((resulte) => {
        if (Array.isArray(resulte.data)) {
          setMedications(
            resulte.data.filter(
              (medication) => medication.name && medication.description
            )
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
    if (medications.length) {
      const tempUniqueMeds: TMedication[] = [];

      medications.forEach((medication) => {
        const hasMedication = tempUniqueMeds.some((medicationToCompare) => {
          if (
            medication.name?.toLocaleLowerCase() ===
            medicationToCompare.name?.toLocaleLowerCase()
          ) {
            return true;
          }
        });

        if (!hasMedication) {
          tempUniqueMeds.push(medication);
        }
      });

      setUniqueMeds(tempUniqueMeds);
    }
  }, [medications]);

  useEffect(() => {
    getMedicationsData();
  }, []);

  return { medications, uniqueMeds };
};
