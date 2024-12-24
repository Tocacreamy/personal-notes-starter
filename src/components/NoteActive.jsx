import React, { useState } from "react";
import NoteCard from "./NoteCard";

const NoteActive = ({ notes , archiveUpdate}) => {

  const notesFiltered = notes.filter((note) => !note.archived);

  const toarchiveUpdate = (targetNoteId) => {
    archiveUpdate(targetNoteId)
  }
  return (
    <div className="component-container">
      <h2>Catatan</h2>
      <div className="noteList">
        {notesFiltered.map((note) => (
          <NoteCard key={note.id} note={note} archiveUpdate={toarchiveUpdate}/>
        ))}
      </div>
    </div>
  );
};

export default NoteActive;
