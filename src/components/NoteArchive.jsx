import React from "react";
import NoteCard from "./NoteCard";

const NoteArchive = ({ notes,archiveUpdate }) => {
  const notesFiltered = notes.filter((note) => note.archived);

  const toarchiveUpdate = (targetNoteId) => {
    archiveUpdate(targetNoteId);
  };
  return (
    <div className="component-container">
      <h2>Arsip</h2>
      <div className="noteList">
        {notesFiltered.map((note) => (
          <NoteCard key={note.id} note={note} archiveUpdate={toarchiveUpdate} />
        ))}
      </div>
    </div>
  );
};

export default NoteArchive;
