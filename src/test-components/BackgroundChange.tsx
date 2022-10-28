import React, { FC, useEffect, useRef, useState } from "react";
import useDirection from "../lib/hooks/useDirection";
import useProximity from "../lib/hooks/useProximity";
import { Directions } from "../lib/types";

const steps = 1;

const BackgroundChange: FC<any> = ({ children }) => {
  const [colors, setColors] = useState({
    red: 123,
    blue: 234,
    green: 213,
  });
  const { red, blue, green } = colors;

  const direction = useDirection();

  const ref = useRef<HTMLDivElement>(null);
  const proximity = useProximity(ref);

  useEffect(() => {
    if (proximity.y != 0) {
      switch (direction) {
        case Directions.up: {
          setColors(({ red, green, blue }) => ({
            red: red + steps,
            green: green + steps,
            blue: blue + steps,
          }));
          break;
        }
        case Directions.down: {
          setColors(({ red, green, blue }) => ({
            red: red - steps,
            green: green - steps,
            blue: blue - steps,
          }));
          break;
        }
        case Directions.left: {
          setColors(({ red, green, blue }) => ({
            red: red + steps / 2,
            green: green + steps / 2,
            blue: blue + steps,
          }));
          break;
        }
        case Directions.right: {
          setColors(({ red, green, blue }) => ({
            red: red - steps / 2,
            green: green - steps,
            blue: blue - steps / 2,
          }));
          break;
        }
      }
    }
  }, [proximity]);

  return (
    <div
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        height: "inherit",
      }}
      ref={ref}
    >
      <h1>This background react to the direction of your scroll!</h1>
      {children}
    </div>
  );
};

export default BackgroundChange;
