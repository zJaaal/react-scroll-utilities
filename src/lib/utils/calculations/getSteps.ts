import linearValue from "./linearValue";
import slope from "./slope";

const getSteps = (
  startColor: number[],
  endColor: number[],
  element: HTMLElement
): number[] => {
  let steps: number[] = [];

  //I calculate the steps for every color, since it could be that colors go in different directions
  //as 40 to 255 or 123 to 30, so it can be different steps/direction to get there at the same time
  startColor.forEach((color, i) => {
    if (color == endColor[i]) return steps.push(0);

    //I'm using a linear function to calculate the steps to go from a point to another
    //I'm using height of the element for X Coors
    //I'm using start color and end color as Y Coors
    //So (0, startColor[i]) and (element.clientHeight or innerHeight, endColor[i]) are my points

    //So here i calculate the slope for those points
    const slopeValue = slope(
      //x1  x2
      [0, Math.max(element.clientHeight, window.innerHeight)], //Using Math.max, because the animation
      //y1            y2                                      //should last the whole component or the whole screen
      [startColor[i], endColor[i]]
    );

    //Then calculate a color using a linear function to know a color at arbitrary point
    const colorLinearValue = linearValue(
      slopeValue,
      startColor[i],
      Math.max(element.clientHeight, window.innerHeight) - 20, //20 is a number i found testing different numbers for finding a color before the endcolor
      0
    );

    // I use the difference between the end color and the new color as a step and divide by 2 to make smooth the animation
    steps.push((endColor[i] - colorLinearValue) / 2);
  });

  return steps;
};

export default getSteps;
