import { RefObject } from "react";
import { Coors } from "../../../types";

const getCoors = (ref?: RefObject<HTMLElement>): Coors => {
  if (ref)
    return {
      x: ref.current?.scrollLeft || 0,
      y: ref.current?.scrollTop || 0,
    };

  return {
    x: typeof window.scrollX == "undefined" ? document.documentElement.scrollLeft : window.scrollX,
    y: typeof window.scrollY == "undefined" ? document.documentElement.scrollTop : window.scrollY,
  };
};

export default getCoors;
