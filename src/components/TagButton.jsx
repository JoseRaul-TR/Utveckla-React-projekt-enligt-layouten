import React from "react";

export default function TagButton({ text} ) {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <button className="tag-button" onClick={handleClick}>
            {text}
        </button>
    );
}