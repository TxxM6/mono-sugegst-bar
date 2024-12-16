import { useState } from "react";
import Suggestions from "~/components/Suggestions";
import TextBox from "~/components/TextBox";
import ToggleArea from "~/components/ToggleArea";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";

export const Page = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  //fetch order
  const [isReverse, setIsReverse] = useState(false);
  async function hundleSuggest(currentValue: string): Promise<void> {
    if (currentValue.length === 0) {
      setSuggestions([]);
      return;
    }
    try {
      const data = await fetchAutoComplete(currentValue, isReverse);
      setSuggestions(data);
    } catch (e) {
      console.log(e);
    }
  }

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    hundleSuggest(currentValue);
  }

  return (
    <>
      <h1>原始的な形</h1>
      <ToggleArea
        isToggled={isReverse}
        handleToggle={() => setIsReverse((prev) => !prev)}
      />
      <div className="relative w-full">
        <TextBox onInput={onInput} />
        <Suggestions suggestions={suggestions} />
      </div>
    </>
  );
};

export default Page;
