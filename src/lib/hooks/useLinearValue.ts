import React, { useLayoutEffect, useRef } from "react";
import { LinearValueOptions, LinearValueProps } from "../types";
import clamp from "../utils/calculations/misc/clamp";
import getLinearValue from "../utils/calculations/linear/getLinearValue";
import { LinearValue, OptionsParams } from "../utils/calculations/types";
import validateLinearValues from "../utils/validations/hooks/validateLinearValues";
import useProximity from "./useProximity";
import getValueFromPercentage from "../utils/calculations/misc/getValueFromPercentage";
import getLinearValueFromOptions from "../utils/calculations/linear/getLinearValueFromOptions";

const defaultOptions: LinearValueOptions = {
  anchor: "middle",
  duration: 100,
  delay: 0,
};

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
const useLinearValue = ({
  startValue,
  endValue,
  elementRef,
  options,
}: LinearValueProps) => {
  const mixedOptions = { ...defaultOptions, ...options };
  const { onSight, y } = useProximity(elementRef);
  const value = useRef(startValue);
  const height = useRef<number>();

  useLayoutEffect(() => {
    validateLinearValues(startValue, endValue);
    height.current = elementRef.current?.clientHeight;
  }, []);

  useLayoutEffect(() => {
    if (onSight && typeof height.current != "undefined") {
      const optionsParams: OptionsParams = {
        y,
        startValue,
        endValue,
        height: height.current,
        options: mixedOptions,
      };
      value.current = getLinearValueFromOptions(optionsParams);
    }
  }, [y]);
  return clamp(startValue, endValue, value.current);
};

export default useLinearValue;
