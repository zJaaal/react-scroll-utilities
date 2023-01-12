import { CSSProperties } from "react";
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

export type CircleStyles = {
  circleStyles: CSSProperties;
  innerCircleStyles: CSSProperties;
};
export type CircleStylesParam = {
  radius: string;
  rotate: number;
  stroke: number;
  backgroundColor: string;
  clockwise: boolean;
};

export type RectagleStyles = {
  rectangleStyles: CSSProperties;
  innerRectangleStyles: CSSProperties;
};

export type RectangleStylesParam = {
  width: string;
  height: string;
  rotate: number;
  clockwise: boolean;
  stroke: number;
  backgroundColor: string;
};
