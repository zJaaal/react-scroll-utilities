import { ProximityState } from "../../types";

const getProximity = (element: HTMLElement): ProximityState => {
  const { x, y, top, bottom, left, right, height, width } =
    element.getBoundingClientRect();

  return {
    //This calculations return the coordinates of the center of the component
    x: (x + width / 2 - window.innerWidth / 2) * -1,
    y: (y + height / 2 - window.innerHeight / 2) * -1,
    onSight:
      !(bottom < 0 || top - window.innerHeight >= 0) &&
      !(right < 0 || left - window.innerWidth >= 0),
  };
};

export default getProximity;
