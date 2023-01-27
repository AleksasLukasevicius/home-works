import { useState } from "react";

export const NoteForm = (props: any) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [areNotesShown, setAreNotesShown] = useState(true);

  // console.info({ note, notes });

  return (
    <>
      {props.children}

      <input
        value={note}
        onChange={(event) => {
          setNote(event.target.value);
        }}
      />

      <input
        checked={areNotesShown}
        type="checkbox"
        name="note-shown"
        onChange={(event) => setAreNotesShown(event.target.checked)}
      />

      <button
        onClick={() => {
          setNotes([...notes, note]);

          setNote("");
        }}
      >
        Click
      </button>

      {areNotesShown &&
        notes.map((currentNote, i) => (
          <p key={currentNote + i}> {currentNote}</p>
        ))}
    </>
  );
};
