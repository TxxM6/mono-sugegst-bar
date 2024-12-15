import { startTransition, Suspense, useState } from "react";
import Suggestions from "~/components/Suggestions";
import { SuspendSuggestion } from "~/components/SuspendSuggestion";
import TextBox from "~/components/TextBox";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";
import useDebouncedEffectWithAbort from "~/lib/useDebouncedEffectWithAbort";

export const Page = () => {
  // const [text, setText] = useState("");
  const [sugText, setSugText] = useState("");

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    // setText(currentValue);
    // startTransition(() => setSugText(currentValue));
    setSugText(currentValue);
  }

  return (
    <>
      <h1>debounceとabortをつけた</h1>
      <h2>課題: pending状態</h2>
      <div className="relative w-full">
        <TextBox onInput={onInput} />
        <Suspense fallback={<Suggestions suggestions={["..."]} />}>
          <SuspendSuggestion text={sugText} />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
