import { measureUnitRegex } from "../types";

export const validateCircleProps = (
  radius: string,
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

  if (!radius.match(measureUnitRegex)) {
    throw new Error(
      `radius should have a valid mesurement unit. Radius value is ${radius}`
    );
  } else if (typeof Number(radius.split(measureUnitRegex)[0]) != "number") {
    throw new Error(`radius should be a number`);
  }
};
