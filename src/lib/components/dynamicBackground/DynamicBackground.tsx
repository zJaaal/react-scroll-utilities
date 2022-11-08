import React, { FC, useRef } from "react";
import { BackgroundProps } from "./types";
import useDynamicColor from "../../hooks/useDynamicColor";

const DynamicBackground: FC<BackgroundProps> = ({
  startColor = [0, 0, 0],
  endColor = [255, 255, 255],
  children,
  style = {},
  className = "",
}) => {
  const elementRef = useRef(null);

  const color = useDynamicColor({ startColor, endColor, elementRef });

  return (
    <div
      ref={elementRef}
      style={{
        height: "inherit",
        width: "100%",
        ...style,
        backgroundColor: color,
      }}
      className={className}
      data-testid="dynamic-background"
    >
      {typeof children == "function" ? children(color) : children}
    </div>
  );
};

export default DynamicBackground;
