import { useRef, useLayoutEffect } from "react";
import { DynamicColor, Directions } from "../types";
import clamp from "../utils/calculations/clamp";
import getSteps from "../utils/calculations/getSteps";
import useDirection from "./useDirection";
import useProximity from "./useProximity";

const useDynamicColor = ({
  startColor,
  endColor,
  elementRef,
}: DynamicColor) => {
  const steps = useRef<number[]>([1, 1, 1]);
  const color = useRef<number[]>([...startColor]);

  const { onSight, y } = useProximity(elementRef);
  const direction = useDirection();

  useLayoutEffect(() => {
    steps.current = getSteps(startColor, endColor, elementRef.current!);
  }, []);

  useLayoutEffect(() => {
    switch (direction) {
      case Directions.up: {
        if (onSight && color.current.some((color, i) => color != startColor[i]))
          color.current = color.current.map((color, i) =>
            clamp(startColor[i], endColor[i], color - steps.current[i])
          );
        break;
      }
      case Directions.down: {
        if (onSight && color.current.some((color, i) => color != endColor[i]))
          color.current = color.current.map((color, i) =>
            clamp(startColor[i], endColor[i], color + steps.current[i])
          );
        break;
      }
    }
  }, [y]);

  return `rgb(${color.current[0]}, ${color.current[1]}, ${color.current[2]})`;
};

export default useDynamicColor;
