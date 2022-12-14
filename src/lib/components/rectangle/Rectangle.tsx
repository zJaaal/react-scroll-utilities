import React, { CSSProperties, FC, useEffect, useRef } from "react";
import { useLinearValue } from "../../index";
import { validateRectangleProps } from "../../utils/validations/components/validateRectangleProps";
import { RectangleProps } from "./types";
import "./Rectangle.style.css";

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
}) => {
  const ref = useRef(null);

  const deg = useLinearValue({
    startValue: startDegree,
    endValue: endDegree,
    elementRef: ref,
  });

  const rectangleStyles: CSSProperties = {
    width: width,
    height: height,
    transform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };
  const innerRectangleStyles: CSSProperties = {
    width: `calc(${width} - ${stroke}px)`,
    height: `calc(${height} - ${stroke}px)`,
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
    () => validateRectangleProps(width, height, stroke, startDegree, endDegree),
    []
  );

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
      <div
        data-testid="inner-rectangle"
        className="inner-rectangle"
        style={innerRectangleStyles}
      >
        {children || null}
      </div>
    </div>
  );
};

export default Rectangle;
