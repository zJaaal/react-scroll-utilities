import { RefObject, useLayoutEffect, useState } from "react";
import { Coors } from "../types";
import getCoors from "../utils/calculations/proximity/getCoors";

/**
 * @description This hook returns the position of the element view and the element itself, to be use as a scroll context
 * @param ref ref to an element with scroll functionality
 * @returns an Scroll Context
 */
const useScrollWatcher = (ref: RefObject<HTMLElement>) => {
  const initialState: Coors = getCoors(ref);

  const [position, setPosition] = useState(initialState);
  const [element, setElement] = useState<HTMLElement>();

  const handlePosition = (event: Event) => {
    setPosition(getCoors(ref));
  };

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handlePosition);
      //To eliminate jitter on chrome
      ref.current.addEventListener("wheel", () => {});
      setElement(ref.current);
    }

    return () => {
      ref.current?.removeEventListener("scroll", handlePosition);
    };
  }, []);

  return { position, element };
};

export default useScrollWatcher;
