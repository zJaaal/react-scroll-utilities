import { CSSProperties, ReactElement } from "react";

export interface RenderProps {
  dynamicBackground?: boolean;
  __background?: string;
  style?: CSSProperties;
  children: ReactElement;
  className?: string;
}
