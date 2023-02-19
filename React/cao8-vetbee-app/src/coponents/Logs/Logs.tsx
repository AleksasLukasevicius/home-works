import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrangeButton } from "../Button/Button.styled";

export type TLog = {
  pet_id: number;
  description: string | null;
  status: string | null;
};

export const Logs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const getPetLogsData = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${params.id}`)
      .then((resulte) => setLogs(resulte.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      });
  };

  useEffect(() => {
    getPetLogsData();
  }, [params.id]);

  return (
    <>
      <main>
        <div className="title-wrapper">
          <h1>{logs[0]?.name}: Health records</h1>
          <div className="button-wrapper">
            <OrangeButton onClick={() => navigate("/add-log")}>
              Add Log
            </OrangeButton>
            <OrangeButton onClick={() => navigate("/add-prescription")}>
              Add Prescriptions
            </OrangeButton>
          </div>
        </div>

        <div className="content-container">
          {logs.map((log: any, i: number) => (
            <div className="card-content" key={`{log.id} ${i}`}>
              <h2>{log.description}</h2>
              <p>{log.status}</p>
              {/* <p>{new Date(log.dob).toISOString().split("T")[0]}</p> */}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
