import { useState, useEffect } from "react";

const initialValue = {
  innerWidth: null,
  innerHeight: null
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(initialValue);

  function observerSize() {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    });
  }

  useEffect(() => {
    observerSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", observerSize);
    return () => {
      window.removeEventListener("resize", observerSize);
    };
  }, []);

  return windowSize;
}
