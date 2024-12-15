import React, { Suspense, useState } from "react";
import Suggestions from "./Suggestions";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";

const cache = new Map<string, string[]>();

async function fetchSuggest(text: string) {
  return await fetchAutoComplete(text);
}

function my_use(text: string): string[] {
  if (!cache.has(text)) {
    throw fetchSuggest(text).then((d) => {
      console.log("GET");
      cache.set(text, d);
      console.log(cache);
    });
  }
  return cache.get(text)!;
}

type Props = { text: string };

export const SuspendSuggestion: React.FC<Props> = ({ text }: Props) => {
  const suggestions = my_use(text);
  return <Suggestions suggestions={suggestions} />;
};
