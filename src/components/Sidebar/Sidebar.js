import React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  const colors = ["#fe9b72", "#fef771", "#00d4fe", "#b693fd", "#c3ee91"];

  const [listOpen, setListOpen] = React.useState(false);

  return (
    <div className="sidebar">
      <img
        src="./assets\plus-icon.png"
        alt="Add"
        onClick={() => setListOpen(!listOpen)}
      />
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar-list-item"
            style={{ backgroundColor: color }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}
