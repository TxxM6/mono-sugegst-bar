import { startTransition, Suspense, useState } from "react";
import Suggestions from "~/components/Suggestions";
import TextBox from "~/components/TextBox";
import ToggleArea from "~/components/ToggleArea";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";
import useDebouncedEffectWithAbort from "~/lib/useDebouncedEffectWithAbort";
import { SuspendSuggestion } from "./_component/SuspendSuggestion";
import { TextSus } from "./_component/TestSus";

export const Page = () => {
  const [sugText, setSugText] = useState("");
  //fetch order
  const [isReverse, setIsReverse] = useState(false);

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    startTransition(() => setSugText(currentValue));
  }

  return (
    <>
      <h1>suspend</h1>
      <h2>課題: throw中にstate更新が重なるとfetchが再発行されてしまう</h2>
      <ToggleArea
        isToggled={isReverse}
        handleToggle={() => setIsReverse((prev) => !prev)}
      />
      <div className="relative w-full">
        <TextBox onInput={onInput} />
        {/* <Suspense fallback={<Suggestions suggestions={["..."]} />}>
          <SuspendSuggestion text={sugText} reverseOption={isReverse} />
        </Suspense> */}

        <TextSus />
      </div>
    </>
  );
};

export default Page;
