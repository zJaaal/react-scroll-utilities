import React, {
  RefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors } from "../types";
import getProximity from "../utils/getProximity";
import validateRef from "../utils/validateRef";
import validateScrollValue from "../utils/validateScrollValue";

/**
 * @description This hooks returns the proximity of the viewport from the component.
 * @param ref A reference to the HTMLElement
 * @returns An object with 2 properties: x amd y. Values that represents the proximity to the component. The closer to 1 the closer is the middle of the screen from the component.
 */
const useProximity = (ref: RefObject<HTMLElement>) => {
  const initialState: Coors = {
    x: 0,
    y: 0,
  };

  const scrollState = useContext(ScrollContext);

  const [proximity, setProximity] = useState(initialState);

  const [element, setElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      validateRef(ref.current);
      setElement(ref.current);
    }
  }, []);

  useEffect(() => validateScrollValue(scrollState), []);

  useEffect(() => {
    if (!element) return;

    setProximity(getProximity(element as HTMLElement));
  }, [scrollState]);

  return proximity;
};

export default useProximity;
