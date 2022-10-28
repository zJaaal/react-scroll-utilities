import { Coors } from "../../types";

const fixScroll = (coors: Coors): Coors => {
  return {
    x: coors.x < 0 ? 0 : coors.x,
    y: coors.y < 0 ? 0 : coors.y,
  };
};

export default fixScroll;
