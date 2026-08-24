import { useCallback, useEffect, useRef } from "react";

export function useKeyboard() {
  const keys = useRef<Record<string, boolean>>({});
  const setKey = useCallback((code: string, isPressed: boolean) => {
    keys.current[code] = isPressed;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };

    const clearKeys = () => {
      keys.current = {};
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", clearKeys);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", clearKeys);
    };
  }, []);

  return { keys, setKey };
}
