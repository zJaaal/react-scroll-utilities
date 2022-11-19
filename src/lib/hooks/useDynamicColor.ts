import { useRef, useLayoutEffect } from "react";
import { DynamicColor, Directions, DynamicColorOptions } from "../types";
import clamp from "../utils/calculations/clamp";
import getCurrentColor from "../utils/calculations/getCurrentColor";
import validateColors from "../utils/validations/validateColors";
import useDirection from "./useDirection";
import useProximity from "./useProximity";

const defautlOptions: DynamicColorOptions = {
  anchor: "middle",
};

const useDynamicColor = ({
  startColor,
  endColor,
  elementRef,
  options = defautlOptions,
}: DynamicColor) => {
  const { anchor } = options;
  const color = useRef<number[]>([...startColor]);

  const { onSight, y } = useProximity(elementRef);
  const direction = useDirection();

  useLayoutEffect(() => {
    validateColors(startColor, endColor);
  }, []);

  useLayoutEffect(() => {
    switch (direction) {
      case Directions.up: {
        if (onSight)
          color.current = getCurrentColor({
            startColor,
            endColor,
            element: elementRef.current!,
            proximity: y,
            anchor,
          });
        break;
      }
      case Directions.down: {
        if (onSight)
          color.current = getCurrentColor({
            startColor,
            endColor,
            element: elementRef.current!,
            proximity: y,
            anchor,
          });
        break;
      }
    }
  }, [y]);

  return `rgb(${color.current[0]}, ${color.current[1]}, ${color.current[2]})`;
};

export default useDynamicColor;
