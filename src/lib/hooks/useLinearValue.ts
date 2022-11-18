import React, { RefObject, useLayoutEffect, useRef } from "react";
import { LinearValueOptions, LinearValueProps } from "../types";
import clamp from "../utils/calculations/clamp";
import getLinearValue from "../utils/calculations/getLinearValue";
import { LinearValue } from "../utils/calculations/types";
import useProximity from "./useProximity";

const defaultOptions: LinearValueOptions = {
  anchor: "middle",
};

const useLinearValue = ({
  startValue,
  endValue,
  elementRef,
  options = defaultOptions,
}: LinearValueProps) => {
  const { anchor } = options;
  const { onSight, y } = useProximity(elementRef);
  const value = useRef(startValue);

  useLayoutEffect(() => {
    const { top, bottom } =
      anchor != "middle"
        ? elementRef.current!.getBoundingClientRect()
        : { top: 0, bottom: 0 };

    if (onSight) {
      switch (anchor) {
        case "middle": {
          const linearValue: LinearValue = {
            x1:
              Math.max(elementRef.current!.clientHeight, window.innerHeight) /
              -2,
            x2:
              Math.max(elementRef.current!.clientHeight, window.innerHeight) /
              2,
            y1: startValue,
            y2: endValue,
            position: y,
          };
          value.current = getLinearValue(linearValue);
          break;
        }
        case "top": {
          const linearValue: LinearValue = {
            x1: 0,
            x2: elementRef.current!.clientHeight,
            y1: startValue,
            y2: endValue,
            position: Math.abs(top),
          };
          value.current = getLinearValue(linearValue);
          break;
        }
        case "bottom": {
          const linearValue: LinearValue = {
            x1: 0,
            x2: elementRef.current!.clientHeight,
            y1: startValue,
            y2: endValue,
            position: Math.abs(
              bottom - window.innerHeight - elementRef.current!.clientHeight
            ),
          };
          value.current = getLinearValue(linearValue);
          break;
        }
      }
    }
  }, [y]);
  return clamp(startValue, endValue, value.current);
};

export default useLinearValue;
