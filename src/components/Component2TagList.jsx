import React from "react";
import TagButton from "./TagButton";

export default function TagList() {
  const buttons = Array(10).fill("Click Tag BTN");

  return (
    <aside className="md:w-1/4 w-full p-4 bg-gray-100 flex flex-wrap gap-2 justify-evenly items-center">
      {buttons.map((text, index) => (
        <TagButton
          key={index}
          text={text}
        />
      ))}
    </aside>
  );
}
