import React from "react";

const CardButtons = ({ note, archiveUpdate,deleteUpdate }) => {
  const handlerToArchiveUpdate = () => {
    archiveUpdate(note.id)
  };

  const handlerToDelete = () => {
    deleteUpdate(note.id)
  }
  return (
    <div>
      <button onClick={handlerToArchiveUpdate}>
        {note.archived ? "Pindahkan": "Arsipkan"}
      </button>
      <button onClick={handlerToDelete}>
        Hapus
      </button>
    </div>
  );
};

export default CardButtons;
