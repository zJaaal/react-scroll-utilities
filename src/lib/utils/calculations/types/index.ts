import { LinearValueOptions } from "../../../types";

export type LinearValue = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  position: number;
};
export type OptionsParams = {
  y: number;
  startValue: number;
  endValue: number;
  height: number;
  options: LinearValueOptions;
  parentHeight?: number;
};

export type CurrentColor = {
  startColor: number[];
  endColor: number[];
  element: HTMLElement;
  height: number;
  proximity: number;
  options: LinearValueOptions;
  parentHeight?: number;
};
