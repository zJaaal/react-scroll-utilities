import { ReactElement } from "react";

export type CircleProps = {
  backgroundColor?: string;
  color?: string;
  clockwise?: boolean;
  stroke?: number;
  radius?: number;
  children?: ReactElement;
  startDegree?: number;
  endDegree?: number;
  rotate?: number;
};
