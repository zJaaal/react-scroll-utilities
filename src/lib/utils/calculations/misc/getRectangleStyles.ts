import { CSSProperties } from "react";
import { RectagleStyles, RectangleStylesParam } from "../types";

const getRectangleStyles = ({
  width,
  height,
  rotate,
  clockwise,
  stroke,
  backgroundColor,
}: RectangleStylesParam): RectagleStyles => {
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
    WebkitTransform: `rotate(-${Math.abs(rotate)}deg) scaleX(${clockwise ? 1 : -1})`,
    msTransform: `rotate(-${Math.abs(rotate)}deg) scaleX(${clockwise ? 1 : -1})`,
  };

  return { rectangleStyles, innerRectangleStyles };
};

export default getRectangleStyles;
