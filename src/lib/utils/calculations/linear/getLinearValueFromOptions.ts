import clamp from "../misc/clamp";
import getValueFromPercentage from "../misc/getValueFromPercentage";
import { LinearValue, OptionsParams } from "../types";
import getLinearValue from "./getLinearValue";

const getLinearValueFromOptions = ({
  y,
  startValue,
  endValue,
  height,
  options,
}: OptionsParams) => {
  const { anchor, duration, delay } = options;

  let linearValue: LinearValue = {
    x1: 0,
    x2: 0,
    y1: startValue,
    y2: endValue,
    position: 0,
  };

  switch (anchor) {
    case "middle": {
      let maxValue = Math.max(height, window.innerHeight);

      //Calculate where it should start from the maxValue
      let middleDelay = getValueFromPercentage(maxValue, delay as number);

      //Calculate where it should end saying that the start is from the delay
      let middleDuration =
        getValueFromPercentage(maxValue - middleDelay, duration as number) +
        middleDelay; // With this sum we fix it to the limits between the delay and the end of the component

      linearValue = {
        ...linearValue,
        //We fix the value to the boundaries it should be
        x1: middleDelay - maxValue / 2,
        x2: middleDuration - maxValue / 2,
        position: y,
      };
      break;
    }
    case "top": {
      //Calculate where it should start from the maxValue in this case clientHeight of the element
      let topDelay = getValueFromPercentage(height, delay as number);

      //Calculate where it should end saying that the start is from the delay
      let topDuration =
        getValueFromPercentage(height - topDelay, duration as number) +
        topDelay; // With this sum we fix it to the limits between the delay and the end of the component
      linearValue = {
        ...linearValue,
        x1: topDelay,
        x2: topDuration,
        position: y + height / 2.1 - window.innerHeight / 2,
        //2.1 is because like that the animation will end before it reach the end of the bottom of the component
      };
      break;
    }
    case "bottom": {
      //Calculate where it should start from the maxValue in this case clientHeight of the element
      let bottomDelay = getValueFromPercentage(height, delay as number);
      //Calculate where it should end saying that the start is from the delay
      let bottomDuration =
        getValueFromPercentage(height - bottomDelay, duration as number) +
        bottomDelay; // With this sum we fix it to the limits between the delay and the end of the component

      linearValue = {
        ...linearValue,
        x1: bottomDelay,
        x2: bottomDuration,
        position: y + height / 2.1 + window.innerHeight / 2,
        //2.1 is because like that the animation will end before it reach the end of the bottom of the component
      };
      break;
    }
    default: {
      throw new Error(
        "anchor should be a valid value, like: 'top', 'middle' or 'bottom'. Instead recieved " +
          anchor
      );
    }
  }
  return clamp(startValue, endValue, getLinearValue(linearValue));
};

export default getLinearValueFromOptions;
