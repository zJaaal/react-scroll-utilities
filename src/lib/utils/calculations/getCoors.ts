import { Coors } from "../../types";

const getCoors = (): Coors => {
  return {
    x:
      typeof window.scrollX == "undefined"
        ? document.documentElement.scrollLeft
        : window.scrollX,
    y:
      typeof window.scrollY == "undefined"
        ? document.documentElement.scrollTop
        : window.scrollY,
  };
};

export default getCoors;
