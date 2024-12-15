import { useState } from "react";
import TextBox from "~/components/TextBox";
import TextBoxWithSuggestions from "~/componentsExample/TextBoxWithSuggestion";
import { BE_PATH } from "~/constants";
const url = new URL("/autoComplete/", BE_PATH).toString();

export const Page = () => {
  const [holder, setHolder] = useState([]);
  const [text, setText] = useState("");

  return (
    <>
      <div>Normal</div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ keyword: "example1" }),
          });
          const result = await response.json();
          console.log(result);
        }}
      >
        fetch
      </button>
      {holder.length > 0 &&
        holder.map((value, index) => <div key={index}>value</div>)}
      <TextBox
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <TextBoxWithSuggestions />
    </>
  );
};

export default Page;
