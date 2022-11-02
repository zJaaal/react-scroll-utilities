import { ReactElement } from "react";

export type RectangleProps = {
  backgroundColor?: string;
  color?: string;
  clockwise?: boolean;
  speed?: number;
  stroke?: number;
  height?: number;
  width?: number;
  children?: ReactElement;
  startDegree?: number;
  endDegree?: number;
  rotate?: number;
  __background?: string;
  dynamicBackground?: boolean;
};
