import React, { useContext, useEffect, useState } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors, Directions } from "../types";
import fixScroll from "../utils/fixScroll";
import validateScrollValue from "../utils/validateScrollValue";

/**
 * @description This hooks calculates the direction of your scroll
 * @returns direction: "UP" or "DOWN"
 */
const useDirection = () => {
  const initialState: Coors = {
    x: 0,
    y: 0,
  };
  const scrollState = useContext(ScrollContext);
  const [direction, setDirection] = useState(Directions.down);
  const [lastPosition, setLastPosition] = useState(initialState);

  const { x: currentX, y: currentY } = scrollState as Coors;
  const { x: lastX, y: lastY } = lastPosition;

  useEffect(() => validateScrollValue(scrollState), []);

  useEffect(() => {
    if (typeof scrollState == "undefined") return;

    if (lastY > currentY) {
      setDirection(Directions.up);
    } else if (lastY < currentY) {
      setDirection(Directions.down);
    }

    if (lastX > currentX) {
      setDirection(Directions.left);
    } else if (lastX < currentX) {
      setDirection(Directions.right);
    }

    setLastPosition(fixScroll(scrollState));
  }, [scrollState]);

  return direction;
};

export default useDirection;
