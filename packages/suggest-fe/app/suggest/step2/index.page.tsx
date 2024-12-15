import { useState } from "react";
import Suggestions from "~/components/Suggestions";
import TextBox from "~/components/TextBox";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";
import useDebouncedEffect from "~/lib/useDebouncedEffec";

export const Page = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  async function hundleSuggest(currentValue: string): Promise<void> {
    if (currentValue.length === 0) {
      setSuggestions([]);
      return;
    }
    try {
      console.log("fetch");
      const data = await fetchAutoComplete(currentValue);
      setSuggestions(data);
    } catch (e) {
      console.log(e);
    }
  }

  useDebouncedEffect(() => hundleSuggest(text), 500, [text]);
  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    setText(currentValue);
  }

  return (
    <>
      <h1>debounceを付けた</h1>
      <h2>課題: fetchの順序、pending状態</h2>
      <div className="relative w-full">
        <TextBox value={text} onInput={onInput} />
        <Suggestions suggestions={suggestions} />
      </div>
    </>
  );
};

export default Page;
