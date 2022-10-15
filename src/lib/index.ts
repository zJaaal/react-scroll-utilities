import { Directions } from "./types";
import Render from "./components/Render";
import ScrollWatcher from "./components/ScrollWatcher";
import useDirection from "./hooks/useDirection";
import useProximity from "./hooks/useProximity";

export {
  //Components
  Render,
  ScrollWatcher,

  //Hooks
  useProximity,
  useDirection,

  //Types
  Directions,
};
