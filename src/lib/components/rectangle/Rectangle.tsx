import React, { CSSProperties, FC, useEffect, useRef } from "react";
import { useLinearValue } from "../../index";
import { validateRectangleProps } from "../../utils/validations/components/validateRectangleProps";
import { RectangleProps } from "./types";
import "./Rectangle.style.css";
import { defaultOptions } from "../../types";
import getRectangleStyles from "../../utils/calculations/misc/getRectangleStyles";

const Rectangle: FC<RectangleProps> = ({
  children,
  height = "200px",
  width = "200px",
  stroke = 2,
  backgroundColor = "white",
  color = "red",
  clockwise = true,
  startDegree = 0,
  endDegree = 360,
  rotate = 0,
  options = defaultOptions,
}) => {
  const mixedOptions = { ...defaultOptions, ...options };

  const ref = useRef(null);

  const deg = useLinearValue({
    startValue: startDegree,
    endValue: endDegree,
    elementRef: ref,
    options: mixedOptions,
  });

  useEffect(() => validateRectangleProps(width, height, stroke, startDegree, endDegree), []);

  const { rectangleStyles, innerRectangleStyles } = getRectangleStyles({
    width,
    height,
    stroke,
    rotate,
    backgroundColor,
    clockwise,
  });

  return (
    <div
      data-testid="rectangle"
      className="rectangle"
      style={{
        background: `conic-gradient(${color} ${deg}deg, ${backgroundColor} 0deg)`,
        ...rectangleStyles,
      }}
      ref={ref}
    >
      <div data-testid="inner-rectangle" className="inner-rectangle" style={innerRectangleStyles}>
        {children || null}
      </div>
    </div>
  );
};

export default Rectangle;
