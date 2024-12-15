import { type DependencyList, type EffectCallback, useEffect } from "react";

// This is a very trivial version of this hook.
// There are several libraries that provide more robust versions.
export default function useDebouncedEffectWithAbort(
  callback: (...arg: any) => Promise<any>,
  delay: number,
  deps: DependencyList
) {
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const timerid = setTimeout(() => callback(signal), delay);
    return () => {
      console.log("RESET");
      clearTimeout(timerid);
      abortController.abort();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
