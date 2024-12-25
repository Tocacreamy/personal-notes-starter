import React from "react";

const CardButtons = ({ note, archiveUpdate,deleteUpdate }) => {
  const handlerToArchiveUpdate = () => {
    archiveUpdate(note.id)
  };

  const handlerToDelete = () => {
    deleteUpdate(note.id)
  }
  return (
    <div className="buttons">
      <button onClick={handlerToArchiveUpdate} className="theButton archiveButton">
        {note.archived ? "Pindahkan": "Arsipkan"}
      </button>
      <button onClick={handlerToDelete} className="theButton deleteButton">
        Hapus
      </button>
    </div>
  );
};

export default CardButtons;
