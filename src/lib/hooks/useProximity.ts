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
import validateScrollValue from "../utils/validateScrollValue";

/**
 * @description This hooks returns the proximity of the viewport from the component.
 * @param ref A reference to the HTMLElement
 * @returns A float value that represents the proximity to the component. The closer to 1 the closer is the middle of the screen from the component.
 */
const useProximity = (ref: RefObject<any>) => {
  const initialState: Coors = {
    x: 0,
    y: 0,
  };

  const scrollState = useContext(ScrollContext);

  const [proximity, setProximity] = useState(initialState);

  const [element, setElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (ref) setElement(ref.current);
  }, []);
  useEffect(() => validateScrollValue(scrollState), []);

  useEffect(() => {
    if (!element) return;

    setProximity(getProximity(element as HTMLElement));
  }, [scrollState]);

  return proximity;
};

export default useProximity;
