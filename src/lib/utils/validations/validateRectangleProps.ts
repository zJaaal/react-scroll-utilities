import { measureUnitRegex } from "./types";

export const validateRectangleProps = (
  width: string,
  height: string,
  stroke: number,
  startDegree: number,
  endDegree: number
) => {
  if (startDegree > endDegree)
    throw new Error(
      `startDegree "${startDegree}" is greater than endDegree "${endDegree}" therefore is not a valid start position for the line`
    );

  if (stroke <= 0)
    throw new Error(`stroke should be at least 1 and is "${stroke}"`);

  if (!height.match(measureUnitRegex)) {
    throw new Error(
      `height should have a valid mesurement unit. height value is ${height}`
    );
  } else if (typeof Number(height.split(measureUnitRegex)[0]) != "number") {
    throw new Error(`height should be a number`);
  }
  if (!width.match(measureUnitRegex)) {
    throw new Error(
      `width should have a valid mesurement unit. width value is ${width}`
    );
  } else if (typeof Number(width.split(measureUnitRegex)[0]) != "number") {
    throw new Error(`width should be a number`);
  }
};
