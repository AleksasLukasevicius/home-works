import { useState } from "react";

export const Form = () => {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNote(event.target.value);
  };

  const hanleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedNotes((prevSavedNotes) => [...prevSavedNotes, note]);

    setNote("");
  };

  return (
    <>
      <form onSubmit={hanleSubmit} style={{ backgroundColor: "black" }}>
        <input value={note} onChange={handleChange} />

        <p></p>

        <button type="submit">Sumbit</button>
      </form>

      <p>{note}</p>

      {savedNotes.map((currentNote, i) => (
        <p key={i}>{currentNote}</p>
      ))}

      {/* {savedNotes.map((currentNote, i) => {
        return <p key={i}>{currentNote}</p>;
      })} */}
    </>
  );
};
