import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  console.log(props);

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mx-auto max-h-74 flex flex-col overflow-hidden break-words flex-1 flex-shrink-0 basis-[240px] max-w-sm">
      {props.title && (
        <h1 className="w-full text-xl font-semibold pb-2 mb-3 flex-shrink-0 border-b border-dotted border-b-[#c0b595]">
          {props.title}
        </h1>
      )}
      <p className="overflow-y-auto">{props.content}</p>
      <div className="flex items-center pt-2 mt-auto">
        <p className="text-gray-500 text-xs align-self-center mr-auto">
          {props.date}
        </p>
        <button
          onClick={handleClick}
          className="p-0 relative float-left text-yellow-500 bg-white border-none w-9 h-9 cursor-pointer outline-none flex items-center justify-center hover:text-gray-700"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
