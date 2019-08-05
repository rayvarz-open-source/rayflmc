import { useState, Dispatch, SetStateAction } from "react";

export default function useFunctionAsState<S>(
  fn: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] {
  const [val, setVal] = useState<S>((() => fn) as any);

  function setFunc(fn) {
    setVal(() => fn);
  }

  return [val, setFunc];
}
