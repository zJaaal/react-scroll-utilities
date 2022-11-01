import { Coors, ProximityState } from "../../types";

const getProximity = (element: HTMLElement): ProximityState => {
  const { x, y, top, bottom, left, right } = element.getBoundingClientRect();

  //y - height / 2 -> this put the y coor in the center of the component
  return {
    x: x,
    y: y,
    onSight:
      !(bottom < 0 || top - window.innerHeight >= 0) &&
      !(right < 0 || left - window.innerWidth >= 0),
  };
};

export default getProximity;
