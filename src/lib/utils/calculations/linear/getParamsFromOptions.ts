import { y } from "vitest/dist/global-732f9b14";
import getValueFromPercentage from "../misc/getValueFromPercentage";
import { LinearValue, OptionsParams } from "../types";

export const getParamsFromOptions = ({
  y,
  startValue,
  endValue,
  height,
  options,
  parentHeight = window.innerHeight,
}: OptionsParams) => {
  const { anchor, delay, duration } = options;

  let linearValue: LinearValue = {
    x1: 0,
    x2: 0,
    y1: startValue,
    y2: endValue,
    position: 0,
  };

  let maxHeight = anchor == "middle" ? Math.max(height, parentHeight) : height;

  //Calculate where it should start from the maxHeight
  let finalDelay = getValueFromPercentage(maxHeight, delay as number);
  //Calculate where it should end saying that the start is from the delay
  let finalDuration =
    getValueFromPercentage(maxHeight - finalDelay, duration as number) + finalDelay; // With this sum we fix it to the limits between the delay and the end of the component

  switch (anchor) {
    case "middle": {
      return {
        ...linearValue,
        //We fix the value to the boundaries it should be
        x1: finalDelay - maxHeight / 2,
        x2: finalDuration - maxHeight / 2,
        position: y,
      };
      break;
    }
    case "top": {
      return {
        ...linearValue,
        x1: finalDelay,
        x2: finalDuration,
        position: y + height / 2.1 - parentHeight / 2,
        //2.1 is because like that the animation will end before it reach the end of the bottom of the component
      };
      break;
    }
    case "bottom": {
      return {
        ...linearValue,
        x1: finalDelay,
        x2: finalDuration,
        position: y + height / 2.1 + parentHeight / 2,
        //2.1 is because like that the animation will end before it reach the end of the bottom of the component
      };
    }
    default: {
      throw new Error(
        "anchor should be a valid value, like: 'top', 'middle' or 'bottom'. Instead recieved " +
          anchor
      );
    }
  }
};
