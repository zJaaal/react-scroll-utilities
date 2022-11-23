import React, { CSSProperties, FC, useEffect, useRef } from "react";
import { useLinearValue } from "../../index";
import { validateCircleProps } from "../../utils/validations/validateCircleProps";
import { CircleProps } from "./types";
import "./Circle.style.css";

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
}) => {
  const ref = useRef(null);
  const deg = useLinearValue({
    startValue: startDegree,
    endValue: endDegree,
    elementRef: ref,
  });

  const circleStyles: CSSProperties = {
    width: radius,
    height: radius,
    transform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };
  const innerCircleStyles: CSSProperties = {
    width: `calc(${radius} - ${stroke}px)`,
    height: `calc(${radius} - ${stroke}px)`,
    backgroundColor: backgroundColor,
    transform: `rotate(-${Math.abs(rotate)}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(-${Math.abs(rotate)}deg) scaleX(${
      clockwise ? 1 : -1
    })`,
    msTransform: `rotate(-${Math.abs(rotate)}deg) scaleX(${
      clockwise ? 1 : -1
    })`,
  };

  useEffect(
    () => validateCircleProps(radius, stroke, startDegree, endDegree),
    []
  );

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
      <div
        className="inner-circle"
        data-testid="inner-circle"
        style={innerCircleStyles}
      >
        {children || null}
      </div>
    </div>
  );
};

export default Circle;
