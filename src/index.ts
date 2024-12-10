// src/index.ts
import { useRef, useEffect, useCallback } from "react";

type Callback = (...args: any[]) => void;

const useThrottleCallback = (callback: Callback, delay: number): Callback => {
  const isThrottled = useRef(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const throttledFunction = useCallback(
    (...args: any[]) => {
      if (isThrottled.current) return;

      callback(...args);
      isThrottled.current = true;

      timeoutId.current = setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return throttledFunction;
};

export default useThrottleCallback;
