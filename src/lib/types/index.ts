import { ReactElement } from "react";

export enum Directions {
  up = "UP",
  down = "DOWN",
  right = "RIGHT",
  left = "LEFT",
}

export type Coors = {
  x: number;
  y: number;
};

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
};
