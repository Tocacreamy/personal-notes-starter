import React from "react";

import "../styles/note-styles.css";
import NoteSearch from "./NoteSearch";

const NoteNav = ({searchUpdate}) => {
  const toSearchUpdate = (searchInput)=> {
    searchUpdate(searchInput)
  };

  return (
    <nav className="nav-container">
      <h1>Notez.</h1>
      <NoteSearch searchUpdate= {toSearchUpdate}/>
    </nav>
  );
};

export default NoteNav;
