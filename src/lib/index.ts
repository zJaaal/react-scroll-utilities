import { Directions } from "./types";
import ScrollWatcher from "./components/ScrollWatcher";
import useDirection from "./hooks/useDirection";
import useProximity from "./hooks/useProximity";
import Circle from "./components/circle/Circle";
import Rectangle from "./components/rectangle/Rectangle";
import useDynamicColor from "./hooks/useDynamicColor";

export {
  //Components
  ScrollWatcher,
  Circle,
  Rectangle,

  //Hooks
  useProximity,
  useDirection,
  useDynamicColor,

  //Types
  Directions,
};
