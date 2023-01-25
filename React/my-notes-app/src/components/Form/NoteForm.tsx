import { useState } from "react";

export const NoteForm = (props: any) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [areNoteShow, setAreNoteShow] = useState(true);

  console.info({ note, notes });

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
        checked={areNoteShow}
        type="checkbox"
        name="note-hide"
        onChange={(event) => setAreNoteShow(event.target.checked)}
      />

      <button
        onClick={() => {
          setNotes([...notes, note]);
          setNote("");
        }}
      >
        Click
      </button>

      {areNoteShow &&
        notes.map((currentNote, i) => (
          <p key={currentNote + i}> {currentNote}</p>
        ))}
    </>
  );
};
