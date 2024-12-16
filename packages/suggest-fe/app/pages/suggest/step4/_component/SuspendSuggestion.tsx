import React, { Suspense, useState } from "react";
import Suggestions from "~/components/Suggestions";

import { fetchAutoComplete } from "~/lib/fetchAutoComplete";

const cache = new Map<string, string[]>();

async function fetchSuggest(text: string, reverseOption: boolean) {
  return await fetchAutoComplete(text, reverseOption);
}

function my_use(text: string, reverseOption?: boolean): string[] {
  if (!cache.has(text)) {
    throw fetchSuggest(text, !!reverseOption).then((d) => {
      cache.set(text, d);
    });
  }
  return cache.get(text)!;
}

type Props = { text: string; reverseOption: boolean };

export const SuspendSuggestion: React.FC<Props> = ({
  text,
  reverseOption,
}: Props) => {
  const suggestions = my_use(text, reverseOption);
  return <Suggestions suggestions={suggestions} />;
};
