import React, {
  cloneElement,
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import useDirection from "../../hooks/useDirection";
import useProximity from "../../hooks/useProximity";
import { Directions } from "../../types";
import getSteps from "../../utils/calculations/getSteps";
import clamp from "../../utils/calculations/clamp";
import { BackgroundProps } from "./types";

const DynamicBackground: FC<BackgroundProps> = ({
  startColor = [0, 0, 0],
  endColor = [255, 255, 255],
  children,
  style = {},
  className = "",
}) => {
  const ref = useRef(null);
  const steps = useRef<number[]>([1, 1, 1]);
  const color = useRef<number[]>([...startColor]);

  const { y, onSight } = useProximity(ref);
  const direction = useDirection();

  useLayoutEffect(() => {
    steps.current = getSteps(startColor, endColor, ref.current!);
  }, []);

  useEffect(() => {
    switch (direction) {
      case Directions.up: {
        if (onSight && color.current.some((color, i) => color != startColor[i]))
          color.current = color.current.map((color, i) =>
            clamp(startColor[i], endColor[i], color - steps.current[i])
          );
        break;
      }
      case Directions.down: {
        if (onSight && color.current.some((color, i) => color != endColor[i]))
          color.current = color.current.map((color, i) =>
            clamp(startColor[i], endColor[i], color + steps.current[i])
          );
        break;
      }
    }
  }, [y]);

  return (
    <div
      ref={ref}
      style={{
        height: "inherit",
        width: "100%",
        ...style,
        backgroundColor: `rgb(${color.current[0]}, ${color.current[1]}, ${color.current[2]})`,
      }}
      className={className}
    >
      {children
        ? React.Children.map(children, (child) =>
            cloneElement(child, {
              __dynamicColor: `rgb(${color.current[0]}, ${color.current[1]}, ${color.current[2]})`,
            })
          )
        : null}
    </div>
  );
};

export default DynamicBackground;
