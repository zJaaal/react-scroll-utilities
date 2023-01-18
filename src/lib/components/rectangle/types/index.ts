import { ReactElement } from "react";
import { LinearValueOptions } from "../../../types";

export type RectangleProps = {
  backgroundColor?: string;
  color?: string;
  clockwise?: boolean;
  stroke?: number;
  height?: string;
  width?: string;
  children?: ReactElement;
  startDegree?: number;
  endDegree?: number;
  rotate?: number;
  options?: LinearValueOptions;
};
