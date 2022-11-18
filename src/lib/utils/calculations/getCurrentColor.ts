import getLinearValue from "./getLinearValue";
import { LinearValue, CurrentColor } from "./types";

const getCurrentColor = ({
  startColor,
  endColor,
  element,
  proximity,
  anchor,
}: CurrentColor): number[] => {
  let steps: number[] = [];

  //This calculation is pretty heavy and I already do it on useProximity so I just want to save that time
  const { top, bottom } =
    anchor != "middle"
      ? element.getBoundingClientRect()
      : { top: 0, bottom: 0 };

  //I calculate the steps for every color, since it could be that colors go in different directions
  //as 40 to 255 or 123 to 30, so it can be different steps/direction to get there at the same time
  startColor.forEach((color, i) => {
    if (color == endColor[i]) return steps.push(0);

    //I'm using a linear function to calculate the color at the current point
    //I'm using height of the element for X Coors
    //I'm using start color and end color as Y Coors
    //So (0, startColor[i]) and (element.clientHeight or innerHeight, endColor[i]) are my points

    //So here i calculate the slope for those points

    let colorLinearValue = 0;

    switch (anchor) {
      case "middle": {
        const linearValue: LinearValue = {
          x1: Math.max(element.clientHeight, window.innerHeight) / -2,
          x2: Math.max(element.clientHeight, window.innerHeight) / 2,
          y1: startColor[i],
          y2: endColor[i],
          position: proximity,
        };
        colorLinearValue = getLinearValue(linearValue);
        break;
      }
      case "top": {
        const linearValue: LinearValue = {
          x1: 0,
          x2: element.clientHeight,
          y1: startColor[i],
          y2: endColor[i],
          position: Math.abs(top),
        };
        colorLinearValue = getLinearValue(linearValue);
        break;
      }
      case "bottom": {
        const linearValue: LinearValue = {
          x1: 0,
          x2: element.clientHeight,
          y1: startColor[i],
          y2: endColor[i],
          position: Math.abs(
            bottom - window.innerHeight - element.clientHeight
          ),
        };
        colorLinearValue = getLinearValue(linearValue);
        break;
      }
    }
    steps.push(colorLinearValue);
  });

  return steps;
};

export default getCurrentColor;
