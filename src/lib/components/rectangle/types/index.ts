import { ReactElement } from "react";

export type RectangleProps = {
  backgroundColor?: string;
  color?: string;
  clockwise?: boolean;
  stroke?: number;
  height?: number;
  width?: number;
  children?: ReactElement;
  startDegree?: number;
  endDegree?: number;
  rotate?: number;
};
