import { useState } from "react";
import Suggestions from "~/components/Suggestions";
import TextBox from "~/components/TextBox";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";

export const Page = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  async function hundleSuggest(currentValue: string): Promise<void> {
    if (currentValue.length === 0) {
      setSuggestions([]);
      return;
    }
    try {
      const data = await fetchAutoComplete(currentValue);
      setSuggestions(data);
    } catch (e) {
      console.log(e);
    }
  }

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    setText(currentValue);
    hundleSuggest(currentValue);
  }

  return (
    <>
      <h1>原始的な形</h1>
      <div className="relative w-full">
        <TextBox value={text} onInput={onInput} />
        <Suggestions suggestions={suggestions} />
      </div>
    </>
  );
};

export default Page;
