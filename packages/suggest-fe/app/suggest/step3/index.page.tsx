import { useState } from "react";
import Suggestions from "~/components/Suggestions";
import TextBox from "~/components/TextBox";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";
import useDebouncedEffectWithAbort from "~/lib/useDebouncedEffectWithAbort";

export const Page = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  async function hundleSuggest(
    currentValue: string,
    signal: AbortSignal
  ): Promise<void> {
    try {
      console.log("fetch");
      if (currentValue.length === 0) {
        setSuggestions([]);
        return;
      }
      const data = await fetchAutoComplete(currentValue);
      if (signal?.aborted) {
        console.log(signal);
        console.log("CANCELLED");
        return void 0;
      }
      setSuggestions(data);
    } catch (e) {
      console.log(e);
    }
  }

  useDebouncedEffectWithAbort((signal) => hundleSuggest(text, signal), 500, [
    text,
  ]);
  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    setText(currentValue);
  }

  return (
    <>
      <h1>debounceとabortをつけた</h1>
      <h2>課題: pending状態</h2>
      <div className="relative w-full">
        <TextBox value={text} onInput={onInput} />
        <Suggestions suggestions={suggestions} />
      </div>
    </>
  );
};

export default Page;
