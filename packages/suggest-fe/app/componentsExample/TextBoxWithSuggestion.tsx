import React, { useState } from "react";

type Props = React.ComponentProps<"input">;

const TextBoxWithSuggestions: React.FC<Props> = (props) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const suggestions = ["value A", "value B"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowSuggestions(true); // 入力中に候補を表示
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false); // 候補を選択したら非表示に
  };

  return (
    <div className="relative w-full">
      <input
        {...props}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)} // フォーカス時に候補を表示
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // フォーカス解除時に候補を非表示
        className={`h-5 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 w-full`}
      />
      {showSuggestions && (
        <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-2 py-1 hover:bg-blue-100 cursor-pointer"
              onMouseDown={() => handleSuggestionClick(suggestion)} // onMouseDownを使ってonBlur前に実行
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextBoxWithSuggestions;
