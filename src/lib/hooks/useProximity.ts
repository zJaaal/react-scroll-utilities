import React, { RefObject, useContext, useLayoutEffect, useRef } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors, ProximityState } from "../types";
import getProximity from "../utils/calculations/getProximity";
import validateRef from "../utils/validations/validateRef";
import validateScrollValue from "../utils/validations/validateScrollValue";

/**
 * @description This hooks returns the proximity of the viewport from the component.
 * @param ref A reference to the HTMLElement
 * @returns An object with 2 properties: x and y. Values that represents the proximity to the component. The closer to 1 the closer is the middle of the screen from the component.
 */
const useProximity = (ref: RefObject<HTMLElement>) => {
  const initialState: ProximityState = {
    x: 0,
    y: 0,
    onSight: false,
  };

  const scrollState = useContext(ScrollContext);
  const proximityRef = useRef(initialState);

  useLayoutEffect(() => {
    validateScrollValue(scrollState);
    validateRef(ref.current as HTMLElement);
  }, []);

  useLayoutEffect(() => {
    proximityRef.current = getProximity(ref.current as HTMLElement);
  }, [scrollState]);

  return proximityRef.current;
};

export default useProximity;
