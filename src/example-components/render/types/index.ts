import { CSSProperties, ReactElement } from "react";

export interface RenderProps {
  style?: CSSProperties;
  children: ReactElement;
  className?: string;
}
