import React, { useLayoutEffect, useRef } from "react";
import { LinearValueProps, defaultOptions } from "../types";
import { OptionsParams } from "../utils/calculations/types";
import useProximity from "./useProximity";
import getLinearValueFromOptions from "../utils/calculations/linear/getLinearValueFromOptions";

/**
 * @description This custom hook takes an object with four properties: startValue, endValue, elementRef and options.
 *
 * The startValue and endValue are numbers, this values represent whatever you need to calculate, like height, width, position, etc.
 *
 * elementRef is a reference from an HTMLElement
 *
 * options is an object that let you change the behavior of the hook, like the anchor of the calculation of the value (see docs)
 * @param LinearValueObject LinearValueProps
 * @returns value number
 */
const useLinearValue = ({ startValue, endValue, elementRef, options }: LinearValueProps) => {
  const mixedOptions = { ...defaultOptions, ...options };
  const { onSight, y } = useProximity(elementRef, options?.context);
  const value = useRef(startValue);
  const height = useRef<number>();
  const parentHeight = useRef<number>();

  useLayoutEffect(() => {
    height.current = elementRef.current?.clientHeight;
  }, []);
  useLayoutEffect(() => {
    parentHeight.current = options?.context?.element?.offsetHeight;
  }, [options?.context?.element]);

  useLayoutEffect(() => {
    if (onSight && typeof height.current != "undefined") {
      const optionsParams: OptionsParams = {
        y,
        startValue,
        endValue,
        height: height.current,
        options: mixedOptions,
        parentHeight: parentHeight.current,
      };
      value.current = getLinearValueFromOptions(optionsParams);
    }
  }, [y]);
  return value.current;
};

export default useLinearValue;
