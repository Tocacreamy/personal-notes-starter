import React, { useState } from "react";

const NoteSearch = ({searchUpdate}) => {
  const [searchInput, setSearchInput] = useState("");

  const toSearchUpdate = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    searchUpdate(input);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Cari catatan.."
        onChange={toSearchUpdate}
        value={searchInput}
        className="search-box"
      />
    </>
  );
};

export default NoteSearch;
