import { RefObject } from "react";

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

export interface ProximityState extends Coors {
  onSight: boolean;
}

export type DynamicColor = {
  startColor: number[];
  endColor: number[];
  elementRef: RefObject<HTMLElement>;
  options?: LinearValueOptions;
};

export type LinearValueProps = {
  startValue: number;
  endValue: number;
  elementRef: RefObject<HTMLElement>;
  options?: LinearValueOptions;
};

export type LinearValueOptions = {
  anchor?: "top" | "middle" | "bottom";
  duration?: number;
  delay?: number;
};
