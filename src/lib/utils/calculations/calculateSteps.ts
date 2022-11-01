const calculateSteps = (
  startColor: number[],
  endColor: number[],
  element: HTMLElement
): number[] => {
  let steps: number[] = [];

  //need to make this smarter
  startColor.forEach((color, i) => {
    if (color == endColor[i]) return steps.push(0);

    if (color > endColor[i])
      steps.push(Math.floor((endColor[i] - color) / element.clientHeight));
    else steps.push(Math.ceil((endColor[i] - color) / element.clientHeight));
  });

  return steps;
};

export default calculateSteps;
