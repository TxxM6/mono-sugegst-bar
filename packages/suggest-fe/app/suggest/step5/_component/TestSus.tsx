import { use } from "react";
import { fetchAutoComplete } from "~/lib/fetchAutoComplete";

const fetchSuggest = async (text: string) => {
  console.log("fetch");
  const data = await fetchAutoComplete(text);
  return data;
};

// export const TextSus: React.FC = () => {
//   const textList = use(fetchSuggest("placholder"));
//   return <div>{textList[0]}</div>;
// };

const cache = new Map<string, string[]>();

export const TextSus: React.FC = () => {
  console.log("render");
  let data;

  if (cache.has("placholder")) {
    data = cache.get("placholder");
  } else {
    data = use(fetchSuggest("placholder"));
    cache.set("placeholder", data);
  }

  return <div>{data[0]}</div>;
};
