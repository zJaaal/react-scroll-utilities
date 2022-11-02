import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
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
  __background = "",
  dynamicBackground = false,
}) => {
  const backgroundReference = useRef(
    dynamicBackground && __background.length ? __background : backgroundColor
  );
  const ref = useRef(null);
  const degRef = useRef(startDegree);
  const { y, onSight } = useProximity(ref);
  const direction = useDirection();

  const circleStyles: CSSProperties = {
    width: `${radius}px`,
    height: `${radius}px`,
    transform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };
  const innerCircleStyles: CSSProperties = {
    width: `${radius - stroke}px`,
    height: `${radius - stroke}px`,
    backgroundColor: backgroundReference.current,
    transform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };

  useEffect(
    () => validateCircleProps(radius, stroke, startDegree, endDegree, speed),
    []
  );

  useEffect(() => {
    backgroundReference.current =
      dynamicBackground && __background.length ? __background : backgroundColor;
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
  }, [y]);

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
