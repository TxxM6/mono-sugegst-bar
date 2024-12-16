import { Suspense, useState } from "react";
import Suggestions from "~/components/Suggestions";
import TextBox from "~/components/TextBox";
import ToggleArea from "~/components/ToggleArea";
import { SuspendSuggestion } from "./_component/SuspendSuggestion";

export const Page = () => {
  const [sugText, setSugText] = useState("");
  //fetch order
  const [isReverse, setIsReverse] = useState(false);

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value;
    setSugText(currentValue);
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
        <Suspense fallback={<Suggestions suggestions={["..."]} />}>
          <SuspendSuggestion text={sugText} reverseOption={isReverse} />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
