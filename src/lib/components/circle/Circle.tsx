import React, {
  CSSProperties,
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { Directions, useDirection, useProximity } from "../../index";
import { validateCircleProps } from "../../utils/validations/validateCircleProps";
import { CircleProps } from "./types";
import "./Circle.style.css";

const Circle: FC<CircleProps> = ({
  children,
  radius = 200,
  stroke = 2,
  backgroundColor = "white",
  color = "red",
  clockwise = true,
  speed = 8,
  startDegree = 0,
  endDegree = 360,
  rotate = 0,
  __dynamicColor = "",
  dynamicBackground = false,
}) => {
  const backgroundReference = useRef(
    dynamicBackground && __dynamicColor.length
      ? __dynamicColor
      : backgroundColor
  );
  const ref = useRef(null);
  const degRef = useRef(startDegree);
  const { scrollState, onSight } = useProximity(ref);
  const direction = useDirection();

  const circleStyles: CSSProperties = {
    width: `${radius}px`,
    height: `${radius}px`,
    transform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };
  const innerCircleStyles: CSSProperties = {
    width: `${radius - stroke}px`,
    height: `${radius - stroke}px`,
    backgroundColor: backgroundReference.current,
    transform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };

  useEffect(
    () => validateCircleProps(radius, stroke, startDegree, endDegree, speed),
    []
  );

  useLayoutEffect(() => {
    if (dynamicBackground && __dynamicColor.length)
      backgroundReference.current = __dynamicColor;

    switch (direction) {
      case Directions.up: {
        if (degRef.current < startDegree || !onSight) return;
        degRef.current -= speed;
        break;
      }
      case Directions.down: {
        if (degRef.current > endDegree || !onSight) return;
        degRef.current += speed;
        break;
      }
    }
  }, [scrollState?.y]);

  return (
    <div
      data-testid="circle"
      className="circle"
      style={{
        background: `conic-gradient(${color} ${degRef.current}deg, ${backgroundReference.current} 0deg)`,
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
