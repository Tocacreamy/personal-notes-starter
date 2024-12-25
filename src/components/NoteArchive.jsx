import React from "react";
import NoteCard from "./NoteCard";

const NoteArchive = ({ notes, archiveUpdate,deleteUpdate }) => {
  const notesFiltered = notes.filter((note) => note.archived);

  const toarchiveUpdate = (targetNoteId) => {
    archiveUpdate(targetNoteId);
  };

  const toDeleteUpdate = (targetNoteId) => {
    deleteUpdate(targetNoteId);
  };
  return (
    <div className="component-container">
      <h2>Arsip</h2>
      <div className="noteList">
        {notesFiltered < 1
          ? `tidak ada catatan yang diarsipkan`
          : notesFiltered.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                archiveUpdate={toarchiveUpdate}
                deleteUpdate={toDeleteUpdate}
              />
            ))}
      </div>
    </div>
  );
};

export default NoteArchive;
