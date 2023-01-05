import { RefObject, useLayoutEffect, useState } from "react";
import { Coors } from "../types";
import getCoors from "../utils/calculations/proximity/getCoors";

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
