import { CSSProperties, ReactElement } from "react";

export type BackgroundProps = {
  startColor?: number[];
  endColor?: number[];
  children?: ReactElement;
  className?: string;
  style?: CSSProperties;
};
