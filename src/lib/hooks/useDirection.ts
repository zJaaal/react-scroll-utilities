import React, { useContext, useEffect, useRef, useState } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors, Directions } from "../types";
import fixScroll from "../utils/calculations/fixScroll";
import validateScrollValue from "../utils/validations/validateScrollValue";

/**
 * @description This hooks calculates the direction of your scroll
 * @returns direction: "UP", "DOWN", "RIGHT" or "LEFT"
 */
const useDirection = () => {
  const initialState: Coors = {
    x: 0,
    y: 0,
  };
  const scrollState = useContext(ScrollContext);
  const [direction, setDirection] = useState(Directions.down);
  const lastPosition = useRef(initialState);

  const { x: currentX, y: currentY } = scrollState as Coors;
  const { x: lastX, y: lastY } = lastPosition.current;

  useEffect(() => validateScrollValue(scrollState), []);

  useEffect(() => {
    if (typeof scrollState == "undefined") return;

    if (lastY > currentY && direction != Directions.up) {
      setDirection(Directions.up);
    } else if (lastY < currentY && direction != Directions.down) {
      setDirection(Directions.down);
    }

    if (lastX > currentX && direction != Directions.left) {
      setDirection(Directions.left);
    } else if (lastX < currentX && direction != Directions.right) {
      setDirection(Directions.right);
    }

    lastPosition.current = scrollState;
  }, [scrollState]);

  return direction;
};

export default useDirection;
