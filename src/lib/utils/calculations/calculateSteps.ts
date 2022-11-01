const calculateSteps = (
  startColor: number[],
  endColor: number[],
  element: HTMLElement
): number[] => {
  let steps: number[] = [];

  startColor.forEach((color, i) => {
    if (color == endColor[i]) return steps.push(0);

    if (color > endColor[i])
      steps.push((element.clientHeight / (color - endColor[i])) * -1);
    else steps.push(element.clientHeight / (endColor[i] - color));
  });

  return steps;
};

export default calculateSteps;
