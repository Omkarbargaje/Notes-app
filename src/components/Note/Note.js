import React from "react";
import "./Note.css";
let timeer = 500,
  timeout;

export default function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";

    hrs = hrs ? hrs : 12;
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month} ${date.getFullYear()} `;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timeer);
  };

  const updatetext = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note-text"
        defaultValue={props.note.value}
        onChange={(event) => updatetext(event.target.value, props.note.id)}
      />
      <div className="footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src=".\assets\icons8-trash-24.png"
          alt="Delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}
