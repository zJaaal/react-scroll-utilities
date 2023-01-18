import { CSSProperties } from "react";
import { CircleStyles, CircleStylesParam } from "../types";

const getCircleStyles = ({
  radius,
  rotate,
  stroke,
  backgroundColor,
  clockwise,
}: CircleStylesParam): CircleStyles => {
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
    WebkitTransform: `rotate(-${Math.abs(rotate)}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(-${Math.abs(rotate)}deg) scaleX(${clockwise ? 1 : -1})`,
  };

  return { circleStyles, innerCircleStyles };
};

export default getCircleStyles;
