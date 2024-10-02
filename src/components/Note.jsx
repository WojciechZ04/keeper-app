import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  console.log(props);
  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {props.title && <h1>{props.title}</h1>}
      <p className="overflow-y-auto">{props.content}</p>
      <div className="flex items-center pt-2">
        <p className="text-gray-500 text-xs align-self-center mr-auto">{props.date}</p>
        <button onClick={handleClick} className="p-0 relative float-left text-yellow-500 bg-white border-none w-9 h-9 cursor-pointer outline-none flex items-center justify-center hover:bg-gray-700">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
