import React from "react";
import CardButtons from "./CardButtons";
import { showFormattedDate } from "../utils";

const NoteCard = ({ note, archiveUpdate, deleteUpdate }) => {
  const toArchiveUpdate = (targetNoteId) => {
    archiveUpdate(targetNoteId);
  };

  const toDeleteUpdate = (targetNoteId) => {
    deleteUpdate(targetNoteId);
  };
  return (
    <div className="noteCard">
      <h3>{note.title}</h3>
      <h6 className="dateText">{showFormattedDate(note.createdAt)}</h6>
      <p className="textNote">{note.body}</p>
      <CardButtons
        note={note}
        archiveUpdate={toArchiveUpdate}
        deleteUpdate={toDeleteUpdate}
      />
    </div>
  );
};

export default NoteCard;
