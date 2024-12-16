import React, { Suspense, use, useState } from "react";
import Suggestions from "~/components/Suggestions";

import { fetchAutoComplete } from "~/lib/fetchAutoComplete";

const cache = new Map<string, string[]>();

const fetchSuggest = async (text: string, reverseOption: boolean) => {
  const data = await fetchAutoComplete(text, reverseOption);
  return data;
};

// function my_use(text: string, reverseOption?: boolean): string[] {
//   if (!cache.has(text)) {
//     throw fetchSuggest(text, !!reverseOption).then((d) => {
//       cache.set(text, d);
//     });
//   }
//   return cache.get(text)!;
// }

type Props = { text: string; reverseOption: boolean };

export const SuspendSuggestion: React.FC<Props> = ({
  text,
  reverseOption,
}: Props) => {
  if (text.length === 0) {
    return null;
  }
  const suggestions = use(fetchSuggest(text, reverseOption));

  return <Suggestions suggestions={suggestions} />;
};
