export const validateCircleProps = (
  radius: number,
  stroke: number,
  startDegree: number,
  endDegree: number
) => {
  if (startDegree > endDegree)
    throw new Error(
      `startDegree "${startDegree}" is greater than endDegree "${endDegree}" therefore is not a valid start position for the line`
    );

  if (stroke <= 0)
    throw new Error(`stroke should be more than 0 and is "${stroke}"`);

  if (radius <= 0)
    throw new Error(
      `radius of the circle should be more than 0 and is "${radius}"`
    );
};
