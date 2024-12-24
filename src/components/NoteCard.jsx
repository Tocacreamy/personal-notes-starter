import React from "react";
import CardButtons from "./CardButtons";

const NoteCard = ({ note, archiveUpdate }) => {

    const toArchiveUpdate = (targetNoteId) => {
        archiveUpdate(targetNoteId)
    }
  return (
    <div className="noteCard">
      <h3>{note.title}</h3>
      <h6>{note.createdAt}</h6>
      <p>{note.body}</p>
      <h5>{note.archived ? "archiv" : "tidak"}</h5>
      <CardButtons note= {note} archiveUpdate={toArchiveUpdate} />
    </div>
  );
};

export default NoteCard;
