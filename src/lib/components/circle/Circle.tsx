import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { Directions, useDirection, useProximity } from "../../index";
import { CircleProps } from "../../types";
import { validateCircleProps } from "../../utils/validateCircleProps";
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
}) => {
  const [deg, setDeg] = useState(startDegree);

  const ref = useRef(null);
  const { y } = useProximity(ref);
  const direction = useDirection();

  const circleStyles: CSSProperties = {
    width: `${radius}px`,
    height: `${radius}px`,
    transform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };
  const innerCircleStyles: CSSProperties = {
    width: `${radius - stroke}px`,
    height: `${radius - stroke}px`,
    backgroundColor: backgroundColor,
    transform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };

  useEffect(
    () => validateCircleProps(radius, stroke, startDegree, endDegree, speed),
    []
  );

  useEffect(() => {
    switch (direction) {
      case Directions.up: {
        if (deg < startDegree || y < 0) return;
        setDeg((prev) => prev - speed);
        break;
      }
      case Directions.down: {
        if (deg > endDegree || y > 2 || y == 0) return;
        setDeg((prev) => prev + speed);
        break;
      }
    }
  }, [y]);

  return (
    <div
      className="circle"
      style={{
        background: `conic-gradient(${color} ${deg}deg, ${backgroundColor} 0deg)`,
        ...circleStyles,
      }}
      ref={ref}
    >
      <div className="inner-circle" style={innerCircleStyles}>
        {children || null}
      </div>
    </div>
  );
};

export default Circle;
