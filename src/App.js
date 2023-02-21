import "./App.css";
import React, { useEffect } from "react";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNote] = React.useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNote = [...notes];

    tempNote.push({
      id: Date.now() + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNote(tempNote);
  };

  const deleteNote = (id) => {
    const tempNote = [...notes];

    const index = tempNote.findIndex((note) => note.id === id);

    if (index < 0) return;

    tempNote.splice(index, 1);
    setNote(tempNote);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const updatetext = (text, id) => {
    const tempNote = [...notes];

    const index = tempNote.findIndex((note) => note.id === id);

    if (index < 0) return;

    tempNote[index].text = text;
    setNote(tempNote);
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NotesContainer
        notes={notes}
        deleteNote={deleteNote}
        updatetext={updatetext}
      />
    </div>
  );
}

export default App;
