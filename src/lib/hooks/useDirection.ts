import React, { useContext, useEffect, useMemo, useRef } from "react";
import ScrollWatcherContext from "../context/ScrollWatcherContext";
import { Coors, Directions, ScrollContext } from "../types";
import validateScrollValue from "../utils/validations/hooks/validateScrollValue";

/**
 * @description This hooks calculates the direction of your scroll
 * @returns direction: "UP", "DOWN", "RIGHT" or "LEFT"
 */
const useDirection = (context?: ScrollContext) => {
  const initialState: Coors = {
    x: 0,
    y: 0,
  };
  const scrollState = context?.position || useContext(ScrollWatcherContext);
  const directionRef = useRef(Directions.down);
  const lastPosition = useRef(initialState);

  const { x: currentX, y: currentY } = scrollState as Coors;
  const { x: lastX, y: lastY } = lastPosition.current;

  useEffect(() => validateScrollValue(scrollState), []);

  const direction = useMemo(() => {
    if (typeof scrollState == "undefined") return Directions.down;

    if (lastY > currentY && directionRef.current != Directions.up) {
      directionRef.current = Directions.up;
    } else if (lastY < currentY && directionRef.current != Directions.down) {
      directionRef.current = Directions.down;
    }

    if (lastX > currentX && directionRef.current != Directions.left) {
      directionRef.current = Directions.left;
    } else if (lastX < currentX && directionRef.current != Directions.right) {
      directionRef.current = Directions.right;
    }

    lastPosition.current = scrollState;
    return directionRef.current;
  }, [scrollState?.x, scrollState?.y]);

  return direction;
};

export default useDirection;
