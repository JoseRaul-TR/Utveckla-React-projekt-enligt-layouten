import React from "react";
import perezosoImage from "../assets/perezoso.jpg";

export default function UnderConstruction({ hideText }) {
  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      {!hideText && (
      <p className="flex flex-col flex-grow justify-between items-center">
        Kommer strax!
        </p>
      )}
      <img
        src={perezosoImage}
        alt="Sengångare bild"
        className="rounded-lg shadow-amber-700 shadow-2xl max-w-[300px] my-4 md:max-w-full h-auto"
      />
    </div>
  );
}
