export const validateRectangleProps = (
  width: number,
  height: number,
  stroke: number,
  startDegree: number,
  endDegree: number,
  speed: number
) => {
  if (startDegree > endDegree)
    throw new Error(
      `startDegree "${startDegree}" is greater than endDegree "${endDegree}" therefore is not a valid start position for the line`
    );

  if (stroke <= 0)
    throw new Error(`stroke should be at least 1 and is "${stroke}"`);

  if (width <= 0)
    throw new Error(
      `width of the rectangle should be more than 0 and is "${width}"`
    );

  if (height <= 0)
    throw new Error(
      `height of the rectangle should be more than 0 and is "${height}"`
    );

  if (speed <= 0)
    throw new Error(`speed should be more than 0 and is "${speed}"`);
};
