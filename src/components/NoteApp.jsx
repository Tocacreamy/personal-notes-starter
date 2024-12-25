import React, { StrictMode, useState } from "react";
import NoteNav from "./NoteNav";
import NoteAdd from "./NoteAdd";
import NoteActive from "./NoteActive";
import NoteArchive from "./NoteArchive";
import { getInitialData } from "../utils";

const NoteApp = () => {
  const data = getInitialData();
  const [notes, setNotes] = useState(data);
  const [displayedNotes, setDisplayedNotes] = useState(notes);


  const onAddNote = (newNote) => {
    const updatedNotes = [...notes, newNote] ;
    setNotes(updatedNotes);
    setDisplayedNotes(updatedNotes);
  };

  const archiveUpdate = (targetNoteId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === targetNoteId) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    setNotes(updatedNotes);
    setDisplayedNotes(updatedNotes);
  };

  const deleteUpdate = (targetNoteId) => {
    const updatedNotes = notes.filter((note) => note.id !== targetNoteId);
    setNotes(updatedNotes);
    setDisplayedNotes(updatedNotes);
  };

  const searchUpdate = (searchInput) => {
    console.log(searchInput);
    if (searchInput.trim() === "") {
      setDisplayedNotes(notes);
    } else {
      const updatedNotes = notes.filter((note) => note.title.toLowerCase().includes(searchInput.toLowerCase()));
      console.log(updatedNotes)
      setDisplayedNotes(updatedNotes);
    }
  };

  return (
    <>
      <NoteNav searchUpdate={searchUpdate} />
      <NoteAdd addNote={onAddNote} />
      <NoteActive
        notes={displayedNotes}
        archiveUpdate={archiveUpdate}
        deleteUpdate={deleteUpdate}
      />
      <NoteArchive
        notes={displayedNotes}
        archiveUpdate={archiveUpdate}
        deleteUpdate={deleteUpdate}
      />
    </>
  );
};

export default NoteApp;
