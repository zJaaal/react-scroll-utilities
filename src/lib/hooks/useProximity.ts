import React, {
  RefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import ScrollContext from "../context/ScrollContext";
import validateScrollValue from "../utils/validateScrollValue";

const useProximity = (ref: RefObject<any>) => {
  const scrollState = useContext(ScrollContext);

  const [proximity, setProximity] = useState(0);

  const [element, setElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (ref) setElement(ref.current);
  }, []);
  useEffect(() => validateScrollValue(scrollState), []);
  useEffect(() => {
    if (!element) return;

    setProximity(
      ((element as HTMLElement).getBoundingClientRect().y /
        window.innerHeight) *
        2
    );
  }, [scrollState]);

  return proximity;
};

export default useProximity;
