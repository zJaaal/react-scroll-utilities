import React, { RefObject, useContext, useLayoutEffect, useRef } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors, ProximityState } from "../types";
import getProximity from "../utils/calculations/proximity/getProximity";
import validateRef from "../utils/validations/hooks/validateRef";
import validateScrollValue from "../utils/validations/hooks/validateScrollValue";

/**
 * @description This hooks returns the proximity of the viewport from the component.
 * @param ref A reference to the HTMLElement
 * @returns An object with 3 properties: x, y and onSight. Values that represents the proximity to the component. The closer to 0 the closer is the center of the screen from the center of the component.
 */
const useProximity = (ref: RefObject<HTMLElement>) => {
  const scrollState = useContext(ScrollContext);
  const initialState: ProximityState = {
    x: 0,
    y: 0,
    onSight: false,
  };
  const proximityRef = useRef(initialState);

  useLayoutEffect(() => {
    validateScrollValue(scrollState);
    validateRef(ref.current as HTMLElement);
  }, []);

  useLayoutEffect(() => {
    proximityRef.current = {
      ...getProximity(ref.current as HTMLElement),
    };
  }, [scrollState]);

  return proximityRef.current;
};

export default useProximity;
