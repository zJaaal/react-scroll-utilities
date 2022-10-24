import React, { RefObject, useContext, useLayoutEffect, useMemo } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors } from "../types";
import getProximity from "../utils/calculations/getProximity";
import validateRef from "../utils/validations/validateRef";
import validateScrollValue from "../utils/validations/validateScrollValue";

/**
 * @description This hooks returns the proximity of the viewport from the component.
 * @param ref A reference to the HTMLElement
 * @returns An object with 2 properties: x and y. Values that represents the proximity to the component. The closer to 1 the closer is the middle of the screen from the component.
 */
const useProximity = (ref: RefObject<HTMLElement>) => {
  const initialState: Coors = {
    x: 0,
    y: 0,
  };

  const scrollState = useContext(ScrollContext);

  useLayoutEffect(() => {
    validateScrollValue(scrollState);
    if (ref.current) {
      validateRef(ref.current);
    }
  }, []);

  const proximity = useMemo(() => {
    if (!ref.current) return initialState;

    return getProximity(ref.current as HTMLElement);
  }, [scrollState]);

  return proximity;
};

export default useProximity;
