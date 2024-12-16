import { z } from "zod";
import { BE_PATH } from "~/constants";
const url = new URL("/autoComplete/", BE_PATH).toString();

let i = 1;
const schema = z.object({
  list: z.array(z.string()),
});
export async function fetchAutoCompleteAbort(
  value: string,
  signal: AbortSignal,
  reverseOption?: boolean
) {
  console.log("fetch");
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ keyword: value }),
    signal,
  });
  const result = await response.json();
  const ok = schema.parse(result);
  console.log(i);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve("成功");
      },
      reverseOption ? 6000 - 2000 * (i % 4) : 1000
    );
  });
  i++;
  await myPromise;
  if (signal.aborted) {
    return null;
  }
  console.log(ok.list);
  return ok.list;
}
