export const LogCard = ({ logs }: any) => {
  return (
    <>
      {logs.map((log: any, i: number) => (
        <div className="card-content" key={`{log.id} ${i}`}>
          <h2>{log.description}</h2>
          <p>{log.status}</p>
          <p>{new Date(log.dob).toISOString().split("T")[0]}</p>
        </div>
      ))}
    </>
  );
};
