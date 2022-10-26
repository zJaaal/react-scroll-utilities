import { ReactElement } from "react";

export type CircleProps = {
  backgroundColor?: string;
  color?: string;
  clockwise?: boolean;
  speed?: number;
  stroke?: number;
  radius?: number;
  children?: ReactElement;
  startDegree?: number;
  endDegree?: number;
  rotate?: number;
};
