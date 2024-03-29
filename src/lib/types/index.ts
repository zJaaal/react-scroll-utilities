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

export type ScrollContext = {
  position: Coors;
  element?: HTMLElement;
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
  context?: ScrollContext;
};

export const defaultOptions: LinearValueOptions = {
  anchor: "middle",
  delay: 0,
  duration: 100,
};

export type StepValueProps = {
  startValue: number;
  endValue: number;
  steps: number;
  elementRef: RefObject<HTMLElement>;
  options?: LinearValueOptions;
};
