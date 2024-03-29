import { useRef, useLayoutEffect } from "react";
import { DynamicColor, defaultOptions } from "../types";
import getCurrentColor from "../utils/calculations/color/getCurrentColor";
import validateColors from "../utils/validations/hooks/validateColors";
import useProximity from "./useProximity";

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
const useDynamicColor = ({ startColor, endColor, elementRef, options }: DynamicColor) => {
  const mixedOptions = { ...defaultOptions, ...options };
  const color = useRef<number[]>([...startColor]);
  const height = useRef<number>();
  const parentHeight = useRef<number>();

  const { onSight, y } = useProximity(elementRef, options?.context);

  useLayoutEffect(() => {
    validateColors(startColor, endColor);
    height.current = elementRef.current?.clientHeight;
  }, []);

  useLayoutEffect(() => {
    parentHeight.current = options?.context?.element?.offsetHeight;
  }, [options?.context?.element]);

  useLayoutEffect(() => {
    if (onSight)
      color.current = getCurrentColor({
        startColor,
        endColor,
        element: elementRef.current!,
        height: height.current as number,
        proximity: y,
        options: mixedOptions,
        parentHeight: parentHeight.current,
      });
  }, [y]);

  return `rgb(${color.current[0]}, ${color.current[1]}, ${color.current[2]})`;
};

export default useDynamicColor;
