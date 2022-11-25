import clamp from "../misc/clamp";
import getLinearValue from "../linear/getLinearValue";
import { CurrentColor, OptionsParams } from "../types";
import getLinearValueFromOptions from "../linear/getLinearValueFromOptions";

const getCurrentColor = ({
  startColor,
  endColor,
  element,
  proximity,
  options,
}: CurrentColor): number[] => {
  let colorArray: number[] = [];

  //I calculate the colorArray for every color, since it could be that colors go in different directions
  //as 40 to 255 or 123 to 30, so it can be different colorArray/direction to get there at the same time
  startColor.forEach((color, i) => {
    if (color == endColor[i]) return colorArray.push(0);

    //I'm using a linear function to calculate the color at the current point
    //I'm using height of the element for X Coors
    //I'm using start color and end color as Y Coors
    //So (0, startColor[i]) and (element.clientHeight or innerHeight, endColor[i]) are my points

    let colorLinearValue = 0;

    let optionsParams: OptionsParams = {
      y: proximity,
      startValue: startColor[i],
      endValue: endColor[i],
      height: element.clientHeight,
      options,
    };

    colorLinearValue = getLinearValueFromOptions(optionsParams);
    colorArray.push(clamp(startColor[i], endColor[i], colorLinearValue));
  });
  return colorArray;
};

export default getCurrentColor;
