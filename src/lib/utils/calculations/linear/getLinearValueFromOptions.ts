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

  switch (anchor) {
    case "middle": {
      let maxValue = Math.max(height, window.innerHeight);

      //Calculate where it should start from the maxValue
      let middleDelay = getValueFromPercentage(maxValue, delay!);

      //Calculate where it should end saying that the start is from the delay
      let middleDuration =
        getValueFromPercentage(maxValue - middleDelay, duration!) + middleDelay;

      const linearValue: LinearValue = {
        //We fix it to negative side or positive if is more than 50%
        x1: middleDelay - maxValue / 2,
        //We fix it to the positive side
        x2: middleDuration / 2,
        y1: startValue,
        y2: endValue,
        position: y,
      };
      // console.log(getLinearValue(linearValue));
      return getLinearValue(linearValue);
    }
    case "top": {
      //Calculate where it should start from the maxValue in this case clientHeight of the element
      let topDelay = getValueFromPercentage(-height, delay!);

      //Calculate where it should end saying that the start is from the delay
      let topDuration =
        getValueFromPercentage(Math.abs(topDelay) - height, duration!) +
        topDelay; // With this sum we fix it to the limits between the delay and the end of the component

      const linearValue: LinearValue = {
        x1: topDelay,
        x2: topDuration,
        y1: startValue,
        y2: endValue,
        position: y - window.innerHeight / 2 - height / 2,
      };
      return getLinearValue(linearValue);
    }
    case "bottom": {
      //Calculate where it should start from the maxValue in this case clientHeight of the element
      let bottomDelay = getValueFromPercentage(height, delay as number);
      //Calculate where it should end saying that the start is from the delay
      let bottomDuration =
        getValueFromPercentage(height - bottomDelay, duration as number) +
        bottomDelay; // With this sum we fix it to the limits between the delay and the end of the component

      const linearValue: LinearValue = {
        x1: bottomDelay,
        x2: bottomDuration,
        y1: startValue,
        y2: endValue,
        position: y + window.innerHeight / 2 + height / 2,
      };
      return getLinearValue(linearValue);
    }
    default: {
      throw new Error(
        "anchor should be a valid value, like: 'top', 'middle' or 'bottom'. Instead recieved " +
          anchor
      );
    }
  }
};

export default getLinearValueFromOptions;
