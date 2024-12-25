import React, { useState } from "react";
import "../styles/note-styles.css";

const NoteAdd = ({ addNote, notes }) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");
  const [text, setText] = useState("");

  const onTitleChange = (event) => {
    const input = event.target.value;
    setNewNoteTitle(input);

    if (input.length <= 50) {
      setText(input);

    }
  };

  const onBodyChange = (event) => {
    const input = event.target.value;
    setNewNoteBody(input);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    const newNote = {
      id: +new Date(),
      title: newNoteTitle,
      body: newNoteBody,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    addNote(newNote);

    setNewNoteTitle("");
    setNewNoteBody("");
  };

  return (
    <div className="add-component">
      <h2>Buat Catatan</h2>
      <p className="limitCharacterInput">{text.length}/50 karakter</p>
      <form onSubmit={onSubmitEventHandler} className="form-container">
        <input
          type="text"
          placeholder="judul note.."
          value={newNoteTitle}
          onChange={onTitleChange}
          required
          maxLength={50}
        />
        <input
          type="text"
          placeholder="Tulis catatanmu.."
          value={newNoteBody}
          onChange={onBodyChange}
          required
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default NoteAdd;
