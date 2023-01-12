import { ReactElement } from "react";
import { LinearValueOptions } from "../../../types";

export type CircleProps = {
  backgroundColor?: string;
  color?: string;
  clockwise?: boolean;
  stroke?: number;
  radius?: string;
  children?: ReactElement;
  startDegree?: number;
  endDegree?: number;
  rotate?: number;
  options?: LinearValueOptions;
};
