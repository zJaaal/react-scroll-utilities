import { Directions } from "./types";
import Render from "./components/render/Render";
import ScrollWatcher from "./components/ScrollWatcher";
import useDirection from "./hooks/useDirection";
import useProximity from "./hooks/useProximity";
import Circle from "./components/circle/Circle";
import Rectangle from "./components/rectangle/Rectangle";

export {
  //Components
  Render,
  ScrollWatcher,
  Circle,
  Rectangle,

  //Hooks
  useProximity,
  useDirection,

  //Types
  Directions,
};
