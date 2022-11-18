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
  anchor?: "top" | "middle" | "bottom";
};
