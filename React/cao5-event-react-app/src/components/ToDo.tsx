import { useState } from "react";

export const ToDo = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<any[]>([]);

  const addNote = () => {
    const newNotes = [...notes, note];

    setNotes(newNotes);
  };

  const deleteNote = (i: any) => {
    const newNotes = [...notes];
    newNotes.splice(i, 1);

    setNotes(newNotes);
  };

  return (
    <div className="conainer">
      <h3>You have {notes.length} Todos</h3>

      {notes.map((note, i) => (
        <div className="notes-conainer" key={i}>
          <p>{note}</p>
          <i onClick={() => deleteNote(i)} className="fas fa-times-circle">
            {" "}
          </i>
        </div>
      ))}

      <div className="notes-conainer">
        <input
          name="input-note"
          placeholder="Enter note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />

        <button className="note-button" onClick={addNote}>
          Submit
        </button>
      </div>
    </div>
  );
};
