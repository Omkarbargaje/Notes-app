import React from "react";
import Note from "../Note/Note";
import "./NotesContainer.css";

export default function NotesContainer(props) {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container-note custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updatetext={props.updatetext}
            />
          ))
        ) : (
          <h3 className="Emapty-note-heading">Your List Is Empty</h3>
        )}
      </div>
    </div>
  );
}
