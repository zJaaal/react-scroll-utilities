import React, { FC, useEffect, useLayoutEffect, useRef } from "react";
import useDirection from "../../hooks/useDirection";
import useProximity from "../../hooks/useProximity";
import { Directions } from "../../types";
import calculateSteps from "../../utils/calculations/calculateSteps";
import clamp from "../../utils/validations/clamp";
import { BackgroundProps } from "./types";

const DynamicBackground: FC<BackgroundProps> = ({
  startColor = [0, 0, 0],
  endColor = [255, 255, 255],
  children,
}) => {
  const ref = useRef(null);
  const steps = useRef<number[]>([1, 1, 1]);
  const color = useRef<number[]>([...startColor]);

  const { y, onSight } = useProximity(ref);
  const direction = useDirection();

  useLayoutEffect(() => {
    steps.current = calculateSteps(startColor, endColor, ref.current!);
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
    // console.log(color.current);
    // console.log(steps.current);
  }, [y]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: `rgb(${color.current[0]}, ${color.current[1]}, ${color.current[2]})`,
        height: "3000px",
      }}
    >
      <h1>This background react to the direction of your scroll!</h1>
      {children}
    </div>
  );
};

export default DynamicBackground;
