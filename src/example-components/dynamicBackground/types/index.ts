import { CSSProperties, ReactElement } from "react";

export type BackgroundProps = {
  startColor?: number[];
  endColor?: number[];
  children?: ReactElement | ((color: string) => ReactElement);
  className?: string;
  style?: CSSProperties;
};
