import { CSSProperties, ReactElement } from "react";

export interface RenderProps {
  dynamicBackground?: boolean;
  __dynamicColor?: string;
  style?: CSSProperties;
  children: ReactElement;
  className?: string;
}
