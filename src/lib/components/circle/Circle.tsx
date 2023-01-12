import React, { CSSProperties, FC, useEffect, useRef } from "react";
import { useLinearValue } from "../../index";
import { validateCircleProps } from "../../utils/validations/components/validateCircleProps";
import { CircleProps } from "./types";
import "./Circle.style.css";
import { defaultOptions } from "../../types";
import getCircleStyles from "../../utils/calculations/misc/getCircleStyles";

const Circle: FC<CircleProps> = ({
  children,
  radius = "200px",
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

  const { circleStyles, innerCircleStyles } = getCircleStyles({
    radius,
    rotate,
    stroke,
    backgroundColor,
    clockwise,
  });

  useEffect(() => validateCircleProps(radius, stroke, startDegree, endDegree), []);

  return (
    <div
      data-testid="circle"
      className="circle"
      style={{
        background: `conic-gradient(${color} ${deg}deg, ${backgroundColor} 0deg)`,
        ...circleStyles,
      }}
      ref={ref}
    >
      <div className="inner-circle" data-testid="inner-circle" style={innerCircleStyles}>
        {children || null}
      </div>
    </div>
  );
};

export default Circle;
