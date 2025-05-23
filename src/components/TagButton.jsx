import React from "react";

export default function TagButton({ text }) {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      className="bg-red-200 hover:bg-red-300 text-red-800 font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none cursor-pointer active:bg-red-400 active:scale-95 transition-all duration-75"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
