import React, { useState } from "react";
import Note from "../components/Note.jsx";
import CreateArea from "../components/CreateArea.jsx";

function Home() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  return (
    <div className="px-6 pb-12 md:px-12">
      <CreateArea onAdd={addNote} />
      <div className="flex justify-center flex-wrap gap-5">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              date={noteItem.date}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
