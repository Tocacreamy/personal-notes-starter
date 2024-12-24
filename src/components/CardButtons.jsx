import React from "react";

const CardButtons = ({ note, archiveUpdate }) => {
  const handlerToArchiveUpdate = () => {
    archiveUpdate(note.id)
  };
  return (
    <div>
      <button onClick={handlerToArchiveUpdate}>
        {note.archived ? "Pindahkan": "Arsipkan"}
      </button>
    </div>
  );
};

export default CardButtons;
