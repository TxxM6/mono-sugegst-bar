import React, { Suspense, useState } from "react";
import Suggestions from "~/components/Suggestions";
import { fetchAutoCompleteAbort } from "~/lib/fetchAutoCompleteAbort";

const cache = new Map<string, string[]>();

async function fetchSuggest(
  text: string,
  reverseOption: boolean,
  signal: AbortSignal
) {
  return await fetchAutoCompleteAbort(text, signal, reverseOption);
}

function my_use(
  text: string,
  signal: AbortSignal,
  reverseOption?: boolean
): string[] {
  if (!cache.has(text)) {
    throw fetchSuggest(text, !!reverseOption, signal).then((d) => {
      d ? cache.set(text, d) : console.log("aborted");
    });
  }
  return cache.get(text)!;
}

type Props = { text: string; reverseOption: boolean; signal: AbortSignal };

export const SuspendSuggestion: React.FC<Props> = ({
  text,
  reverseOption,
  signal,
}: Props) => {
  const suggestions = my_use(text, signal, reverseOption);
  return <Suggestions suggestions={suggestions} />;
};
