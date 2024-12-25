import React, { useState } from "react";
import NoteCard from "./NoteCard";

const NoteActive = ({ notes, archiveUpdate, deleteUpdate }) => {
  const notesFiltered = notes.filter((note) => !note.archived);

  const toarchiveUpdate = (targetNoteId) => {
    archiveUpdate(targetNoteId);
  };

  const toDeleteUpdate = (targetNoteId) => {
    deleteUpdate(targetNoteId);
  };
  return (
    <div className="component-container">
      <h2 className="primary-text">Catatan</h2>
      <div className="noteList">
        {notesFiltered < 1
          ? `tidak ada catatan`
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

export default NoteActive;
