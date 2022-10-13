import React, { FC, useEffect, useRef, useState } from "react";
import useDirection from "../hooks/useDirection";
import useProximity from "../hooks/useProximity";
import { Directions } from "../types";

const steps = 1;

const BackgroundChange: FC<any> = ({ children }) => {
  const [colors, setColors] = useState({
    red: 123,
    blue: 234,
    green: 213,
  });
  const { red, blue, green } = colors;

  const [backgroundColors, setBackgroundColors] = useState({
    backgroundColor: `rgb(${red}, ${blue}, ${green})`,
  });

  const direction = useDirection();

  const ref = useRef<HTMLDivElement>(null);
  const proximity = useProximity(ref);

  useEffect(() => {
    switch (direction) {
      case Directions.up: {
        setColors(({ red, blue, green }) => ({
          red: red + steps,
          blue: blue + steps,
          green: green + steps,
        }));
        break;
      }
      case Directions.down: {
        setColors(({ red, blue, green }) => ({
          red: red - steps,
          blue: blue - steps,
          green: green - steps,
        }));
        break;
      }
    }
  }, [direction, proximity]);

  useEffect(
    () =>
      setBackgroundColors({
        backgroundColor: `rgb(${red}, ${blue}, ${green})`,
      }),
    [colors]
  );

  return (
    <div style={{ ...backgroundColors, height: "inherit" }} ref={ref}>
      <h1>This background react to the direction of your scroll!</h1>
      {children}
    </div>
  );
};

export default BackgroundChange;
