import { useCallback, useState } from "react";

const useControlVisualState = (initialValue = false) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsVisible((value) => !value);
  }, []);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  return [
    isVisible,
    {
      show,
      hide,
      toggle,
      setIsVisible,
    },
  ];
};

export { useControlVisualState };
