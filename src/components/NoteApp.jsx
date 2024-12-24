import React, { StrictMode, useState } from "react";
import NoteNav from "./NoteNav";
import NoteAdd from "./NoteAdd";
import NoteActive from "./NoteActive";
import NoteArchive from "./NoteArchive";
import { getInitialData } from "../utils";

const NoteApp = () => {
  const data = getInitialData();
  const [notes, setNotes] = useState(data);

  const onAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const archiveUpdate = (targetNoteId) => {
    const updatedNotes = notes.map(note => {
      if (note.id === targetNoteId) {
        return { ...note, archived: !note.archived }; 
      }
      return note; 
    });

    setNotes(updatedNotes);

  };

  return (
    <>
      <NoteNav />
      <NoteAdd addNote={onAddNote} notes={notes} />
      <NoteActive notes={notes} archiveUpdate={archiveUpdate}/>
      <NoteArchive notes={notes} archiveUpdate={archiveUpdate}/>
    </>
  );
};

export default NoteApp;
