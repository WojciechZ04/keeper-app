import React, { useState, useEffect, useRef } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const createAreaRef = useRef(null);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const titleCharLimit = 50;
  const contentCharLimit = 200;

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value.slice(0, name === "title" ? titleCharLimit : contentCharLimit),
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setExpanded(false);
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (createAreaRef.current && !createAreaRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [createAreaRef]);

  return (
    <div ref={createAreaRef} className="relative bg-white p-4 rounded-lg shadow-xl w-3/4 lg:w-[600px] mx-auto my-10 h-auto">
      <form className="create-note">
        {isExpanded && (
          <div className="pb-2">
            <input
              className="font-semibold"
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />

            {note.title.length >= titleCharLimit && (
              <span className="text-gray-500 text-xs">
                Character limit reached
              </span>
            )}
            <div className="borders"></div>
          </div>
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 4 : 1}
        />
        {note.content.length >= contentCharLimit / 2 && (
          <div className="text-gray-500 text-xs">
            {note.content.length}/{contentCharLimit}
            {note.content.length >= contentCharLimit && (
              <span className="text-gray-500 text-xs">
                {" "}
                - Character limit reached
              </span>
            )}
          </div>
        )}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
