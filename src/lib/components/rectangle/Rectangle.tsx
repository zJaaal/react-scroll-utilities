import React, {
  CSSProperties,
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { Directions, useDirection, useProximity } from "../../index";
import { validateRectangleProps } from "../../utils/validations/validateRectangleProps";
import { RectangleProps } from "./types";
import "./Rectangle.style.css";

const Rectangle: FC<RectangleProps> = ({
  children,
  height = 200,
  width = 200,
  stroke = 2,
  backgroundColor = "white",
  color = "red",
  clockwise = true,
  speed = 8,
  startDegree = 0,
  endDegree = 360,
  rotate = 0,
}) => {
  const ref = useRef(null);

  const degRef = useRef(startDegree);
  const { y, onSight } = useProximity(ref);
  const direction = useDirection();

  const rectangleStyles: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    transform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };
  const innerRectangleStyles: CSSProperties = {
    width: `${width - stroke}px`,
    height: `${height - stroke}px`,
    backgroundColor: backgroundColor,
    transform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    WebkitTransform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(-${rotate}deg) scaleX(${clockwise ? 1 : -1})`,
  };

  useEffect(
    () =>
      validateRectangleProps(
        width,
        height,
        stroke,
        startDegree,
        endDegree,
        speed
      ),
    []
  );

  useLayoutEffect(() => {
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
      data-testid="rectangle"
      className="rectangle"
      style={{
        background: `conic-gradient(${color} ${degRef.current}deg, ${backgroundColor} 0deg)`,
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
