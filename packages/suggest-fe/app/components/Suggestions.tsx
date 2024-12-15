import React, { useState } from "react";

type Props = { suggestions: string[] };

const Suggestions: React.FC<Props> = ({ suggestions }: Props) => {
  return (
    <>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-2 py-1 hover:bg-blue-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Suggestions;
