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
      <h6>{showFormattedDate(note.createdAt)}</h6>
      <p>{note.body}</p>
      <h5>{note.archived ? "archiv" : "tidak"}</h5>
      <CardButtons
        note={note}
        archiveUpdate={toArchiveUpdate}
        deleteUpdate={toDeleteUpdate}
      />
    </div>
  );
};

export default NoteCard;
