import React, { useState } from "react";
import "../styles/note-styles.css";

const NoteAdd = ({addNote,notes}) => {

  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");

  const onTitleChange = (event) => {
    setNewNoteTitle(event.target.value);
  };

  const onBodyChange = (event) => {
    setNewNoteBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    const newNote = {
      id: notes.length + 1,
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
      <form onSubmit={onSubmitEventHandler} className="form-container">
        <input
          type="text"
          placeholder="judul note.."
          value={newNoteTitle}
          onChange={onTitleChange}
          required
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
