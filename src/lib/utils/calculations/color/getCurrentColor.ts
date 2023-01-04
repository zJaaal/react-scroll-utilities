import clamp from "../misc/clamp";
import getLinearValue from "../linear/getLinearValue";
import { CurrentColor, OptionsParams } from "../types";
import getLinearValueFromOptions from "../linear/getLinearValueFromOptions";

const getCurrentColor = ({
  startColor,
  endColor,
  element,
  height,
  proximity,
  options,
  parentHeight,
}: CurrentColor): number[] => {
  let colorArray: number[] = [];

  //I calculate the colorArray for every color, since it could be that colors go in different directions
  //as 40 to 255 or 123 to 30, so it can be different colorArray/direction to get there at the same time
  startColor.forEach((color, i) => {
    if (color == endColor[i]) return colorArray.push(0);

    //I'm using a linear function to calculate the color at the current point
    let colorLinearValue = 0;

    let optionsParams: OptionsParams = {
      y: proximity,
      startValue: startColor[i],
      endValue: endColor[i],
      height: height,
      options,
      parentHeight,
    };

    colorLinearValue = getLinearValueFromOptions(optionsParams);
    colorArray.push(clamp(startColor[i], endColor[i], colorLinearValue));
  });
  return colorArray;
};

export default getCurrentColor;
