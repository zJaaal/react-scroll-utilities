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

/**
 * @description This custom hook takes an object with four properties: startColor, endColor, elementRef and options.
 *
 * The startColor and endColor are arrays of 3 number, each value represent a color from RGB, like [123, 12, 214] == rgb(123, 12, 214).
 *
 * elementRef is a reference from an HTMLElement
 *
 * options is an object that let you change the behavior of the hook, like the anchor of the calculation of the color (see docs)
 * @param DynamicColorObject DynamicColor
 * @returns color string: "rgb(123, 23, 65)"
 */
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
